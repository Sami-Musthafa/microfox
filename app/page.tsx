import { Container } from '@mui/material';
import ComponentOne from './components/Component1';
import ComponentTwo from './components/Component2';
import Homepage1 from './components/Homepage1';
import Homepage from './components/Homepage';

export default function Home() {
  return (
    <>
      <Container maxWidth='md' sx={{ overflow: 'hidden' }}>
        <ComponentOne />
        <ComponentTwo />
        <Homepage1 />
      </Container>
      <Homepage />
    </>
  );
}
