import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="section-header">
        <h5 className="light-text">Lets get in touch</h5>
        <h2 className="head-text">Take a coffee & chat with me</h2>
        <p className="p-text subhead-text" > Got some idea? Feel free to reach out if you want to work together on something exciting. Big or small. Development or design.</p>
      </div>

      <div className="app__footer-container">

        <div className="app__contact-form">
          {!isFormSubmitted ? (
            
            <div className="app__footer-form">
              <h3 style={{margin:'10px 0', padding: '10px 0 10px 10px', backgroundColor: '#F3EFF5'}}>Let's chat</h3>
              <div className="app__flex">
                <label htmlFor="username">What is your name?</label>
                <input className="input-text" type="text" name="username" value={username} onChange={handleChangeInput} />
              </div>
              <div className="app__flex">
              <label htmlFor="email">What is your name?</label>
                <input className="input-text" type="email" name="email" value={email} onChange={handleChangeInput} />
              </div>
              <div>
              <label htmlFor="message">What is your name?</label>
                <textarea
                  className="p-text"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">
                Thank you for getting in touch!
              </h3>
            </div>
          )}
        </div>
        
        <div className="app__contact-info">
          <div className='contact-info'>
            <a href="tel:+1 (123) 456-7890" className="p-text"><AiOutlinePhone /> +381 69 4606 222</a>
            <a href="mailto:hello@micael.com" className="p-text"><AiOutlineMail />info@cvevanja.site</a>
          </div>
          
          <div className='contact-info m-20'>
          <a href="https://www.linkedin.com/in/cve-vanja/" target={'_blank'} className="p-text">● linkedin</a>
          <a href="https://github.com/VakyFunky" target={'_blank'} className="p-text">● github</a>
          <a href="https://www.behance.net/vaky_funky" target={'_blank'} className="p-text">● behhance</a>
          <a href="https://www.upwork.com/freelancers/1vanjacvetkovic" target={'_blank'} className="p-text">● upwork</a>
          </div>
          </div>

        

        
      </div>
      <div className="copyright">
        <span>cvevanja.site</span>
            <p>all right reserved</p>
          </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
