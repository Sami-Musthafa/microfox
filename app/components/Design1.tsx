'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/components/css/designStyles.module.css';

const Design1 = () => {
  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles.circles}>
          <motion.div
            className={styles.circle1}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
          ></motion.div>
          <motion.div
            className={styles.circle2}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2.2 }}
          ></motion.div>
          <motion.div
            className={styles.circle3}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2.4 }}
          ></motion.div>
          <motion.div
            className={styles.circle4}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2.6 }}
          ></motion.div>
          <motion.div
            className={styles.circle5}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2.8 }}
          ></motion.div>
          <motion.div
            className={styles.circle6}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 3 }}
          ></motion.div>
          <motion.div
            className={styles.circle7}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 3.2 }}
          ></motion.div>
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>Designcraft.me</h4>
          <h1 className={styles.heading}>
            We design beautiful
            <br /> products, faster
          </h1>
          <div className={styles.p1}>
            A premium design service that is accessible to all, without the
            premium price tag.
          </div>
          <motion.button
            className={styles.button}
            whileHover={{ borderColor: 'transparent' }}
            transition={{ duration: 0.3 }}
          >
            See plans
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Design1;
