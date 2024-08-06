import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import samsung from '../../public/samsung.png';
import amazonLogo from '../../public/amazon_logo.png';
import fanaticsLogo from '../../public/fanatics_logo.png';
import grouponLogo from '../../public/groupon_logo.png';
import sharegridLogo from '../../public/sharegrid-logo.png';

const ComponentTwo = () => {
  return (
    <Stack width={1} spacing={2} alignItems={'center'} py={2} my={2}>
      <Typography fontSize={10} color={'#B4B4B8'}>
        We’ve done work for top brands
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-evenly'
        alignItems='center'
        width={1}
        className='slide-container'
        spacing={2}
        pb={2}
      >
        <Image
          src={samsung}
          alt='samsung'
          width={90}
          height={15}
          priority
          className={'slide'}
        />
        <Image
          src={amazonLogo}
          alt='amazonLogo'
          width={80}
          height={20}
          priority
          className={'slide'}
        />
        <Image
          src={sharegridLogo}
          alt='sharegridLogo'
          width={100}
          height={15}
          priority
          className={'slide'}
        />
        <Image
          src={fanaticsLogo}
          alt='fanaticsLogo'
          width={100}
          height={20}
          priority
          className={'slide'}
        />
        <Image
          src={grouponLogo}
          alt='grouponLogo'
          width={90}
          height={15}
          priority
          className={'slide'}
        />
      </Stack>
    </Stack>
  );
};

export default ComponentTwo;
