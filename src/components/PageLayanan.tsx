import React from 'react';
import { Truck, ArrowRight, ChevronDown, CheckCircle2, Factory, HardHat, ShieldCheck, TestTube2, Zap, Sprout, Droplet, FileDown, FileText, Download, Layers, Activity, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageLayananProps {
  onNavigate?: (page: string) => void;
}

export default function PageLayanan({ onNavigate }: PageLayananProps = {}) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://mizuiosmosa.co.id/wp-content/uploads/2026/01/layanan-epc-komprehensif-water-treatment-industri-mizui-osmosa-teknovasi.webp')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest border border-blue-500/30">Solusi Rekayasa Terintegrasi</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">Solusi EPC Water Treatment <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Industri Terintegrasi</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">PT Mizui Osmosa Teknovasi menawarkan solusi jasa water treatment industri yang mencakup rekayasa komprehensif mulai dari desain, konstruksi, hingga pemeliharaan. Fokus kami memastikan sistem SWRO, Demineralisasi, dan WWTP Anda beroperasi dengan efisiensi tinggi.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-24">
        {/* Siklus Proyek EPC */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Siklus Proyek EPC</h2>
            <p className="text-slate-600 text-lg max-w-3xl">Rekayasa Presisi, Eksekusi Terukur, & Pemeliharaan Berkelanjutan. Mulai dari SWRO hingga WWTP, mencakup seluruh siklus proyek EPC (Engineering, Procurement, Construction).</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Konsultasi & Desain', icon: <Droplet className="w-8 h-8 text-blue-600" />, desc: 'Studi kelayakan dan desain rekayasa P&ID yang presisi.' },
              { title: 'Fabrikasi Presisi', icon: <Factory className="w-8 h-8 text-blue-600" />, desc: 'Pabrikasi komponen dan perakitan skid dengan material anti-korosi standar tinggi.' },
              { title: 'Instalasi & Konstruksi', icon: <Zap className="w-8 h-8 text-blue-600" />, desc: 'Eksekusi lapangan yang ketat sesuai standar K3 lingkungan industri.' },
              { title: 'Retrofit & O&M', icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, desc: 'Pembaruan sistem lama dan kontrak Operation & Maintenance (O&M) jangka panjang.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Keselamatan Kerja & HSE */}
        <section className="bg-emerald-900 text-white p-10 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-300 text-sm font-bold mb-6 uppercase tracking-widest">
              <HardHat className="w-4 h-4" /> Protokol Keselamatan Kerja (HSE)
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Zero Accident Commitment</h2>
            <p className="text-emerald-100 text-lg max-w-3xl mb-10 leading-relaxed">Dalam operasional jasa water treatment industri kelas berat (PLTU, Migas, CPO), K3/HSE adalah faktor krusial. Kami menjamin setiap instalasi diproteksi penuh dan tim teknis kami mematuhi standar keselamatan tertinggi.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700/50">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Prosedur LOTO (Lockout/Tagout)</h4>
                <p className="text-sm text-emerald-100/80 leading-relaxed">Diterapkan ketat pada seluruh maintenance perpipaan bertekanan tinggi (High-Pressure RO) dan isolasi panel listrik terpusat.</p>
              </div>
              <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700/50">
                <TestTube2 className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Chemical Safety Handling</h4>
                <p className="text-sm text-emerald-100/80 leading-relaxed">Kepatuhan pada panduan MSDS untuk injeksi kimia. Integrasi fasilitas Safety Shower & Eyewash di area operasional pabrik.</p>
              </div>
              <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700/50">
                <HardHat className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Sertifikasi & Confined Space</h4>
                <p className="text-sm text-emerald-100/80 leading-relaxed">Engineer & teknisi kami bersertifikasi Ahli K3 Umum Kemnaker, dengan izin khusus pemeliharaan ruang terbatas (Clarifier/Tangki IPAL).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Daftar Layanan (Summary Grid) */}
        <section className="mb-24">
          <div className="text-center md:text-left mb-12">
            <div className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-blue-100">Katalog Solusi</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Kategori Layanan Rekayasa</h2>
            <p className="text-slate-600 text-lg max-w-3xl">Pilih spesialisasi layanan yang sesuai dengan profil masalah dan industri Anda. Mulai dari suplai air bersih skala industri hingga pemurnian air limbah yang ketat regulasi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SWRO */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-desalinasi-air-laut-swro-high-pressure-mizui-osmosa-teknovasi.webp" alt="SWRO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">Air Laut</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Reverse Osmosis Air Laut (SWRO)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Sistem SWRO tangguh untuk mengubah air laut menjadi air bersih berkualitas tinggi dengan teknologi Energy Recovery Device (ERD).</p>
                <button onClick={() => onNavigate && onNavigate('layanan-swro')} className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* BWRO */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/unit-reverse-osmosis-air-payau-bwro-industrial-mizui-osmosa-teknovasi.webp" alt="BWRO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">Air Payau</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Reverse Osmosis Air Payau (BWRO)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Solusi pemurnian ekonomis untuk air tanah dengan tingkat TDS menengah. Mengeliminasi 99.6% garam terlarut.</p>
                <button onClick={() => onNavigate && onNavigate('layanan-bwro')} className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Demineralisasi */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-demineralisasi-dan-water-softener-untuk-utilitas-pabrik.webp" alt="Demineralisasi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">Ultra-Pure</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Demineralisasi Industri</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Sistem berbasis resin (Mixed Bed) dan EDI yang menjamin keluaran Ultra-pure water untuk mencegah kerak pada turbin.</p>
                <button onClick={() => onNavigate && onNavigate('layanan-demin')} className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* IPAL */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-epc-water-treatment-plant-industri-terintegrasi-mizui-osmosa-teknovasi.webp" alt="IPAL" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">Limbah</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Instalasi Pengolahan Air Limbah (IPAL)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Teknologi MBR dan Clarifier untuk memastikan efluen sesuai dengan Baku Mutu Lingkungan KLHK.</p>
                <button onClick={() => onNavigate && onNavigate('layanan-ipal')} className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:text-blue-800 transition-colors">
                  Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        
        {/* Infrastruktur Teknologi Adaptif */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-emerald-100">
              Infrastruktur Teknologi Adaptif
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Teknologi & Kapabilitas Terintegrasi</h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Kami tidak terpaku pada satu metode. Tim engineer kami menguasai spektrum teknologi pengolahan air terlengkap, mulai dari filtrasi membran nano hingga bioreaktor limbah tingkat lanjut, untuk merancang sistem yang paling efisien bagi karakteristik unik air Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kategori 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Sistem Membran & Resin</h3>
              <ul className="space-y-4">
                {['Ultrafiltration', 'Reverse Osmosis Air Laut (SWRO)', 'Reverse Osmosis Air Payau (BWRO)', 'Pelunak Air (Water Softener)', 'Sistem Pengolahan Air Demineralisasi', 'Resin Penukar Ion Mixed Bed', 'Sistem Penukar Ion Bertingkat (Multistep)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Kategori 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Pra & Pasca Pengolahan</h3>
              <ul className="space-y-4">
                {['Penjernih Air (Clarifier)', 'Flotasi Udara Terlarut (DAF)', 'Flokulator', 'Filter Pasir & Karbon', 'Filter Pasir Cuci Balik Kontinu', 'Unit Injeksi Kimia', 'Elektro-Klorinasi Air Laut', 'Sterilisator Sinar Ultraviolet', 'Tangki Penyimpanan', 'Sistem Electrodeionization (EDI)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kategori 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">IPAL & Efluen Industri</h3>
              <ul className="space-y-4">
                {['Aerasi Diperpanjang (Extended Aeration)', 'Membrane Bioreactor (MBR)', 'Pemisah Minyak-Air (Oil-Water Separator)', 'Bio Ball PVA Gel', 'Sequencing Batch Reactor (SBR)', 'Sistem Netralisasi Pembuangan', 'Alat Pres Filter (Filter Press)', 'Alat Pres Sabuk (Belt Press)', 'Fasilitas Injeksi Kimia Skid-Package'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

{/* Sektor Industri yang Kami Layani */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Sektor Industri yang Kami Layani</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Solusi air khusus yang memenuhi parameter kritis tiap sektor industri berat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Pembangkit Listrik (PLTU/PLTGU)', icon: <Zap className="w-6 h-6 text-blue-600" />, desc: 'Sistem Demineralisasi spesifik untuk Boiler Feed Water bertekanan tinggi, menargetkan konduktivitas nol untuk proteksi turbin.' },
              { title: 'Pabrik Kelapa Sawit (CPO)', icon: <Sprout className="w-6 h-6 text-emerald-600" />, desc: 'Pengolahan air sungai rawa/gambut dengan kadar organik tinggi menjadi air proses pabrik yang efisien dan aman untuk boiler.' },
              { title: 'Makanan & Minuman (F&B)', icon: <Factory className="w-6 h-6 text-orange-600" />, desc: 'Instalasi RO sanitari grade makanan, sterilisasi lampu UV & Ozon yang mematuhi kelayakan BPOM dan standar WHO.' },
              { title: 'Tekstil & Petrokimia', icon: <Droplet className="w-6 h-6 text-cyan-600" />, desc: 'Solusi IPAL kompleks dan Water Recycling (daur ulang air limbah) guna menekan Water Footprint dan mematuhi batas buangan limbah cair.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Studi Kasus Proyek (Service Case Study Highlights) */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Bukti Kinerja & Studi Kasus</h2>
              <p className="text-slate-600 text-lg max-w-2xl">Jejak rekam keberhasilan instalasi sistem pengolahan air kami di berbagai sektor industri kritis.</p>
            </div>
            <button 
              onClick={() => onNavigate && onNavigate('proyek')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md shadow-blue-600/20 whitespace-nowrap"
            >
              Lihat Semua Proyek <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/fasilitas-swro-desalinasi-pulau-terpencil-indonesia.webp" alt="SWRO Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">SWRO</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Desalinasi Air Laut untuk Fasilitas Resort Pesisir</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Instalasi SWRO kapasitas 500 m³/hari untuk menyuplai kebutuhan air bersih resort pariwisata di Indonesia Timur dengan energi minimum (ERD).</p>
                <button 
                  onClick={() => onNavigate && onNavigate('proyek')}
                  className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:text-blue-800 transition-colors"
                >
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/Demin-Plant-Musi-Rawas_high_res-2.png" alt="Demin Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">Demineralisasi</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Sistem Demineralisasi Air Umpan Boiler Pabrik Sawit</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Rancang bangun Cation-Anion Exchanger & Mixed Bed untuk menjaga konduktivitas air &lt; 0.2 µS/cm guna mencegah korosi pada turbin pabrik CPO.</p>
                <button 
                  onClick={() => onNavigate && onNavigate('proyek')}
                  className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:text-blue-800 transition-colors"
                >
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/instalasi-wwtp-ipal-industri-makanan-minuman.webp" alt="WWTP Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">IPAL / WWTP</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Modernisasi IPAL (MBR) Industri Makanan & Minuman</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">Revamping sistem IPAL konvensional menjadi MBR otomatis untuk menjamin BOD & COD efluen stabil di bawah Baku Mutu KLHK.</p>
                <button 
                  onClick={() => onNavigate && onNavigate('proyek')}
                  className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:text-blue-800 transition-colors"
                >
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Alur Kerja EPC */}
        <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl font-extrabold mb-4">Metodologi EPC Terstruktur</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Pendekatan sistematis langkah-demi-langkah (Step-by-step) untuk meminimalisasi risiko teknis dan menjamin keberhasilan proyek secara tepat waktu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-slate-800 -z-10"></div>
              {[
                { num: '01', title: 'Site Survey & Analisis Air Baku', desc: 'Pengambilan sampel ke lab untuk menguji TDS, kekeruhan, salinitas, dan polutan.', icon: <TestTube2 /> },
                { num: '02', title: 'Desain P&ID & Kalkulasi OPEX', desc: 'Rancang bangun diagram perpipaan presisi, simulasi flow rate, dan prediksi biaya energi.', icon: <Settings /> },
                { num: '03', title: 'Fabrikasi & Instalasi Konstruksi', desc: 'Perakitan skid, mobilisasi logistik, dan eksekusi lapangan diawasi penuh oleh tim K3/HSE.', icon: <Truck /> },
                { num: '04', title: 'Komisioning & Pelatihan O&M', desc: 'Start-up mesin, verifikasi kualitas efluen, serah terima, dan training teknis operator lokal.', icon: <CheckCircle2 /> },
              ].map((step, i) => (
                <div key={i} className="relative z-10 group">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-xl shadow-blue-900/50 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-lg mb-3 md:text-center text-left text-white">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed md:text-center text-left">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Download */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
                <FileDown className="w-4 h-4" /> Unduh Dokumen Teknis
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Akses Brosur & Spesifikasi Teknis Kami</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">Dapatkan informasi komprehensif mengenai spesifikasi alat, standar rekayasa material, dan cakupan layanan EPC PT Mizui Osmosa Teknovasi dalam format PDF.</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <a href="#" className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Company Profile & EPC Services</h4>
                    <p className="text-xs text-slate-500">PDF Document • 4.2 MB</p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
              <a href="#" className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">SWRO Technical Datasheet</h4>
                    <p className="text-xs text-slate-500">PDF Document • 1.8 MB</p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
              <a href="#" className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">MBR WWTP Equipment Specs</h4>
                    <p className="text-xs text-slate-500">PDF Document • 2.1 MB</p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ AEO */}
        <section className="max-w-4xl mx-auto pb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Pertanyaan Umum (FAQ)</h2>
            <p className="text-slate-600 text-lg">Informasi cepat mengenai estimasi waktu, biaya, dan operasional layanan kami.</p>
          </div>
          <div className="space-y-4">
            {[
              { 
                q: 'Berapa lama estimasi waktu fabrikasi dan instalasi sistem Water Treatment Plant (WTP)?', 
                a: 'Secara rata-rata, proyek instalasi standar memakan waktu 4 hingga 12 minggu. Hal ini sangat bergantung pada kapasitas m³/hari, ketersediaan material impor, serta kompleksitas sipil di lapangan proyek.' 
              },
              { 
                q: 'Apakah PT Mizui Osmosa melayani Jasa Water Treatment Industri di luar Pulau Jawa?', 
                a: 'Ya, kami melayani proyek EPC di seluruh wilayah Indonesia. Portofolio kami mencakup instalasi SWRO di kawasan Indonesia Timur, peremajaan (retrofit) WWTP di Sumatera, hingga instalasi Demineralisasi di Kalimantan.' 
              },
              { 
                q: 'Bagaimana cara menghitung estimasi biaya (CAPEX & OPEX) pembuatan IPAL industri?', 
                a: 'Biaya investasi (CAPEX) dihitung berdasarkan beban polutan air baku, target kualitas regulasi, dan kapasitas instalasi. Sementara biaya operasional (OPEX) mencakup perkiraan konsumsi energi kWh, kebutuhan kimia bulanan, dan pergantian membran/media filter berkala. Tim engineering kami akan menyimulasikan ini di awal setelah Anda memberikan hasil uji lab air baku.' 
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 group overflow-hidden">
                <summary className="flex justify-between items-center font-bold p-6 cursor-pointer list-none text-slate-800">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
