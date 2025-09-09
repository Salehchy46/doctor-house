import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../public/images/img1.jpeg';
import image2 from '../../../public/images/img2.jpeg';
import image4 from '../../../public/images/img4.jpeg';
import image5 from '../../../public/images/img5.jpeg';

const Banner = () => {
    return (
        <Carousel autoPlay>
            <div className=''>
                <img className='' src={image1} />
            </div>
            <div className=''>
                <img className='' src={image2} />
            </div>
            <div className=''>
                <img className='' src={image4} />
            </div>
            <div className=''>
                <img className='' src={image5} />
            </div>
        </Carousel>
    );
};

export default Banner;