'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import DesignFooter from './DesignFooter';
import ShowMoreCard from './ShowMoreCard';
import DesignPackages from './DesignPackages';
import { Container } from '@mui/material';

import { motion } from 'framer-motion';
import Bubbles from './Bubbles';
import '../../styles/styles.css';
import { FaArrowUp } from 'react-icons/fa';
import ComponentTwo from '../Component2';

const AllComponents = () => {
  const [showToolbar, setShowToolbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [lastScrollY, handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const styless = {
    cursor: 'pointer',
    padding: '12px 20px',
    borderRadius: '30px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#EDDFDE',
  };

  return (
    <div>
      <ComponentTwo />
      <Container maxWidth='lg'>
        <div
          className='center'
          style={{
            flexDirection: 'column',
            position: 'relative',
            width: '100%',
          }}
        >
          <div id='design-packages'>
            <DesignPackages />
          </div>
          <motion.div
            id='show-more-card'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ShowMoreCard />
          </motion.div>
        </div>
      </Container>

      <div id='footer' style={{ backgroundColor: '#2C1338' }}>
        <Container>
          <DesignFooter />
        </Container>
      </div>

      <div
        className='toolbar'
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <motion.div
          style={{
            display: !showToolbar ? 'flex' : 'none',
            top: 'auto',
            bottom: 0,
            position: 'fixed',
            margin: '20px',
            maxWidth: '600px',
            height: '40px',
            padding: '10px 20px',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
            backgroundColor: '#08010C',
            borderRadius: '30px',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
          <div className='hover-effect' style={styless}>
            <FaArrowUp />
          </div>
          <div
            className='hover-effect'
            style={styless}
            onClick={() => scrollToSection('design-packages')}
          >
            Design Packages
          </div>
          <div
            className='hover-effect'
            style={styless}
            onClick={() => scrollToSection('show-more-card')}
          >
            Show More Card
          </div>
          <div
            className='hover-effect'
            style={styless}
            onClick={() => scrollToSection('footer')}
          >
            Footer
          </div>
        </motion.div>
      </div>
      <div
        className='mobileToolbar'
        style={{
          position: 'fixed',
          bottom: 50,
          right: 0,
          borderRadius: '30px',
        }}
      >
        {/* <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}> */}
        <motion.div
          style={{
            display: isOpen ? 'flex' : 'none',
            zIndex: 10,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '200px',
              padding: '10px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#ffffff',
              backgroundColor: '#08010C',
              borderRadius: '30px',
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          >
            <div className='hover-effect' style={styless}>
              <FaArrowUp />
            </div>
            <div
              className='hover-effect'
              style={styless}
              onClick={() => {
                setIsOpen(!isOpen);
                scrollToSection('design-packages');
              }}
            >
              Design Packages
            </div>
            <div
              className='hover-effect'
              style={styless}
              onClick={() => {
                setIsOpen(!isOpen);
                scrollToSection('show-more-card');
              }}
            >
              Show More Card
            </div>
            <div
              className='hover-effect'
              style={styless}
              onClick={() => {
                setIsOpen(!isOpen);
                scrollToSection('footer');
              }}
            >
              Footer
            </div>
          </motion.div>
        </motion.div>
        <button
          style={{
            ...styless,
            backgroundColor: '#08010C',
            position: 'fixed',
            bottom: 10,
            right: 10,
            zIndex: 10,
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
        {/* </motion.nav> */}
      </div>
      <Bubbles />
    </div>
  );
};

export default AllComponents;
