import React from 'react';
import { Users, Lightbulb, TrendingUp, ChevronRight, MapPin } from 'lucide-react';

export default function PageKarir() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Karir & Peluang <br/><span className="text-blue-400">Engineering</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Bergabunglah dengan tim inovator PT Mizui Osmosa Teknovasi. Mari bersama merancang solusi tata kelola air dan menyelamatkan lingkungan industri Indonesia.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow border border-slate-100 text-center">
             <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><Lightbulb className="w-8 h-8" /></div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Budaya Inovasi</h3>
             <p className="text-slate-600 text-sm">Kami mendorong setiap engineer untuk menantang status quo dan merancang sistem efisiensi membran yang lebih baik.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow border border-slate-100 text-center">
             <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"><TrendingUp className="w-8 h-8" /></div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Pengembangan Karir</h3>
             <p className="text-slate-600 text-sm">Dari drafter CAD, site engineer, hingga manajer proyek EPC penuh. Jalur karir Anda diukur berdasarkan merit teknis.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow border border-slate-100 text-center">
             <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6"><Users className="w-8 h-8" /></div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Kolaborasi Pakar</h3>
             <p className="text-slate-600 text-sm">Bekerja berdampingan dan dibimbing langsung oleh engineer senior alumni ITS dan pemegang lisensi IDA global.</p>
          </div>
        </div>

        <div>
           <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Posisi Tersedia</h2>
           <div className="space-y-6">
              {[
                { title: 'Process Engineer (Water Treatment)', type: 'Full-time', location: 'Gunung Putri, Bogor', exp: 'Min. 3 Tahun', desc: 'Bertanggung jawab dalam merancang skema P&ID, melakukan kalkulasi flow & pressure pompa, serta menghitung kebutuhan dosis bahan kimia untuk sistem SWRO dan WWTP.' },
                { title: 'Project/Site Manager EPC', type: 'Full-time / Kontrak Proyek', location: 'Penempatan Seluruh Indonesia', exp: 'Min. 5 Tahun', desc: 'Memimpin eksekusi instalasi WTP di lapangan, mengawasi sub-kontraktor, dan memastikan timeline proyek berjalan sesuai dengan standar keamanan HSE yang ketat.' },
                { title: 'Technical Sales Engineer', type: 'Full-time', location: 'Kelapa Gading, Jakarta Utara', exp: 'Min. 2 Tahun', desc: 'Melakukan presentasi solusi B2B kepada manajemen pabrik klien, menyusun dokumen penawaran komersial & teknis, serta membangun relasi industri jangka panjang.' }
              ].map((job, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6">
                   <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">{job.type}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 mb-4">
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="flex items-center gap-1.5">Pengalaman: {job.exp}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">{job.desc}</p>
                   </div>
                   <div className="shrink-0">
                      <button className="flex items-center gap-2 bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white font-bold py-3 px-6 rounded-xl transition-colors w-full md:w-auto justify-center">
                        Lamar Posisi <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Tidak menemukan posisi yang pas?</h3>
          <p className="text-slate-600 mb-6">Kirimkan CV (Curriculum Vitae) dan portofolio proyek Anda secara umum. Kami selalu mencari talenta terbaik untuk bergabung.</p>
          <a href="mailto:hrd@mizuiosmosa.co.id" className="inline-flex font-bold text-blue-700 hover:text-blue-800">Email: hrd@mizuiosmosa.co.id</a>
        </div>

      </div>
    </div>
  );
}
