import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <div className="section-header">
        <h2 className="head-text">my personal projects</h2>
      </div>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Vanilla JS', 'React JS', 'All'].map((item, index) => (
          <div
            key={index+item}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <div className="app__work-container">
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div
                className="app__work-img app__flex"
              >
                <img src={urlFor(work.imgUrl)} alt={work.name} />
              </div>

              <div className="app__work-content">
                <div className="app__work-info ">
                  <h4 className="bold-text">
                    {work.title} <br />
                    <span>{work.tags[0]}</span>
                  </h4>
                  <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
                </div>

                <div className="app__work-hover">
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <AiFillEye />
                    demo
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                    code
                  </a>
                </div>


              </div>

            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__whitebg',
);
