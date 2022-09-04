import React from 'react';
import { Button } from './Button';
import './HeroSection.css'
import '../App.css';
import Blogs from './Blogs';

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src="../video home.mp4" autoPlay loop muted></video>
            <h1>Green Energy</h1>
            <p> Be The part of solution!</p>
            <div className="hero-btn">
                <span className = 'explore-button'>
                    {/* <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize={'btn--large'}> EXPLORE </Button> */}
                    
                </span>
                <span>
                    {/* <Button className = 'btns' buttonStyle = 'btn--pritmary' buttonSize={'btn--large'}> Video <i className='far fa-play-circle' />
                    </Button> */}
                </span>
            </div>
        </div>
    )
}

export default HeroSection;