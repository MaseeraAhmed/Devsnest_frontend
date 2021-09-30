import React from 'react';
import SwiperCore, { A11y, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination, Scrollbar, A11y]);

function ImageSlider({images}) {
    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={1}
            pagination
            style={{ width: 320 }}
        >
            {
                images.map((image, index) => (
                    <SwiperSlide key={index}><img src={image.url} alt=""/></SwiperSlide>
                ))
            }
        </Swiper>

    );
}

export default ImageSlider;