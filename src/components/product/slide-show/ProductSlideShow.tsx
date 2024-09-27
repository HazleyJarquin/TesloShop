"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObject } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slideShow.css";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useState } from "react";
interface Props {
  productImages: string[];
  imageTitle: string;
  className?: string;
}

export const ProductSlideShow = ({
  productImages,
  imageTitle,
  className,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 2500 }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/products/${image}`}
              alt={imageTitle}
              width={1024}
              height={500}
              objectFit="contain"
              className="rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/products/${image}`}
              alt={imageTitle}
              width={300}
              height={300}
              objectFit="contain"
              className="rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
