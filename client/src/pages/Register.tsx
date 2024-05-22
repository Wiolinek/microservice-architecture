import { Link } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Form from '@components/form/Form';
import RegisterForm from '@components/form/RegisterForm';
import Banner from '@layouts/Banner';
import { registerFormSchema } from '@components/form/schema/schema';
import { registerDefaultValues } from '@data/constants';

export const registerTitle = 'Create new account';

const Register = () => {
  return (
    <PageWrapper data-testid="register-page">
      <Stack direction="column" alignItems="center" spacing={6}>
        <Banner title={registerTitle} />
        <Form
          formType={<RegisterForm data-testid="register-form" />}
          formSchema={registerFormSchema}
          defaultValues={registerDefaultValues}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={6}>
        <Typography variant="body1" component="p" sx={{ fontWeight: 700, color: 'primary.main' }}>
          Already have account?
        </Typography>
        <Link to="/login">Log in</Link>
      </Stack>
    </PageWrapper>
  );
};

export default Register;
