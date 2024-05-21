import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AddRideFormSchema } from '@components/form/schema/schema';
import { DevTool } from '@hookform/devtools';

const AddRideForm = () => {
  const {
    control,
    register,
    // reset,
    // setValue,
    // getValues,
    handleSubmit,
    formState: { isDirty, isSubmitting, /*isSubmitted, isSubmitSuccessful, */ errors },
  } = useFormContext<AddRideFormSchema>();

  const onSubmit = (data: AddRideFormSchema) => {
    console.log(data);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} style={{ marginTop: 16 }} sx={{ width: { xs: 220, sm: 350 }, flexWrap: 'wrap' }} direction="column">
          <Stack direction="row">
            <Stack>
              <TextField {...register('name')} label="Name" type="name" error={!!errors.name} helperText={errors.name?.message} />
              <TextField {...register('email')} label="Email" type="email" error={!!errors.email} helperText={errors.email?.message} />
              <TextField {...register('phone')} label="Phone number" type="tel" error={!!errors.phone} helperText={errors.phone?.message} />
            </Stack>
            <Stack>
              <TextField {...register('carMake')} label="Car make" error={!!errors.carMake} helperText={errors.carMake?.message} />
              <TextField
                {...register('carImage')}
                label="Add your car image"
                type="file"
                error={!!errors.carImage}
                helperText={errors.carImage?.message}
              />

              <TextField
                {...register('freeSeats')}
                label="Available seats"
                type="number"
                error={!!errors.freeSeats}
                helperText={errors.freeSeats?.message}
              />
            </Stack>
          </Stack>

          <Stack direction="row">
            <Stack>
              <TextField {...register('start')} label="Start" error={!!errors.start} helperText={errors.start?.message} />
              <TextField {...register('startDate')} label="Start date" error={!!errors.startDate} helperText={errors.startDate?.message} />
              <TextField {...register('startTime')} label="Start time" error={!!errors.startTime} helperText={errors.startTime?.message} />
            </Stack>
            <Stack>
              <TextField
                {...register('destination')}
                label="Destination"
                error={!!errors.destination}
                helperText={errors.destination?.message}
              />
              <TextField {...register('endDate')} label="End date" error={!!errors.endDate} helperText={errors.endDate?.message} />
              <TextField {...register('endTime')} label="End time" error={!!errors.endTime} helperText={errors.endTime?.message} />
            </Stack>
          </Stack>

          <Stack>
            <TextField {...register('price')} label="Price" type="number" error={!!errors.price} helperText={errors.price?.message} />
          </Stack>

          <Button type="submit" variant="contained" size="medium" disabled={!isDirty || isSubmitting}>
            Add ride
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default AddRideForm;
