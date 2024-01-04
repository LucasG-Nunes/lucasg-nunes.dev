'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Navbar, Footer } from '@/app/shared/components';
import { useEffect, useRef } from 'react';
import backgroundImage from '../../background.jpg';
import Image from 'next/image';

export function HomeComponent() {
  // Exemplo de como configurar ref para useInView
  const refDiv1 = useRef(null);
  const isInView = useInView(refDiv1);

  const divStyle = {
    backgroundImage: `url(${backgroundImage.src})`, // Usando a propriedade .src da importação
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
  };

  const navVariants = {
    hidden: {
      y: '-180%',
      transition: {
        delay: 2,
      },
    },
    visible: {
      y: '0%',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  useEffect(() => {
    console.log('view: ', isInView);
  }, [isInView]);

  return (
    <main>
      <motion.nav
        style={{ backgroundColor: 'black', color: 'white', height: '6rem' }}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <Navbar />
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={divStyle}
      >
        o
      </motion.div>

      <motion.div
        style={{
          height: '100vh',
          background: 'linear-gradient(to bottom, #04061E, #3546B5)',
          transition: '1s background',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        style={{
          height: '100vh',
          background: 'linear-gradient(to bottom, #3546B5,#00A4E6)',
          transition: '1s background',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
