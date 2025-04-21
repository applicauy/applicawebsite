'use client'

import '../../styles/post.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import { useState } from 'react';
import Image from 'next/image';
import SwiperCore from 'swiper';

export default function ImagesSlide(
    {
        title,
        images
    }:
    {
        title: string;
        images: StaticImport[]
    }
) {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    
    return(
        <div>
            <Swiper
                modules = { [ Navigation, Thumbs, Zoom ] }
                spaceBetween={ 10 }
                navigation
                zoom
                thumbs= { { swiper: thumbsSwiper } }
                className='main-carousel w-[70%]'
            >
                {
                    images.map(
                        ( image, index ) => (
                            <SwiperSlide key = { index }>
                                <div className="swipper-zoom-container">
                                    <Image
                                        src={ image }
                                        alt={ `${ title } - ${ index + 1 }` }
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
            <Swiper
                onSwiper = { (swiper) => setThumbsSwiper(swiper) }
                modules={[Thumbs]}
                spaceBetween={10}
                slidesPerView={ 4 }
                watchSlidesProgress
                className='thumbnail-carousel w-[70%]'
            >
                {
                    images.map(
                        ( image, index ) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={ image }
                                    alt={ `${ title } - ${ index + 1 }` }
                                    loading="lazy"
                                />
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    );

}