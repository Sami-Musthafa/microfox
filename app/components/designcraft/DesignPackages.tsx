/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import './designPackages.css';
import DesignCard from './DesignCard';
import { Box, Stack } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { BsTelephone } from 'react-icons/bs';
import bubble1 from '../../../public/Bubbles/light-orange.svg';
import bubble2 from '../../../public/Bubbles/bubble2.svg';
import bubble3 from '../../../public/Bubbles/bubble3.svg';
import Image from 'next/image';

const DesignPackages = () => {
  const [selected, setSelected] = useState<'sprint' | 'monthly'>('sprint');

  return (
    <div
      className='center'
      style={{ width: '100%', flexDirection: 'column', position: 'relative' }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className='designPackages'>
          <div className='designHeading'>Design Packages</div>
          <div className='designSubtitle'>Which plan works for you?</div>
        </div>
      </motion.div>
      <div className='center cards' style={{ width: '100%' }}>
        <motion.div
          // style={{ width: '100%' }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Stack width={1} justifyContent='center' alignItems='center'>
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
          <Stack justifyContent='center' spacing={1}>
            <Box sx={{ pt: 7 }}>
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
      </div>
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
    </div>
  );
};

export default DesignPackages;
