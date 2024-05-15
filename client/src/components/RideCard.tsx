import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const RideCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ p: 2 }}>
        <Stack>
          <Typography variant="body1" component="p">
            title
          </Typography>
          <ImageList variant="masonry" cols={3} gap={8}>
            <ImageListItem>
              <img
                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                // src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={'car image'}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
          <Stack direction="row" spacing={1}>
            <Typography variant="body1" component="p">
              total seats
            </Typography>
            <Typography variant="body1" component="p">
              free seats
            </Typography>
            <Typography variant="body1" component="p">
              title
            </Typography>
          </Stack>
          <Button variant="contained" color="primary" size="medium" sx={{ textDecoration: 'none', width: '100%' }}>
            Book seat
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default RideCard;
