import React from 'react'
import './about.css'
import ME from '../../assets/meeh.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card">
            <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1 Year of Experience</small>
            </article>

            <article className="about__card">
            <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>300+ clients worldwide</small>
            </article>

            <article className="about__card">
            <VscFolderActive className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>



          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor fuga quas molestiae, commodi recusandae sit quia. Placeat in laudantium eaque rerum pariatur velit delectus officia. Omnis labore nam in!
          </p>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>

    
    </section>
  )
}

export default about