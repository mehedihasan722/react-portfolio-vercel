import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocial = () => {
  return (
    <div className='header-socials'>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
        <a href="https://dribble.com/" target="_blank" rel="noopener noreferrer"><FiDribbble></FiDribbble></a>
    </div>
  )
}

export default HeaderSocial