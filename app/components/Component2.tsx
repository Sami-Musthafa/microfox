import { Box, Stack } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import slide1 from '../../public/slides/slide1.webp';
import slide2 from '../../public/slides/slide2.webp';
import slide3 from '../../public/slides/slide3.webp';
import slide4 from '../../public/slides/slide4.jpg';
import slide5 from '../../public/slides/slide5.webp';
import '../styles/styles.css';
import { FaCircleArrowRight } from 'react-icons/fa6';

const ComponentTwo = () => {
  return (
    <Stack width={1} spacing={2} alignItems={'center'} py={2} my={2}>
      {/* <Typography fontSize={10} color={'#B4B4B8'}>
        We’ve done work for top brands
      </Typography> */}
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        width={1}
        className='slide-container'
        spacing={2}
        pb={2}
      >
        <Image
          src={slide2}
          alt='amazonLogo'
          width={400}
          height={400}
          priority
          className={'slide'}
        />
        <Image
          src={slide3}
          alt='sharegridLogo'
          width={400}
          height={400}
          priority
          className={'slide'}
        />
        <Image
          src={slide4}
          alt='fanaticsLogo'
          width={400}
          height={400}
          priority
          className={'slide'}
        />
        <Image
          src={slide1}
          alt='samsung'
          width={400}
          height={400}
          priority
          className={'slide'}
        />
        <Image
          src={slide5}
          alt='grouponLogo'
          width={400}
          height={400}
          priority
          className={'slide'}
        />
      </Stack>
      <Stack direction='row' spacing={1} alignItems='center'>
        <Box sx={{ fontSize: 14, fontWeight: 500 }}>View recent work</Box>
        <FaCircleArrowRight color='#62BAFD' size={25} />
      </Stack>
    </Stack>
  );
};

export default ComponentTwo;
