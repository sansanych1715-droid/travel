import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface MySwiperProps extends SwiperProps {
  children: ReactNode;
}

export const CustomSwiper = ({ children, ...props }: MySwiperProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      {...props}
    >
      {children}
    </Swiper>
  );
};
