import { Toolbar, Typography } from '@mui/material';

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <Toolbar sx={{ position: 'absolute', bottom: 10, left: 0, right: 0, bgcolor: 'primary.main', justifyContent: 'center'}} role="footer">
      <Typography variant="body1" component="p" sx={{  color: '#fff' }}>
        {`Copyright \u00A9 ${year} Wiola Polok www.u-v.codes. All Rights Reserved`}
      </Typography>
    </Toolbar>
  );
};

export default Footer;
