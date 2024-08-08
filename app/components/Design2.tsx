'use client';
import React from 'react';
import styles from '@/app/components/css/designStyles2.module.css';
import { motion } from 'framer-motion';
import Design3 from './Design3';

type Props = {};

const Design2 = (props: Props) => {
  const cards = [
    {
      title: 'Request',
      imgSrc:
        'https://cdn.prod.website-files.com/6526d18b341711c87eaea120/659ec77fd1a048ea959e3955_number-1.svg',
      description:
        'Submit your design requests one at a time through your personal design task board.',
    },
    {
      title: 'Receive',
      imgSrc:
        'https://cdn.prod.website-files.com/6526d18b341711c87eaea120/659ec7e17b3b53f40ed61869_number-2.svg',
      description:
        'Get your design in 48 hours or less.We ensure fast,precise delivery of your tailored design task.',
    },
    {
      title: 'Approve',
      imgSrc:
        'https://cdn.prod.website-files.com/6526d18b341711c87eaea120/659ec83a4e79a0cfd55073bd_number-3.svg',
      description:
        'Enjoy your new design or request unlimited revisions until it is exactly to your liking.',
    },
  ];
  return (
    <div className={styles.hero}>
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
      </div>
      <div className={styles.content}>
        <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }}>
          <h1 className={styles.heading}>
            From concept to reality in
            <span className={styles.headingSpan}> 2 days </span>
            or less
          </h1>
          <div className={styles.p2}>
            We will take your creative ideas and bring them to life faster than
            you can slap a tick!
          </div>
        </motion.div>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.container}>
                <img className={styles.cardImg} src={card.imgSrc} />
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardDescription}>{card.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design2;
