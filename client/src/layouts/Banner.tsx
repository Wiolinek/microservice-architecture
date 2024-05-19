import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface BannerProps {
  title?: string;
  subtitle?: string;
}

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <Stack direction="column" spacing={1} style={{ marginTop: 48 }}>
      {title && (
        <Typography variant="h4" component="h1" sx={{ fontSize: '4rem', fontWeight: 900 }}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: 'primary.main' }}>
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
};

export default Banner;
