import React from 'react';
import Carousel from 'nuka-carousel';
import './Hero.css';
import Slide1 from '../../Image/Slide_3.png';
import Slide2 from '../../Image/Slide1.png';
import Slide3 from '../../Image/Slide2.png';



const Hero = () =>{
    return(
        <div className="hero-wrap">
            <div className="contain">
                <Carousel dragging={true}>
                    <img src={Slide1} alt=""/>
                    <img src={Slide2} alt=""/>
                    <img src={Slide3} alt=""/>
                </Carousel>
            </div>
        </div>
    );
}

export default Hero;