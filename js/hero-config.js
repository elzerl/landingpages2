/**
 * ============================================================================
 * HERO SECTION CONFIGURATION - PENGADILAN NEGERI PAGAR ALAM
 * ============================================================================
 * Data resmi hasil scraping:
 * - Portal Resmi: https://pn-pagaralam.go.id/
 * - Layanan Informasi & Linktree: https://s.id/layananinformasipnpagaralam
 * 
 * Konfigurasi:
 * 1. Tanpa gulir mouse (100% minimalis 100vh dengan kontrol putar/jeda otomatis)
 * 2. Tanpa efek bokeh yang mengganggu (visual Lady Justice murni dan jernih)
 * 3. Animasi teks zoom-in & zoom-out sinematik saat pergantian tahap
 * 4. Integrasi 10 ikon aplikasi & layanan digital resmi PN Pagar Alam
 * ============================================================================
 */

window.heroConfig = {
  // Visual Media Assets (Lady Justice CGI 150 Frames - Smooth Cinematic Experience)
  media: {
    videoSrc: "assets/media/court_justice_loop_10s.mp4",
    posterSrc: "assets/media/hero_poster.jpg",
    framesPath: "assets/frames/frame_",
    framesExt: ".jpg",
    totalFrames: 150
  },

  // Pengadilan Negeri Pagar Alam Identity & Branding
  identity: {
    courtTitle: "PENGADILAN NEGERI",
    courtName: "PAGAR ALAM",
    courtSubtitle: "KELAS II • REPUBLIK INDONESIA",
    jurisdiction: "Wilayah Hukum Pengadilan Tinggi Palembang",
    statusBadge: "PTSP & SIPP AKTIF",
    address: "Jl. Laskar Wanita Mental Mentul, Komplek Perkantoran Gunung Gare, Kota Pagar Alam, Sumatera Selatan",
    ptspHours: "08.00 - 16.00 WIB",
    whatsapp: "6285178185793",
    whatsappUrl: "https://wa.me/6285178185793"
  },

  // Alur Sinematik 4 Tahap (150 Frame dengan Timbangan Keadilan Terlihat Sempurna)
  storyline: [
    {
      id: "keadilan",
      stepNumber: "01",
      stepTitle: "Keadilan",
      frameTarget: 0,
      eyebrow: "PENGADILAN NEGERI PAGAR ALAM",
      headline: "Keadilan<br><span class=\"headline-gradient\">untuk Semua.</span>",
      description: "Memberikan pelayanan peradilan yang transparan, profesional, dan berintegritas bagi seluruh masyarakat pencari keadilan di Kota Pagar Alam.",
      metrics: [
        { label: "Asas Peradilan", value: "Cepat, Sederhana & Ringan" },
        { label: "Wilayah Hukum", value: "Kota Pagar Alam, Sumsel" },
        { label: "Integritas Yudisial", value: "Zona Bebas Korupsi (WBK)" }
      ],
      actions: {
        primary: { text: "PILIH LAYANAN DIGITAL", modal: true, showArrow: true },
        secondary: { text: "JADWAL SIDANG (SIPP)", url: "https://sipp.pn-pagaralam.go.id/list_jadwal_sidang", external: true }
      },
      meta: {
        tag: "Tahap 01 / 04",
        status: "Fokus Lady Justice",
        progress: 25
      }
    },
    {
      id: "timbangan",
      stepNumber: "02",
      stepTitle: "Timbangan Keadilan",
      frameTarget: 29, // Frame 30: Timbangan Keadilan (Scales of Justice) terlihat penuh & jelas di tengah layar
      eyebrow: "TAHAP 02 — KEPANITERAAN & LAYANAN TERPADU",
      headline: "Integritas &<br><span class=\"headline-gradient\">Keseimbangan.</span>",
      description: "Akses digital kepaniteraan Pidana, Perdata, dan Hukum terpadu. Dilengkapi konsultasi cuma-cuma Posbakum bagi warga kurang mampu.",
      metrics: [
        { label: "Layanan Pidana & Perdata", value: "e-Brosur Standar Pelayanan" },
        { label: "Posbakum Gratis", value: "Bantuan Hukum Bagi Pemohon" },
        { label: "PTSP Mandiri", value: "Jam Layanan 08.00 - 16.00 WIB" }
      ],
      actions: {
        primary: { text: "PILIH LAYANAN DIGITAL", modal: true, showArrow: true },
        secondary: { text: "PORTAL E-COURT MA", url: "https://ecourt.mahkamahagung.go.id/", external: true }
      },
      meta: {
        tag: "Tahap 02 / 04",
        status: "Timbangan Keadilan Penuh",
        progress: 50
      }
    },
    {
      id: "palu",
      stepNumber: "03",
      stepTitle: "Palu Sidang",
      frameTarget: 54, // Frame 55: Ketukan palu sidang majelis hakim
      soundEffect: "gavel",
      eyebrow: "TAHAP 03 — PERSIDANGAN & KEPUTUSAN HUKUM",
      headline: "Kepastian Hukum<br><span class=\"headline-gradient\">yang Mengikat.</span>",
      description: "Ketukan palu sidang mengukuhkan putusan berkekuatan hukum tetap, menjunjung asas keterbukaan peradilan yang berkeadilan substantif.",
      metrics: [
        { label: "Ketukan Palu", value: "Kekuatan Eksekutorial Sah" },
        { label: "e-Berpadu & Izin Besuk", value: "Integrasi Elektronik Aparat" },
        { label: "Sidang Terbuka", value: "Jadwal Terdaftar di SIPP" }
      ],
      actions: {
        primary: { text: "PILIH LAYANAN DIGITAL", modal: true, showArrow: true },
        secondary: { text: "IZIN BESUK TAHANAN", url: "https://eberpadu.mahkamahagung.go.id/formulir_izin_besuk", external: true }
      },
      meta: {
        tag: "Tahap 03 / 04",
        status: "Ketukan Palu Sidang",
        progress: 75
      }
    },
    {
      id: "transparansi",
      stepNumber: "04",
      stepTitle: "Keterbukaan Publik",
      frameTarget: 120, // Frame 121: Potret megah Lady Justice utuh
      eyebrow: "TAHAP 04 — TRANSPARANSI DIGITAL MAHKAMAH AGUNG",
      headline: "Keterbukaan<br><span class=\"headline-gradient\">Informasi Publik.</span>",
      description: "Seluruh data perkara, biaya, putusan, hingga permohonan surat keterangan (Eraterang) dapat diakses masyarakat secara terbuka dan akuntabel.",
      metrics: [
        { label: "Sistem SIPP", value: "Transparansi Riwayat Sidang" },
        { label: "Aplikasi Eraterang", value: "Surat Keterangan Daring Cepat" },
        { label: "Pengawasan SIWAS", value: "Saluran Pengaduan Bebas Pungli" }
      ],
      actions: {
        primary: { text: "PILIH LAYANAN DIGITAL", modal: true, showArrow: true },
        secondary: { text: "WEBSITE RESMI PN", url: "https://pn-pagaralam.go.id", external: true }
      },
      meta: {
        tag: "Tahap 04 / 04",
        status: "Visual Lady Justice Utuh",
        progress: 100
      }
    }
  ],

  // 10 Ikon Aplikasi & Hyperlink Hasil Scraping dari s.id & pn-pagaralam.go.id
  digitalServices: [
    {
      id: "pidana",
      title: "Pidana",
      category: "Kepaniteraan",
      desc: "Informasi alur, standar operasional & e-brosur kepaniteraan pidana",
      badge: "Layanan Resmi",
      url: "https://drive.google.com/file/d/1CNANXKKx5pnZc2EZ-9xQsUqCNOseRYi2/view?usp=sharing",
      iconType: "gavel",
      highlight: true
    },
    {
      id: "perdata",
      title: "Perdata",
      category: "Kepaniteraan",
      desc: "Brosur elektronik layanan gugatan, permohonan & gugatan sederhana",
      badge: "e-Brosur",
      url: "https://s.id/e-brosurperdata",
      iconType: "scales",
      highlight: true
    },
    {
      id: "hukum",
      title: "Hukum",
      category: "Kepaniteraan",
      desc: "Layanan pos bantuan hukum (Posbakum), riset hukum & permohonan informasi",
      badge: "Posbakum Gratis",
      url: "https://drive.google.com/file/d/1B3vZlB5GQp1kHWt1fkJc0byGIk8tzd_L/view?usp=sharing",
      iconType: "book",
      highlight: true
    },
    {
      id: "ecourt",
      title: "e-Court",
      category: "Mahkamah Agung RI",
      desc: "Pendaftaran perkara (e-Filing), pembayaran (e-Payment) & sidang elektronik",
      badge: "MA-RI Portal",
      url: "https://ecourt.mahkamahagung.go.id/",
      iconType: "court",
      highlight: true
    },
    {
      id: "eberpadu",
      title: "e-Berpadu",
      category: "Mahkamah Agung RI",
      desc: "Elektronik berkas pidana terpadu antar aparat penegak hukum (Polri/Kejaksaan/PN)",
      badge: "Integrasi APH",
      url: "https://eberpadu.mahkamahagung.go.id/",
      iconType: "shield",
      highlight: true
    },
    {
      id: "jadwal-sidang",
      title: "Jadwal Sidang",
      category: "SIPP PN Pagar Alam",
      desc: "Daftar jadwal persidangan harian perkara pidana & perdata terkini",
      badge: "Real-Time SIPP",
      url: "https://sipp.pn-pagaralam.go.id/list_jadwal_sidang",
      iconType: "calendar",
      highlight: true
    },
    {
      id: "izin-besuk",
      title: "Izin Besuk Tahanan",
      category: "Layanan Online",
      desc: "Permohonan formulir elektronik izin besuk tahanan rutan secara daring",
      badge: "e-Form Besuk",
      url: "https://eberpadu.mahkamahagung.go.id/formulir_izin_besuk",
      iconType: "prison",
      highlight: false
    },
    {
      id: "eraterang",
      title: "Eraterang",
      category: "Badilum MA-RI",
      desc: "Layanan elektronik permohonan surat keterangan tidak pernah dipidana",
      badge: "Surat Keterangan",
      url: "https://eraterang.badilum.mahkamahagung.go.id/masuk",
      iconType: "certificate",
      highlight: false
    },
    {
      id: "siwas",
      title: "SIWAS MA-RI",
      category: "Pengawasan",
      desc: "Sistem informasi pengawasan pengaduan masyarakat & anti gratifikasi",
      badge: "Bebas Pungli",
      url: "https://siwas.mahkamahagung.go.id",
      iconType: "eye",
      highlight: false
    },
    {
      id: "alamat-kantor",
      title: "Alamat Kantor",
      category: "Lokasi & Navigasi",
      desc: "Petunjuk arah Google Maps Pengadilan Negeri Pagar Alam (Gunung Gare)",
      badge: "Google Maps",
      url: "https://maps.app.goo.gl/h4BfeZjKR5vbc4Jf6",
      iconType: "maps",
      highlight: false
    }
  ],

  // Link Media Sosial & Kontak Hasil Scraping
  socialLinks: [
    {
      id: "youtube",
      name: "YouTube",
      handle: "@pengadilannegeripagaralam",
      url: "https://youtube.com/@pengadilannegeripagaralam?si=3sNQ_RTRr-SVmfJj",
      icon: "youtube"
    },
    {
      id: "instagram",
      name: "Instagram",
      handle: "@pn_pagaralam",
      url: "https://www.instagram.com/pn_pagaralam",
      icon: "instagram"
    },
    {
      id: "website",
      name: "Website Resmi",
      handle: "pn-pagaralam.go.id",
      url: "https://pn-pagaralam.go.id",
      icon: "globe"
    },
    {
      id: "whatsapp",
      name: "WhatsApp PTSP",
      handle: "0851-7818-5793",
      url: "https://wa.me/6285178185793",
      icon: "whatsapp"
    }
  ]
};
