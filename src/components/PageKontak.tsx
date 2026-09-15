import React from 'react';
import { Phone, Mail, MapPin, Building2, Send } from 'lucide-react';

export default function PageKontak() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Butuh Solusi Pengolahan Air Terintegrasi? <br/><span className="text-blue-400">Diskusikan dengan Ahlinya.</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Sebagai Kontraktor Water Treatment Indonesia yang berpengalaman, tim engineering PT Mizui Osmosa Teknovasi siap membantu kebutuhan proyek Anda. Baik Anda memerlukan instalasi SWRO baru, Demineralisasi untuk boiler, maupun Jasa Water Treatment Industri lainnya.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Kantor Operasional</h3>
               <div className="flex items-start gap-4">
                 <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                 <p className="text-slate-600 leading-relaxed">Jl. Tlajung Udik No. 52D Gunung Putri,<br/>Bogor 16962 Jawa Barat</p>
               </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Kantor Legal</h3>
               <div className="flex items-start gap-4">
                 <Building2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                 <p className="text-slate-600 leading-relaxed">Jl. Gading Kirana Timur A.11/15 RT 001 RW 008 Kelapa Gading Barat, Kelapa Gading.<br/>Jakarta Utara 14240</p>
               </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl shadow-xl text-white">
               <h3 className="text-xl font-bold mb-6">Hubungi Langsung</h3>
               <div className="space-y-6">
                 <div className="flex items-center gap-4">
                   <Phone className="w-6 h-6 text-blue-300" />
                   <div>
                     <div className="text-sm text-blue-200 mb-1">Telepon / WhatsApp</div>
                     <a href="https://wa.me/6281314170122" className="text-xl font-bold hover:text-white transition-colors">+62 813 1417 0122</a>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <Mail className="w-6 h-6 text-blue-300" />
                   <div>
                     <div className="text-sm text-blue-200 mb-1">Email Pertanyaan</div>
                     <a href="mailto:info@mizuiosmosa.co.id" className="text-lg font-bold hover:text-white transition-colors">info@mizuiosmosa.co.id</a>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Kirim Pesan Teknis</h2>
              <div className="text-slate-600 mb-8 leading-relaxed space-y-4">
                <p>Silakan isi formulir di bawah ini untuk menjadwalkan <b>konsultasi teknis</b>, permintaan <b>survei lokasi</b>, atau mendapatkan penawaran harga (quotation) untuk layanan:</p>
                <ul className="list-none space-y-2 mb-4 font-medium text-slate-700">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div> Rancang Bangun (EPC) WTP & WWTP</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div> Retrofit & Peremajaan Sistem Lama</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div> Pasokan Bahan Kimia & Sparepart</li>
                </ul>
                <div className="font-bold text-blue-700 bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl inline-block mt-2">
                  ✓ Kami melayani proyek di seluruh wilayah Indonesia.
                </div>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Perusahaan</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="Nama Perusahaan" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Profesional</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="email@perusahaan.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nomor Telepon / WA</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="Contoh: +628123456789" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Jenis Layanan yang Dibutuhkan</label>
                  <select className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors appearance-none">
                    <option value="">Pilih layanan...</option>
                    <option value="Desalinasi Air Laut (SWRO)">Desalinasi Air Laut (SWRO)</option>
                    <option value="Pengolahan Limbah (WWTP/IPAL)">Pengolahan Limbah (WWTP/IPAL)</option>
                    <option value="Demineralisasi / Softener">Demineralisasi / Softener</option>
                    <option value="Retrofit & Maintenance">Retrofit & Maintenance</option>
                    <option value="Bahan Kimia/Sparepart">Bahan Kimia / Sparepart</option>
                    <option value="Lainnya">Lainnya / Konsultasi Umum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Pesan & Detail Proyek</label>
                  <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors" placeholder="Ceritakan singkat mengenai kebutuhan utilitas pabrik, kapasitas yang diinginkan, atau kendala sistem lama Anda..."></textarea>
                </div>

                <button type="submit" className="w-full sm:w-auto bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-colors shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
