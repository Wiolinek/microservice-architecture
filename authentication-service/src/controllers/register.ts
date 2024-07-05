import { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { registerFormSchema } from '@authentication-service/schema/registerFormSchema';
import { registerFunction, getUserByEmail, signToken } from '@authentication-service/services/register';
import { RegisterData, UserData } from '@interfaces/auth';
import { firstLetterUppercase, lowerCase } from '@helpers/helpers';
import { uploads } from '@helpers/cloudinary';
import { UploadApiResponse } from 'cloudinary';
import { StatusCodes } from 'http-status-codes';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { error } = await Promise.resolve(registerFormSchema.validate(req.body));
  if (error?.details) {
    throw new Error(`${error.details[0].message}, Register() method error`);
  }
  const { name, email, phone, password, isDriver, isPassenger, carMake, carImage } = req.body;
  const checkIfUserExist: UserData | undefined = await getUserByEmail(email);
  if (checkIfUserExist) {
    throw new Error('Invalid credentials. Email or Password, Register() method error');
  }

  const profilePublicId = uuidV4();
  const uploadResult: UploadApiResponse = (await uploads(carImage, `${profilePublicId}`, true, true)) as UploadApiResponse;
  if (!uploadResult.public_id) {
    throw new Error('File upload error. Try again, Register() method error');
  }
  const registerData: RegisterData = {
    profilePublicId,
    email: lowerCase(email),
    name: firstLetterUppercase(name),
    phone,
    password,
    isDriver,
    isPassenger,
    carMake,
    carImage: uploadResult?.secure_url,
  } as RegisterData;
  const result: RegisterData = (await registerFunction(registerData)) as RegisterData;
  const userJWT: string = signToken(result.id!, result.email!, result.name!);
  res.status(StatusCodes.CREATED).json({ message: 'User created successfully', user: result, token: userJWT });
};
