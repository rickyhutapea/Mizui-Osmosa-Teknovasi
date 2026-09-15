import React, { useState } from 'react';
import { MapPin, Building, Calendar, Droplet, Zap, ArrowRight, Cog, CheckCircle2, Target, Lightbulb, TrendingUp, ChevronDown, Award, ShieldCheck, Activity , Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PageProyek() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const projects = [
    {
      title: "Desalinasi Air Laut (SWRO) Pulau Tayando",
      summary: "Pembangunan fasilitas pengolahan air bersih mandiri untuk memenuhi kebutuhan air minum harian masyarakat di wilayah pesisir terpencil.",
      sow: "Turnkey EPC (Engineering, Procurement, Construction) & Commissioning",
      client: "Kementerian PUPR",
      location: "Maluku",
      date: "Desember 2024",
      capacity: "11 m³/jam",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/layanan-jasa-water-treatment-industri-sistem-swro-reverse-osmosis.webp",
      problem: "Keterbatasan air tawar di daerah 3T pulau terpencil dengan salinitas ekstrem (35.000 ppm) dan minimnya pasokan listrik yang stabil.",
      solution: "Desain sistem SWRO menggunakan membran khusus air laut dan diintegrasikan dengan teknologi Energy Recovery Device (ERD) untuk efisiensi tinggi.",
      result: "Menghasilkan suplai air minum (TDS < 300 ppm) yang stabil bagi warga, sekaligus menekan OPEX konsumsi listrik hingga 40%."
    },
    {
      title: "Demineralisasi Air Umpan Boiler Pabrik Sawit",
      summary: "Penyediaan suplai air ultra-murni bebas mineral untuk operasional boiler bertekanan tinggi pada fasilitas pengolahan kelapa sawit.",
      sow: "Design, Fabrication, Installation & Start-up",
      client: "PT. Evans Indonesia",
      location: "Musi Rawas, Sumatera Selatan",
      date: "Januari 2023",
      capacity: "2x60 m³/jam",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-water-treatment-industri-kontraktor-wtp-indonesia-mizui-osmosa.webp",
      problem: "Risiko tinggi terbentuknya kerak silika (scaling) dari air baku yang berpotensi merusak bilah turbin uap PLTU dan boiler bertekanan tinggi pabrik.",
      solution: "Instalasi sistem Demineralisasi (Ion Exchange) multi-tahap dengan konfigurasi Cation-Anion resin berkapasitas besar secara paralel.",
      result: "Target kualitas Ultra-Pure Water tercapai (< 0.2 µS/cm), memproteksi aset mesin bernilai triliunan rupiah dari risiko downtime korosif."
    },
    {
      title: "Proyek EPC Water Treatment & IPAL PLTU",
      summary: "Pembangunan infrastruktur pengelolaan air terpadu hulu-ke-hilir untuk fasilitas pembangkit listrik tenaga uap (PLTU).",
      sow: "Turnkey EPC (WTP, Demin Plant & WWTP)",
      client: "PT. Waskita Karya (Persero) Tbk",
      location: "Malinau, Kalimantan Utara",
      date: "Juli 2020",
      capacity: "45 m³/jam | 2x2,4 m³/jam | 5 m³/jam",
      image: "https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-water-treatment-industri-pengolahan-limbah-cair-ipal-wwtp.webp",
      problem: "Regulasi baku mutu limbah cair (efluen) yang sangat ketat untuk fasilitas pembangkit listrik, serta kebutuhan air baku berkualitas tinggi dari sungai yang keruh.",
      solution: "Sistem hulu-hilir terintegrasi meliputi Pra-pengolahan (Clarifier), Demineralisasi, hingga unit Pengolahan Air Limbah (WWTP/IPAL) presisi tinggi.",
      result: "100% lulus inspeksi Lingkungan Hidup, mencapai target zero-harm environment dan suplai air bersih operasional PLTU terjaga konstan."
    }
  ];

  const faqs = [
    { q: 'Bagaimana standar K3 (HSE) PT Mizui Osmosa selama konstruksi WTP?', a: 'Kami menerapkan protokol Keselamatan dan Kesehatan Kerja (K3) tanpa kompromi. Tim kami dilengkapi sertifikasi Ahli K3 Umum & Spesialis, Job Safety Analysis (JSA) harian, dan mencatatkan rekor Zero Accident pada seluruh proyek EPC.' },
    { q: 'Apakah Mizui melayani kontrak Operation & Maintenance (O&M) pasca-proyek?', a: 'Ya, kami tidak sekadar membangun. Kami menyediakan kontrak O&M opsional, penyediaan bahan kimia rutin (antiscalant, koagulan, resin), hingga jadwal penggantian membran (membran RO) berkala untuk memastikan sistem beroperasi optimal.' },
    { q: 'Berapa rata-rata waktu fabrikasi (lead time) untuk sistem industri skala menengah?', a: 'Bergantung pada kapasitas dan kerumitan sistem, rata-rata lead time fabrikasi skid-mounted memakan waktu 4 hingga 8 minggu di workshop kami, dilanjutkan dengan instalasi lapangan (on-site) yang efisien.' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Pengalaman Proyek <br/><span className="text-blue-400">Water Treatment & Portofolio</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">Temukan rekam jejak kami dalam menghadirkan solusi air bersih serta pengolahan air limbah (WWTP). Kami telah melayani berbagai kebutuhan instansi pemerintah hingga industri swasta besar di seluruh Indonesia.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-16">
        
        {/* Metrik Kredibilitas / Impact Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
             <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
               <Award className="w-7 h-7" />
             </div>
             <div className="text-4xl font-extrabold text-slate-900 mb-2">20+</div>
             <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Tahun Pengalaman</div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
             <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
               <Building className="w-7 h-7" />
             </div>
             <div className="text-4xl font-extrabold text-slate-900 mb-2">50+</div>
             <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Proyek EPC Selesai</div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
             <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mb-4">
               <Droplet className="w-7 h-7" />
             </div>
             <div className="text-4xl font-extrabold text-slate-900 mb-2">150K+</div>
             <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">m³ Air Terolah/Hari</div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
             <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4">
               <ShieldCheck className="w-7 h-7" />
             </div>
             <div className="text-4xl font-extrabold text-slate-900 mb-2">Zero</div>
             <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Accident Record</div>
          </div>
        </div>

        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col xl:flex-row">
            <div className="xl:w-5/12 relative min-h-[300px] xl:min-h-full">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="xl:w-7/12 p-8 lg:p-12 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{project.title}</h2>
              <p className="text-lg text-slate-600 mb-5 leading-relaxed">{project.summary}</p>
              
              <div className="flex items-center gap-2 mb-10 bg-blue-50 text-blue-700 px-4 py-2.5 rounded-lg w-fit border border-blue-100">
                 <Briefcase className="w-4 h-4 shrink-0" />
                 <span className="text-xs font-bold uppercase tracking-wider">SOW: {project.sow}</span>
              </div>
              
              {/* Problem Solution Result Framework */}
              <div className="space-y-6 mb-10 flex-grow">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-lg mb-2">Tantangan (Problem)</h4>
                       <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-lg mb-2">Solusi Engineering</h4>
                       <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-lg mb-2">Hasil Terukur (Result)</h4>
                       <p className="text-slate-600 leading-relaxed font-medium">{project.result}</p>
                    </div>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-auto">
                 <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1"><Building className="w-4 h-4 text-blue-500" /> Klien</div>
                   <div className="font-bold text-slate-800 text-sm">{project.client}</div>
                 </div>
                 <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1"><MapPin className="w-4 h-4 text-blue-500" /> Lokasi</div>
                   <div className="font-bold text-slate-800 text-sm">{project.location}</div>
                 </div>
                 <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1"><Calendar className="w-4 h-4 text-blue-500" /> Selesai</div>
                   <div className="font-bold text-slate-800 text-sm">{project.date}</div>
                 </div>
                 <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider mb-1"><Cog className="w-4 h-4 text-blue-500" /> Kapasitas</div>
                   <div className="font-bold text-slate-800 text-sm">{project.capacity}</div>
                 </div>
              </div>
            </div>
          </div>
        ))}

        
        {/* Mitra Strategis & Lencana */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Mitra Strategis Kami</h2>
              <p className="text-slate-600 max-w-2xl">Kepercayaan dari institusi pemerintah dan perusahaan multinasional menjadi bukti nyata komitmen kualitas rekayasa kami.</p>
            </div>
            {/* Lencana Kepatuhan */}
            <div className="flex gap-4 shrink-0">
               <div className="flex flex-col items-center gap-2 text-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                 <ShieldCheck className="w-6 h-6 text-emerald-600" />
                 <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">ISO 9001<br/>Quality Standard</span>
               </div>
               <div className="flex flex-col items-center gap-2 text-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                 <Activity className="w-6 h-6 text-blue-600" />
                 <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">SMK3<br/>Zero Accident</span>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/PUPR-2.png" alt="Kementerian PUPR" className="max-h-24 object-contain" />
            </div>
            <div className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/PT-Evans-Indonesia-2.png" alt="PT Evans Indonesia" className="max-h-24 object-contain" />
            </div>
            <div className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/Waskita-Karya-2.png" alt="Waskita Karya" className="max-h-24 object-contain" />
            </div>
            <div className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/Perumda-Air-Minum-Kota-Tual-2.png" alt="Perumda Air Minum Kota Tual" className="max-h-24 object-contain" />
            </div>
          </div>
        </div>
        
        
        {/* Jelajahi Solusi Rekayasa Kami */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Jelajahi Solusi Rekayasa Kami</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Setelah melihat rekam jejak proyek kami, pelajari lebih dalam spesifikasi teknis dari masing-masing teknologi unggulan yang kami tawarkan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             {/* Card SWRO */}
             <a href="#" className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
               <div className="h-56 overflow-hidden relative">
                 <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/layanan-jasa-water-treatment-industri-sistem-swro-reverse-osmosis.webp" alt="SWRO" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                 <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">SWRO (Air Laut)</h3>
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <p className="text-slate-600 mb-8 leading-relaxed flex-grow">Desalinasi tangguh untuk air baku bersalinitas ekstrem dan laut. Solusi vital bagi kawasan pesisir dan kepulauan.</p>
                 <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Lihat Spesifikasi Teknis <ArrowRight className="w-4 h-4" /></span>
               </div>
             </a>

             {/* Card Demin */}
             <a href="#" className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
               <div className="h-56 overflow-hidden relative">
                 <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-demineralisasi-dan-water-softener-untuk-utilitas-pabrik.webp" alt="Demineralisasi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                 <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">Demineralisasi & EDI</h3>
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <p className="text-slate-600 mb-8 leading-relaxed flex-grow">Sistem lanjutan (Ion Exchange) untuk mencapai Ultra-pure water. Memproteksi boiler tekanan tinggi dari kerak mematikan.</p>
                 <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Lihat Spesifikasi Teknis <ArrowRight className="w-4 h-4" /></span>
               </div>
             </a>

             {/* Card IPAL */}
             <a href="#" className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
               <div className="h-56 overflow-hidden relative">
                 <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-epc-water-treatment-plant-industri-terintegrasi-mizui-osmosa-teknovasi.webp" alt="IPAL" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                 <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">Instalasi Air Limbah</h3>
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <p className="text-slate-600 mb-8 leading-relaxed flex-grow">Pengolahan efluen industri (WWTP) untuk memastikan limbah cair aman dibuang dan patuh 100% pada regulasi lingkungan.</p>
                 <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Lihat Spesifikasi Teknis <ArrowRight className="w-4 h-4" /></span>
               </div>
             </a>
          </div>
        </div>
\n        {/* FAQ Eksekusi EPC */}
        <div className="mt-24 bg-white p-10 lg:p-14 rounded-3xl border border-slate-200 shadow-sm">
           <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Tanya Jawab Eksekusi Proyek (EPC)</h2>
           <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center font-bold p-6 text-left text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
                  >
                    <span className="text-lg">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 text-blue-500 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-200 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </div>

        {/* Final CTA */}
        <div className="bg-slate-900 text-white p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden mt-24 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
           
           <div className="relative z-10 md:w-2/3 text-left">
             <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">Jadikan Kami Bagian dari <span className="text-blue-400">Pengalaman Proyek Water Treatment</span> Anda</h2>
             <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">Bermitralah dengan PT Mizui Osmosa Teknovasi. Sebagai kontraktor WTP berpengalaman, kami siap menghadirkan solusi rekayasa air yang andal, hemat biaya, dan berkinerja tinggi untuk industri Anda.</p>
           </div>
           
           <div className="relative z-10 md:w-1/3 flex justify-end shrink-0">
             <a href="https://wa.me/6281314170122?text=Hello,%20saya%20tertarik%20diskusi%20tentang%20proyek%20Water%20Treatment." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-500 font-bold px-8 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.4)] w-full md:w-auto focus:outline-none">
               Dapatkan Konsultasi Gratis <ArrowRight className="w-5 h-5" />
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}
