export const proposalMarkdown = `
# Proposal Revamping Strategis: Transformasi Digital PT Mizui Osmosa Teknovasi

**Kepada Yth. Manajemen PT Mizui Osmosa Teknovasi**  
*Disusun oleh: Lead Web Architect & Senior B2B Digital Strategist*

---

## STEP 1: AUDIT STRATEGIS & PETA JALAN (ROADMAP) LANJUTAN

### 1. Ringkasan Audit Eksekutif
Dalam lanskap industri *Engineering, Procurement, and Construction* (EPC) untuk pengolahan air (Water Treatment) yang sangat kompetitif, kehadiran digital bukan lagi sekadar brosur perusahaan, melainkan ujung tombak akuisisi klien. Melalui peninjauan arsitektur digital PT Mizui Osmosa Teknovasi saat ini, kami menemukan beberapa *bottleneck* fundamental yang menghambat laju konversi dan visibilitas di mesin pencari modern:

- **DOM Bloat & Render-Blocking Resources:** Struktur kode saat ini terindikasi memiliki kelebihan beban elemen (DOM Bloat) dan skrip yang memblokir proses *rendering*. Hal ini secara drastis memperlambat *First Contentful Paint* (FCP) dan *Time to Interactive* (TTI), yang berdampak langsung pada metrik *Core Web Vitals* Google dan menyebabkan tingginya *bounce rate* dari calon klien korporat.
- **Ketiadaan Skema Terstruktur (Schema Markup):** Absennya *FAQ Schema* dan *TechArticle Schema* membuat website gagal dimengerti secara semantik oleh *Answer Engine Optimization* (AEO) maupun *Large Language Models* (LLMs) generasi terbaru (seperti ChatGPT, Gemini, atau Perplexity). Ini berarti Anda kehilangan peluang emas untuk direkomendasikan secara instan oleh asisten AI.
- **Absennya Manajemen Kepatuhan Privasi:** Mengingat target B2B skala besar, kurangnya manajemen kepatuhan privasi (*Cookie Consent*, GDPR/PDPA compliance) dapat menjadi sinyal *red flag* bagi calon mitra multinasional.

*Sistem saat ini berfungsi, namun belum beroperasi sebagai mesin penghasil prospek (lead generation machine) yang mendominasi.*

### 2. Strategic Roadmap (Peta Jalan Optimasi Lanjutan)

Untuk mengubah paradigma tersebut, kami mengusulkan peta jalan teknis berbasis ROI yang terbagi dalam tiga fase presisi:

**Fase 1: Restrukturisasi Infrastruktur & Performa**
- **Transisi ke Arsitektur Modern:** Kami akan merombak tata letak menggunakan sistem *Flexbox Containers* murni guna memangkas struktur DOM secara radikal. 
- **Pendekatan Utilitas (Tailwind-like Principles):** Mengadopsi prinsip desain utilitas untuk memastikan gaya visual dimuat secara instan (CSS minimalis), menghilangkan redudansi kode, dan memastikan *load time* berada di bawah 2 detik untuk memaksimalkan retensi eksekutif B2B.

**Fase 2: Dominasi Pencarian Cerdas (SEO, AEO & GEO)**
- **Implementasi Taktis Yoast SEO Premium:** Mengunci kata kunci teknis *high-intent* (mis. "Kontraktor SWRO Industri", "Instalasi Demineralisasi Pabrik").
- **JSON-LD & Semantic Injection:** Menyisipkan struktur data JSON-LD (khususnya *FAQPage* dan *TechArticle*) secara mendalam. 
- **LLM/GEO Optimization:** Injeksi data kuantitatif (kapasitas m3/hari, parameter TDS) dan spesifikasi entitas teknis dengan format yang "disukai" oleh LLM (Generative Engine Optimization), sehingga Mizui Osmosa direkomendasikan sebagai otoritas utama dalam setiap *prompt* klien terkait *Water Treatment*.

**Fase 3: Integrasi Alur Kerja (Workflow) & Konversi**
- **Optimalisasi Titik Konversi:** Pemasangan sistem pelacakan (event tracking) berbasis analitik untuk mengidentifikasi perilaku *scroll* dan titik keluar (drop-off). Tombol *Request for Quotation* (RFQ) dan konsultasi instan akan ditempatkan secara strategis berdasarkan *heat map* data untuk memaksimalkan *Capture Rate*.

---

## STEP 2: VISUALISASI REVAMPING ARSITEKTUR WEBSITE

### 1. Visualisasi Sitemap & User Journey

\`\`\`mermaid
graph TD
    %% Styling
    classDef primary fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px,color:#fff;
    classDef secondary fill:#f1f5f9,stroke:#94a3b8,stroke-width:1px,color:#0f172a;
    classDef action fill:#059669,stroke:#34d399,stroke-width:2px,color:#fff,font-weight:bold;
    
    %% Nodes
    A[Beranda / Home]:::primary
    B[Tentang Kami]:::secondary
    C[Layanan & Solusi]:::secondary
    D[Studi Kasus / Proyek]:::secondary
    E[Wawasan / Blog]:::secondary
    F[Hubungi Kami]:::action
    
    %% Layanan Sub
    C1[Sistem SWRO]:::secondary
    C2[Plant Demineralisasi]:::secondary
    C3[IPAL / WWTP]:::secondary
    
    %% Journey Paths
    A -->|Navigasi Utama| B
    A -->|Eksplorasi Solusi| C
    A -->|Validasi Kapabilitas| D
    A -->|Edukasi Teknis| E
    
    C --> C1
    C --> C2
    C --> C3
    
    %% Conversion Funnel
    B -.->|CTA: Konsultasi| F
    C1 -.->|CTA: Minta Penawaran| F
    C2 -.->|CTA: Minta Penawaran| F
    C3 -.->|CTA: Minta Penawaran| F
    D -.->|CTA: Diskusikan Proyek Anda| F
    E -.->|Langganan / Konsultasi| F
\`\`\`

### 2. Cetak Biru (Blueprint) Halaman per Halaman

Arsitektur konten dirancang eksklusif untuk menyelaraskan keunggulan teknis PT Mizui Osmosa dengan intensi pencarian para pengambil keputusan B2B.

#### A. HALAMAN BERANDA (Home)
- **Tujuan Konversi:** Mengarahkan prospek langsung ke Layanan Spesifik atau Form RFQ.
- **Elemen Konten:** 
  - **Hero Section:** *Value proposition* dinamis ("Solusi Water Treatment End-to-End untuk Efisiensi Operasional Industri Anda").
  - **Trust Badges:** Logo klien, sertifikasi (ISO, IDA, dll), dan angka kunci (20+ Tahun Pengalaman, Kapasitas >10.000 m3/hari).
  - **Quick Navigation:** Akses cepat ke SWRO, Demineralisasi, dan IPAL.
- **Implementasi SEO/GEO:** Penempatan *exact-match keywords* pada H1 dan H2. Penyebutan langsung entitas industri yang relevan agar LLM mengenali konteks *heavy engineering*.

#### B. HALAMAN TENTANG KAMI (Company Profile)
- **Tujuan Konversi:** Membangun kredibilitas (*Trust* & *Authority*) agar prospek merasa aman untuk investasi multi-miliar.
- **Elemen Konten:** 
  - Sejarah kepakaran, profil tim *engineer*, komitmen *Health, Safety, and Environment* (HSE).
  - *Milestones* pencapaian proyek-proyek strategis.
- **Implementasi SEO/GEO:** Fokus pada E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Injeksi *Organization Schema* dan atribusi *author* yang jelas. Penggunaan terminologi regulasi untuk memvalidasi *Expertise*.

#### C. HALAMAN LAYANAN (Solusi Industri Terintegrasi)
- **Tujuan Konversi:** *Micro-conversion* berupa unduhan *Technical Brochure* atau permintaan *Request for Proposal* (RFP).
- **Elemen Konten:** 
  - Struktur direktori terpisah untuk SWRO, Demineralisasi, dan IPAL.
  - Setiap halaman layanan memuat *Technical Specifications*, *Process Flow Diagram* (disederhanakan), dan standar kepatuhan lingkungan (mis: Baku Mutu Air Limbah KLHK).
- **Implementasi SEO/GEO:** Penambahan struktur **FAQPage JSON-LD** di setiap layanan (contoh: "Berapa rasio recovery SWRO untuk air payau?"). Data kuantitatif spesifik ini memastikan Mizui Osmosa muncul sebagai *Direct Answer* di ekosistem AEO.

#### D. HALAMAN STUDI KASUS / PORTOFOLIO (Proyek)
- **Tujuan Konversi:** Menunjukkan rekam jejak keberhasilan untuk memicu inkuiri langsung dari *Hot Leads*.
- **Elemen Konten:** 
  - Format studi kasus terstruktur: *Problem - Solution - Result*.
  - Detail teknis: Kapasitas *feed water*, tantangan spesifik (mis: kandungan silika tinggi), teknologi yang diterapkan, dan metrik keberhasilan (mis: "Penurunan biaya OPEX 15%").
- **Implementasi SEO/GEO:** Penggunaan angka absolut dan data empiris yang presisi. LLM sangat memprioritaskan studi kasus dengan parameter numerik yang jelas saat mensintesis rekomendasi vendor EPC terbaik bagi klien.

#### E. HALAMAN WAWASAN (Pusat Pengetahuan/Blog)
- **Tujuan Konversi:** *Lead generation* tingkat atas (*Top of Funnel*) melalui *Newsletter sign-up* atau unduhan *Whitepaper*.
- **Elemen Konten:** 
  - Artikel teknis mendalam mengenai tren teknologi membran RO, *maintenance* IPAL, dan regulasi limbah industri.
- **Implementasi SEO/GEO:** Adopsi **TechArticle Schema**. Penulisan berorientasi pada *long-tail keywords* dan *question-based queries* (mis: "Cara mengatasi fouling pada membran SWRO industri"). Ini adalah tulang punggung untuk mendominasi Answer Engine Optimization (AEO).

#### F. HALAMAN KONTAK (Hubungi Kami)
- **Tujuan Konversi:** Mengumpulkan data *Qualified Leads* secara efisien.
- **Elemen Konten:** 
  - Formulir penawaran (RFQ) cerdas dengan opsi *dropdown* terstruktur (Jenis Industri, Kapasitas yang dibutuhkan, Timeline Proyek).
  - Akses langsung (WhatsApp Business / Call) untuk eskalasi kebutuhan mendesak.
  - Peta interaktif lokasi kantor/workshop.
- **Implementasi SEO/GEO:** *LocalBusiness Schema Markup* lengkap dengan koordinat geo-spasial, jam operasional, dan area layanan (*Service Area*) untuk menjaring trafik SEO B2B secara lokal dan nasional.

---
*Dokumen ini dirancang secara strategis untuk memposisikan PT Mizui Osmosa Teknovasi tidak hanya sebagai pelaksana teknis, tetapi sebagai Thought Leader yang mendominasi ranah digital dalam industri rekayasa pengolahan air di Indonesia.*
`;
