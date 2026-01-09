"use client";

import styles from "./Profile.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Profile() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.heading}>{t("profile.heading")}</h2>
          <div className={styles.divider}></div>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: t("profile.description") }}
          />
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>{t("profile.educationHeading")}</h2>
          <div className={styles.divider}></div>
          <div className={styles.educationCard}>
            <h3 className={styles.university}>{t("profile.university")}</h3>
            <p className={styles.major}>{t("profile.major")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
