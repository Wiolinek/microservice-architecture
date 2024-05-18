import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface BannerProps {
  title?: string;
  subtitle?: string;
}

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2} style={{ marginTop: '10px' }} sx={{ flexGrow: 1, p: 3 }}>
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
    </Box>
  );
};

export default Banner;
