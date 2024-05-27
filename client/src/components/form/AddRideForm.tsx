import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AddRideFormSchema } from '@features/authentication/schema/schema';
import { VisuallyHiddenInputStyle } from '@features/authentication/components/styles/customStyles';
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
        <Stack spacing={3} style={{ marginTop: 16 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
              <TextField {...register('name')} label="Name" type="name" error={!!errors.name} helperText={errors.name?.message} />
              <TextField {...register('email')} label="Email" type="email" error={!!errors.email} helperText={errors.email?.message} />
              <TextField {...register('phone')} label="Phone number" type="tel" error={!!errors.phone} helperText={errors.phone?.message} />
            </Stack>
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
              <TextField
                {...register('freeSeats')}
                label="Available seats"
                type="number"
                error={!!errors.freeSeats}
                helperText={errors.freeSeats?.message}
              />
              <TextField {...register('carMake')} label="Car make" error={!!errors.carMake} helperText={errors.carMake?.message} />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{ height: 56 }}
                startIcon={<CloudUploadIcon sx={{ mr: 1 }} />}>
                Add your car image
                <TextField
                  {...register('carImage')}
                  type="file"
                  inputProps={{ accept: 'image/*' }}
                  error={!!errors.carImage}
                  helperText={errors.carImage?.message as string}
                  sx={VisuallyHiddenInputStyle}
                />
              </Button>
            </Stack>
          </Stack>
          <Divider flexItem orientation="horizontal" sx={{ backgroundColor: 'primary.main', height: 1 }} />
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
              <TextField {...register('start')} label="Start" error={!!errors.start} helperText={errors.start?.message} />
              <TextField {...register('startTime')} label="Start time" error={!!errors.startTime} helperText={errors.startTime?.message} />
            </Stack>
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
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
          <Divider flexItem orientation="horizontal" sx={{ backgroundColor: 'primary.main', height: 1 }} />
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
            <Stack direction="row" alignItems="flex-end" spacing={3} sx={{ width: { xs: 150, md: 220 } }}>
              <TextField {...register('price')} label="Price" type="number" error={!!errors.price} helperText={errors.price?.message} />
              <Typography variant="h6" component="p">
                PLN
              </Typography>
            </Stack>
            <Stack spacing={3} justifyContent="flex-end" alignItems="flex-end">
              <Button type="submit" variant="contained" size="medium" disabled={!isDirty || isSubmitting}>
                Add ride
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default AddRideForm;
