'use client';
import React from 'react';
import styles from '@/app/components/css/designStyles3.module.css';
import { motion } from 'framer-motion';

type Props = {};

const Design3 = (props: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          className={styles.card}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
        >
          <div className={styles.cardRow}>
            <img
              className={styles.img1}
              src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/654921e4d933a90c12ba9251_quotations.svg'
            />
            <div className={styles.textColumn}>
              <div className={styles.heading}>
                Jen is a phenomenal creative strategist and designer... an
                absolute joy to work with - and the results are spectacular.
              </div>
              <div className={styles.container}>
                <img
                  className={styles.img2}
                  src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65490f7cc7428aaa2e250051_Screenshot%202023-11-06%20at%2011.07.59%E2%80%AFAM-p-500.webp'
                  alt='Julie Haddon'
                />
                <div className={styles.p1}>Julie Haddon</div>
                <div className={styles.p2}>
                  CMCO National Women Soccer League
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Design3;
