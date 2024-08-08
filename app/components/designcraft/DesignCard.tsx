'use client';
/* eslint-disable react/no-unescaped-entities */
import { motion, useAnimationControls } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type Props = {
  selected: 'sprint' | 'monthly';
};

const DesignCard = (props: Props) => {
  const { selected } = props;

  return (
    <div>
      <motion.div
        style={{ display: selected === 'sprint' ? 'block' : 'none' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        className='designCard'
      >
        <div>
          <div>
            <div className='designCardHead'>One-time payment</div>
            <div className='designCardPrice'>$3,995</div>
          </div>
          <div style={{ padding: '10px 0', fontSize: '12px' }}>
            <div>30 days of unlimited design services</div>
            <div>No contacts, no hourly rates</div>
          </div>
          <div className='included'>
            What's included
            <span
              style={{
                flex: 1,
                padding: '0 10px',
                alignSelf: 'center',
              }}
            >
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </span>
          </div>
          <div>
            <ul>
              <li>One request at a time</li>
              <li>2 day delivery</li>
              <li>1:1 communication</li>
              <li>Webflow development</li>
              <li>Extended plan available</li>
            </ul>
          </div>
          <div className='getStartedWrapper center'>
            <motion.div
              whileHover={{ scaleX: 1.04, scaleY: 1.13 }}
              className='getStarted center'
            ></motion.div>
            <div
              className='center'
              style={{ position: 'absolute', color: 'black' }}
            >
              Get started
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ display: selected === 'monthly' ? 'block' : 'none' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        className='designCard'
      >
        <div>
          <div>
            <div className='designCardHead'>Subscription</div>
            <div className='designCardPrice'>
              $4,195 <span style={{ fontSize: '12px' }}>/ month</span>
            </div>
          </div>
          <div style={{ padding: '10px 0', fontSize: '12px' }}>
            <div>No minimum or longterm commitments</div>
            <div>Pause or Cancel anytime</div>
          </div>
          <div className='included'>
            What's included
            <span
              style={{
                flex: 1,
                padding: '0 10px',
                alignSelf: 'center',
              }}
            >
              <hr style={{ width: '100%', border: '1px solid black' }} />
            </span>
          </div>
          <div>
            <ul>
              <li>One request at a time</li>
              <li>2 day delivery</li>
              <li>Async communication</li>
              <li>Webflow development</li>
              <li>Upgrade available</li>
            </ul>
          </div>
          <div className='getStartedWrapper center'>
            <motion.div
              whileHover={{ scaleX: 1.04, scaleY: 1.13 }}
              className='getStarted2 center'
            ></motion.div>
            <div
              className='center'
              style={{ position: 'absolute', color: 'black' }}
            >
              Reserve your spot
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DesignCard;
