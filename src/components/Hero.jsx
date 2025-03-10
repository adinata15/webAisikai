import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Banner1 from '../assets/images/hero-image1.jpg'
import Banner2 from '../assets/images/hero-image2.jpg'

const Hero = () => {
    return(
        <section>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                freeMode={true}
                loop={true}
                autoplay={{delay: 3000}}
                pagination={{clickable: true}}
                modules={[FreeMode, Pagination, Autoplay]}
                navigation={true}
                className="mySwiper">

                <SwiperSlide className="mb-12">
                    <img src={Banner1} alt="shoes1-image" className='w-full'/>
                </SwiperSlide>
                <SwiperSlide className="mb-12">
                    <img src={Banner2} alt="shoes2-image" className='w-full'/>
                </SwiperSlide> 
            </Swiper>
        </section>
    )
}

export default Hero;