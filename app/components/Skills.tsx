"use client";

import styles from "./Skills.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const responsibilities = t("skills.responsibilities") as unknown as string[];
  const competencies = t("skills.competencies") as unknown as string[];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.heading}>{t("skills.heading")}</h2>
          <div className={styles.divider}></div>
          <ul className={styles.list}>
            {responsibilities.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>{t("skills.competencyHeading")}</h2>
          <div className={styles.divider}></div>
          <ul className={styles.list}>
            {competencies.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
