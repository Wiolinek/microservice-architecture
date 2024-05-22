import { render, screen, waitFor } from '@testing-library/react';
import Form from '@components/form/Form';
import LoginForm from '@components/form/LoginForm';
import { loginFormSchema } from '@components/form/schema/schema';
import { loginDefaultValues } from '@data/constants';

describe('Form', () => {
  test('renders correctly', () => {
    render(<Form formType={<LoginForm />} formSchema={loginFormSchema} defaultValues={loginDefaultValues} />);

    waitFor(() => {
      expect(screen.getByTestId('form')).toBeInTheDocument();
    });
  });
});
