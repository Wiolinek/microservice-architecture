import { sequelize } from '@authentication-service/database';
import { Optional, Model, ModelDefined, DataTypes } from 'sequelize';
import { AuthDocument } from '@authentication-service/interfaces/auth';
import { hash, compare } from 'bcrypt';

const SALT_ROUND = 10;

interface AuthModelMethods extends Model {
  prototype: {
    passwordCheck: (password: string, hashedPassword: string) => Promise<boolean>;
    passwordHash: (password: string) => Promise<string>;
  };
}

type AuthUserRegistrationAttributes = Optional<AuthDocument, 'id' | 'createdAt' | 'updatedAt'>;

const AuthModel: ModelDefined<AuthDocument, AuthUserRegistrationAttributes> & AuthModelMethods = sequelize.define(
  'auths',
  {
    email: { type: DataTypes.STRING, allowNull: false },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: { type: DataTypes.STRING, allowNull: false },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDriver: { type: DataTypes.BOOLEAN, allowNull: true },
    isPassenger: { type: DataTypes.BOOLEAN, allowNull: true },
    carMake: { type: DataTypes.STRING, allowNull: true },
    carImage: { type: DataTypes.STRING, allowNull: true },
    profilePublicId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
  },
  {
    indexes: [
      { unique: true, fields: ['email'] },
    ],
  }
) as ModelDefined<AuthDocument, AuthUserRegistrationAttributes> & AuthModelMethods;

AuthModel.addHook('beforeCreate', async (auth: Model) => {
  const hashedPassword: string = await hash(auth.dataValues.password as string, SALT_ROUND);
  auth.dataValues.password = hashedPassword;
});

AuthModel.prototype.passwordCheck = async (password: string, hashedPassword: string): Promise<boolean> => {
  return compare(password, hashedPassword);
};

AuthModel.prototype.passwordHash = async function (password: string): Promise<string> {
  return hash(password, SALT_ROUND);
};

// force: true always deletes the table when there is a server restart
AuthModel.sync({});
export { AuthModel };
