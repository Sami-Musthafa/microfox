'use client';
import { motion } from 'framer-motion';
import React from 'react';
import styles from '@/app/components/css/designStyles5.module.css';

type Props = {};

const Design5 = (props: Props) => {
  const cards = [
    {
      title: 'Design consultant',
      color: '#132edf',
      description:
        'Advise on design strategies to improve functionality and market appeal by conducting product audits to identify areas for improvement, enhancing user engagement and brand perception.',
    },
    {
      title: 'Web design',
      color: '#ebb1b1',
      description:
        'Website layouts (one-page/multi-page) with custom graphics and strategic content placement. Delivered as fully responsive and visually striking websites, utilizing Webflow.',
    },
    {
      title: 'Branding',
      color: '#d98a14',
      description:
        'Logo creation, comprehensive style guides, corporate identity, strategic brand messaging, and immersive environmental branding.',
    },
    {
      title: 'Product design',
      color: '#80d8ff',
      description:
        'User interface design, interaction design, design refinement, prototyping, wireframing, product audit.',
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
      <motion.div
        initial={{ y: 100 }}
        className={styles.content}
        whileInView={{ y: 0 }}
      >
        <div className={styles.heading}>What is it we do? </div>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div>
                <div
                  style={{ backgroundColor: card.color }}
                  className={styles.circle8}
                ></div>
              </div>
              <div className={styles.container}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardDescription}>{card.description}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Design5;
