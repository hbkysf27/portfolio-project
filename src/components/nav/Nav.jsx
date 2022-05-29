import React from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBookAdd} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{FaUserGraduate} from 'react-icons/fa'
import{BiMessageSquareDetail} from 'react-icons/bi'


function nav() {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookAdd/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#portfolio"><FaUserGraduate/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
      </nav>
  )
}

export default nav