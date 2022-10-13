import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './slider.css'
import "swiper/css";
import "swiper/css/effect-fade";
import {  EffectFade,Autoplay, Pagination, Navigation } from "swiper";
import CardOne from "./CardOne";

const Slider = ({data}) => {
const selectDatas = data.slice(0, 4)
const selectData = [1,2,3,4]

  return (
    <div className="h-fit w-full">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={"fade"}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={true}
      modules={[EffectFade,Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      
      {selectDatas.map((select,index)=>{
        return <SwiperSlide key={index}><CardOne select={select}/></SwiperSlide>
      })}
    
    </Swiper>
  </div>
  )
}

export default Slider