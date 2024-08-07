/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useEffect, useState } from 'react';
import './designPackages.css';
import DesignCard from './DesignCard';
import { Box, Container, Stack } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa6';
import { motion, useAnimationControls } from 'framer-motion';
import { BsTelephone } from 'react-icons/bs';
import { Opacity } from '@mui/icons-material';
import MotionDiv from './MotionDiv';
import Image from 'next/image';
import bubble1 from '../../../public/Bubbles/light-orange.svg';

const DesignPackages = () => {
  const [selected, setSelected] = useState<'sprint' | 'monthly'>('sprint');

  return (
    <div>
      <MotionDiv />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className='designPackages'>
          <div className='designHeading'>Design Packages</div>
          <div className='designSubtitle'>Which plan works for you?</div>
        </div>
      </motion.div>
      <Stack
        justifyContent={'center'}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Stack spacing={2}>
            <div className='sprintContainer'>
              <div className='sprintButtons'>
                <div className='buttonWrapper'>
                  <div
                    onClick={() => setSelected('sprint')}
                    className={
                      selected === 'sprint'
                        ? 'selected sprintButton'
                        : 'sprintButton'
                    }
                  >
                    🔥 Sprint
                  </div>
                  <div
                    onClick={() => setSelected('monthly')}
                    className={
                      selected === 'monthly'
                        ? 'selected sprintButton'
                        : 'sprintButton'
                    }
                  >
                    Monthly
                  </div>
                </div>
              </div>
              <DesignCard selected={selected} />
            </div>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Stack justifyContent='center' pt={{ xs: 0, sm: 5 }}>
            <Box sx={{ mt: 1 }}>
              <div className='designCard2'>
                <div>
                  <div style={{ paddingBottom: '5px' }}>
                    <BsTelephone size={25} />
                  </div>
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      paddingBottom: '10px',
                    }}
                  >
                    Let's talk design
                  </div>
                  <div style={{ fontSize: '12px' }}>
                    Call us to discuss your design golas and discover how
                    DesignCraft.me can uniquely serve your needs.
                  </div>
                  <div className='center scheduleCall'>
                    <div className='scheduleCallIcon'>
                      <FaArrowRight />
                    </div>
                    <div className='scheduleCallButton'>Schedule a call</div>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div
                className='designCard2'
                style={{ backgroundColor: '#62BAFD' }}
              >
                <Stack sx={{ color: 'white' }}>
                  <div
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      paddingBottom: '10px',
                    }}
                  >
                    Share the love!
                  </div>
                  <div style={{ fontSize: '12px' }}>
                    Refer a friend and earn free design time with each referral.
                    it's our way of saying thanks for spreading the word.
                  </div>
                </Stack>
              </div>
            </Box>
          </Stack>
        </motion.div>
      </Stack>
    </div>
  );
};

export default DesignPackages;
