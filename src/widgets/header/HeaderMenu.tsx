import styles from "./Header.module.scss";
import HeaderTopBar from "./HeaderTopBar";

function HeaderMenu() {
  return (
    <>
      <nav>
        <HeaderTopBar></HeaderTopBar>
        <div className={styles.list}>
          <a href="/" className={styles.link}>
            Пошук тура
          </a>
          <a href="/about" className={styles.link}>
            Напрямок
          </a>
        </div>
      </nav>
    </>
  );
}

export default HeaderMenu;
