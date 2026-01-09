import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.name}>REZA RACHMAN P.</h1>
        <div className={styles.divider}></div>
        <div className={styles.contactInfo}>
          <a
            href="mailto:rezarachmanp@gmail.com"
            className={styles.contactLink}
          >
            rezarachmanp@gmail.com
          </a>
          <span className={styles.separator}>|</span>
          <a href="tel:+6281233675867" className={styles.contactLink}>
            +62 8123-3675-867
          </a>
          <span className={styles.separator}>|</span>
          <span className={styles.address}>
            Jl. Sunan Muria II no. 7, Malang
          </span>
        </div>
      </div>
    </section>
  );
}
