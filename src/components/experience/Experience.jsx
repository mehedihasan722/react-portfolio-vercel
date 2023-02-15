import React from 'react'
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experinece</h2>
      <div className="container experience-container">
        {/*---- Fronted Site -------- */}
        <div className="experience-fronted">
          <h3>Fronted Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Site  */}
          <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'></BsPatchCheckFill>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience