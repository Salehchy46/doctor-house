import React from 'react';
import Banner from './Banner';
import Services from './Services';
import OfficeCons from './OfficeCons';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OfficeCons></OfficeCons>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;