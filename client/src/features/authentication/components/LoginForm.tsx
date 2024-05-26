import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { LoginFormSchema } from '@features/authentication/schema/schema';
import { DevTool } from '@hookform/devtools';
import { useDispatch } from 'react-redux';
// import { logInStart, logInFailure, logInSuccess } from '@app/store/userSlice';
import { logInStart } from '@store/userSlice';

const LoginForm = () => {
  const {
    control,
    register,
    // reset,
    // setValue,
    handleSubmit,
    formState: { isDirty, isSubmitting, /*isSubmitted, isSubmitSuccessful, */ errors },
  } = useFormContext<LoginFormSchema>();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data);
    dispatch(logInStart());
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} style={{ marginTop: 16 }} sx={{ width: { xs: 220, sm: 350 } }}>
          <TextField
            {...register('email', { required: 'Email is required' })}
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register('password', { required: 'Password is required' })}
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }} alignItems="flex-end">
            <Button type="submit" variant="contained" size="medium" disabled={!isDirty || isSubmitting}>
              LogIn
            </Button>
          </Stack>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default LoginForm;
