import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FormHelperText from '@mui/material/FormHelperText';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AddRideFormSchema } from '@features/authentication/schema/addRideFormSchema';
import { VisuallyHiddenInputStyle } from '@features/authentication/components/styles/customStyles';
import { DevTool } from '@hookform/devtools';
import dayjs from 'dayjs';

const AddRideForm = () => {
  const {
    control,
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitting, errors },
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
              <TextField {...register('name')} label="Name" error={!!errors.name} helperText={errors.name?.message} />
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
                inputProps={{ min: 1, max: 10 }}
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
                <TextField {...register('carImage')} type="file" inputProps={{ accept: 'image/*' }} sx={VisuallyHiddenInputStyle} />
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
            {!!errors.carImage && errors.carImage?.message && (
              <Stack
                spacing={3}
                sx={{ width: { xs: 220, sm: 350 } }}
                style={{ marginTop: '6px', paddingLeft: '14px' }}
                justifyContent="flex-end">
                <FormHelperText error>{errors.carImage?.message as string}</FormHelperText>
              </Stack>
            )}
          </Stack>
          <Divider sx={{ backgroundColor: 'primary.main', height: 1 }} />
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
              <TextField {...register('start')} label="Start" error={!!errors.start} helperText={errors.start?.message} />
              <Controller
                control={control}
                name="startDate"
                render={({ field: { value, onChange } }) => {
                  return (
                    <DateTimePicker
                      label="Start date"
                      value={dayjs(value) || dayjs()}
                      onChange={onChange}
                      disablePast
                      maxDate={dayjs().add(30, 'day')}
                      slotProps={{
                        actionBar: { actions: ['accept', 'cancel', 'clear'] },
                        textField: {
                          helperText: errors?.startDate?.message as string,
                        },
                      }}
                      sx={{ display: { sx: 'none', md: 'flex' } }}
                    />
                  );
                }}
              />
            </Stack>
            <Divider sx={{ backgroundColor: 'primary.main', height: 1, display: { sx: 'flex', md: 'none' } }} />
            <Stack spacing={3} sx={{ width: { xs: 220, sm: 350 } }}>
              <TextField
                {...register('destination')}
                label="Destination"
                error={!!errors.destination}
                helperText={errors.destination?.message}
              />
              <Controller
                control={control}
                name="endDate"
                render={({ field: { value, onChange } }) => {
                  return (
                    <DateTimePicker
                      label="End date"
                      value={dayjs(value) || dayjs()}
                      onChange={onChange}
                      disablePast
                      maxDate={dayjs().add(40, 'day')}
                      slotProps={{
                        actionBar: { actions: ['accept', 'cancel', 'clear'] },
                        textField: {
                          helperText: errors?.endDate?.message as string,
                        },
                      }}
                      sx={{ display: { sx: 'none', md: 'flex' } }}
                    />
                  );
                }}
              />
            </Stack>
          </Stack>
          <Divider flexItem orientation="horizontal" sx={{ backgroundColor: 'primary.main', height: 1 }} />
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
            <Stack direction="row" alignItems="flex-end" spacing={3} sx={{ width: { xs: 150, md: 220 } }}>
              <TextField
                {...register('price')}
                label="Price"
                type="number"
                inputProps={{ min: 1, max: 1000 }}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
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
