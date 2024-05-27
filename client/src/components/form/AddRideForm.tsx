import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
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
    getValues,
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitting, /*isSubmitted, isSubmitSuccessful, */ errors },
  } = useFormContext<AddRideFormSchema>();
  const watchCarImage = watch('carImage');

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
              <TextField {...register('phone')} label="Phone number" type="tel" error={!!errors.phone} helperText={errors.phone?.message} />
            </Stack>
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
              <TextField {...register('email')} label="Email" type="email" error={!!errors.email} helperText={errors.email?.message} />
            </Stack>
          </Stack>
          <Divider sx={{ backgroundColor: 'primary.main', height: 1 }} />
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
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
                {watchCarImage?.length ? 'Change your car image' : 'Add your car image'}
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
            {watchCarImage?.length > 0 && (
              <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }} justifyContent="flex-end">
                <ImageList variant="quilted" cols={1} sx={{ height: '140px', width: 'fit-content' }}>
                  <ImageListItem sx={{ overflow: 'hidden' }}>
                    <img
                      src={URL.createObjectURL(getValues('carImage')[0])}
                      alt={getValues('carMake')}
                      title={getValues('carMake')}
                      loading="lazy"
                      style={{ objectFit: 'contain' }}
                    />
                  </ImageListItem>
                </ImageList>
              </Stack>
            )}
          </Stack>
          <Divider sx={{ backgroundColor: 'primary.main', height: 1 }} />
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
              <TextField {...register('start')} label="Start" error={!!errors.start} helperText={errors.start?.message} />

              {/* <TextField {...register('startDate')} label="Start date" error={!!errors.startDate} helperText={errors.startDate?.message} /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker label="Start date" />
              </LocalizationProvider>

              {/* <TextField {...register('startTime')} label="Start time" error={!!errors.startTime} helperText={errors.startTime?.message} /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopTimePicker label="Start time" />
              </LocalizationProvider>
            </Stack>
            <Divider sx={{ backgroundColor: 'primary.main', height: 1, display: { sx: 'flex', md: 'none' } }} />
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
              <TextField
                {...register('destination')}
                label="Destination"
                error={!!errors.destination}
                helperText={errors.destination?.message}
              />
              {/* <TextField {...register('endDate')} label="End date" error={!!errors.endDate} helperText={errors.endDate?.message} /> */}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker label="End date" />
              </LocalizationProvider>

              {/* <TextField {...register('endTime')} label="End time" error={!!errors.endTime} helperText={errors.endTime?.message} /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopTimePicker label="End time" />
              </LocalizationProvider>
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
