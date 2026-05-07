import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import phone from "@/assets/phone.svg";
import mail from "@/assets/mail.svg";
import { useContext } from "react";
import { useCart } from "@/features/cart/CartContext";

function HeaderTopBar() {
  const { cart } = useCart();
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.list}>
          <Link to="#">Страховки</Link>
          <Link to="#">Візи</Link>
          <Link to="#">Контакти</Link>
          <Link to="#">
            <img src={phone} alt="" />
            +380 63 234 0745
          </Link>
          <Link to="#">
            <img src={mail} alt="" />
            contact@email.ee
          </Link>
          <Link to="#" className="login"></Link>
          <Link to="#">UA</Link>
          <Link to="/cart">Кошик: {cart.length}</Link>
        </div>
      </div>
    </>
  );
}

export default HeaderTopBar;
