'use client';
import { motion } from 'framer-motion';
import styles from '@/app/components/css/designStyles4.module.css';
import React from 'react';

type Props = {};

const Design4 = (props: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>
              We have partnered with incredible brands
            </div>
            <div className={styles.imgcontainer}>
              <img
                className={styles.img1}
                src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65b7bc24760e195ad543d449_dfw-airport-logo.svg'
              />
              <img
                className={styles.img2}
                src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65b7b4a3a990145af0487d11_bp-logo.svg'
              />
              <img
                className={styles.img3}
                src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65b7b4ad672e750073eb8504_wdw-logo.svg'
              />
              <img
                className={styles.img4}
                src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65b7b4b8cc789853e5f2fe9a_koreai-logo.svg'
              />
              <img
                className={styles.img5}
                src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65b7b5ffaaae6c2feb540966_apporchid-logo.svg'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Design4;
