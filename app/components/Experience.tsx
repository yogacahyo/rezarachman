"use client";

import styles from "./Experience.module.css";
import { useLanguage } from "../context/LanguageContext";

interface Project {
  year: string;
  title: string;
}

export default function Experience() {
  const { t } = useLanguage();
  const projects = t("experience.projects") as unknown as Project[];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t("experience.heading")}</h2>
        <div className={styles.divider}></div>

        <div className={styles.timeline}>
          {projects.map((project, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.marker}></div>
              <div className={styles.content}>
                <span className={styles.year}>{project.year}</span>
                <p className={styles.title}>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
