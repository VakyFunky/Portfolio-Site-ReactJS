import React from 'react';
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    
      <a href="https://www.linkedin.com/in/cve-vanja/" target={'_blank'}><FaLinkedinIn /></a>
    <a href="https://github.com/VakyFunky" target={'_blank'}><FaGithub /></a>
    <a href="https://www.behance.net/vaky_funky" target={'_blank'}><FaBehance /></a>
  </div>
);

export default SocialMedia;
