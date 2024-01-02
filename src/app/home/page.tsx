'use client'
import { motion, useInView } from 'framer-motion';
import { Navbar, Footer } from '@/app/shared/components';
import { useEffect, useRef } from 'react';

export function HomeComponent() {
  const refDiv1 = useRef(null)
  const isInView = useInView(refDiv1);

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
      }
    }
  }

  useEffect(() => {
    console.log('view: ', isInView)
  }, [isInView])

  return (
    <main>
      <motion.nav
        style={{ backgroundColor: 'black', color: 'white' }}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <Navbar/>
      </motion.nav>

      <div style={{ height: '120vh' }}>oi</div>

      <motion.div
        style={{ height: "100vh", backgroundColor: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        style={{ height: "100vh", backgroundColor: "green", transition: "1s background" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        olá
      </motion.div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
