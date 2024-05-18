import Navbar from '@layouts/Navbar';
import Footer from '@layouts/Footer';
import Container from '@mui/material/Container';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{ backgroundColor: 'secondary.main', minHeight: 'calc(100vh - 64px)', px: 4, pt: 16, pb: 12 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default PageWrapper;
