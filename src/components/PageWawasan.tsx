import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

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
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Wawasan & <span className="text-blue-400">Berita Industri</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Update terkini inovasi teknologi SWRO/WWTP, analisis efisiensi, dan wawasan teknis dari ahli tata kelola air.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Berita Proyek
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-medium">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Admin Mizui</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">{article.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{article.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors text-sm mt-auto">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
           <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-8 rounded-xl transition-colors">
              Muat Lebih Banyak Artikel
           </button>
        </div>
      </div>
    </div>
  );
}
