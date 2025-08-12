import React from 'react';
import Hero from '../../components/Hero'
import Service from '../../components/Service';
import MySkills from '../../components/MySkills'
import Portfolio from '../../components/Portfolio';
import Education from '../../components/Education';
import About from '../../components/About';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Service></Service>
            <MySkills></MySkills>
            <Education></Education>
            <Portfolio></Portfolio>
            
            
        </div>
    );
};

export default Home;