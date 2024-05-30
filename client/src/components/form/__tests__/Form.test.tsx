import { render, screen, waitFor } from '@testing-library/react';
import Form from '@components/form/Form';
import LoginForm from '@features/authentication/components/LoginForm';
import { loginFormSchema } from '@features/authentication/schema/loginFormSchema';
import { loginDefaultValues } from '@data/constants';

describe('Form', () => {
  test('renders correctly', () => {
    render(<Form formType={<LoginForm />} formSchema={loginFormSchema} defaultValues={loginDefaultValues} />);

    waitFor(() => {
      expect(screen.getByTestId('form')).toBeInTheDocument();
    });
  });
});
