import { Container } from '@mui/material';
import ComponentOne from './components/Component1';
import ComponentTwo from './components/Component2';

export default function Home() {
  return (
    <Container maxWidth='md' sx={{ overflow: 'hidden' }}>
      <ComponentOne />
      <ComponentTwo />
    </Container>
  );
}
