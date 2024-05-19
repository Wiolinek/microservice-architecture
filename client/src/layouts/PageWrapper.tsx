import Navbar from '@layouts/Navbar';
import Footer from '@layouts/Footer';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{ backgroundColor: 'secondary.main', minHeight: 'calc(100vh - 64px)' }}
        style={{ paddingLeft: 48, paddingRight: 48, paddingTop: 80, paddingBottom: 96 }}>
        <Stack direction="column" alignItems="center" spacing={2}>
          {children}
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default PageWrapper;
