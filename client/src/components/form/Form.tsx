import { FormProvider, useForm } from 'react-hook-form';
import Paper from '@mui/material/Paper';
import { LoginFormSchema } from '@features/authentication/schema/loginFormSchema';
import { RegisterFormSchema } from '@features/authentication/schema/registerFormSchema';
import { AddRideFormSchema } from '@features/authentication/schema/addRideFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProps } from '@components/form/interfaces';

const Form = ({ formType, formSchema, defaultValues }: FormProps) => {
  const methods = useForm<LoginFormSchema | RegisterFormSchema | AddRideFormSchema>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <FormProvider {...methods} data-testid="form">
      <Paper sx={{ height: 'max-content', width: 'min-content', mt: 9, p: 2, color: 'primary.main', backgroundColor: 'primary.light' }}>
        {formType}
      </Paper>
    </FormProvider>
  );
};

export default Form;
