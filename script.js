
const beritaTPP = {
  "pembangunan-desa": {
    kategori: "Kabar Desa",
    judul: "Informasi dan Kegiatan Pembangunan Desa di Lampung",
    penulis: "Redaksi TPP Lampung",
    isi: [
      {
        subjudul: "Informasi Pembangunan Desa",
        paragraf:
          "Pembangunan desa membutuhkan perencanaan yang baik, keterlibatan masyarakat, serta pendampingan yang sesuai dengan kebutuhan dan potensi lokal."
      },
      {
        subjudul: "Peran Masyarakat",
        paragraf:
          "Masyarakat memiliki peran penting dalam menyampaikan kebutuhan, mengikuti proses pembangunan, dan menjaga hasil pembangunan desa."
      }
    ]
  },

  "pendampingan-masyarakat": {
    kategori: "Pendampingan",
    judul: "Peran Pendamping dalam Pemberdayaan Masyarakat",
    penulis: "Redaksi TPP Lampung",
    isi: [
      {
        subjudul: "Pendampingan Masyarakat",
        paragraf:
          "Pendampingan membantu masyarakat desa meningkatkan kapasitas, memahami kebutuhan pembangunan, dan mengembangkan potensi lokal."
      },
      {
        subjudul: "Pemberdayaan Desa",
        paragraf:
          "Pemberdayaan yang baik mendorong partisipasi warga agar kegiatan pembangunan sesuai dengan kebutuhan masyarakat."
      }
    ]
  },

  "produk-unggulan-desa": {
    kategori: "Informasi Desa",
    judul: "Potensi dan Produk Unggulan Desa",
    penulis: "Redaksi TPP Lampung",
    isi: [
      {
        subjudul: "Mengembangkan Potensi Lokal",
        paragraf:
          "Setiap desa memiliki potensi yang dapat dikembangkan, seperti pertanian, kerajinan, kuliner, dan usaha masyarakat."
      },
      {
        subjudul: "Peluang Ekonomi Desa",
        paragraf:
          "Pengembangan produk unggulan perlu didukung oleh kualitas produk, pemasaran, dan kerja sama antarpelaku usaha desa."
      }
    ]
  }
};

function tampilkanBerita() {
  const parameter = new URLSearchParams(window.location.search);
  const slug = parameter.get("berita");
  const data = beritaTPP[slug];

  const wadah = document.getElementById("isi-berita");

  if (!wadah) return;

  if (!data) {
    wadah.innerHTML = `
      <h1>Berita tidak ditemukan</h1>
      <p>Silakan pilih berita dari halaman utama TPP Lampung.</p>
      <p><a href="index.html">Kembali ke Beranda</a></p>
    `;
    return;
  }

  document.title = `${data.judul} | TPP Lampung`;

  const isiArtikel = data.isi
    .map(
      bagian => `
        <h2>${bagian.subjudul}</h2>
        <p>${bagian.paragraf}</p>
      `
    )
    .join("");

  wadah.innerHTML = `
    <div class="category">${data.kategori}</div>
    <h1>${data.judul}</h1>
    <div class="article-meta">
      <span>${data.penulis}</span>
    </div>
    ${isiArtikel}
    <p class="back-link">
      <a href="index.html#berita">← Kembali ke Berita Terbaru</a>
    </p>
  `;
}

tampilkanBerita();
