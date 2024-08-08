'use client';
import React, { useRef } from 'react';
import DesignFooter from './DesignFooter';
import ShowMoreCard from './ShowMoreCard';
import DesignPackages from './DesignPackages';
import { Container } from '@mui/material';

import Image from 'next/image';
import bubble1 from '../../../public/Bubbles/light-orange.svg';
import bubble2 from '../../../public/Bubbles/bubble2.svg';
import bubble3 from '../../../public/Bubbles/bubble3.svg';
import bubble4 from '../../../public/Bubbles/bubble4.svg';
import bubble5 from '../../../public/Bubbles/bubble5.svg';
import bubble6 from '../../../public/Bubbles/bubble6.svg';
import bubble7 from '../../../public/Bubbles/bubble7.svg';
import bubble8 from '../../../public/Bubbles/bubble8.svg';
import { motion, useScroll, useSpring } from 'framer-motion';

const AllComponents = () => {
  return (
    <div>
      <Container maxWidth='md'>
        <div
          className='center'
          style={{ flexDirection: 'column', position: 'relative' }}
        >
          <DesignPackages />
          <ShowMoreCard />
        </div>
      </Container>
      <DesignFooter />
      <div>
        <motion.div
          style={{
            position: 'absolute',
            top: '4%',
            left: '0',
            zIndex: -1,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 2 }}
          transition={{ duration: 1.2 }}
        >
          <Image src={bubble1} alt='bubble' width={200} height={200} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '10%',
            zIndex: -1,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={bubble2} alt='bubble' width={200} height={200} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '25%',
            right: '3%',
            zIndex: -1,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={bubble3} alt='bubble' width={200} height={200} />
        </motion.div>
      </div>
      <div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-60%',
            left: '5%',
            zIndex: -1,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1.7 }}
          transition={{ duration: 0.9 }}
        >
          <Image src={bubble4} alt='bubble' width={200} height={200} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            zIndex: -1,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.4 }}
          transition={{ duration: 1 }}
        >
          <Image src={bubble5} alt='bubble' width={200} height={200} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '0%',
            left: '5%',
            zIndex: -2,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={bubble2} alt='bubble' width={200} height={200} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-40%',
            right: '-6%',
            zIndex: -2,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1.8 }}
          transition={{ duration: 1.2 }}
        >
          <Image src={bubble6} alt='bubble' width={200} height={200} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '4%',
            zIndex: -1,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.7 }}
          transition={{ duration: 1.5 }}
        >
          <Image src={bubble7} alt='bubble' width={200} height={200} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-60%',
            right: '3%',
            zIndex: -1,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.2 }}
          transition={{ duration: 1.8 }}
        >
          <Image src={bubble8} alt='bubble' width={200} height={200} />
        </motion.div>
      </div>
    </div>
  );
};

export default AllComponents;
