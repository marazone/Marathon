import React from 'react';
import { Carousel } from '@material-tailwind/react';
import banner1 from '../../assets/Ad/banner_1.png'
import banner2 from '../../assets/Ad/banner_2.png'
import banner3 from '../../assets/Ad/banner_3.png'
import banner4 from '../../assets/Ad/banner_4.png'

const MainAd = () => {
    return (
        <div>
            <Carousel className="w-[800px] ph:w-full" autoplay autoplayDelay={4000} loop>
                <img src={banner1} className='w-full h-full'/>
                <img src={banner2} className='w-full h-full'/>
                <img src={banner3} className='w-full h-full'/>
                <img src={banner4} className='w-full h-full'/>
            </Carousel>
            
        </div>
    );
};

export default MainAd;