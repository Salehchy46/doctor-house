import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/images/img1.jpeg';
import image2 from '../../assets/images/img2.jpeg';
import image4 from '../../assets/images/img4.jpeg';
import image5 from '../../assets/images/img5.jpeg';

const Banner = () => {
    return (
        <Carousel autoPlay centerMode infiniteLoop>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${image1})`
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Your Best Medical Help Center</h1>
                        <p className="mb-5">
                            Your one-stop destination for reliable, affordable, and certified medical products.
                        </p>
                        <button className="btn bg-teal-950 hover:bg-teal-700">All Services</button>
                    </div>
                </div>
            </div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${image2})`
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Your Best Care</h1>
                        <p className="mb-5">
                            Combining cutting-edge technology with compassionate service for better patient outcomes.
                        </p>
                        <button className="btn bg-teal-950 hover:bg-teal-700">All Services</button>
                    </div>
                </div>
            </div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${image5})`
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Your Health, Our Priority</h1>
                        <p className="mb-5">
                            From diagnostic tools to emergency essentials — everything you need for modern healthcare in one place.
                        </p>
                        <button className="btn bg-teal-950 hover:bg-teal-700">All Services</button>
                    </div>
                </div>
            </div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${image4})`
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Trusted Care, Advanced Solutions</h1>
                        <p className="mb-5">
                            Delivering high-quality medical equipment and supplies to keep your patients safe and your practice efficient.
                        </p>
                        <button className="btn bg-teal-950 hover:bg-teal-700">All Services</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;