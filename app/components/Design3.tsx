import React from 'react';
import styles from '@/app/components/css/designStyles3.module.css';
import { motion } from 'framer-motion';

type Props = {};

const Design3 = (props: Props) => {
  return (
    <div className={styles.content}>
      <motion.div
        className={styles.card}
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
      >
        {/* <img
          className={styles.img1}
          src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/654921e4d933a90c12ba9251_quotations.svg'
        /> */}
        <h3 className={styles.heading}>
          Jen is a phenomenal creative strategist and designer... an absolute
          joy to work with - and the results are spectacular.
        </h3>
        <div className={styles.container}>
          <img
            className={styles.img2}
            src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65490f7cc7428aaa2e250051_Screenshot%202023-11-06%20at%2011.07.59%E2%80%AFAM-p-500.webp'
          />
          <p className={styles.p1}>Julie Haddon</p>
          <p className={styles.p2}>CMCO National Women Soccer League</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Design3;
