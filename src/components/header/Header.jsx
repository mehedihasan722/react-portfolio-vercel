import React from 'react'
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';


const Header = () => {
  return (
    <header>
        <section className="container header-container" id='home'>
            <h5>Hello I'm</h5>
            <h1>Mehedi Hasan</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA></CTA>
            <HeaderSocial></HeaderSocial>

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll-down'>Scroll Down</a>
        </section>
    </header>
  )
}

export default Header