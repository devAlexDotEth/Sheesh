import { FC } from 'react';
import Stack from '../components/stack';
// PAGES
import Intro from './intro';
import About from './about';
import Roadmap from './roadmap';

export const Home: FC<{}> = () => {
  return (
    <>
      <Stack direction='VERTICAL'>
        <Intro /> 
        <About />
        <Roadmap />
      </Stack>
    </>
  );
}

export default Home;
