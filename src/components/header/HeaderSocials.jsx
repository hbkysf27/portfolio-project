import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {ImTwitter} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/yusuf-salih-874328167/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/hbkysf27" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/yusuf_hbk" target="_blank"><ImTwitter/></a>
    </div>
  )
}

export default HeaderSocials