import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTItle from '../../component/SectionTItle';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('./customer_reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews.length);

    return (
        <section className='my-20'>
            <SectionTItle 
                title="What Our Patients Says"
                subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.">  
            </SectionTItle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review.id}
                    >
                        <div className='flex flex-col items-center mx-24 my-16'>
                            <p>{review.review}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            <p>{review.review_time}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Reviews;