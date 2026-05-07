import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import HeaderTopBar from "./HeaderTopBar";

function HeaderMenu() {
  return (
    <>
      <nav>
        <HeaderTopBar></HeaderTopBar>
        <div className={styles.list}>
          <Link to="/" className={styles.link}>
            Пошук тура
          </Link>
          <Link to="/about" className={styles.link}>
            Напрямок
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HeaderMenu;
