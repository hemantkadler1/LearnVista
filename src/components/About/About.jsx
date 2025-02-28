import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
           
        </div>

        <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Continuously learning and expanding knowledge in technology</h2>
        <p>Dedicated to continuous learning and growth, exploring technology,
        data analysis, and web development. Passionate about innovation and 
        problem-solving, always seeking opportunities to apply knowledge and 
        develop new skills.</p>
        <p>Committed to lifelong learning, exploring the ever-evolving world of 
        technology, data analysis, and web development. Passionate about solving 
        complex problems and creating innovative solutions through continuous 
        growth and hands-on experience.</p>
        <p>Continuously expanding my knowledge in technology, data analysis, 
            and web development. Passionate about learning, innovation, and 
            applying new skills to solve real-world challenges.</p>

</div>







      
    </div>
  )
}

export default About
