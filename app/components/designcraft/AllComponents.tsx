'use client';
import React, { useEffect, useRef, useState } from 'react';
import DesignFooter from './DesignFooter';
import ShowMoreCard from './ShowMoreCard';
import DesignPackages from './DesignPackages';
import { Container } from '@mui/material';

import { motion } from 'framer-motion';
import Bubbles from './Bubbles';
import '../../styles/styles.css';
import { FaArrowUp } from 'react-icons/fa';
import ComponentTwo from '../Component2';
import Design1 from '../Design1';
import Design4 from '../Design4';
import Design3 from '../Design3';
import Design2 from '../Design2';
import Design5 from '../Design5';

const AllComponents = () => {
  const [showToolbar, setShowToolbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowToolbar(true);
      } else {
        setShowToolbar(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return window.addEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <div id='design1' style={{ position: 'relative' }}>
      <div>
        <Design1 />
      </div>
      <div id='design2'>
        <Design2 />
      </div>
      <div id='design3'>
        <Design3 />
      </div>
      <div id='design4'>
        <Design4 />
      </div>
      <div>
        <Design5 />
      </div>
      <ComponentTwo />
      <div>
        <Container maxWidth='lg'>
          <div data-section id='design-packages'>
            <DesignPackages />
          </div>
          <motion.div
            data-section
            id='show-more-card'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ShowMoreCard />
          </motion.div>
        </Container>

        <div data-section id='footer' style={{ backgroundColor: '#2C1338' }}>
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
            <div
              className='hover-effect'
              style={{
                ...styless,
                backgroundColor: activeSection === 'design1' ? '#ffffff' : '',
                color: activeSection === 'design1' ? 'black' : '',
              }}
              data-section
              id='design1'
              onClick={() => scrollToSection('design1')}
            >
              <FaArrowUp />
            </div>
            <div className='hover-effect' style={styless}>
              Why Design Craft
            </div>
            <div
              className='hover-effect'
              style={{
                ...styless,
                backgroundColor:
                  activeSection === 'design-packages' ? '#ffffff' : '',
                color: activeSection === 'design-packages' ? 'black' : '',
              }}
              onClick={() => scrollToSection('design-packages')}
            >
              Design Packages
            </div>
            <div
              className='hover-effect'
              style={{
                ...styless,
                backgroundColor:
                  activeSection === 'show-more-card' ? '#ffffff' : '',
                color: activeSection === 'show-more-card' ? 'black' : '',
              }}
              onClick={() => scrollToSection('show-more-card')}
            >
              About Us
            </div>
            <div
              className='hover-effect'
              style={{
                ...styless,
                backgroundColor: activeSection === 'footer' ? '#ffffff' : '',
                color: activeSection === 'footer' ? 'black' : '',
              }}
              onClick={() => scrollToSection('footer')}
            >
              Footer
            </div>
          </motion.div>
        </div>
        <Bubbles />
      </div>
    </div>
  );
};

export default AllComponents;
//<div>
//<div
//      className='mobileToolbar'
//    style={{
//    position: 'fixed',
//  bottom: 50,
//right: 0,
//  borderRadius: '30px',
//     }}
//  >
//   {/* <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}> */}
// <motion.div
// style={{
//    display: isOpen ? 'flex' : 'none',
//   zIndex: 10,
// }}
//initial={{ opacity: 0, y: 50 }}
// animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
// >
// <motion.div
// style={{
// display: 'flex',
// flexDirection: 'column',
// width: '100%',
// height: '200px',
// padding: '10px 20px',
// justifyContent: 'center',
// alignItems: 'center',
// color: '#ffffff',
// backgroundColor: '#08010C',
// borderRadius: '30px',
// }}
// initial={{ opacity: 0, y: 50 }}
// whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
// >
// <div className='hover-effect' style={styless}>
// <FaArrowUp />
// </div>
// <div
// className='hover-effect'
// style={styless}
// onClick={() => {
// setIsOpen(!isOpen);
// scrollToSection('design-packages');
// }}
// >
// Design Packages
// </div>
// <div
// className='hover-effect'
// style={styless}
// onClick={() => {
// setIsOpen(!isOpen);
// scrollToSection('show-more-card');
// }}
// >
// Show More Card
// </div>
// <div
// className='hover-effect'
// style={styless}
// onClick={() => {
// setIsOpen(!isOpen);
// scrollToSection('footer');
// }}
// >
// Footer
// </div>
// </motion.div>
// </motion.div>
// <button
// style={{
// ...styless,
// backgroundColor: '#08010C',
// position: 'fixed',
// bottom: 10,
// right: 10,
// zIndex: 10,
// }}
// onClick={() => setIsOpen(!isOpen)}
// >
// Menu
// </button>
// {/* </motion.nav> */}
// </div>
// </div>
