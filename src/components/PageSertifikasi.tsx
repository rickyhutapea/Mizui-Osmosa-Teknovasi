import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Globe, FileCheck } from 'lucide-react';

export default function PageSertifikasi() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Sertifikasi & <br/><span className="text-emerald-400">Standar Kualitas Mutu Terpadu</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Komitmen PT Mizui Osmosa Teknovasi terhadap kualitas, keselamatan kerja, dan perlindungan lingkungan industri.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-slate-600 text-lg leading-relaxed">Sebagai <strong>Perusahaan Engineering Water Treatment</strong> kelas dunia, kami memahami bahwa sektor utilitas air dan energi tidak menoleransi ruang untuk kesalahan (zero-error margin). Oleh karena itu, seluruh proses mulai dari desain rekayasa hingga operasional diukur dengan sertifikasi ketat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex gap-6">
            <div className="shrink-0"><Award className="w-16 h-16 text-blue-600" /></div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">ISO 9001:2015</h3>
              <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wider">Quality Management System</div>
              <p className="text-slate-600 leading-relaxed">Kami memastikan setiap rancang bangun proyek berjalan sesuai alur kontrol kualitas (QC) yang ketat, mulai dari pengadaan komponen material, fabrikasi skid, pengelasan, hingga serah terima mesin WTP ke tangan klien.</p>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex gap-6">
            <div className="shrink-0"><ShieldCheck className="w-16 h-16 text-emerald-600" /></div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">ISO 14001:2015</h3>
              <div className="text-sm font-medium text-emerald-600 mb-4 uppercase tracking-wider">Environmental Management System</div>
              <p className="text-slate-600 leading-relaxed">Dalam operasional internal perusahaan kami maupun dalam perancangan produk WWTP klien, kami mengimplementasikan pedoman perlindungan lingkungan berkelanjutan yang terukur.</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex gap-6">
            <div className="shrink-0"><Globe className="w-16 h-16 text-sky-500" /></div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Keanggotaan IDA</h3>
              <div className="text-sm font-medium text-sky-500 mb-4 uppercase tracking-wider">International Desalination Association</div>
              <p className="text-slate-600 leading-relaxed">Tim ahli kami memegang lisensi dan sertifikasi dari IDA Desalination Academy, yang menjamin rancangan sistem SWRO kami selaras dengan best-practice teknologi desalinasi global terbaru.</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex gap-6">
            <div className="shrink-0"><FileCheck className="w-16 h-16 text-teal-600" /></div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Baku Mutu KLHK</h3>
              <div className="text-sm font-medium text-teal-600 mb-4 uppercase tracking-wider">Kepatuhan Lingkungan Nasional</div>
              <p className="text-slate-600 leading-relaxed">Kami memberikan jaminan garansi performa (performance guarantee) bahwa output efluen dari sistem IPAL/WWTP yang kami bangun pasti lolos parameter uji baku mutu dari Kementerian Lingkungan Hidup RI.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800 p-12 rounded-3xl text-center text-white mt-16 shadow-2xl">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold mb-4">Keselamatan Kerja (HSE) Tanpa Kompromi</h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">Di lapangan proyek pertambangan, PLTU, maupun fasilitas petrokimia klien, seluruh personil PT Mizui Osmosa Teknovasi tunduk pada pedoman K3 (Kesehatan dan Keselamatan Kerja) dengan target <strong>Zero Accident</strong>.</p>
        </div>
      </div>
    </div>
  );
}
