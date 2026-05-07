import { useContext } from "react";
import { CustomSwiper } from "@/shared/ui/swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import styles from "./TourList.module.scss";
import type { Tour } from "@/shared/api/types";
import { useCart } from "@/features/cart/CartContext";

interface Props {
  tours: Tour[];
}

function TourList({ tours }: Props) {
  const { addToCart } = useCart();
  return (
    <div className={styles.wrapper}>
      <CustomSwiper
        navigation
        pagination={{ clickable: true }}
        className={styles.slider}
      >
        {tours.map((item) => (
          <SwiperSlide key={item.id} className={styles.card}>
            <div
              style={{
                height: "200px",
                backgroundColor: item.img,
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            ></div>
            <div className={styles.text}>
              <div className="name">{item.title}</div>
              <div className="price">Ціна: {item.price}$</div>
              <div className={styles.btns}>
                <button>В бажане</button>
                <button onClick={() => addToCart(item)}>В кошики</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
}
export default TourList;
