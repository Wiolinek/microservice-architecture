import Container from '@mui/material/Container';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: 'secondary.main', minHeight: 'calc(100vh - 64px)', px: 4, pt: 16, pb: 12 }}>
      {children}
    </Container>
  );
};

export default PageWrapper;
