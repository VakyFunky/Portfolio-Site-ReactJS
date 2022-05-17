import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      <div className="section-header">
        <h5 className="light-text">A few words from clients</h5>
        <h2 className="head-text">Testimonials</h2>
        <p className="p-text subhead-text" >Over the past 3 years I’ve had the pleasure to work with customers from various sectors on many interesting projects.</p>
      </div>
      <div className="app__testimonial-container">
        {testimonials.length && (
          <>
            <div className="app__testimonial-item app__flex">
              <div className="app__testimonial-content">
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                <div className='app__testimonial-author'>
                <div>
                  <h3 className="bold-text">{testimonials[currentIndex].name}</h3>
                  <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="app__testimonial-btns">
              <div className="app__flex-center" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>

              <div className="app__flex-center" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </>
        )}

        <div className="app__testimonial-brands">
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__whitebg',
);
