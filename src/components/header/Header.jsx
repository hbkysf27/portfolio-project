import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocial from './HeaderSocials'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Yusuf Salih</h1>
        <h4 className="text-light">Full Stack Developer</h4>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">Scrolling down</a>
      </div>
      </header>
  )
}

export default header