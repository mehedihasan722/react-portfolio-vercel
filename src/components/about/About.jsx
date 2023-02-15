import React from 'react'
import './About.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon'></FaAward>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about-card">
              <FiUsers className='about-icon'></FiUsers>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className='about-icon'></VscFolderLibrary>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati quae enim nisi ab tempore odit est placeat accusantium veritatis amet quidem facilis, pariatur excepturi doloribus, sint blanditiis. Ex at maiores nobis illum iste laudantium omnis, alias debitis aut, enim maxime. Ipsa debitis blanditiis nulla nemo, cum ea quisquam ullam.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About