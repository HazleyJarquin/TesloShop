"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./slideShow.css";

import { Autoplay, FreeMode, Pagination, Thumbs } from "swiper/modules";

interface Props {
  productImages: string[];
  imageTitle: string;
  className?: string;
}

export const ProductMobileSlideShow = ({
  productImages,
  imageTitle,
  className,
}: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          height: "500px",
        }}
        pagination
        autoplay={{ delay: 2500 }}
        modules={[FreeMode, Pagination, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/products/${image}`}
              alt={imageTitle}
              width={600}
              height={500}
              objectFit="contain"
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
