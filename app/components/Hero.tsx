"use client";

import styles from "./Hero.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.name}>{t("hero.name")}</h1>
        <div className={styles.divider}></div>
        <div className={styles.contactInfo}>
          <a href={`mailto:${t("hero.email")}`} className={styles.contactLink}>
            {t("hero.email")}
          </a>
          <span className={styles.separator}>|</span>
          <a href={`tel:${t("hero.phone")}`} className={styles.contactLink}>
            {t("hero.phone")}
          </a>
          <span className={styles.separator}>|</span>
          <span className={styles.address}>{t("hero.address")}</span>
        </div>
      </div>
    </section>
  );
}
