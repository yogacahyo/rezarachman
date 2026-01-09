import styles from "./Experience.module.css";

const projects = [
  {
    year: "2016",
    title:
      "Analisis Sistem Distribusi Tiket Bus Antar Kota Antar Provinsi (AKAP) dan Peta Jaringan Para Pelakunya Di Provinsi Jawa Timur",
  },
  {
    year: "2017",
    title:
      "Person in Charge Jakarta Marketing Week 2017 oleh Mark Plus Inc. untuk Fakultas Ilmu Administrasi Universitas Brawijaya",
  },
  { year: "2017", title: "Manajemen Akselerasi Pembangunan Kabupaten Gresik" },
  {
    year: "2018",
    title:
      "Pendidikan dan Pelatihan Pemasaran dan Promosi Pariwisata Pemerintah Kabupaten Malang",
  },
  {
    year: "2018",
    title:
      "Penyusunan Model BUMDes untuk Jenis Layanan Publik Based on Practice Kerjasama Perguruan Tinggi",
  },
  {
    year: "2019",
    title:
      "Analisa Pasar untuk Promosi dan Pemasaran Obyek Pariwisata Kabupaten Malang",
  },
  { year: "2019", title: "Analisis Pemasaran Kepariwisataan Kabupaten Malang" },
  {
    year: "2019",
    title:
      "Model Kolaborasi Lembaga Akademis dan Korporasi dalam Rangka Inkubasi BUMDes",
  },
  {
    year: "2019",
    title:
      "Kajian Kuantitatif dan Calon Ibukota Kabupaten dalam Rangka Pembentukan Calon Kabupaten Lombok Selatan sebagai Pemekaran dari Kabupaten Lombok Timur",
  },
  {
    year: "2020",
    title:
      "Penyusunan Cascading (Manajemen Kinerja) di Lingkungan Badan Narkotika Nasional",
  },
  {
    year: "2020",
    title: "Penyusunan Rancangan Peraturan Presiden Badan Narkotika Nasional",
  },
  { year: "2021", title: "Analisis Jabatan di Badan Narkotika Nasional" },
  { year: "2022", title: "Analisis Pasar Wisatawan Nusantara di Jawa Timur" },
  {
    year: "2022",
    title: "Penyusunan Peta Potensi dan Peluang Usaha di Kabupaten Tuban",
  },
];

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Pengalaman Project</h2>
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
