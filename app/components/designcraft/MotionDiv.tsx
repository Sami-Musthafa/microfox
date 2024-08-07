'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import bubble1 from '../../../public/Bubbles/light-orange.svg';

type Props = {};

const MotionDiv = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Image src={bubble1} alt='bubble' width={200} height={200} />
    </motion.div>
  );
};

export default MotionDiv;
