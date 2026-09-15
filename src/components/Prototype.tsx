import { Droplet, Waves, Factory, ShieldCheck, Award, ArrowRight, CheckCircle2, PhoneCall, Building2, Zap, Settings, BarChart3, FileText, ChevronDown, ChevronUp, Search, Lightbulb, BookOpen, ChevronRight, Download, X, Send, SlidersHorizontal, MessageSquare, Globe, Check, Wrench, FlaskConical, ClipboardCheck, Activity, MapPin, Mail, TestTube2 } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

import PageLayanan from './PageLayanan';
import PageProyek from './PageProyek';
import PageDetailLayanan from './PageDetailLayanan';
import PageWawasan from './PageWawasan';
import PageTentangKami from './PageTentangKami';
import PageKontak from './PageKontak';
import PageSertifikasi from './PageSertifikasi';
import PageKarir from './PageKarir';

function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}

function HeroSearch() {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="mt-10 relative max-w-2xl" onMouseLeave={() => setFocused(false)}>
       <div className={`flex items-center bg-white rounded-xl p-2 shadow-2xl transition-all ${focused ? 'ring-4 ring-blue-500/30' : ''}`}>
          <Search className="w-6 h-6 text-slate-400 ml-3 shrink-0" />
          <input
            type="text"
            placeholder="Ketik tantangan pengolahan air Anda..."
            className="w-full bg-transparent border-none focus:outline-none px-4 py-3 text-slate-800 text-base md:text-lg"
            onFocus={() => setFocused(true)}
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 md:px-8 py-3 rounded-lg font-bold transition-all shrink-0">
            Cari Solusi
          </button>
       </div>
       
       <AnimatePresence>
         {focused && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 text-left"
            >
               <div className="px-5 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                 <Lightbulb className="w-4 h-4 text-amber-500" />
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                   Sugesti Solusi Populer
                 </span>
               </div>
               <ul className="py-2">
                 <li className="px-5 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-4 text-slate-700 transition-colors">
                   <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0"><Waves className="w-4 h-4 text-blue-600" /></div>
                   <div>
                     <div className="font-bold text-slate-800">Desalinasi Air Laut (SWRO)</div>
                     <div className="text-sm text-slate-500">Sistem RO untuk kawasan pesisir & pulau</div>
                   </div>
                 </li>
                 <li className="px-5 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-4 text-slate-700 transition-colors">
                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0"><Droplet className="w-4 h-4 text-indigo-600" /></div>
                   <div>
                     <div className="font-bold text-slate-800">Demineralisasi Boiler PLTU</div>
                     <div className="text-sm text-slate-500">Ultra-pure water untuk pembangkit listrik</div>
                   </div>
                 </li>
                 <li className="px-5 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-4 text-slate-700 transition-colors">
                   <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><Factory className="w-4 h-4 text-emerald-600" /></div>
                   <div>
                     <div className="font-bold text-slate-800">Revitalisasi IPAL Industri (WWTP)</div>
                     <div className="text-sm text-slate-500">Penyesuaian baku mutu limbah cair KLHK</div>
                   </div>
                 </li>
               </ul>
            </motion.div>
         )}
       </AnimatePresence>
    </div>
  );
}

export default function Prototype() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('Semua');
  const [isHeaderSearchOpen, setIsHeaderSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  
  const [chatMessages, setChatMessages] = useState<{role: 'bot'|'user', text: string}[]>([
    { role: 'bot', text: 'Halo! Ada yang bisa kami bantu terkait parameter teknis atau estimasi proyek instalasi SWRO/WWTP Anda?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!chatInput.trim()) return;
    const newMsg = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', text: newMsg }]);
    setChatInput('');
    
    setTimeout(() => {
      let botReply = "Tim engineer kami akan segera meninjau kebutuhan ini. Ada parameter spesifik lain yang ingin disampaikan?";
      const lower = newMsg.toLowerCase();
      if(lower.includes('opex') || lower.includes('energi') || lower.includes('listrik') || lower.includes('daya')) {
         botReply = "Untuk optimasi OPEX/Energi, kami menggunakan Energy Recovery Device (ERD) yang dapat memangkas konsumsi daya desalinasi hingga 40%. Kapasitas target Anda berapa m³/hari?";
      } else if(lower.includes('wwtp') || lower.includes('limbah') || lower.includes('klhk')) {
         botReply = "Desain WWTP kami dijamin 100% memenuhi baku mutu KLHK terbaru. Kami juga bisa mengintegrasikan sistem SPARING secara native.";
      } else if(lower.includes('harga') || lower.includes('budget') || lower.includes('biaya') || lower.includes('proposal')) {
         botReply = "Untuk mendapatkan indikasi harga (budgetary design), silakan klik tombol 'Hubungi Kami' untuk mengisi form RFQ. Tim kami merespons dalam 48 jam.";
      }
      setChatMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    }, 800);
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isRfqOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isRfqOpen]);

  const faqs = [
    { q: "Berapa kapasitas maksimal sistem SWRO yang dapat dibangun oleh Mizui Osmosa?", a: "Kami memiliki kapabilitas merancang dan membangun fasilitas SWRO skala industri dengan kapasitas mulai dari 500 m³/hari hingga lebih dari 50.000 m³/hari, disesuaikan dengan kebutuhan spesifik kawasan industri atau pembangkit listrik." },
    { q: "Apakah sistem WWTP Mizui memenuhi standar regulasi terbaru?", a: "Tentu. Seluruh desain IPAL/WWTP kami bergaransi memenuhi baku mutu air limbah yang ditetapkan oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK), termasuk integrasi sistem monitoring SPARING jika diwajibkan." },
    { q: "Bagaimana pendekatan Mizui terhadap efisiensi energi (OPEX)?", a: "Untuk desalinasi, kami mengintegrasikan Energy Recovery Devices (ERD) mutakhir dan Variable Frequency Drives (VFD) pada pompa bertekanan tinggi, yang terbukti secara empiris menurunkan konsumsi spesifik energi (SEC) hingga 35-40%." }
  ];

  return (
    <div className="bg-white font-sans w-full text-slate-800 relative">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Prototype Navbar */}
      <nav className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Droplet className="w-8 h-8 text-blue-500" />
            <span className="font-bold text-2xl tracking-tight">Mizui Osmosa</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button onClick={() => setCurrentPage('home')} className={`transition-colors ${currentPage === 'home' ? 'text-white' : 'hover:text-white'}`}>Beranda</button>
            <button onClick={() => setCurrentPage('tentang')} className={`transition-colors ${currentPage === 'tentang' ? 'text-white' : 'hover:text-white'}`}>Tentang Kami</button>
            <div className="relative group py-6 -my-6">
              <button onClick={() => setCurrentPage('layanan')} className={`transition-colors ${currentPage.startsWith('layanan') ? 'text-white' : 'hover:text-white'}`}>Layanan</button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[550px] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-6 flex gap-6 cursor-default">
                 <div className="flex-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Solusi Spesifik</h4>
                    <div className="grid grid-cols-2 gap-4">
                       <button onClick={(e) => { e.stopPropagation(); setCurrentPage('layanan-swro'); }} className="text-left group/item p-3 hover:bg-slate-50 rounded-xl transition-colors">
                          <div className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors flex items-center gap-2"><Droplet className="w-4 h-4" /> SWRO</div>
                          <div className="text-xs text-slate-500 mt-1">Desalinasi Air Laut</div>
                       </button>
                       <button onClick={(e) => { e.stopPropagation(); setCurrentPage('layanan-bwro'); }} className="text-left group/item p-3 hover:bg-slate-50 rounded-xl transition-colors">
                          <div className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors flex items-center gap-2"><Settings className="w-4 h-4" /> BWRO</div>
                          <div className="text-xs text-slate-500 mt-1">RO Air Payau</div>
                       </button>
                       <button onClick={(e) => { e.stopPropagation(); setCurrentPage('layanan-demin'); }} className="text-left group/item p-3 hover:bg-slate-50 rounded-xl transition-colors">
                          <div className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors flex items-center gap-2"><TestTube2 className="w-4 h-4" /> Demineralisasi</div>
                          <div className="text-xs text-slate-500 mt-1">Ultra-pure Water</div>
                       </button>
                       <button onClick={(e) => { e.stopPropagation(); setCurrentPage('layanan-ipal'); }} className="text-left group/item p-3 hover:bg-slate-50 rounded-xl transition-colors">
                          <div className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors flex items-center gap-2"><Factory className="w-4 h-4" /> IPAL (WWTP)</div>
                          <div className="text-xs text-slate-500 mt-1">Pengolahan Limbah</div>
                       </button>
                    </div>
                 </div>
                 
                 <div className="w-[180px] bg-slate-50 rounded-xl p-5 flex flex-col justify-center border border-slate-100">
                    <Activity className="w-8 h-8 text-blue-500 mb-3" />
                    <h4 className="font-bold text-slate-900 mb-2">EPC Hub</h4>
                    <p className="text-[11px] text-slate-600 mb-4 leading-relaxed">Lihat ringkasan layanan rekayasa terintegrasi kami.</p>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentPage('layanan'); }} className="text-xs text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg font-bold flex items-center justify-between transition-colors w-full">Hub Layanan <ArrowRight className="w-3 h-3" /></button>
                 </div>
              </div>
            </div>
            <button onClick={() => setCurrentPage('proyek')} className={`transition-colors ${currentPage === 'proyek' ? 'text-white' : 'hover:text-white'}`}>Proyek</button>
            <button onClick={() => setCurrentPage('kontak')} className={`transition-colors ${currentPage === 'kontak' ? 'text-white' : 'hover:text-white'}`}>Kontak</button>
            <button onClick={() => setCurrentPage('wawasan')} className={`transition-colors ${currentPage === 'wawasan' ? 'text-white' : 'hover:text-white'}`}>Wawasan</button>
            
            <div className="relative flex items-center border-l border-slate-700 pl-6 ml-2">
              {isHeaderSearchOpen ? (
                <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 220, opacity: 1 }} className="flex items-center">
                  <input type="text" placeholder="Cari spesifikasi..." className="w-full bg-slate-800 text-white px-4 py-2 rounded-l-lg focus:outline-none text-sm border border-slate-700" autoFocus />
                  <button onClick={() => setIsHeaderSearchOpen(false)} className="bg-slate-700 p-2.5 rounded-r-lg hover:bg-slate-600 border border-slate-700 border-l-0">
                    <X className="w-4 h-4 text-slate-300" />
                  </button>
                </motion.div>
              ) : (
                <button onClick={() => setIsHeaderSearchOpen(true)} className="text-slate-300 hover:text-white transition-colors p-2">
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>
            <button onClick={() => setCurrentPage('kontak')} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg transition-colors font-semibold flex items-center gap-2 ml-2">
              <PhoneCall className="w-4 h-4" /> Hubungi Kami
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs (SEO Architecture) */}
      <div className="bg-slate-50 border-b border-slate-200 py-3 hidden md:block relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center text-sm text-slate-500">
          <button onClick={() => setCurrentPage('home')} className="hover:text-blue-600 transition-colors cursor-pointer focus:outline-none">Beranda</button>
          
          {currentPage !== 'home' && (
            <>
              <ChevronRight className="w-4 h-4 mx-2 text-slate-300 shrink-0" />
              {currentPage.startsWith('layanan-') ? (
                <>
                  <button onClick={() => setCurrentPage('layanan')} className="hover:text-blue-600 transition-colors cursor-pointer focus:outline-none">Layanan</button>
                  <ChevronRight className="w-4 h-4 mx-2 text-slate-300 shrink-0" />
                  <span className="text-slate-800 font-medium uppercase">{currentPage.replace('layanan-', '')}</span>
                </>
              ) : (
                <span className="text-slate-800 font-medium capitalize">{currentPage === 'tentang' ? 'Tentang Kami' : currentPage}</span>
              )}
            </>
          )}
          {currentPage === 'home' && (
             <>
                <ChevronRight className="w-4 h-4 mx-2 text-slate-300 shrink-0" />
                <span className="text-slate-800 font-medium">Kontraktor Water Treatment Indonesia</span>
             </>
          )}
        </div>
      </div>

      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="relative bg-slate-900 text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" /> EPC Water Treatment Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-50 tracking-tight">
              Kontraktor Water Treatment Indonesia: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Solusi Rekayasa Terintegrasi</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Berbekal pengalaman <b>20+ tahun</b> sebagai <strong>Kontraktor Water Treatment Indonesia</strong>, tim spesialis kami yang bersertifikasi <i>IDA Desalination Academy</i> siap menghadirkan solusi rekayasa tata kelola air yang efisien dan presisi untuk fasilitas Anda.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsRfqOpen(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg transition-colors font-bold flex items-center gap-2 shadow-lg shadow-blue-900/20">
                Hubungi Kami <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => {
                const elem = document.getElementById('services-section');
                if(elem) elem.scrollIntoView({ behavior: 'smooth' });
              }} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-colors font-bold flex items-center gap-2 backdrop-blur-sm border border-white/10">
                Lihat Layanan <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges - E-E-A-T Foundation */}
      <section className="bg-white border-b border-slate-100 py-10 relative z-20 -mt-8 mx-6 rounded-2xl shadow-xl shadow-slate-200/40 max-w-7xl xl:mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
           <div className="flex items-center gap-3 font-bold text-slate-800"><Award className="w-6 h-6 text-blue-600"/> 20+ Tahun Pengalaman</div>
           <div className="flex items-center gap-3 font-bold text-slate-800"><CheckCircle2 className="w-6 h-6 text-blue-600"/> Sertifikasi ISO 9001:2015</div>
           <div className="flex items-center gap-3 font-bold text-slate-800"><Award className="w-6 h-6 text-blue-600"/> Keanggotaan IDA</div>
           <div className="flex items-center gap-3 font-bold text-slate-800"><CheckCircle2 className="w-6 h-6 text-blue-600"/> Kepatuhan Baku Mutu KLHK</div>
        </div>
      </section>



      {/* Technical Specification Highlights Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
               <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Keunggulan Teknologi</div>
               <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Kinerja Optimal, Biaya Minimal</h2>
               <p className="text-slate-600 text-lg">Inovasi rekayasa kami difokuskan pada tiga pilar utama untuk memaksimalkan ROI instalasi Anda.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all group flex flex-col hover:-translate-y-1">
                  <div className="h-56 overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80" alt="Instalasi Membran RO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm text-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                        <ShieldCheck className="w-6 h-6" />
                     </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Umur Membran 5+ Tahun</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Desain pre-treatment yang presisi mencegah fouling dini, memperpanjang masa pakai membran hingga lebih dari 5 tahun.</p>
                  </div>
               </div>
               
               <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all group flex flex-col hover:-translate-y-1">
                  <div className="h-56 overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80" alt="Kontrol Sistem SCADA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm text-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                        <Settings className="w-6 h-6" />
                     </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Operasional User-Friendly</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Sistem otomatisasi cerdas yang mudah dipantau dan dioperasikan, meminimalkan risiko human error.</p>
                  </div>
               </div>
               
               <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all group flex flex-col hover:-translate-y-1">
                  <div className="h-56 overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Efisiensi Data OPEX" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm text-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                        <BarChart3 className="w-6 h-6" />
                     </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Efisiensi Biaya (OPEX)</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Optimalisasi recovery rate air dan konsumsi energi untuk menekan biaya operasional harian Anda secara signifikan.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
      <section id="services-section" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Layanan Kami</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Solusi Water Treatment Terintegrasi</h2>
            <p className="text-slate-600 text-lg leading-relaxed">Melalui pendekatan <strong>Engineering, Procurement, and Construction (EPC)</strong> yang andal, PT Mizui Osmosa Teknovasi menghadirkan solusi mulai dari desain, instalasi, hingga pemeliharaan sistem air berstandar internasional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <button onClick={() => setCurrentPage('layanan')} className="text-left group relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[16/10] block focus:outline-none">
                <img 
                  src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-swro-bwro-desalinasi-air-laut.webp" 
                  alt="Desalinasi SWRO" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white">
                      <Waves className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Jasa Instalasi WTP & Desalinasi</h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">Solusi Reverse Osmosis Air Laut berefisiensi tinggi untuk pulau-pulau dan industri pesisir.</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-xs font-bold rounded-full">SWRO</span>
                        <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-xs font-bold rounded-full">BWRO</span>
                        <ArrowRight className="w-5 h-5 text-white ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                   </div>
                </div>
              </button>
              
              {/* Card 2 */}
              <button onClick={() => setCurrentPage('layanan')} className="text-left group relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[16/10] block focus:outline-none">
                <img 
                  src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/instalasi-demineralisasi-water-treatment-pabrik-sawit.webp" 
                  alt="Sistem Demineralisasi" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white">
                      <Droplet className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Sistem Demineralisasi & Softener</h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">Unit demineralisasi berkapasitas tinggi untuk pembangkit listrik dan pabrik kelapa sawit.</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-xs font-bold rounded-full">High-Pressure Boiler</span>
                        <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-xs font-bold rounded-full">Mixed-Bed</span>
                        <ArrowRight className="w-5 h-5 text-white ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                   </div>
                </div>
              </button>
              
              {/* Card 3 */}
              <button onClick={() => setCurrentPage('layanan')} className="text-left group relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[16/10] block focus:outline-none">
                <img 
                  src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/ipal-wwtp-pengolahan-limbah-industri-mizui-osmosa.webp" 
                  alt="Instalasi IPAL" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white">
                      <Factory className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Kontraktor IPAL & Pengolahan Limbah</h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">Sistem Pengolahan Air Limbah (WWTP) dan daur ulang yang berkelanjutan untuk kepatuhan regulasi industri.</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-xs font-bold rounded-full">Physicochemical</span>
                        <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-xs font-bold rounded-full">Biological Treatment</span>
                        <ArrowRight className="w-5 h-5 text-white ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                   </div>
                </div>
              </button>

              {/* Card 4 */}
              <button onClick={() => setCurrentPage('layanan')} className="text-left group relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[16/10] block focus:outline-none">
                <img 
                  src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-retrofit-maintenance-wtp-skid-kimia.webp" 
                  alt="O&M dan Retrofit" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white">
                      <Wrench className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Vendor Komponen & Retrofit Sistem</h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">Retrofit instalasi (pembaruan/revamping) serta layanan operasi & pemeliharaan (O&M).</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-xs font-bold rounded-full">O&M</span>
                        <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-xs font-bold rounded-full">Chemicals & Consumables</span>
                        <ArrowRight className="w-5 h-5 text-white ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                   </div>
                </div>
              </button>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Engineering Advantage (GEO/SEO: Entities & Quantitative Data) */}
      <ScrollReveal>
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-6">
                <Settings className="w-4 h-4" /> Nilai Unggulan & Standar Kualitas
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Mengapa Memilih Mizui Osmosa Teknovasi
              </h2>
              <p className="text-xl font-bold text-slate-700 mb-4">Sebagai Penyedia Jasa Water Treatment Indonesia</p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Kami memahami bahwa sistem pengolahan air adalah investasi vital bagi keberlangsungan operasional Anda. Pendekatan kami melampaui sekadar instalasi teknis, kami menghadirkan ketenangan pikiran melalui rekayasa presisi yang menyeimbangkan efisiensi biaya, ketahanan sistem jangka panjang, dan kepatuhan standar keselamatan kerja yang ketat.
              </p>
              
              <div className="space-y-4">
                 {[
                   { title: 'Keahlian Bersertifikat', desc: 'Disertifikasi oleh IDA Desalination Academy untuk menjamin solusi pengolahan air kelas satu.' },
                   { title: 'Sistem Tahan Lama', desc: 'Instalasi RO berkualitas tinggi yang didesain untuk ketahanan, dengan masa pakai membran terbukti lebih dari 5 tahun.' },
                   { title: 'Desain Hemat Biaya', desc: 'Desain ramah pengguna yang mengurangi biaya operasional sekaligus menjaga kualitas air.' },
                   { title: 'Komitmen K3 (HSE)', desc: 'Berkomitmen penuh terhadap standar keselamatan kerja yang ketat di setiap langkah eksekusi proyek.' }
                 ].map((adv, i) => (
                   <div key={i} className="flex gap-4 items-start">
                     <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                       <Check className="w-4 h-4" />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900">{adv.title}</h4>
                       <p className="text-slate-600 text-sm">{adv.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/02/profil-direktur-mizui-osmosa-teknovasi-water-treatment.webp" alt="Keahlian Teknikal" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5] hover:-translate-y-2 transition-transform duration-500" />
                   <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl">
                      <div className="text-3xl font-black text-blue-400 mb-1">20+</div>
                      <div className="text-sm text-slate-300 font-medium">Tahun Rekayasa</div>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-xl shadow-blue-600/20">
                      <ShieldCheck className="w-10 h-10 text-blue-200 mb-4" />
                      <div className="text-xl font-bold mb-1">ISO 9001:2015</div>
                      <div className="text-sm text-blue-100">Quality Management</div>
                   </div>
                   <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/02/komitmen-k3.webp" alt="Komitmen K3" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5] hover:-translate-y-2 transition-transform duration-500" />
                </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Metodologi EPC Terintegrasi (End-to-End)</h2>
            <p className="text-slate-600 text-lg">Dari konseptualisasi hingga operasional harian, kami menyediakan alur kerja yang terstruktur untuk menjamin keberhasilan proyek tata kelola air Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
             <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>
             
             <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center mb-6 text-blue-600">
                   <ClipboardCheck className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-widest">Fase 01</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Audit & Desain Dasar</h4>
                <p className="text-slate-600 text-sm">Analisis sampel air baku, studi kelayakan, dan penyusunan budgetary design.</p>
             </div>
             
             <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center mb-6 text-blue-600">
                   <Settings className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-widest">Fase 02</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Detail Engineering</h4>
                <p className="text-slate-600 text-sm">Pemodelan 3D, kalkulasi hidrolik, dan pemilihan instrumen presisi tinggi.</p>
             </div>
             
             <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-blue-600 border-4 border-blue-100 shadow-xl shadow-blue-600/30 flex items-center justify-center mb-6 text-white relative">
                   <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-20"></div>
                   <Building2 className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-widest">Fase 03</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Konstruksi & EPC</h4>
                <p className="text-slate-600 text-sm">Fabrikasi, instalasi mekanikal/elektrikal, dan testing commissioning (SAT).</p>
             </div>
             
             <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center mb-6 text-emerald-600">
                   <Activity className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-emerald-600 mb-2 uppercase tracking-widest">Fase 04</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">O&M dan Optimalisasi</h4>
                <p className="text-slate-600 text-sm">Operasional harian, suplai bahan kimia, dan pemantauan jarak jauh via SCADA.</p>
             </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
        <MapVisualization />
      </ScrollReveal>

      {/* Featured Projects (GEO: Factual Grounding) */}
      <ScrollReveal>
      <section id="case-studies" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest border border-blue-500/30">Proyek Unggulan</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Kinerja yang Telah Terbukti</h2>
              <p className="text-slate-400 text-lg">Studi kasus teknis penyelesaian masalah tata kelola air pada fasilitas kritikal.</p>
            </div>
            <button onClick={() => setCurrentPage('proyek')} className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
              Lihat Seluruh Portofolio <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
            {/* Background glow effect for the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            <AnimatedCounter 
              icon={<Zap className="w-7 h-7 text-blue-400" />}
              end={30} 
              suffix="%" 
              title="Penghematan Energi" 
              desc="Efisiensi daya rata-rata berkat integrasi VFD dan Energy Recovery Device (ERD) terbaru."
            />
            <AnimatedCounter 
              icon={<ShieldCheck className="w-7 h-7 text-emerald-400" />}
              end={100} 
              suffix="%" 
              title="Kepatuhan Mutu KLHK" 
              desc="Garansi penuh bahwa seluruh parameter air limbah (*effluent*) memenuhi regulasi lingkungan."
            />
            <AnimatedCounter 
              icon={<Factory className="w-7 h-7 text-cyan-400" />}
              end={50} 
              suffix="+" 
              title="Plant Industri Selesai" 
              desc="Portofolio rekam jejak penyelesaian proyek skala besar untuk berbagai kawasan industri."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-2xl overflow-hidden group">
              <div className="h-64 bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors z-10"></div>
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-swro-bwro-desalinasi-air-laut.webp" alt="SWRO Pulau Tayando" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 relative z-20">
                <div className="text-blue-400 font-bold text-sm mb-3">INFRASTRUKTUR AIR BERSIH DAERAH KEPULAUAN</div>
                <h3 className="text-2xl font-bold mb-4 text-white">SWRO Pulau Tayando</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">Pengadaan dan instalasi unit pengolahan air laut (Sea Water Reverse Osmosis) untuk memenuhi kebutuhan air bersih masyarakat kepulauan secara berkelanjutan.</p>
                <div className="space-y-2 text-slate-300 text-sm mb-8">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">Teknologi Inti:</span>
                    <span className="font-mono font-bold text-white">Desalinasi SWRO</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">Lokasi:</span>
                    <span className="font-mono font-bold text-white">Pulau Tayando, Maluku</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-slate-400">Pemberi Kerja:</span>
                    <span className="font-mono font-bold text-white">Kementerian PUPR</span>
                  </div>
                </div>
                <button onClick={() => setCurrentPage('proyek')} className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-bold flex justify-center items-center gap-2">
                  <FileText className="w-4 h-4" /> Baca Studi Kasus
                </button>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl overflow-hidden group">
              <div className="h-64 bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/40 group-hover:bg-emerald-900/20 transition-colors z-10"></div>
                <img src="https://mizuiosmosa.co.id/wp-content/uploads/2026/01/instalasi-demineralisasi-water-treatment-pabrik-sawit.webp" alt="Demineralisasi Pabrik" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 relative z-20">
                <div className="text-emerald-400 font-bold text-sm mb-3">INDUSTRI AGRO & PERKEBUNAN</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Sistem Demineralisasi (Cation-Anion)</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">Perancangan unit water treatment plant (WTP) untuk mensuplai boiler pabrik kelapa sawit dengan air ultra-murni guna mencegah kerak dan korosi pipa.</p>
                <div className="space-y-2 text-slate-300 text-sm mb-8">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">Teknologi Inti:</span>
                    <span className="font-mono font-bold text-white">Mixed-Bed Demineralization</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">Target Konduktivitas:</span>
                    <span className="font-mono font-bold text-white">&lt; 0.2 µS/cm</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-slate-400">Klien Industri:</span>
                    <span className="font-mono font-bold text-white">PT Evans Indonesia</span>
                  </div>
                </div>
                <button onClick={() => setCurrentPage('proyek')} className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-bold flex justify-center items-center gap-2">
                  <FileText className="w-4 h-4" /> Baca Studi Kasus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Section 6: Mitra Strategis Kami */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest border border-slate-200">Mitra Strategis Kami</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Dipercaya Oleh Pemimpin Industri</h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            Sebagai penyedia jasa terkemuka, kami telah menjadi mitra strategis untuk proyek pengolahan air berskala nasional, bekerja sama dengan lembaga pemerintah dan perusahaan multinasional.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl md:text-3xl font-black text-blue-900 border-b-4 border-blue-900 pb-1">KEMENTERIAN PUPR</div>
            <div className="text-2xl md:text-3xl font-bold text-slate-700">WASKITA <span className="font-light">Karya</span></div>
            <div className="text-2xl md:text-3xl font-black italic text-emerald-800">PT EVANS INDONESIA</div>
            <div className="text-xl md:text-2xl font-bold text-cyan-800 border-2 border-current px-4 py-2">PERUMDA KOTA TUAL</div>
          </div>
        </div>
      </section>

      {/* Lead Magnet: Technical Whitepaper */}
      <section className="py-20 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Mockup Book */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-56 h-72 bg-slate-900 rounded-lg shadow-2xl border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400"></div>
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="text-cyan-400 text-[10px] font-black mb-3 tracking-widest uppercase">Technical Whitepaper</div>
                <div className="text-white font-bold text-xl leading-tight mb-4">Panduan Reduksi OPEX Instalasi SWRO 2026</div>
                <div className="text-slate-400 text-xs">Oleh: Mizui Engineering Team</div>
              </div>
              <div className="flex justify-end relative z-10"><BookOpen className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors" /></div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-extrabold mb-4">Download Technical Whitepaper Gratis</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl leading-relaxed">
              Pelajari metodologi komprehensif kami dalam menurunkan konsumsi spesifik energi desalinasi hingga 40% dan memperpanjang umur membran RO. Eksklusif untuk *Plant Manager* dan *Lead Engineer*.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Alamat Email Perusahaan" className="flex-1 px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/20">
                <Download className="w-5 h-5" /> Download PDF
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Suggested Insights / Wawasan (AEO & Long-tail SEO) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Wawasan Industri</div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Update Teknologi & Studi Kasus Water Treatment</h2>
              <p className="text-slate-600 text-lg">Dapatkan informasi terkini mengenai pencapaian rekayasa kami, keberhasilan komisioning, dan wawasan seputar teknologi pengolahan air.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
              Lihat Semua Artikel <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">Regulasi KLHK</span>
                </div>
                <BookOpen className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-900/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                Memahami Baku Mutu Air Limbah Industri Kimia Sesuai Permen LHK Terbaru
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Panduan komprehensif bagi Plant Manager untuk memastikan IPAL fasilitas memenuhi standar ketat pembuangan limbah B3.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-md">Optimasi OPEX</span>
                </div>
                <Settings className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-emerald-900/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                Cara Kerja Isobaric Energy Recovery Device pada Sistem SWRO
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Analisis teknis bagaimana ERD mutakhir mampu memangkas konsumsi spesifik energi desalinasi air laut hingga 40%.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/80 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-md">Maintenance</span>
                </div>
                <Waves className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-indigo-900/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                Mencegah Biofouling pada Membran RO Industri Makanan & Minuman
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Strategi pretreatment dan dosis kimia yang tepat untuk memperpanjang umur pakai membran Reverse Osmosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured FAQ (AEO Foundation) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Pertanyaan Teknis Umum (FAQ)</h2>
            <p className="text-slate-600">Detail kapabilitas dan standar rekayasa kami, dirancang untuk memudahkan evaluasi vendor Anda.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-lg pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 text-slate-600 leading-relaxed overflow-hidden"
                    >
                      <div className="pb-6 pt-2 border-t border-slate-100 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / RFQ Lead Generation */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Siap Mengoptimalkan Utilitas Air Bersama Spesialis <span className="text-blue-200">Water Treatment Indonesia?</span></h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Diskusikan parameter *feed water* dan target *effluent* Anda dengan tim *engineer* kami. Dapatkan asesmen awal dan estimasi desain *budgetary* dalam 48 jam.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => setIsRfqOpen(true)} className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl shadow-blue-900/30">
              Request for Quotation (RFQ)
            </button>
            <button onClick={() => setIsRfqOpen(true)} className="bg-blue-700 hover:bg-blue-800 border border-blue-500 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" /> Jadwalkan Meeting
            </button>
          </div>
        </div>
      </section>
      </>
      )}

      {currentPage === 'layanan' && (
        <>
          <PageLayanan onNavigate={setCurrentPage} />
          <div className="bg-slate-50 min-h-[80vh] pb-24 border-t border-slate-200">
            <div className="py-24 max-w-7xl mx-auto px-6">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest border border-blue-200">Spesifikasi Teknis</div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Komparasi Teknologi & Simulasi OPEX</h1>
                <p className="text-lg text-slate-600 leading-relaxed">Mizui Osmosa Teknovasi menawarkan teknologi terdepan dengan kapabilitas komparatif terbaik untuk efisiensi investasi water treatment Anda.</p>
              </div>
              <ComparisonTable />
              <div className="mt-16">
                <WaterCalculator />
              </div>
            </div>
          </div>
          
          {/* NEW SECTION: CALL TO ACTION (CTA) - FULL WIDTH */}
          <div className="bg-blue-600 relative overflow-hidden py-20">
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
             <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
             
             <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Siap Meningkatkan Efisiensi Pengolahan Air Anda?</h2>
                <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
                  Diskusikan tantangan kualitas air baku dan target produksi Anda bersama tenaga ahli kami. Dapatkan solusi teknis awal dari spesialis water treatment industri yang terpercaya.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                   <button 
                     onClick={() => setCurrentPage('kontak')}
                     className="bg-white hover:bg-slate-50 text-blue-700 font-bold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 group"
                   >
                     <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                     Konsultasi Sekarang
                   </button>
                   <button 
                     onClick={() => setCurrentPage('proyek')}
                     className="bg-blue-700/50 hover:bg-blue-700/80 border border-blue-400/30 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm flex items-center justify-center gap-3 group"
                   >
                     Lihat Detail Studi Kasus <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
          </div>
        </>
      )}

      {currentPage === 'proyek' && <PageProyek />}
      {currentPage === 'wawasan' && <PageWawasan />}
      {currentPage === 'tentang' && <PageTentangKami onNavigate={setCurrentPage} />}
      {currentPage === 'kontak' && <PageKontak />}
      {currentPage === 'sertifikasi' && <PageSertifikasi />}
      {currentPage === 'karir' && <PageKarir />}
      {currentPage.startsWith('layanan-') && <PageDetailLayanan serviceId={currentPage} onNavigate={setCurrentPage} />}

      {/* Newsletter Pre-Footer CTA */}
      <section className="bg-blue-700 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <FileText className="w-6 h-6 text-blue-300" />
              Wawasan Tata Kelola Air Industri
            </h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">Berlangganan buletin teknis bulanan kami untuk menerima pembaruan teknologi membran, studi efisiensi OPEX, dan analisis kepatuhan lingkungan langsung di kotak masuk Anda.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email profesional Anda..." 
              className="bg-blue-800/50 border border-blue-500/50 text-white placeholder:text-blue-300 px-5 py-3.5 rounded-xl focus:outline-none focus:bg-blue-800 focus:border-white focus:ring-1 focus:ring-white min-w-[280px] w-full md:w-auto" 
              required
            />
            <button 
              type="submit" 
              className="bg-white hover:bg-slate-100 text-blue-700 font-bold px-8 py-3.5 rounded-xl transition-colors whitespace-nowrap shadow-xl shadow-blue-900/20"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </section>

      {/* Footer Prototype */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">

         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                  <Droplet className="w-6 h-6 text-blue-500" />
                  <span className="font-bold text-xl text-white tracking-tight">PT Mizui Osmosa Teknovasi</span>
              </div>
              <p className="text-sm max-w-md leading-relaxed mb-8">Penyedia solusi tata kelola air industri terpercaya & berpengalaman 20+ tahun. Spesialis EPC untuk sistem SWRO, Demineralisasi, dan WWTP.</p>
              
              {/* Trust Badges moved here */}
              <div className="flex flex-wrap gap-6 opacity-80">
                <div className="flex items-center gap-3"><Award className="w-8 h-8 text-slate-500" /> <div><div className="text-white font-bold text-sm">ISO 9001:2015</div><div className="text-[11px]">Quality Management</div></div></div>
                <div className="flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-slate-500" /> <div><div className="text-white font-bold text-sm">ISO 14001:2015</div><div className="text-[11px]">Environmental Safety</div></div></div>
                <div className="flex items-center gap-3"><Globe className="w-8 h-8 text-slate-500" /> <div><div className="text-white font-bold text-sm">IDA Member</div><div className="text-[11px]">Intl. Desalination Assoc.</div></div></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Solusi & Layanan</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setCurrentPage('layanan')} className="hover:text-blue-400 transition-colors focus:outline-none">Sea Water Reverse Osmosis</button></li>
                <li><button onClick={() => setCurrentPage('layanan')} className="hover:text-blue-400 transition-colors focus:outline-none">Demineralization Plant</button></li>
                <li><button onClick={() => setCurrentPage('layanan')} className="hover:text-blue-400 transition-colors focus:outline-none">Instalasi Pengolahan Air Limbah</button></li>
                <li><button onClick={() => setCurrentPage('layanan')} className="hover:text-blue-400 transition-colors focus:outline-none">O&M Services</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setCurrentPage('tentang')} className="hover:text-blue-400 transition-colors focus:outline-none">Tentang Kami</button></li>
                <li><button onClick={() => setCurrentPage('sertifikasi')} className="hover:text-blue-400 transition-colors focus:outline-none">Sertifikasi & QHSE</button></li>
                <li><button onClick={() => setCurrentPage('karir')} className="hover:text-blue-400 transition-colors focus:outline-none">Karir Engineer</button></li>
                <li><button onClick={() => setCurrentPage('kontak')} className="hover:text-blue-400 transition-colors focus:outline-none">Kontak</button></li>
              </ul>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 mt-16 pt-10 border-t border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-400">
               <div className="flex items-start gap-4">
                 <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                 <div><strong className="text-white block mb-1 font-bold text-base">Kantor Operasional</strong>Jl. Tlajung Udik No. 52D Gunung Putri,<br/>Bogor 16962 Jawa Barat</div>
               </div>
               <div className="flex items-start gap-4">
                 <Building2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                 <div><strong className="text-white block mb-1 font-bold text-base">Kantor Legal</strong>Jl. Gading Kirana Timur A.11/15,<br/>Kelapa Gading, Jakarta Utara 14240</div>
               </div>
               <div className="flex flex-col justify-center gap-4">
                 <div className="flex items-center gap-4">
                   <PhoneCall className="w-6 h-6 text-blue-500 shrink-0" />
                   <div><strong className="text-white font-bold text-base mr-2">Kontak:</strong> +62 813 1417 0122</div>
                 </div>
                 <div className="flex items-center gap-4">
                   <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                   <div><strong className="text-white font-bold text-base mr-2">Email:</strong> info@mizuiosmosa.co.id</div>
                 </div>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
           <p>© 2026 PT Mizui Osmosa Teknovasi. All rights reserved.</p>
           <div className="flex gap-6">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
           </div>
         </div>
      </footer>

      {/* RFQ Slide-out Drawer */}
      <AnimatePresence>
        {isRfqOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
              onClick={() => setIsRfqOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 sticky top-0 z-10">
                <h3 className="text-xl font-bold text-slate-800">Request for Quotation</h3>
                <button onClick={() => setIsRfqOpen(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 flex-1">
                 <p className="text-slate-600 text-sm mb-6">Silakan lengkapi detail awal proyek Anda. Tim *engineer* kami akan merespons dengan desain *budgetary* dalam 48 jam.</p>
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Nama Lengkap</label>
                     <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Cth: John Doe" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Perusahaan</label>
                     <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Cth: PT Industri Maju" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Email Profesional</label>
                     <input type="email" className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="john@company.com" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Sektor Industri</label>
                     <select className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                       <option>Pembangkit Listrik (Power Plant)</option>
                       <option>Makanan & Minuman (F&B)</option>
                       <option>Petrokimia / Migas</option>
                       <option>Kawasan Industri</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Parameter Teknis / Pesan</label>
                     <textarea rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Sebutkan target kapasitas (m3/hari) dan kondisi air baku/limbah..."></textarea>
                   </div>
                   <button onClick={() => setIsRfqOpen(false)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-500/20 transition-all">
                     <Send className="w-4 h-4" /> Kirim Request
                   </button>
                 </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Live Consultation Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 mb-4 overflow-hidden flex flex-col origin-bottom-right"
            >
              <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm">Engineering Support</h4>
                  <p className="text-xs text-blue-200">Online | Balas dalam 5 mnt</p>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-blue-700 p-1.5 rounded-lg transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 bg-slate-50 h-64 overflow-y-auto flex flex-col gap-3">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`p-3 rounded-xl shadow-sm text-sm border leading-relaxed ${msg.role === 'bot' ? 'bg-white text-slate-700 border-slate-100 self-start rounded-tl-sm max-w-[85%]' : 'bg-blue-600 text-white border-blue-700 self-end rounded-tr-sm max-w-[85%]'}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="p-3 border-t border-slate-100 bg-white flex gap-2">
                <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Ketik pesan..." className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                <button type="submit" className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-600 hover:bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-blue-600/30 transition-transform hover:scale-105 active:scale-95"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc, tags }: { icon: React.ReactNode, title: string, desc: string, tags: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 mb-8 leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((t: string, i: number) => (
          <span key={i} className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function LineChartMockup() {
  return (
    <div className="flex items-end gap-1.5 h-16 opacity-80">
      <div className="w-3 bg-blue-100 rounded-t h-[90%]"></div>
      <div className="w-3 bg-blue-200 rounded-t h-[80%]"></div>
      <div className="w-3 bg-blue-300 rounded-t h-[75%]"></div>
      <div className="w-3 bg-blue-400 rounded-t h-[60%]"></div>
      <div className="w-3 bg-blue-500 rounded-t h-[45%]"></div>
      <div className="w-3 bg-blue-600 rounded-t h-[30%] shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
    </div>
  )
}

function MapVisualization() {
  const handleScrollToCaseStudies = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('case-studies');
    if(elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Regional Project Map</div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Cakupan Layanan Nasional</h2>
          <p className="text-slate-600 text-lg">Hadir di kawasan industri strategis seluruh Indonesia, memastikan respons *engineering* yang cepat dan andal.</p>
        </div>
        <div className="relative w-full aspect-[2/1] min-h-[300px] bg-sky-50 rounded-3xl overflow-hidden flex items-center justify-center shadow-inner border border-sky-100">
           <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a4/Indonesia_location_map.svg')] opacity-60 bg-contain bg-center bg-no-repeat mix-blend-multiply"></div>
           {/* Adjusted coordinates: Shifted left and up */}
           <MapPing top="35%" left="17%" label="Sumatera (Petrokimia)" />
           <MapPing top="68%" left="28%" label="Jawa Barat (Kawasan Industri)" />
           <MapPing top="70%" left="35%" label="Jawa Timur (F&B)" />
           <MapPing top="38%" left="47%" label="Kalimantan (PLTU)" />
           <MapPing top="50%" left="57%" label="Sulawesi Tengah (Smelter)" />
           <MapPing top="60%" left="77%" label="Maluku (SWRO Desalinasi)" />
        </div>
        <div className="mt-12 text-center">
           <button onClick={() => window.scrollTo(0,0)} className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30">
              Lihat Detail Studi Kasus <ArrowRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </section>
  )
}

function MapPing({ top, left, label }: { top: string, left: string, label: string }) {
  return (
    <div className="absolute flex flex-col items-center group cursor-pointer z-10" style={{ top, left }}>
      <div className="relative flex justify-center items-center">
        <div className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-400 opacity-75"></div>
        <div className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-white shadow-lg"></div>
      </div>
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
        {label}
      </div>
    </div>
  )
}

function AnimatedCounter({ icon, end, suffix, title, desc }: { icon: React.ReactNode, end: number, suffix: string, title: string, desc?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="relative group p-[1px] rounded-[24px] overflow-hidden bg-slate-800 hover:bg-gradient-to-b hover:from-blue-500/50 hover:to-slate-800 transition-all duration-700 shadow-2xl">
       <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
       <div className="relative h-full bg-slate-900/90 backdrop-blur-xl p-8 lg:p-10 rounded-[23px] flex flex-col items-start transition-colors">
          <div className="p-4 rounded-2xl bg-slate-800/80 mb-8 group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-500 border border-slate-700/50 shadow-inner">
             {icon}
          </div>
          <div className="flex items-baseline gap-1 mb-3">
             <span className="text-6xl font-black text-white tracking-tighter">{count}</span>
             <span className="text-4xl font-bold text-blue-500">{suffix}</span>
          </div>
          <h4 className="text-xl font-bold text-slate-100 mb-3">{title}</h4>
          {desc && <p className="text-sm text-slate-400 leading-relaxed font-medium">{desc}</p>}
       </div>
    </div>
  );
}

function WaterCalculator() {
  const [appType, setAppType] = useState('swro');
  const [volume, setVolume] = useState(500);

  // Calculation Logic
  let techRecommendation = "";
  let energyEstimate = "";
  let footprintEstimate = "";

  if (appType === 'swro') {
    techRecommendation = volume < 1000 ? "Kompak Skid-Mounted SWRO + ERD" : "Sistem Terintegrasi UF + SWRO dengan High-Efficiency ERD";
    energyEstimate = "2.5 - 3.5 kWh/m³";
    footprintEstimate = volume < 1000 ? "20 - 40 m²" : `${Math.floor(volume * 0.05)} - ${Math.floor(volume * 0.08)} m²`;
  } else if (appType === 'demin') {
    techRecommendation = volume < 1000 ? "2-Pass RO + Cation/Anion Exchanger" : "RO + Mixed Bed / Electrodeionization (EDI)";
    energyEstimate = "1.0 - 1.8 kWh/m³";
    footprintEstimate = volume < 1000 ? "15 - 30 m²" : `${Math.floor(volume * 0.03)} - ${Math.floor(volume * 0.05)} m²`;
  } else {
    techRecommendation = volume < 1000 ? "Paket IPAL Biologis (Extended Aeration)" : "Membrane Bioreactor (MBR) + Advanced Clarifier";
    energyEstimate = "0.5 - 1.2 kWh/m³";
    footprintEstimate = volume < 1000 ? "30 - 60 m²" : `${Math.floor(volume * 0.08)} - ${Math.floor(volume * 0.12)} m²`;
  }

  let scaleRecommendation = "";
  if (volume < 500) scaleRecommendation = "Sistem Paket Kompak (Skala Kecil)";
  else if (volume <= 5000) scaleRecommendation = "Sistem Modular Terdesentralisasi (Skala Menengah)";
  else scaleRecommendation = "Plant Industri Terpusat (Skala Besar)";

  return (
    <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white mt-16 shadow-2xl border border-slate-800 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="mb-10 text-center md:text-left">
        <h3 className="text-3xl font-extrabold mb-4 flex items-center justify-center md:justify-start gap-3">
          <Settings className="w-8 h-8 text-cyan-400" /> 
          Kalkulator Spesifikasi Teknis
        </h3>
        <p className="text-slate-400 max-w-2xl text-lg">Pilih aplikasi dan atur kapasitas kebutuhan air untuk mendapatkan estimasi awal teknologi, konsumsi energi, dan kebutuhan area lahan.</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">1. Jenis Aplikasi Sistem</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button 
                onClick={() => setAppType('swro')}
                className={`p-4 rounded-xl border text-sm font-bold transition-all flex flex-col items-center gap-2 text-center ${appType === 'swro' ? 'bg-blue-600/20 border-blue-500 text-blue-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
              >
                <Droplet className="w-6 h-6" /> Desalinasi (SWRO)
              </button>
              <button 
                onClick={() => setAppType('demin')}
                className={`p-4 rounded-xl border text-sm font-bold transition-all flex flex-col items-center gap-2 text-center ${appType === 'demin' ? 'bg-cyan-600/20 border-cyan-500 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
              >
                <FlaskConical className="w-6 h-6" /> Demineralisasi
              </button>
              <button 
                onClick={() => setAppType('wwtp')}
                className={`p-4 rounded-xl border text-sm font-bold transition-all flex flex-col items-center gap-2 text-center ${appType === 'wwtp' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
              >
                <Factory className="w-6 h-6" /> IPAL / WWTP
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">2. Kapasitas Produksi Harian</label>
            <div className="flex justify-between mb-4 items-end">
               <div className="text-4xl font-black text-white">{volume.toLocaleString()} <span className="text-xl text-slate-500 font-bold">m³/hari</span></div>
            </div>
            <input 
              type="range" min="100" max="15000" step="100"
              value={volume} onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" 
            />
            <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
              <span>100 m³</span>
              <span>15,000+ m³</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-inner">
           <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
             <Activity className="w-4 h-4 text-cyan-400" /> Hasil Simulasi Awal
           </h4>
           
           <div className="space-y-6">
              <div>
                <div className="text-slate-500 text-xs uppercase font-bold mb-1">Kategori Skala</div>
                <div className="text-lg font-bold text-white">{scaleRecommendation}</div>
              </div>
              
              <div className="h-px w-full bg-slate-700/50"></div>
              
              <div>
                <div className="text-slate-500 text-xs uppercase font-bold mb-1">Rekomendasi Teknologi Utama</div>
                <div className="text-lg font-bold text-cyan-400">{techRecommendation}</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-slate-500 text-xs uppercase font-bold mb-1">Estimasi Konsumsi OPEX</div>
                  <div className="text-xl font-bold text-white">{energyEstimate}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase font-bold mb-1">Kebutuhan Luas Area</div>
                  <div className="text-xl font-bold text-white">{footprintEstimate}</div>
                </div>
              </div>
           </div>

           <div className="mt-8 bg-blue-900/20 border border-blue-500/20 p-4 rounded-xl text-sm text-blue-200">
             <strong className="text-blue-400">Catatan:</strong> Ini adalah kalkulasi *rule-of-thumb*. Analisis laboratorium air baku (Raw Water Analysis) tetap dibutuhkan untuk desain P&ID akhir.
           </div>
        </div>
      </div>
    </div>
  )
}

function ComparisonTable() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">Komparasi Spesifikasi Teknologi</h3>
      <div className="overflow-x-auto pb-4">
        <table className="w-full text-left border-collapse min-w-[800px] shadow-sm rounded-2xl overflow-hidden">
          <thead>
            <tr>
              <th className="py-5 px-6 text-slate-800 font-extrabold bg-slate-200 border-b-2 border-slate-300 w-1/4">Parameter Teknis</th>
              <th className="py-5 px-6 text-blue-900 font-extrabold bg-blue-100 border-b-2 border-blue-200 w-1/4">SWRO (Desalinasi)</th>
              <th className="py-5 px-6 text-slate-800 font-extrabold bg-slate-100 border-b-2 border-slate-200 w-1/4">Demineralisasi</th>
              <th className="py-5 px-6 text-slate-800 font-extrabold bg-slate-100 border-b-2 border-slate-200 w-1/4">WWTP (IPAL)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-4 px-6 font-bold text-slate-700">Target Output</td>
              <td className="py-4 px-6 text-slate-600 font-medium bg-blue-50/30">Air Bersih (TDS &lt; 500ppm)</td>
              <td className="py-4 px-6 text-slate-600 font-medium">Air Ultramurni (&lt; 0.1 µS/cm)</td>
              <td className="py-4 px-6 text-slate-600 font-medium">Baku Mutu KLHK (COD/BOD)</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-4 px-6 font-bold text-slate-700">Teknologi Inti</td>
              <td className="py-4 px-6 text-slate-600 font-medium bg-blue-50/30">Reverse Osmosis + ERD</td>
              <td className="py-4 px-6 text-slate-600 font-medium">Mixed Bed / EDI</td>
              <td className="py-4 px-6 text-slate-600 font-medium">MBBR / MBR / Fisikokimia</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-4 px-6 font-bold text-slate-700">Efisiensi (OPEX)</td>
              <td className="py-4 px-6 text-emerald-600 font-bold bg-blue-50/30">Tinggi (Hemat Energi 40%)</td>
              <td className="py-4 px-6 text-slate-600 font-medium">Tergantung Konsumsi Kimia</td>
              <td className="py-4 px-6 text-emerald-600 font-bold">Tinggi (Automasi Penuh)</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="py-4 px-6 font-bold text-slate-700">Target Sektor</td>
              <td className="py-4 px-6 text-slate-600 font-medium bg-blue-50/30">Kawasan Pesisir & Pulau</td>
              <td className="py-4 px-6 text-slate-600 font-medium">Boiler Pembangkit Listrik</td>
              <td className="py-4 px-6 text-slate-600 font-medium">Seluruh Kawasan Industri</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
