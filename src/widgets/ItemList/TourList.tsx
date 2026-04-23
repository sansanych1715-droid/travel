import { CustomSwiper } from "../../shared/ui/swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import styles from "./TourList.module.scss";
import { getTours } from "../../shared/api/toursApi";
import { useEffect, useState } from "react";
import { Tour } from "../../shared/api/types";

function TourList() {
  const [data, setData] = useState<Tour[]>([]);

  useEffect(() => {
    getTours().then(setData);
  }, []);

  return (
    <CustomSwiper navigation pagination={{ clickable: true }}>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {item.title}
          <div style={{ height: "200px", backgroundColor: item.img }}></div>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
}
export default TourList;
