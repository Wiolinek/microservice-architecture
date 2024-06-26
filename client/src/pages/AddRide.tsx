import { Link } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import Banner from '@layouts/Banner';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Form from '@components/form/Form';
import AddRideForm from '@components/form/AddRideForm';
import { addRideFormSchema } from '@features/authentication/schema/addRideFormSchema';
import { addRideFormDefaultValues } from '@data/constants';

const AddRide = () => {
  const userLoggedIn = true;

  return (
    <PageWrapper>
      {!userLoggedIn && (
        <>
          <Stack direction="column" alignItems="center" spacing={6}>
            <Banner subtitle="You have to be logged in to add a ride..." />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={6} style={{ marginTop: 48 }}>
            <Link to="/login" style={{ alignSelf: 'self-start' }}>
              <Button variant={'contained'} size="medium" sx={{ color: 'primary.light', backgroundColor: 'primary.main' }}>
                Please, log in here
              </Button>
            </Link>
          </Stack>
        </>
      )}
      {userLoggedIn && (
        <Stack direction="column" alignItems="center" spacing={6}>
          <Banner subtitle="Add a ride and find perfect passengers..." />
          <Form formType={<AddRideForm />} formSchema={addRideFormSchema} defaultValues={addRideFormDefaultValues} />
        </Stack>
      )}
    </PageWrapper>
  );
};

export default AddRide;
