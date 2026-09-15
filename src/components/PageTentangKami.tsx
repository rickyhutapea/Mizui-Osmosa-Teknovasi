import React, { useState } from 'react';
import { Target, Compass, Award, ShieldCheck, Cog, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, MapPin, Map, Users, HardHat, Activity, Radar, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PageTentangKamiProps {
  onNavigate?: (page: string) => void;
}

export default function PageTentangKami({ onNavigate }: PageTentangKamiProps = {}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">Solusi Engineering Water <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Treatment Terintegrasi</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Profil PT Mizui Osmosa Teknovasi: Perusahaan Engineering Water Treatment pimpinan alumni ITS & bersertifikat IDA dengan 20+ tahun pengalaman.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        
        {/* NEW SECTION 1: METRIK KEBERHASILAN (DATA-DRIVEN TRUST) */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 mb-24 transform -translate-y-12 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="px-4">
               <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">20+</div>
               <div className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">Tahun Pengalaman</div>
               <div className="text-xs text-slate-500">Kolektif Global Engineering</div>
            </div>
            <div className="px-4">
               <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">99%</div>
               <div className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">Penyaringan Garam</div>
               <div className="text-xs text-slate-500">Efisiensi Sistem SWRO/BWRO</div>
            </div>
            <div className="px-4">
               <div className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">0</div>
               <div className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">Insiden Kecelakaan</div>
               <div className="text-xs text-slate-500">Target HSE (Zero Accident)</div>
            </div>
            <div className="px-4">
               <div className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">100%</div>
               <div className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">Baku Mutu KLHK</div>
               <div className="text-xs text-slate-500">Kepatuhan Regulasi Limbah</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Mizui Osmosa Teknovasi - Spesialis Engineering Water Treatment Indonesia</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>Berperan sebagai pionir <strong>Perusahaan Engineering Water Treatment</strong>, PT Mizui Osmosa Teknovasi didedikasikan untuk menghadirkan keandalan utilitas air bagi industri berat. Kami mengutamakan pendekatan teknis yang presisi dalam setiap proyek pengolahan air bersih maupun air limbah.</p>
              <p>Meskipun secara administratif badan hukum kami diresmikan pada Februari 2025, fondasi operasional dan portofolio tim kami sejatinya telah terbangun kokoh sejak tahun 2020. Pengalaman lapangan kami melampaui usia legal perusahaan, menangani tantangan kompleks <em>Water Treatment Indonesia</em> dari hulu ke hilir.</p>
              <p>Didirikan oleh ahli teknik alumni <strong>Institut Teknologi Sepuluh Nopember (ITS) Surabaya</strong>, keunggulan utama kami terletak pada kepemimpinan rekayasa (EPC) yang kuat. Diperkuat dengan sertifikasi dari <strong>IDA Desalination Academy</strong>, kami memastikan setiap tetes air olahan memenuhi standar industri global.</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/perusahaan-engineering-water-treatment-tim-ahli-mizui-osmosa.webp" alt="Tim Ahli Mizui Osmosa" className="rounded-3xl shadow-2xl w-full" />
          </div>
        </div>
        
        {/* NEW SECTION 2: METODOLOGI KERJA (THE MIZUI WAY - AEO) */}
        <div className="mb-24">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest border border-blue-200">Metodologi EPC Terpadu</div>
             <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Bagaimana Cara Kerja Kami (The Mizui Way)?</h2>
             <p className="text-lg text-slate-600">Prosedur standar kami dalam merancang dan membangun sistem Water Treatment Plant yang andal, mulai dari analisis hingga serah terima.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Audit & Sampling', desc: 'Pengambilan sampel air baku (Raw Water) dan analisis laboratorium untuk menentukan beban pencemaran aktual.' },
                { step: '02', title: 'Desain P&ID', desc: 'Pembuatan diagram Piping and Instrumentation (P&ID) presisi untuk mengkalkulasi efisiensi CAPEX/OPEX.' },
                { step: '03', title: 'Fabrikasi Standar', desc: 'Perakitan skid dan komponen di workshop kami sesuai standar ISO 9001 menggunakan material anti-korosi.' },
                { step: '04', title: 'Komisioning & O&M', desc: 'Uji coba operasional penuh di lapangan (site) hingga mencapai parameter yang dijanjikan, dilanjutkan garansi.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group hover:border-blue-400 hover:shadow-lg transition-all">
                   <div className="text-6xl font-extrabold text-slate-100 absolute -top-4 -right-4 group-hover:text-blue-50 transition-colors">{item.step}</div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* NEW SECTION 3: FOKUS REGIONAL / GEO */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl mb-24 flex flex-col lg:flex-row">
           <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
             <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm"><MapPin className="w-5 h-5" /> Cakupan Nasional</div>
             <h2 className="text-3xl font-extrabold mb-6">Membangun Ketahanan Air dari Pesisir hingga Pedalaman</h2>
             <p className="text-slate-300 text-lg leading-relaxed mb-8">Sebagai mitra Kontraktor WTP IPAL terpercaya yang berbasis operasional di Jawa Barat & Jakarta, jangkauan instalasi kami membentang melintasi Nusantara.</p>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                 <span className="text-slate-300"><strong>Indonesia Timur (Maluku & Papua):</strong> Sukses menyediakan Jasa Desalinasi Air Laut (SWRO) untuk pulau terluar dan fasilitas remote tambang.</span>
               </li>
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                 <span className="text-slate-300"><strong>Kalimantan & Sulawesi:</strong> Spesialis penanganan air asam tambang dan air pendingin pabrik Smelter nikel.</span>
               </li>
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                 <span className="text-slate-300"><strong>Sumatera:</strong> Spesialis Demineralisasi Boiler untuk pabrik Kelapa Sawit berskala besar.</span>
               </li>
             </ul>
           </div>
           <div className="lg:w-1/2 relative min-h-[300px]">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="Jaringan Infrastruktur Nasional" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
           </div>
        </div>

        {/* ENHANCED VISI & MISI (LIGHT THEME) */}
        <div className="mb-24">
          <div className="border-y border-slate-200 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Visi */}
              <div className="lg:w-5/12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                     <Compass className="w-6 h-6" />
                   </div>
                   <h2 className="text-xl font-bold text-slate-900 tracking-wide uppercase">Visi Perusahaan</h2>
                </div>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight">
                  Mendefinisikan Ulang <span className="text-blue-600">Standar Engineering</span> Pengolahan Air.
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Kami bertekad berdiri sejajar dengan para pemimpin industri mapan dengan terus berinovasi dan mengadopsi teknologi mutakhir. Kami bertujuan untuk menciptakan ekosistem utilitas air yang paling andal, efisien, dan berkelanjutan bagi seluruh partner bisnis kami.
                </p>
              </div>

              {/* Divider for desktop */}
              <div className="hidden lg:block w-px bg-slate-200 shrink-0"></div>

              {/* Misi */}
              <div className="lg:w-7/12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                     <Target className="w-6 h-6" />
                   </div>
                   <h2 className="text-xl font-bold text-slate-900 tracking-wide uppercase">Misi Inti</h2>
                </div>
                
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                        <Cog className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">Keunggulan Rekayasa Teknis</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">Bertanggung jawab penuh atas setiap aspek desain P&ID dengan landasan ilmu teknik kimia yang presisi, menghindari asumsi, dan mengutamakan kalkulasi matematis akurat.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                        <Award className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">Inovasi Optimalisasi Biaya (OPEX)</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">Merancang sistem Water Treatment Plant yang sangat ramah pengguna dengan fokus utama pada minimisasi konsumsi energi dan bahan kimia untuk siklus operasional berbiaya rendah.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300 shadow-sm">
                        <ShieldCheck className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">Prioritas Mutlak Keselamatan</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">Komitmen tak tergoyahkan terhadap K3/HSE. Kami memastikan keamanan nyawa pekerja dan kelestarian lingkungan dalam setiap aktivitas operasional pabrik.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* COMBINED SECTION: DIREKTUR & TIM ENGINEERING (E-E-A-T) */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col mb-24">
           {/* Top Half: Profil Direktur */}
           <div className="flex flex-col lg:flex-row">
             <div className="lg:w-5/12 relative min-h-[400px]">
               <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/profil-direktur-mizui-osmosa-teknovasi-water-treatment.webp" alt="Jortahim Ambarita" className="absolute inset-0 w-full h-full object-cover" />
             </div>
             <div className="lg:w-7/12 p-10 lg:p-16 flex flex-col justify-center relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
               <h2 className="text-3xl font-extrabold mb-2 relative z-10">Jortahim Ambarita, S.T.</h2>
               <h3 className="text-xl text-blue-400 font-medium mb-8 relative z-10">Direktur Utama</h3>
               <div className="space-y-4 text-slate-300 leading-relaxed mb-8 relative z-10">
                 <p>Jortahim meraih gelar Sarjana Teknik Kimia dari Institut Teknologi Sepuluh Nopember (ITS) Surabaya. Beliau memiliki rekam jejak lebih dari dua dekade di industri pengolahan air global dan telah memperdalam keahliannya melalui pelatihan khusus di <strong>IDA Desalination Academy</strong>.</p>
                 <p>Hal ini menjamin standar internasional dalam setiap desain sistem SWRO dan Demineralisasi. Kepemimpinannya mencakup seluruh siklus proyek secara menyeluruh; memastikan presisi mulai dari desain rekayasa dan pengadaan, hingga fabrikasi dan keberhasilan komisioning lapangan.</p>
               </div>
               <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-400 relative z-10">
                 "Kunci kesuksesan kami adalah komitmen teguh terhadap kualitas pelaksanaan proyek. Kami berupaya keras melampaui ekspektasi pelanggan dalam setiap tetes air yang kami olah."
               </blockquote>
               
               <div className="mt-8 flex gap-6 items-center relative z-10">
                  <div className="bg-white p-2 rounded-lg"><img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/IDA-Desalination-Association-e1766596663881.png" alt="IDA" className="h-10" /></div>
                  <div className="bg-white p-2 rounded-lg"><img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/IKA-ITS-e1766596625995.png" alt="IKA ITS" className="h-10" /></div>
               </div>
             </div>
           </div>
           
           {/* Bottom Half: Tim Engineering */}
           <div className="bg-slate-800 p-10 lg:px-16 border-t border-slate-700">
             <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 text-center md:text-left">
                  <div className="w-16 h-16 bg-blue-900/50 text-blue-400 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 border border-blue-500/30">
                    <Users className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Tim Engineering Eksekutif</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">Berlandaskan prinsip E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), struktur kepemimpinan teknis kami diisi oleh praktisi bersertifikasi global.</p>
                </div>
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <h4 className="font-bold text-slate-200 text-base mb-2">Sertifikasi Internasional</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Ahli proses kami dibekali lisensi resmi dari <strong>IDA (International Desalination Association)</strong>, memvalidasi otoritas desain sistem SWRO efisiensi tinggi.</p>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <h4 className="font-bold text-slate-200 text-base mb-2">Pakar P&ID & Fluida</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Rancangan <em>Piping and Instrumentation Diagram</em> kami dieksekusi oleh sarjana teknik dengan kalkulasi matematis tanpa toleransi kesalahan.</p>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <h4 className="font-bold text-slate-200 text-base mb-2">Manajemen Proyek K3 (HSE)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Site Manager kami tersertifikasi Ahli K3 Umum Kemnaker, memastikan operasional WTP industri berat bebas risiko (zero accident).</p>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <h4 className="font-bold text-slate-200 text-base mb-2">R&D Terapan</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Menguji coba integrasi teknologi membran terbaru dan media filter inovatif untuk mengurangi biaya OPEX operasional klien.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>

        {/* Safety Technologies and Monitoring Tools */}
        <div className="bg-emerald-900 text-white rounded-3xl overflow-hidden shadow-2xl mb-24 flex flex-col lg:flex-row relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
             <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-4 uppercase tracking-widest text-sm"><HardHat className="w-5 h-5" /> Standar Industri Modern</div>
             <h2 className="text-3xl font-extrabold mb-6">Teknologi Keselamatan & Pemantauan Cerdas</h2>
             <p className="text-slate-300 text-lg leading-relaxed mb-8">Sebagai Perusahaan Engineering Water Treatment terkemuka, kami mengintegrasikan protokol keselamatan aktif dan arsitektur pemantauan IoT real-time dalam setiap fasilitas yang kami bangun.</p>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <Radar className="w-6 h-6 text-emerald-400 shrink-0" />
                 <span className="text-slate-300"><strong>Sensor Kualitas Air IoT Real-time:</strong> Memantau parameter konduktivitas, pH, dan TDS secara kontinu dengan notifikasi instan untuk mencegah kegagalan sistem.</span>
               </li>
               <li className="flex items-start gap-3">
                 <Activity className="w-6 h-6 text-emerald-400 shrink-0" />
                 <span className="text-slate-300"><strong>Sistem Otomatisasi (SCADA & PLC):</strong> Kontrol terpusat untuk meminimalisasi *human error*, mengatur laju dosis bahan kimia (chemical dosing) secara presisi dan aman.</span>
               </li>
               <li className="flex items-start gap-3">
                 <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                 <span className="text-slate-300"><strong>Fail-Safe & Interlock Safety:</strong> Perlindungan otomatis (auto shut-off) terhadap lonjakan tekanan ekstrim pada sistem SWRO (High-Pressure RO) untuk melindungi operator.</span>
               </li>
             </ul>
           </div>
           <div className="lg:w-1/2 relative min-h-[400px]">
             <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/layanan-retrofit-wtp-dan-chemical-dosing-system-mizui-osmosa-teknovasi.webp" alt="Safety and Monitoring Systems" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80" />
           </div>
        </div>

        {/* NEW SECTION 4: KLIEN & KEMITRAAN PENTING (SOCIAL PROOF) */}
        <div className="mb-24 text-center">
           <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Dipercaya Oleh Organisasi & Industri Terkemuka</h3>
           <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/PUPR-2.png" alt="Kementerian PUPR" className="h-16 object-contain" />
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/Waskita-Karya-2.png" alt="Waskita Karya" className="h-12 object-contain" />
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/PT-Evans-Indonesia-2.png" alt="Evans Indonesia" className="h-12 object-contain" />
              <img src="https://mizuiosmosa.co.id/wp-content/uploads/2025/12/Perumda-Air-Minum-Kota-Tual-2.png" alt="PDAM" className="h-16 object-contain" />
           </div>
        </div>

        {/* NEW SECTION 5: FAQ PERUSAHAAN (AEO) */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Pertanyaan Umum (FAQ)</h2>
            <p className="text-slate-600 text-lg">Informasi cepat mengenai layanan Perusahaan Engineering Water Treatment kami.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Apakah PT Mizui Osmosa Teknovasi melayani proyek WTP di seluruh Indonesia?', a: 'Ya, sebagai Kontraktor Water Treatment Indonesia, kami melayani proyek berskala nasional. Kami memiliki pengalaman fabrikasi dan komisioning fasilitas di pulau-pulau terluar Maluku, situs tambang terpencil di Papua dan Kalimantan, hingga kawasan industri padat di Jawa dan Sumatera.' },
              { q: 'Apa keunggulan Mizui Osmosa dibanding Kontraktor Water Treatment lainnya?', a: 'Keunggulan utama kami adalah pendekatan Engineering (rekayasa) murni. Dipimpin oleh pakar alumni ITS Surabaya dan pemegang lisensi IDA Desalination Academy, kami mendesain P&ID sendiri berdasarkan analisis lab air baku untuk menjamin efisiensi OPEX, bukan sekadar "menjual mesin jadi".' },
              { q: 'Apakah Anda memberikan garansi performa hasil air limbah (IPAL)?', a: 'Tentu. Setiap instalasi pengolahan air limbah (WWTP) yang kami bangun disertai Performance Guarantee. Kami menjamin output efluen akan memenuhi standar parameter Baku Mutu dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK) yang berlaku.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-800 pr-8">{faq.q}</span>
                  <div className="shrink-0 text-blue-500">
                    {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* NEW SECTION 6: CALL TO ACTION (CTA) - FULL WIDTH */}
      <div className="bg-blue-600 relative overflow-hidden py-20 mt-12">
         <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
         <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Siap Membangun Sistem Pengolahan Air yang Andal?</h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
              Mari diskusikan kebutuhan spesifik instalasi air industri Anda bersama Tim Engineering kami. Kami siap memberikan konsultasi teknis awal tanpa komitmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={() => onNavigate && onNavigate('kontak')}
                 className="bg-white hover:bg-slate-50 text-blue-700 font-bold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 group"
               >
                 <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                 Hubungi Tim Engineering
               </button>
               <button 
                 onClick={() => onNavigate && onNavigate('proyek')}
                 className="bg-blue-700/50 hover:bg-blue-700/80 border border-blue-400/30 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm flex items-center justify-center gap-3 group"
               >
                 Lihat Portofolio Proyek <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
