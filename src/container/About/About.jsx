import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);



  return (
    <>
      <div className="section-header">
        <h5 className="light-text">A few words about me</h5>
        <h2 className="head-text">in love with coding & resolving problems</h2>
        <p className="p-text subhead-text" > I'm Vanja, freelancer based in Belgrade
          who, not-so-long-ago, fell in love with coding & resolving problems, with focuses on telling stories visually, through enjoyable and meaningful experiences. Building state-of-art, easy to use, user-friendly web applications is truly a passion of mine. </p>
          <br />
         <p className="p-text"><span>Frontend Development | UI, UX Design | Presentation Design Expert</span></p> 
          
      </div>

      <div className="app__about-container">
      {/* <div className="about__profiles">
         <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, type: 'tween' }}
            className="app__profile-item"
          >
            <h2 className="bold-text" style={{ marginTop: 20 }}>My approach to work is logic, consistency & rationality</h2>
            <p className="p-text" style={{ marginTop: 10 }}>I follow the basix steps for productive collaboration and always unique end product</p>
          </motion.div>
         </div>  */}
        <motion.div className="about__list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item"
              key={skill.name}
            >
              <div
                className="app__flex-center"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
         
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
