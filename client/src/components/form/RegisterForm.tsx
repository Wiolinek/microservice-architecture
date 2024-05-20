import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { RegisterFormSchema } from '@components/form/schema/schema';
import { DevTool } from '@hookform/devtools';

const RegisterForm = () => {
  const {
    control,
    register,
    // reset,
    // setValue,
    getValues,
    handleSubmit,
    formState: { isDirty, isSubmitting, /*isSubmitted, isSubmitSuccessful, */ errors },
  } = useFormContext<RegisterFormSchema>();

  const onSubmit = (data: RegisterFormSchema) => {
    console.log(data);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} style={{ marginTop: 16 }} sx={{ width: { xs: 220, sm: 350 } }}>
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
          <FormControl>
            <FormLabel component="legend">I am:</FormLabel>
            <FormControlLabel control={<Checkbox {...register('isDriver')} size="medium" />} label="driver" />
            <FormControlLabel control={<Checkbox {...register('isPassenger')} size="medium" />} label="passenger" />
          </FormControl>
          {getValues('isDriver') && (
            <>
              <TextField {...register('carMake')} label="Car make" error={!!errors.carMake} helperText={errors.carMake?.message} />
              <TextField
                {...register('carImage')}
                label="Add your car image"
                type="file"
                error={!!errors.carImage}
                helperText={errors.carImage?.message}
              />
            </>
          )}
          <Button type="submit" variant="contained" size="medium" disabled={!isDirty || isSubmitting}>
            Register
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default RegisterForm;
