import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'

import Image from '../../data/Guitarere.png'

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: "#2A2C35"}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor:"#caac78"}}></div>
              <div className="style-circle" style={{backgroundColor: "#caac78"}}></div>
              <div className="style-line" style={{backgroundColor: "#caac78"}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: "#caac78"}}>{aboutData.title}</h2>
                    <p style={{color:"#caac78"}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={Image}
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
