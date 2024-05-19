import { Link } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Form from '@components/form/Form';
import LoginForm from '@components/form/LoginForm';
import Banner from '@layouts/Banner';
import { loginFormSchema } from '@components/form/schema/schema';
import { loginDefaultValues } from '@data/constants';

const LogIn = () => {
  return (
    <PageWrapper>
      <Stack direction="column" alignItems="center" spacing={6}>
        <Banner title="Log in to your account" />
        <Form formType={<LoginForm />} formSchema={loginFormSchema} defaultValues={loginDefaultValues} />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={6}>
        <Typography variant="body1" component="p" sx={{ fontWeight: 700, color: 'primary.main' }}>
          New here?
        </Typography>
        <Link to="/register">Join now</Link>
      </Stack>
    </PageWrapper>
  );
};

export default LogIn;
