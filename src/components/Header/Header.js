import styles from "./Header.module.css";

const Header = () => (
  <div
    className={["d-flex justify-content-between align-items-center w-100", styles.outerHeader].join(" ")}
  >
    <div className={styles.wrapper}>
      <span
        className={styles.headerStyle}
        onClick={() => (window.location.href = "/")}
      >
        Stadium
      </span>
      <span
        className={styles.headerStyle}
        onClick={() => (window.location.href = "/groupPhase")}
      >
        Group Phase
      </span>
      <span
        className={styles.headerStyle}
        onClick={() => (window.location.href = "/knockoutPhase")}
      >
        Knockout Phase
      </span>
    </div>
  </div>
);
export default Header;
