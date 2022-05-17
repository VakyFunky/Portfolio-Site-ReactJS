import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <>
    <motion.div
      whileInView={{ x: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="app__header-content"
    >
      <div className="app__header-info">
        <h5 className="light-text">Vanja Cvetkovic</h5>
        <h1 className="head-text">Frontend developer,<br /> passionate about UI/UX</h1>
        <p className="p-text subhead-text" >Over the past 3 years, as an freelencer, I’ve worked with big companies and up-and-coming startups to successfully help them resolve their peoblems, find best solution & reach their full potential</p>
      </div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" className='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.5, delayChildren: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </motion.div>

  </>
);

export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'home',
  'app__whitebg'
);
