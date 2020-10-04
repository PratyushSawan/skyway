import React from 'react';
import heroStyle from './hero.module.css'

let Hero = () => {
    return (
        <div className={heroStyle.hero} style={{ backgroundImage: `url(${require('../assets/images/carlous-img1.jpg')})` }}>
            <div className={heroStyle.overlay}>
                <div className={heroStyle.content}>
                    <div className={heroStyle.bigTxt}>
                        Book your dream holiday with skyway
                    </div>
                    <div className={heroStyle.smallTxt}>
                        Proudly managed over 10000+ Tours & delighted over 300000+ travelers in last 24 years
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;