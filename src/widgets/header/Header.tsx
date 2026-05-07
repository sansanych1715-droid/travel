import styles from "./Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import logo from "@/assets/logo.svg";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <HeaderMenu></HeaderMenu>
        </div>
      </header>
    </>
  );
}

export default Header;
