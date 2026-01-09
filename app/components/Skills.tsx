import styles from "./Skills.module.css";

const responsibilities = [
  "Input data responden",
  "Menyusun dokumen substansi",
  "Menyusun laporan beserta seluruh insights",
  "Analisis data",
  "Media sosial", // Shortened for design balance, or keep full "Mengelola media sosial"
  "Mengamati dan mengidentifikasi tren",
];

const competencies = [
  "Manajemen waktu",
  "Mampu bekerja dalam beberapa project",
  "Memiliki keterampilan kompetensi dasar komputer",
  "Mampu menggunakan Ms. Office",
  "Mampu berkomunikasi dengan baik",
  "Mampu bekerja dalam tim dengan baik",
];

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Tanggung Jawab Utama</h2>
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
          <h2 className={styles.heading}>Keahlian & Kompetensi</h2>
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
