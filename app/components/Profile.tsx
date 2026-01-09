import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Profil</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            Analis Substantif Project lebih dari 5 tahun bekerja di lembaga
            konsultan sektor publik dan sektor swasta. Memiliki pengalaman
            beberapa project mengolah data yang berkaitan dengan perilaku
            konsumen. Seorang yang dapat diandalkan, bertanggung jawab, suka
            bekerja sama dengan tim, selalu tepat waktu, dan{" "}
            <em>ready to level up</em>.
          </p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Pendidikan Terakhir</h2>
          <div className={styles.divider}></div>
          <div className={styles.educationCard}>
            <h3 className={styles.university}>S1 Universitas Brawijaya</h3>
            <p className={styles.major}>Administrasi Bisnis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
