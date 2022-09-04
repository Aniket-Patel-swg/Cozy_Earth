import React from 'react'
import Blogs from '../Elements/Blogs';
import Footer from '../Elements/Footer';
import HeroSection from '../Elements/HeroSection';
import Navbar from '../Elements/Navbar';

const Homepage = () => {
    return(
        <div>
            <Navbar />
            <HeroSection />
            <Blogs />
            <Footer />
        </div>
    )
}

export default Homepage;