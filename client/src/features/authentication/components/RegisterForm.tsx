import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from '@mui/material/FormGroup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { RegisterFormSchema } from '@features/authentication/schema/registerFormSchema';
import { VisuallyHiddenInputStyle } from '@features/authentication/components/styles/customStyles';
import { useRegisterBuilderMutation } from '@store/api';

const RegisterForm = () => {
  const {
    getValues,
    handleSubmit,
    register,
    reset,
    unregister,
    watch,
    formState: { isDirty, isSubmitting, errors },
  } = useFormContext<RegisterFormSchema>();
  const watchDriverRole = watch('isDriver');
  const watchCarImage = watch('carImage');
  // const dispatch = useDispatch();
  const [registerBuilder, { isLoading }] = useRegisterBuilderMutation();

  const onSubmit = async (data: RegisterFormSchema): Promise<void> => {
    await registerBuilder(data);
    // dispatch(isLoading);
    reset();
  };

  useEffect(() => {
    if (watchDriverRole) {
      register('carMake');
      register('carImage');
    } else {
      unregister('carMake');
      unregister('carImage');
    }
  }, [register, unregister, watchDriverRole]);

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} style={{ marginTop: 16 }}>
          <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
            <TextField {...register('email')} label="Email" type="email" error={!!errors.email} helperText={errors.email?.message} />
            <TextField {...register('name')} label="Name" type="name" error={!!errors.name} helperText={errors.name?.message} />
            <TextField {...register('phone')} label="Phone number" type="tel" error={!!errors.phone} helperText={errors.phone?.message} />
            <TextField
              {...register('password')}
              label="Password"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              {...register('repeatPassword')}
              label="Repeat password"
              type="password"
              error={!!errors.repeatPassword}
              helperText={errors.repeatPassword?.message}
            />
          </Stack>

          <Stack spacing={3} justifyContent="space-between" sx={{ width: { xs: 220, sm: 350 } }}>
            <Stack spacing={3}>
              <FormGroup>
                <FormLabel component="legend">I am:</FormLabel>
                <FormControlLabel control={<Checkbox {...register('isDriver')} size="medium" />} label="driver" />
                <FormControlLabel control={<Checkbox {...register('isPassenger')} size="medium" />} label="passenger" />
                {!watchDriverRole && <FormHelperText error>{!watchDriverRole && errors.isPassenger?.message}</FormHelperText>}
              </FormGroup>
              {watchDriverRole && (
                <>
                  <TextField
                    label="Car make"
                    {...register('carMake')}
                    error={!!errors.carMake}
                    helperText={errors.carMake?.message as string}
                  />
                  {watchCarImage?.length > 0 && (
                    <ImageList variant="quilted" cols={1} sx={{ height: '140px', width: 'fit-content' }}>
                      <ImageListItem sx={{ overflow: 'hidden' }}>
                        <img
                          src={URL.createObjectURL(getValues('carImage')[0])}
                          alt={getValues('carMake')}
                          title={getValues('carMake')}
                          loading="lazy"
                          style={{ objectFit: 'contain' }}
                        />
                      </ImageListItem>
                    </ImageList>
                  )}

                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    sx={{ height: 56 }}
                    startIcon={<CloudUploadIcon sx={{ mr: 1 }} />}>
                    {watchCarImage?.length ? 'Change your car image' : 'Add your car image'}
                    <TextField
                      type="file"
                      {...register('carImage')}
                      inputProps={{ accept: 'image/*' }}
                      error={!!errors.carImage}
                      helperText={errors.carImage?.message as string}
                      sx={VisuallyHiddenInputStyle}
                    />
                  </Button>
                </>
              )}
            </Stack>

            <Stack spacing={3} alignItems="flex-end">
              <Button type="submit" variant="contained" size="medium" disabled={!isDirty || isSubmitting || isLoading}>
                Register
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default RegisterForm;
