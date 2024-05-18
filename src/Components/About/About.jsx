import React from 'react';
import './About.css'
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className="about">
       <div className="about-left">
           <img src={about_img} alt="" className='about-img'/>
           <img src={play_icon} alt="" className='play-icon' onClick={()=>
            {setPlayState(true)}}/>
       </div>
       <div className="about-right">
           <h3>ABOUT UNIVERSITTY</h3>
           <h2>Nurturing Tommorow's Leaders Today</h2>
         
            <p>Edusity is a leading institution committed to academic excellence, innovative research, and fostering a diverse and inclusive community. Our campus blends historic charm with state-of-the-art facilities, creating a vibrant environment for learning and growth.
                Our university offers a wide range of undergraduate, graduate, and professional programs across many colleges and schools. With over many degree programs, our curriculum is designed to challenge and inspire students, preparing them for successful careers and lifelong learning. Our distinguished faculty members are not only experts in their fields but also dedicated mentors who prioritize student success.Our vibrant campus life offers something for everyone. With over Number student organizations, a robust athletics program, and a variety of cultural and recreational activities, students can explore their interests and develop new passions. 
                Our beautiful campus features modern residence halls, diverse dining options, and extensive support services to create a home away from home for our students.
            </p>
       </div>
    </div>
  )
}

export default About;
