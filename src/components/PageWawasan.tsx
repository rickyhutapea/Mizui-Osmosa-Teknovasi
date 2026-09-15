import React from 'react';
import { ArrowRight, Calendar, User, Users, Search, Filter, Flame, BookOpen, Download, Settings, ShieldCheck, Zap, Briefcase, Leaf, Droplets, Scale, GraduationCap, Award, Book } from 'lucide-react';

export default function PageWawasan() {
  const articles = [
    {
      title: "Jasa Desalinasi Air Laut Maluku: Solusi Air Bersih Pulau Kecil",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/artikel-77-hero.png",
      date: "06 Jan 2026",
      desc: "Bagaimana teknologi SWRO modern memberikan dampak nyata pada ketersediaan air minum di pulau-pulau terluar Indonesia timur."
    },
    {
      title: "Supplier Mesin Water Treatment Papua: Tangguh untuk Lokasi Remote",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/artikel-76-hero.png",
      date: "05 Jan 2026",
      desc: "Menghadapi tantangan geografis Papua dengan unit WTP containerized tugas berat yang dirancang untuk kawasan pertambangan pedalaman."
    },
    {
      title: "Jasa Instalasi Mesin RO Air Payau Lombok & Mandalika",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/artikel-75-hero.png",
      date: "04 Jan 2026",
      desc: "Memastikan suplai air bersih berkualitas untuk kawasan pariwisata premium dan resort mewah menggunakan sistem BWRO efisiensi tinggi."
    },
    {
      title: "Kontraktor SWRO Labuan Bajo: Air Tawar Premium",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/artikel-74-hero.png",
      date: "03 Jan 2026",
      desc: "Studi kasus integrasi desalinasi air laut yang ramah lingkungan di jantung pariwisata Labuan Bajo."
    },
    {
      title: "Jasa Maintenance WTP & IPAL Makassar (KIMA)",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/artikel-73-hero.png",
      date: "02 Jan 2026",
      desc: "Pentingnya layanan respons cepat untuk pemeliharaan sistem RO dan IPAL di Kawasan Industri Makassar guna mencegah downtime."
    },
    {
      title: "Water Treatment Smelter Sulawesi: Solusi Air Industri Nikel",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/artikel-72-hero.png",
      date: "01 Jan 2026",
      desc: "Pemenuhan standar ketat untuk air pendingin dan air proses pabrik smelter di kawasan industri Morowali dan Konawe."
    },
    {
      title: "Jasa IPAL Industri Medan (KIM): Solusi Limbah Cair",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/artikel-71-hero.png",
      date: "28 Des 2025",
      desc: "Penerapan teknologi MBR untuk menangani limbah cair pabrik oleochemical dan manufaktur di Sumatera Utara."
    },
    {
      title: "Kontraktor Water Treatment Pekanbaru: Spesialis Air Gambut",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/artikel-70-hero.png",
      date: "26 Des 2025",
      desc: "Menjawab tantangan air gambut bersaturasi asam tinggi di Riau untuk kebutuhan utilitas pabrik kelapa sawit."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Premium Hero Section */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://mizuiosmosa.co.id/wp-content/uploads/2026/01/layanan-jasa-water-treatment-industri-sistem-swro-reverse-osmosis.webp')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-500/30">
               <BookOpen className="w-4 h-4" /> Pusat Pengetahuan Water Treatment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">Wawasan & <br/><span className="text-blue-400">Pembaruan Industri</span></h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">Pusat sumber daya komprehensif mengenai inovasi teknologi SWRO, optimasi sistem Demineralisasi, kepatuhan baku mutu WWTP, serta *best-practice* tata kelola air untuk sektor industri Indonesia.</p>
          </div>
          
          {/* E-Book Lead Magnet (SEO/Lead Gen Best Practice) */}
          <div className="md:w-2/5 w-full">
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-xl font-bold text-white mb-2">Unduh Whitepaper 2026</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">Panduan Lengkap Penurunan Biaya OPEX pada Sistem Reverse Osmosis Industri.</p>
                <div className="flex flex-col gap-3">
                   <input type="email" placeholder="Email profesional Anda..." className="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500 text-sm" />
                   <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                     <Download className="w-4 h-4" /> Unduh PDF Gratis
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Search & Filter Bar (AEO/UX Best Practice) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-12">
           <div className="relative w-full md:w-1/2">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
             <input type="text" placeholder="Cari topik (misal: 'Pemeliharaan Boiler', 'Baku Mutu Limbah')..." className="w-full bg-slate-50 border-none pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 text-slate-700 text-sm" />
           </div>
           <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <button className="whitespace-nowrap px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg transition-colors">Semua Kategori</button>
              <button className="whitespace-nowrap px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-lg transition-colors">Teknologi SWRO</button>
              <button className="whitespace-nowrap px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-lg transition-colors">Manajemen IPAL</button>
              <button className="whitespace-nowrap px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-lg transition-colors">Studi Kasus</button>
           </div>
        </div>

        {/* Featured Article (SEO Authority) */}
        <div className="mb-16">
           <div className="flex items-center gap-2 mb-6">
              <Flame className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-extrabold text-slate-900">Sorotan Editor</h2>
           </div>
           <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row group">
              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
                 <img src={articles[0].image} alt={articles[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wide uppercase">
                   Inovasi Desalinasi
                 </div>
              </div>
              <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                 <div className="flex items-center gap-6 text-sm text-slate-500 mb-4 font-medium uppercase tracking-wider">
                   <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> {articles[0].date}</span>
                   <span className="flex items-center gap-2"><User className="w-4 h-4 text-blue-500" /> Lead Engineer</span>
                 </div>
                 <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">{articles[0].title}</h3>
                 <p className="text-slate-600 text-lg mb-8 leading-relaxed">{articles[0].desc}</p>
                 <a href="#" className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-xl transition-all w-fit group/btn">
                   Baca Analisis Lengkap <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                 </a>
              </div>
           </div>
        </div>

        {/* Expertise / Kedalaman Teknis */}
        <div className="mb-20 bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">Kedalaman Teknis & <span className="text-blue-400">Teknologi Unggulan</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Setiap artikel dan analisis yang kami rilis didasarkan pada pengalaman faktual dalam merancang, membangun, dan mengoperasikan teknologi *water treatment* tingkat lanjut.</p>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
               <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
                 <Settings className="w-7 h-7 text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Desain Proses Terpadu</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Pengembangan *Piping & Instrumentation Diagram* (P&ID) presisi dengan simulasi hidrolik untuk memastikan *recovery rate* yang optimal pada sistem RO.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
               <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                 <ShieldCheck className="w-7 h-7 text-emerald-400" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Ketahanan Material Kritis</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Pemilihan material kelas berat (Super Duplex Stainless Steel, FRP khusus) untuk menghadapi lingkungan ekstrem dengan salinitas dan korosi tinggi.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
               <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/30">
                 <Zap className="w-7 h-7 text-orange-400" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Efisiensi Energi (OPEX)</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Integrasi *Energy Recovery Device* (ERD), VFD, dan membran tekanan ultra-rendah untuk menekan konsumsi listrik spesifik secara radikal.</p>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-8 border-b border-slate-200 pb-4">Artikel Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-500" /> {article.date}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{article.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors text-sm mt-auto group/link">
                  Baca Artikel <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Related Industry Case Widget */}
        <div className="mb-16 mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 lg:p-12 shadow-inner">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
             <div className="md:w-2/3">
               <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm uppercase tracking-widest">
                 <Briefcase className="w-5 h-5" /> Implementasi Industri
               </div>
               <h2 className="text-3xl font-extrabold text-slate-900">Dari Konsep ke Realitas Lapangan</h2>
               <p className="text-slate-600 mt-3 text-lg leading-relaxed">Pelajari bagaimana wawasan teknis yang kami bahas diterapkan secara langsung pada tantangan ekstrem di berbagai proyek industri.</p>
             </div>
             <div className="md:w-1/3 flex justify-start md:justify-end">
               <button onClick={() => window.scrollTo(0,0)} className="bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center gap-2">
                 Eksplorasi Studi Kasus <ArrowRight className="w-4 h-4" />
               </button>
             </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6 items-start hover:shadow-md transition-shadow cursor-pointer group">
                 <div className="w-full sm:w-32 h-32 overflow-hidden rounded-xl shrink-0">
                    <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/layanan-jasa-water-treatment-industri-sistem-swro-reverse-osmosis.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="SWRO" />
                 </div>
                 <div>
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Desalinasi (SWRO)</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">SWRO Pulau Tayando (PUPR)</h4>
                    <p className="text-sm text-slate-600 line-clamp-3">Penerapan teori efisiensi energi (*Energy Recovery Device*) secara nyata dalam mengolah air laut bersalinitas 35.000 ppm menjadi air baku komunal.</p>
                 </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6 items-start hover:shadow-md transition-shadow cursor-pointer group">
                 <div className="w-full sm:w-32 h-32 overflow-hidden rounded-xl shrink-0">
                    <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-water-treatment-industri-kontraktor-wtp-indonesia-mizui-osmosa.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Demin" />
                 </div>
                 <div>
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Demineralisasi</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Air Umpan Boiler Pabrik Sawit</h4>
                    <p className="text-sm text-slate-600 line-clamp-3">Strategi empiris pemilihan material *Cation-Anion resin* untuk meredam potensi *scaling* kritis pada fasilitas *boiler* bertekanan tinggi di Riau.</p>
                 </div>
              </div>
           </div>
        </div>
        
        
        {/* Sustainability Impact (ESG) */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Dampak Keberlanjutan (ESG)</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Teknologi kami dirancang untuk membantu industri tidak hanya mematuhi regulasi, tetapi juga memimpin dalam pelestarian lingkungan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl">
              <Leaf className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dekarbonisasi & Efisiensi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Penggunaan VFD dan ERD pada desain WTP kami memangkas konsumsi energi listrik secara signifikan, membantu menurunkan Scope 2 emisi karbon perusahaan Anda.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl">
              <Droplets className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Water Reuse & Recovery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Sistem IPAL kami memfasilitasi daur ulang limbah cair menjadi air baku proses industri (Zero Liquid Discharge), menjaga keseimbangan akuifer tanah lokal.</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl">
              <Scale className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tata Kelola & Kepatuhan</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Memastikan parameter efluen (BOD, COD, TSS) selalu berada di bawah ambang batas baku mutu Kementerian LHK, melindungi reputasi korporat.</p>
            </div>
          </div>
        </div>

        {/* E-E-A-T: Engineering Team Profile */}
        <div className="mb-16 bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
          <div className="md:w-1/3 shrink-0 relative z-10">
            <div className="w-full aspect-square rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden relative">
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-epc-water-treatment-plant-industri-terintegrasi-mizui-osmosa-teknovasi.webp" alt="Tim Engineer Mizui Osmosa" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-sm font-bold text-blue-400 mb-1 uppercase tracking-wider">Tim Inti</div>
                <div className="text-xl font-bold text-white">Mizui Engineering</div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 relative z-10">
            <h2 className="text-3xl font-extrabold mb-4">Otoritas Teknis yang Teruji</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">Desain dan fabrikasi kami tidak lahir dari asumsi, melainkan dari tim engineer multi-disiplin yang tersertifikasi nasional.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-200">ISO 9001 & SMK3</div>
                  <div className="text-xs text-slate-400">Implementasi standar manajemen mutu & keselamatan kerja (Zero Accident).</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-200">Ahli Madya Teknik Lingkungan</div>
                  <div className="text-xs text-slate-400">Tersertifikasi LPJK untuk desain sistem Instalasi Pengolahan Air Limbah (IPAL).</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-200">Project Management Professional</div>
                  <div className="text-xs text-slate-400">Eksekusi EPC tepat waktu dan sesuai anggaran (On-Time, On-Budget).</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Water Tech Glossary */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Book className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-extrabold text-slate-900">Glosarium Teknologi Air</h2>
          </div>
          <p className="text-slate-600 mb-8 max-w-3xl">Pahami istilah teknis yang sering digunakan dalam desain dan regulasi *Water Treatment Plant* (WTP) untuk membantu pengambilan keputusan korporat Anda.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">TDS (Total Dissolved Solids)</h4>
               <p className="text-xs text-slate-600 leading-relaxed">Total zat padat terlarut dalam air. Menentukan kebutuhan membran (Brackish vs Seawater) untuk purifikasi.</p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">COD & BOD</h4>
               <p className="text-xs text-slate-600 leading-relaxed">Indikator tingkat pencemaran organik dalam limbah cair. Parameter utama baku mutu IPAL industri.</p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">Demineralisasi</h4>
               <p className="text-xs text-slate-600 leading-relaxed">Proses penghilangan mineral air (ion kation-anion) guna mencegah kerak (*scaling*) pada boiler tekanan tinggi.</p>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">Zero Liquid Discharge (ZLD)</h4>
               <p className="text-xs text-slate-600 leading-relaxed">Sistem IPAL canggih yang mendaur ulang 100% limbah cair menjadi air bersih tanpa ada buangan ke lingkungan.</p>
            </div>
          </div>
        </div>

        {/* Pagination / Load More */}
        <div className="mt-16 flex justify-center pb-10">
           <button className="bg-white border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 font-bold py-4 px-10 rounded-xl transition-colors shadow-sm flex items-center gap-2">
              Muat Lebih Banyak Artikel <ArrowRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </div>
  );
}
