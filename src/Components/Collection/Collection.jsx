import "../Collection/collection.scss";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import slide_image from "../Collection/124.png";
import specs_1 from "../Collection/specs_1.png";
import specs_2 from "../Collection/specs_2.png";
import specs_3 from "../Collection/specs_3.png";
import specs_4 from "../Collection/specs_4.png";
import specs_5 from "../Collection/5.png";
import { sliderSettings } from "./common";

const Collection = () => {
  return (
    <section className="c-wrapper">
        <div className="c-head">
            <span className="first-text">Best Choices</span>
            <span className="second-text">Explore our Popular Collection</span>
        </div>
        <span className="swiper">
    <Swiper
    {...sliderSettings}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SliderButtons/>
    <SwiperSlide><img src={specs_1}  alt='' /></SwiperSlide>
    <SwiperSlide><img src={specs_2} alt='' /></SwiperSlide>
    <SwiperSlide><img src={specs_3} alt='' /></SwiperSlide>
    <SwiperSlide><img src={specs_4} alt='' /></SwiperSlide>
    <SwiperSlide><img src={specs_5} alt='' /></SwiperSlide>
  </Swiper>
  </span>
  </section>
  )
}

export default Collection
const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="r-button">
             <button onClick={()=> swiper.slidePrev()}>&lt;</button>
             <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}