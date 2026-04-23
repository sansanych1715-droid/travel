import styles from "./Header.module.scss";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";

function HeaderTopBar() {
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.list}>
          <a href="#">Страховки</a>
          <a href="#">Візи</a>
          <a href="#">Контакти</a>
          <a href="#">
            <img src={phone} alt="" />
            +380 63 234 0745
          </a>
          <a href="#">
            <img src={mail} alt="" />
            contact@email.ee
          </a>
          <a href="#" className="login"></a>
          <a href="#">UA</a>
        </div>
      </div>
    </>
  );
}

export default HeaderTopBar;
