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
        sx={{ backgroundColor: 'secondary.main', minHeight: 'calc(100vh - 64px)', pt: 10, pb: 12 }}
        style={{ paddingLeft: '48px', paddingRight: '48px' }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default PageWrapper;
