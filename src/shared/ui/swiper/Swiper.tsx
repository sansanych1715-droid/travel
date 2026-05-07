import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

interface MySwiperProps extends SwiperProps {
  children: ReactNode;
}

export const CustomSwiper = ({ children, ...props }: MySwiperProps) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={80}
      slidesPerView={3}
      loop={true}
      {...props}
    >
      {children}
    </Swiper>
  );
};
