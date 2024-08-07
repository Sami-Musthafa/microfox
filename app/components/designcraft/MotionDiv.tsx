'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
  bubble: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration?: number;
};

const MotionDiv = (props: Props) => {
  const {
    bubble,
    top = '0',
    left = '0',
    right = '0',
    bottom = '0',
    duration = 1.2,
  } = props;
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: { top },
        left: { left },
        bottom: { bottom },
        right: { right },
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: { duration } }}
    >
      <Image src={bubble} alt='bubble' width={200} height={200} />
    </motion.div>
  );
};

export default MotionDiv;
