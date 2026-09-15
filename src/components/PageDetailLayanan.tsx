import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, Factory, Droplet, Settings, FileText, Download, ShieldCheck, Zap, ListChecks, ChevronDown, Activity, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PageDetailLayananProps {
  serviceId: string;
  onNavigate: (page: string) => void;
}

export default function PageDetailLayanan({ serviceId, onNavigate }: PageDetailLayananProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceData: Record<string, any> = {
    'layanan-swro': {
      title: 'Reverse Osmosis Air Laut (SWRO)',
      shortTitle: 'SWRO',
      subtitle: 'Desalinasi Efisiensi Tinggi untuk Kawasan Pesisir & Maritim',
      desc: 'Sistem SWRO tangguh dari PT Mizui Osmosa Teknovasi dirancang khusus untuk menghadapi salinitas tinggi dan korosifitas air laut. Dengan mengintegrasikan teknologi Energy Recovery Device (ERD), kami menekan OPEX konsumsi energi secara signifikan, menjadikan desalinasi lebih terjangkau bagi industri, resort pesisir, dan pembangkit listrik.',
      image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-desalinasi-air-laut-swro-high-pressure-mizui-osmosa-teknovasi.webp',
      specs: [
        'Kapasitas desain mulai 50 m³/hari hingga 5.000+ m³/hari',
        'Material konstruksi Duplex/Super Duplex Stainless Steel Anti-Korosi',
        'Efisiensi tinggi dengan Energy Recovery Device (ERD)',
        'TDS Produk < 500 ppm (Sesuai standar air bersih/minum)'
      ],
      applications: ['Resort Kepulauan', 'Pembangkit Listrik Pesisir (PLTU)', 'Fasilitas Migas Offshore'],
      relatedSuggestions: [
        { id: 'layanan-bwro', title: 'BWRO (Air Payau)', desc: 'Alternatif desalinasi untuk air baku dengan salinitas lebih rendah dan TDS menengah.', image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/unit-reverse-osmosis-air-payau-bwro-industrial-mizui-osmosa-teknovasi.webp' },
        { id: 'layanan-demin', title: 'Demineralisasi & EDI', desc: 'Instalasi lanjutan untuk mencapai kemurnian air tertinggi (Ultra-pure water) pasca-SWRO.', image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-demineralisasi-dan-water-softener-untuk-utilitas-pabrik.webp' }
      ],
      
      // NEW RICH CONTENT
      processFlow: [
        { step: '1. Seawater Intake & Pre-Chlorination', desc: 'Pengambilan air laut secara aman dan injeksi klorin untuk mencegah pertumbuhan biofouling sejak dini.' },
        { step: '2. Pre-Treatment (UF / Multi-Media)', desc: 'Penyaringan partikel tersuspensi (TSS) untuk menurunkan Silt Density Index (SDI) di bawah angka 3.' },
        { step: '3. High-Pressure SWRO & ERD', desc: 'Pemisahan ion garam menggunakan membran pada tekanan 55-70 bar, dipadukan dengan Energy Recovery Device.' },
        { step: '4. Post-Treatment & Remineralization', desc: 'Penyesuaian pH dan penambahan mineral agar air stabil, tidak korosif, dan sesuai standar kelayakan pakai.' }
      ],
      techSpecs: [
        { label: 'Feed Water TDS (Air Baku)', value: '35,000 - 45,000 ppm' },
        { label: 'Product Water TDS', value: '< 500 ppm (WHO Standard)' },
        { label: 'Operating Pressure', value: '55 - 75 Bar' },
        { label: 'System Recovery Rate', value: '35% - 45%' },
        { label: 'Specific Energy Consumption', value: '2.5 - 3.5 kWh/m³ (dengan ERD)' },
        { label: 'High Pressure Piping Material', value: 'Duplex Stainless Steel 2205 / 2507' },
      ],
      highlight: {
        title: 'Fokus Efisiensi: Energy Recovery Device (ERD)',
        desc: 'Sistem SWRO konvensional membuang air konsentrat (brine) bertekanan tinggi begitu saja. Kami mengintegrasikan Isobaric ERD (Pressure Exchanger) yang menangkap 95% energi hidrolik dari brine untuk menekan air baku masuk. Hasilnya? Konsumsi listrik instalasi Anda turun drastis hingga 60%, menghemat miliaran rupiah OPEX tahunan.',
        icon: <Zap className="w-6 h-6 text-yellow-500" />
      },
      faqs: [
        { q: 'Berapa rata-rata umur pakai (lifespan) membran SWRO?', a: 'Dengan sistem pre-treatment yang dirancang sempurna oleh Mizui Osmosa dan prosedur pencucian (CIP) yang disiplin, membran SWRO industri dapat beroperasi optimal antara 3 hingga 5 tahun sebelum perlu penggantian.' },
        { q: 'Mengapa material perpipaan harus menggunakan Duplex Stainless Steel?', a: 'Air laut di bawah tekanan tinggi (60+ bar) memiliki tingkat korosifitas klorida yang ekstrem. Baja tahan karat standar seperti SS316 akan cepat mengalami pitting corrosion. Material Duplex/Super Duplex memastikan umur aset (asset longevity) puluhan tahun tanpa risiko pecah pipa.' }
      ]
    },
    'layanan-bwro': {
      title: 'Reverse Osmosis Air Payau (BWRO)',
      shortTitle: 'BWRO',
      subtitle: 'Pemurnian Air Proses Industri (TDS Menengah)',
      desc: 'Sistem BWRO kami adalah solusi pemurnian paling andal dan ekonomis untuk mengolah air tanah atau air permukaan dengan tingkat TDS menengah. Sistem ini menghilangkan hingga 99.6% garam terlarut, mineral, bakteri, dan senyawa organik, menghasilkan air murni yang vital bagi operasional utilitas industri dan boiler.',
      image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/unit-reverse-osmosis-air-payau-bwro-industrial-mizui-osmosa-teknovasi.webp',
      specs: [
        'Eliminasi hingga 99.6% Garam (TDS Rejection)',
        'Pre-treatment komprehensif (UF/Multimedia Filter)',
        'Otomatisasi penuh (PLC & HMI Integration)',
        'Desain Skid-Mounted yang ringkas (Plug & Play)'
      ],
      applications: ['Air Umpan Boiler', 'Industri Makanan & Minuman', 'Kawasan Manufaktur'],
      // NEW RICH CONTENT
      processFlow: [
        { step: '1. Raw Water Tank & Feed Pump', desc: 'Penampungan awal air tanah/sungai dan pemompaan menuju unit filtrasi dasar.' },
        { step: '2. Multi-Media & Carbon Filtration', desc: 'Menyaring partikel tersuspensi, lumpur, serta menghilangkan bau, warna, dan klorin bebas.' },
        { step: '3. Antiscalant Dosing & Cartridge Filter', desc: 'Injeksi kimia anti-kerak untuk melindungi pori-pori membran dan penyaringan partikel mikro 5 micron.' },
        { step: '4. High-Pressure BWRO System', desc: 'Proses inti reverse osmosis pada tekanan 10-25 bar untuk memisahkan 99% ion mineral terlarut.' }
      ],
      techSpecs: [
        { label: 'Feed Water TDS', value: '1,000 - 10,000 ppm (Air Payau/Tanah)' },
        { label: 'Product Water TDS', value: '< 50 ppm' },
        { label: 'Operating Pressure', value: '10 - 25 Bar' },
        { label: 'System Recovery Rate', value: '50% - 75%' },
        { label: 'Membrane Type', value: 'Polyamide Thin-Film Composite (TFC)' },
        { label: 'Control System', value: 'Smart PLC dengan HMI Touchscreen' }
      ],
      highlight: {
        title: 'Fokus Reliabilitas: Smart Automation & Anti-Fouling',
        desc: 'Berbeda dengan sistem manual, unit BWRO kami dilengkapi sensor konduktivitas digital dan PLC. Sistem secara otomatis melakukan proses bilas (auto-flush) pada membran saat mesin mati, mencegah pengendapan mineral (fouling) yang dapat memperpendek umur membran secara prematur.',
        icon: <Settings className="w-6 h-6 text-blue-500" />
      },
      faqs: [
        { q: 'Apa perbedaan utama antara sistem BWRO dan SWRO?', a: 'Perbedaan utama terletak pada tekanan operasional dan spesifikasi pompa. Karena tingkat salinitas air payau (BWRO) jauh lebih rendah dari air laut, BWRO hanya membutuhkan tekanan 10-25 bar, sedangkan SWRO memerlukan 55-70 bar dengan perpipaan khusus Duplex.' },
        { q: 'Seberapa sering filter cartridge (pre-filter) harus diganti?', a: 'Secara umum, cartridge filter 5 micron perlu diganti setiap 1-3 bulan tergantung pada tingkat kekeruhan (turbidity) air baku Anda. Sistem HMI kami akan memberikan peringatan otomatis jika mendeteksi perbedaan tekanan (pressure drop) yang mengindikasikan filter kotor.' }
      ],
      relatedSuggestions: [
        { id: 'layanan-swro', title: 'SWRO (Air Laut)', desc: 'Desalinasi tangguh untuk air baku bersalinitas ekstrem dan laut.', image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-desalinasi-air-laut-swro-high-pressure-mizui-osmosa-teknovasi.webp' },
        { id: 'layanan-demin', title: 'Demineralisasi & EDI', desc: 'Sistem lanjutan mencapai Ultra-pure water untuk boiler pasca pengolahan BWRO.', image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-demineralisasi-dan-water-softener-untuk-utilitas-pabrik.webp' }
      ]
    },
    'layanan-demin': {
      title: 'Demineralisasi Industri & Softener',
      shortTitle: 'Demineralisasi',
      subtitle: 'Proteksi Aset Vital & Pencapaian Ultra-Pure Water',
      desc: 'Sistem berbasis resin (Ion Exchange) dan Electrodeionization (EDI) yang dirancang untuk mencapai konduktivitas sangat rendah. Kami membantu pabrik Anda menghilangkan kesadahan air dan mineral spesifik guna mencegah kerak (scaling) pada mesin vital, turbin uap, dan boiler bertekanan tinggi.',
      image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-demineralisasi-dan-water-softener-untuk-utilitas-pabrik.webp',
      specs: [
        'Menghasilkan Ultra-pure Water (< 0.2 µS/cm)',
        'Konfigurasi Cation-Anion Exchanger & Mixed Bed',
        'Sistem regenerasi bahan kimia yang efisien',
        'Mencegah kerak (scaling) pada pipa dan turbin'
      ],
      applications: ['Pembangkit Listrik', 'Pabrik Kelapa Sawit (CPO)', 'Industri Farmasi & Semikonduktor'],
      // NEW RICH CONTENT
      processFlow: [
        { step: '1. Pre-treated Water Feed', desc: 'Air umpan (biasanya dari keluaran sistem RO) masuk dengan kandungan mineral tersisa yang sangat minim.' },
        { step: '2. Cation Exchanger Column', desc: 'Resin kation mengikat ion bermuatan positif (Ca2+, Mg2+, Na+) dan melepaskan ion H+.' },
        { step: '3. Anion Exchanger Column', desc: 'Resin anion mengikat ion bermuatan negatif (Cl-, SO42-, SiO2) dan melepaskan ion OH-, yang bereaksi dengan H+ membentuk H2O murni.' },
        { step: '4. Polishing (Mixed Bed / EDI)', desc: 'Tahap akhir penyempurnaan menggunakan campuran resin atau modul Electrodeionization untuk mencapai konduktivitas nol.' }
      ],
      techSpecs: [
        { label: 'Feed Water Requirement', value: 'RO Permeate (TDS < 20 ppm)' },
        { label: 'Product Water Conductivity', value: '< 0.2 µS/cm (Ultra-pure)' },
        { label: 'Silica Leakage (SiO2)', value: '< 10 ppb' },
        { label: 'Regeneration Chemicals', value: 'HCl / H2SO4 (Kation) & NaOH (Anion)' },
        { label: 'Vessel Material', value: 'FRP (Fiber Reinforced Plastic) / Rubber-lined Steel' },
        { label: 'Polishing Option', value: 'Mixed Bed Resin atau Electrodeionization (EDI)' }
      ],
      highlight: {
        title: 'Fokus Kemurnian: Zero Scaling untuk Boiler Tekanan Tinggi',
        desc: 'Untuk operasional Pembangkit Listrik (PLTU), kehadiran silika dan kesadahan sekecil apa pun akan memicu kerak keras (scaling) pada bilah turbin yang berputar ribuan RPM. Sistem Demineralisasi kami menjamin kebocoran silika di bawah 10 part-per-billion (ppb), memproteksi aset triliunan rupiah dari risiko downtime fatal.',
        icon: <Zap className="w-6 h-6 text-cyan-500" />
      },
      faqs: [
        { q: 'Kapan sebaiknya memilih EDI (Electrodeionization) dibanding Mixed Bed konvensional?', a: 'EDI lebih unggul jika Anda ingin menghindari penanganan bahan kimia asam/basa berbahaya untuk proses regenerasi harian. EDI menggunakan arus listrik untuk regenerasi kontinyu, meski memiliki investasi awal (CAPEX) yang lebih tinggi dibanding Mixed Bed konvensional.' },
        { q: 'Berapa lama siklus operasi sebelum resin harus diregenerasi?', a: 'Siklus operasi (throughput) bergantung penuh pada debit air dan kandungan TDS air umpan. Rata-rata sistem industri dirancang untuk beroperasi 20 hingga 24 jam sebelum membutuhkan regenerasi otomatis selama 2-4 jam.' }
      ],
      relatedSuggestions: [
        { id: 'layanan-bwro', title: 'BWRO (Air Payau)', desc: 'Pre-treatment ideal menekan beban TDS sebelum masuk ke unit resin.', image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/unit-reverse-osmosis-air-payau-bwro-industrial-mizui-osmosa-teknovasi.webp' },
        { id: 'layanan-ipal', title: 'Instalasi Air Limbah (IPAL)', desc: 'Pengolahan efluen industri memastikan limbah cair aman sesuai regulasi.', image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-epc-water-treatment-plant-industri-terintegrasi-mizui-osmosa-teknovasi.webp' }
      ]
    },
    'layanan-ipal': {
      title: 'Instalasi Pengolahan Air Limbah (IPAL)',
      shortTitle: 'IPAL',
      subtitle: 'Kepatuhan Regulasi Lingkungan Industri (WWTP)',
      desc: 'Solusi pengolahan efluen industri komprehensif dari Mizui Osmosa menggunakan teknologi terkini seperti Membrane Bioreactor (MBR) dan Clarifier presisi. Kami memastikan setiap tetes air limbah yang dibuang atau didaur ulang mematuhi standar Baku Mutu Lingkungan secara ketat, menjaga reputasi hijau perusahaan Anda.',
      image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/jasa-epc-water-treatment-plant-industri-terintegrasi-mizui-osmosa-teknovasi.webp',
      specs: [
        'Sesuai standar Permen LHK No. 68 Tahun 2016 (BOD < 30 mg/L)',
        'Integrasi teknologi MBR (Membrane Bioreactor)',
        'Sistem Oil Water Separator & DAF',
        'Desain minim bau dan efisiensi lahan (Compact Footprint)'
      ],
      applications: ['Tekstil & Pewarnaan', 'Pabrik Kertas', 'Kawasan Industri Terpadu'],
      // NEW RICH CONTENT
      processFlow: [
        { step: '1. Screening & Equalization', desc: 'Penyaringan sampah padat kasar (bar screen) dan penyeimbangan debit serta beban polutan di tangki ekualisasi.' },
        { step: '2. Chemical Treatment (Opsional)', desc: 'Proses koagulasi-flokulasi untuk mengendapkan logam berat, zat warna, atau polutan spesifik (khusus tekstil/kimia).' },
        { step: '3. Biological Aeration / MBR', desc: 'Injeksi oksigen tersuspensi agar bakteri aerobik memakan polutan organik (BOD/COD) dengan bantuan membran (MBR).' },
        { step: '4. Clarification & Sludge Handling', desc: 'Pemisahan lumpur biologi dari air bersih, dilanjutkan pemadatan lumpur menggunakan filter press untuk dibuang aman.' }
      ],
      techSpecs: [
        { label: 'Inlet BOD / COD', value: 'Sesuai karakteristik limbah pabrik (Custom)' },
        { label: 'Target Effluent BOD', value: '< 30 mg/L (Memenuhi Permen LHK)' },
        { label: 'Target Effluent TSS', value: '< 30 mg/L' },
        { label: 'Biological Technology', value: 'MBR, MBBR, atau Extended Aeration' },
        { label: 'Sludge Handling', value: 'Filter Press / Belt Press Automation' },
        { label: 'Odour Control', value: 'Tertutup (Covered) dengan Bio-scrubber opsional' }
      ],
      highlight: {
        title: 'Fokus Kepatuhan: Teknologi Membrane Bioreactor (MBR)',
        desc: 'Lahan pabrik terbatas? Teknologi MBR kami menggantikan fungsi tangki clarifier konvensional raksasa dengan membran filtrasi mikroskopis langsung di dalam bak aerasi. Ini menghemat hingga 50% tapak lahan (footprint) proyek, tanpa mengorbankan kualitas air keluaran yang dijamin lolos inspeksi parameter ketat Dinas Lingkungan Hidup.',
        icon: <Activity className="w-6 h-6 text-emerald-500" />
      },
      faqs: [
        { q: 'Apakah air limbah (efluen) dari IPAL ini dapat didaur ulang kembali?', a: 'Tentu. Jika sistem IPAL Anda dilengkapi dengan modul MBR atau Ultrafiltrasi tambahan (sebagai pre-treatment lanjutan), air limbah dapat diumpankan ke sistem BWRO (Water Recycling) untuk dipakai kembali sebagai air utilitas, mencapai target Zero Liquid Discharge (ZLD).' },
        { q: 'Apakah operasional IPAL akan menimbulkan bau tak sedap ke lingkungan sekitar?', a: 'Tidak. Desain IPAL modern kami memastikan kecukupan suplai oksigen (DO) melalui sistem difuser pintar sehingga proses bakteri bersifat Aerobik murni, yang secara alamiah tidak menghasilkan gas H2S (penyebab bau busuk seperti telur thuk).' }
      ],
      relatedSuggestions: [
        { id: 'layanan-bwro', title: 'Water Recycling (BWRO)', desc: 'Daur ulang efluen IPAL untuk digunakan kembali sebagai air proses utilitas.', image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/unit-reverse-osmosis-air-payau-bwro-industrial-mizui-osmosa-teknovasi.webp' },
        { id: 'layanan-demin', title: 'Demineralisasi Industri', desc: 'Solusi air murni bebas mineral (scaling) terintegrasi untuk pabrik Anda.', image: 'https://mizuiosmosa.co.id/wp-content/uploads/2026/01/sistem-demineralisasi-dan-water-softener-untuk-utilitas-pabrik.webp' }
      ]
    }
  };

  const data = serviceData[serviceId] || serviceData['layanan-swro'];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          
          <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest border border-blue-500/30">
            Detail Spesifikasi Layanan
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">{data.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl">{data.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            <img src={data.image} alt={data.title} className="w-full rounded-3xl shadow-xl border border-slate-200" />
            
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Gambaran Umum Sistem</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{data.desc}</p>
            </section>

            {/* Feature Highlight Box (if exists) */}
            {data.highlight && (
              <section className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-3xl text-white shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
                 <div className="relative z-10">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4 border border-white/20">
                     {data.highlight.icon} <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Engineering Insight</span>
                   </div>
                   <h3 className="text-2xl font-bold mb-4">{data.highlight.title}</h3>
                   <p className="text-slate-300 leading-relaxed">{data.highlight.desc}</p>
                 </div>
              </section>
            )}

            {/* Process Flow (if exists) */}
            {data.processFlow && (
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <ListChecks className="w-6 h-6 text-blue-600" /> Alur Proses Terintegrasi (PFD)
                </h3>
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  {data.processFlow.map((flow: any, index: number) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">{flow.step.replace(/^d+.s/, '')}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{flow.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tech Specs Table (if exists) */}
            {data.techSpecs && (
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 p-6 border-b border-slate-200 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-slate-500" />
                  <h3 className="text-lg font-bold text-slate-900">Spesifikasi Desain Standar</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {data.techSpecs.map((spec: any, i: number) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center p-4 hover:bg-slate-50 transition-colors">
                      <div className="sm:w-1/2 font-medium text-slate-600 mb-1 sm:mb-0">{spec.label}</div>
                      <div className="sm:w-1/2 font-bold text-slate-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Settings className="w-6 h-6 text-blue-600" /> Keunggulan Teknis Tambahan
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.specs.map((spec: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{spec}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Specific FAQs (if exists) */}
            {data.faqs && (
              <section className="pt-4">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-blue-600" /> Tanya Jawab Teknis (FAQ)
                </h3>
                <div className="space-y-4">
                  {data.faqs.map((faq: any, i: number) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                      <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex justify-between items-center font-bold p-5 text-left text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
                      >
                        {faq.q}
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.relatedSuggestions && (
              <section className="pt-12 border-t border-slate-200 mt-12">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Jelajahi Solusi Terkait</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.relatedSuggestions.map((item: any, i: number) => (
                    <button 
                      key={i}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        onNavigate(item.id);
                      }}
                      className="text-left group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 focus:outline-none flex flex-col"
                    >
                      <div className="h-40 overflow-hidden relative shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                        <div className="text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                          Lihat Spesifikasi <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">Aplikasi Industri Utama</h3>
              <ul className="space-y-4 relative z-10">
                {data.applications.map((app: string, i: number) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center shrink-0">
                      <Factory className="w-4 h-4 text-blue-300" />
                    </div>
                    <span className="font-medium text-blue-100">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center sticky top-24">
              <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Konsultasi Engineer Terbuka</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">Diskusikan parameter air baku (Raw Water) pabrik Anda bersama spesialis kami untuk mendapatkan simulasi OPEX awal.</p>
              <button 
                onClick={() => onNavigate('kontak')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors focus:outline-none"
              >
                Hubungi Kami Sekarang
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
               <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-slate-400" /> Brosur Terkait</h4>
               <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors group focus:outline-none">
                  <div className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">Technical Datasheet PDF</div>
                  <Download className="w-4 h-4 text-slate-400" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
