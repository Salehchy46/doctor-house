import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/customer_reviews.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setReviews(data);
            })
            .catch(console.error);
    }, []);

    return (
        <section className="py-10">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className='flex flex-col items-center mx-24 my-16'>
                            <p>{review.review}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Reviews;
