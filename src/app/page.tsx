"use client";

import { useState } from "react";
import { Wifi, Tv, Phone, CheckCircle2, MessageCircle, ShieldCheck, Zap, Clock, Menu, X, ChevronDown, MonitorSmartphone, FileText, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappNumber = "628170845341";
  const message = encodeURIComponent("Halo Pak Ajat, saya tertarik untuk pasang IndiHome. Bisa dibantu?");
  const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const faqs = [
    {
      question: "Apa saja syarat untuk daftar IndiHome?",
      answer: "Cukup siapkan foto e-KTP asli, nomor HP aktif, alamat email, dan share lokasi (Google Maps) rumah yang akan dipasang."
    },
    {
      question: "Kapan tagihan pertama dibayarkan?",
      answer: "Pembayaran tagihan pertama dilakukan SETELAH teknisi selesai memasang WiFi di rumah Anda dan layanan sudah aktif/bisa digunakan. Hati-hati terhadap penipuan yang meminta transfer sebelum WiFi menyala!"
    },
    {
      question: "Berapa lama proses pemasangan oleh teknisi?",
      answer: "Normalnya 1-2 hari kerja setelah pendaftaran Anda kami konfirmasi dan titik jaringan (ODP) di lokasi Anda tersedia. Kami akan usahakan secepatnya."
    },
    {
      question: "Apakah perangkatnya harus beli?",
      answer: "Tidak perlu beli! Perangkat (modem WiFi dan STB TV jika mengambil paket TV) dipinjamkan secara gratis selama Anda berlangganan IndiHome."
    }
  ];

  const packageCategories = [
    {
      id: "promo-tasikmalaya",
      name: "Promo Area Tasikmalaya",
      description: "Harga All-In (Sudah termasuk PPN 11% & Admin). Tagihan flat! Khusus Kabupaten Tasikmalaya.",
      items: [
        { speed: "20 Mbps", price: "205.350", note: "Internet Only", devices: "3-5 Perangkat" },
        { speed: "20 Mbps", price: "249.750", note: "BEST SELLER (+ Kuota 30GB)", devices: "3-5 Perangkat" },
        { speed: "50 Mbps", price: "271.950", note: "Internet Only", devices: "10-12 Perangkat" },
        { speed: "100 Mbps", price: "338.550", note: "Internet Only", devices: "20-30 Perangkat" },
        { speed: "150 Mbps", price: "421.800", note: "Internet Only", devices: "30-40 Perangkat" },
        { speed: "200 Mbps", price: "577.200", note: "Internet Only", devices: "40-50 Perangkat" },
      ]
    },
    {
      id: "internet-kuota",
      name: "Internet + Kuota HP",
      description: "Produk Baru! WiFi rumah super cepat plus Kuota HP Telkomsel untuk aktivitas Anda di luar rumah.",
      items: [
        { speed: "20 Mbps", price: "220.000", note: "Kuota HP 30GB", devices: "3-5 Perangkat" },
        { speed: "50 Mbps", price: "295.000", note: "Kuota HP 30GB", devices: "10-12 Perangkat" },
        { speed: "75 Mbps", price: "310.000", note: "Kuota HP 30GB", devices: "15-20 Perangkat" },
        { speed: "150 Mbps", price: "380.000", note: "Kuota HP 30GB", devices: "30-40 Perangkat" },
        { speed: "300 Mbps", price: "900.000", note: "Kuota HP 50GB", devices: "50-70 Perangkat" },
      ]
    },
    {
      id: "internet-game",
      name: "Internet + Game",
      description: "Koneksi ngebut anti-lag dilengkapi dengan benefit in-game eksklusif untuk para gamer sejati.",
      items: [
        { speed: "50 Mbps", price: "290.000", devices: "10-12 Perangkat" },
        { speed: "75 Mbps", price: "310.000", devices: "15-20 Perangkat" },
        { speed: "150 Mbps", price: "385.000", devices: "30-40 Perangkat" },
        { speed: "200 Mbps", price: "550.000", devices: "40-50 Perangkat" },
      ]
    },
    {
      id: "internet-only",
      name: "Internet Only",
      description: "Paket internet rumah 1P (Internet saja) tanpa batas kuota (Unlimited) dengan harga paling hemat.",
      items: [
        { speed: "50 Mbps", price: "230.000", devices: "10-12 Perangkat" },
        { speed: "75 Mbps", price: "250.000", devices: "15-20 Perangkat" },
        { speed: "100 Mbps", price: "290.000", devices: "20-30 Perangkat" },
        { speed: "150 Mbps", price: "325.000", devices: "30-40 Perangkat" },
        { speed: "200 Mbps", price: "490.000", devices: "40-50 Perangkat" },
      ]
    }
  ];

function PackageCarouselRow({ pkgCat, index, waLink, fadeInUp }: any) {
  const [activeIndex, setActiveIndex] = useState(index === 0 ? 1 : 0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    // Each card has min-w-[260px] or w-[75vw], plus gap-6 (24px)
    // We can just use the first child's clientWidth as an approximation
    const itemWidth = container.children[0] ? container.children[0].clientWidth + 24 : 300;
    const newIndex = Math.round(scrollPosition / itemWidth);
    
    // Ensure index doesn't go out of bounds due to overscroll
    const safeIndex = Math.max(0, Math.min(newIndex, pkgCat.items.length - 1));
    setActiveIndex(safeIndex);
  };

  return (
    <div className="flex flex-col">
      {/* Category Header */}
      <motion.div variants={fadeInUp} className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl md:text-3xl font-black text-text-main tracking-tight">{pkgCat.name}</h3>
            {index === 0 && <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse uppercase tracking-wider">PROMO SPESIAL</span>}
          </div>
          <p className="text-text-muted text-sm md:text-base">{pkgCat.description}</p>
        </div>
      </motion.div>
      
      {/* Category Carousel */}
      <motion.div 
        variants={fadeInUp} 
        className="flex overflow-x-auto py-4 -mx-6 px-6 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory scrollbar-hide items-stretch"
        onScroll={handleScroll}
      >
         {pkgCat.items.map((item: any, i: number) => {
            const isBestSeller = index === 0 && i === 1;
            const isActive = i === activeIndex;

            return (
               <div 
                 key={i} 
                 onMouseEnter={() => setActiveIndex(i)}
                 className={`min-w-[240px] w-[70vw] md:w-[260px] flex-shrink-0 snap-center rounded-[1.5rem] p-6 relative flex flex-col transition-all duration-500 ease-out h-full bg-white cursor-pointer will-change-transform ${
                 isActive 
                   ? 'scale-[1.03] md:scale-105 shadow-2xl shadow-red-500/15 ring-2 ring-primary z-10' 
                   : 'scale-95 md:scale-100 shadow-md ring-1 ring-gray-200 opacity-80 md:opacity-100 hover:shadow-xl hover:ring-red-200 z-0'
               }`}>
                  {isBestSeller && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-red-500/40 whitespace-nowrap">
                      PALING LARIS
                    </div>
                  )}
                  
                  {item.note ? (
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full w-max mb-5 border transition-colors duration-500 ${
                      isActive ? 'bg-primary text-white border-primary shadow-md shadow-red-500/30' : 'bg-red-50 text-primary border-red-100'
                    }`}>
                      {item.note}
                    </span>
                  ) : (
                    <div className="h-5 mb-5"></div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${
                      isActive ? 'bg-primary text-white shadow-md shadow-red-500/30' : 'bg-red-50 text-primary'
                    }`}>
                      <Wifi className={`w-5 h-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <span className="text-3xl font-black tracking-tight text-text-main">
                      {item.speed}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1 font-medium text-xs text-text-muted">
                    <MonitorSmartphone size={14} className="text-gray-400" />
                    <span>Ideal untuk {item.devices}</span>
                  </div>
                  
                  <div className="mt-5 mb-6 border-t pt-5 border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black tracking-tighter text-primary">
                        Rp {item.price}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest mt-1 text-text-muted">
                        / Bulan
                      </span>
                    </div>
                  </div>

                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`group mt-auto w-full py-3.5 rounded-xl text-sm font-bold flex justify-center items-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-white shadow-lg shadow-red-500/30 hover:bg-red-600' 
                        : 'bg-red-50 text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    <span className="group-hover:hidden">Pilih {item.speed}</span>
                    <span className="hidden group-hover:inline-flex items-center gap-1">Daftar Sekarang &rarr;</span>
                  </a>
               </div>
            );
         })}
      </motion.div>

      {/* Mobile Pagination Dots */}
      <div className="flex md:hidden justify-center items-center gap-1.5 mt-2">
         {pkgCat.items.map((_: any, i: number) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-5 bg-primary' : 'w-1.5 bg-gray-200'}`} 
            />
         ))}
      </div>
    </div>
  );
}

  return (
    <main className="min-h-screen bg-bg-main text-text-main font-sans pb-20">
      {/* Navbar */}
      <header className="w-full px-6 py-5 flex justify-between items-center bg-transparent absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            <Wifi className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl text-text-main">Promo<span className="text-primary">IndiHome</span></span>
        </div>
        
        {/* Navigation Links (Like Dribbble) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-text-muted">
          <a href="#" className="text-text-main">Home</a>
          <a href="#packages" className="hover:text-primary transition-colors">Pilihan Paket</a>
          <a href="#keunggulan" className="hover:text-primary transition-colors">Keunggulan</a>
          <a href="#kontak" className="hover:text-primary transition-colors">Kontak</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden p-2 text-text-main hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <a href={waLink} target="_blank" rel="noreferrer" className="hidden lg:flex px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors items-center gap-2 shadow-lg shadow-red-500/20">
          <MessageCircle size={18} /> Chat Sekarang
        </a>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-[80px] left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 z-50 flex flex-col px-6 py-6 gap-2"
        >
          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-text-main font-semibold text-lg py-3 border-b border-gray-50">Home</a>
          <a href="#packages" onClick={() => setIsMenuOpen(false)} className="text-text-muted font-semibold text-lg hover:text-primary transition-colors py-3 border-b border-gray-50">Pilihan Paket</a>
          <a href="#keunggulan" onClick={() => setIsMenuOpen(false)} className="text-text-muted font-semibold text-lg hover:text-primary transition-colors py-3 border-b border-gray-50">Keunggulan</a>
          <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="text-text-muted font-semibold text-lg hover:text-primary transition-colors py-3 border-b border-gray-50">Kontak</a>
          <a href={waLink} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 w-full py-4 mt-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-red-500/20">
            <MessageCircle size={20} /> Chat via WhatsApp
          </a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] md:h-screen md:max-h-[850px] pt-32 md:pt-20 pb-16 md:pb-0 overflow-hidden bg-gradient-to-b from-white to-red-50/50 border-b border-red-50 flex flex-col">
        {/* Background Grid Pattern (Removed as requested) */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px]"></div> */}
        
        {/* Huge Faint Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none">
          <span className="text-[16vw] font-black text-black/[0.03] select-none tracking-tighter">INDIHOME</span>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between flex-grow w-full px-6 gap-8 md:gap-0"
        >
              
              {/* Left Content */}
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left pt-10 md:pt-0 z-20">
                <motion.span variants={fadeInUp} className="text-xl font-semibold text-text-muted mb-2 tracking-wide">Halo, Saya</motion.span>
                <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-text-main leading-[0.95] mb-8 tracking-tighter">
                  AJAT<br/>SUDRAJAT
                </motion.h1>
                <motion.a 
                  variants={fadeInUp} 
                  href={waLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-red-500/30"
                >
                  <MessageCircle size={24} /> Hubungi Saya
                </motion.a>
              </div>

              {/* Center Image (The Cutout) */}
              <motion.div variants={fadeInUp} className="w-full md:w-1/2 lg:w-1/3 h-[350px] md:h-[80%] relative md:absolute bottom-0 md:left-1/2 md:-translate-x-1/2 flex items-end justify-center pointer-events-none z-10 mt-auto md:mt-0">
                <img 
                  src="/dummy-dad.png" 
                  alt="Ajat Sudrajat" 
                  className="w-auto h-full max-h-[650px] object-cover object-bottom drop-shadow-2xl"
                />
              </motion.div>

              {/* Right Content - Removed Glass Card for cleaner look */}
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right mt-auto md:mt-0 z-20">
                <motion.div variants={fadeInUp} className="text-center md:text-right">
                  <h2 className="text-4xl md:text-5xl font-black text-text-main leading-[1.1] tracking-tighter">
                    SALES FORCE<br/>
                    <span className="text-primary">INDIHOME</span>
                  </h2>
                  <p className="text-text-muted mt-4 font-medium text-lg max-w-[280px] mx-auto md:ml-auto md:mr-0">
                    Melayani pendaftaran & pasang baru WiFi secara resmi dan cepat khusus area <b className="text-primary">Kabupaten Tasikmalaya</b>.
                  </p>
                </motion.div>
              </div>

        </motion.div>
      </section>

      {/* Profile / Tentang Saya Section */}
      <section id="profil" className="w-full py-16 px-6 bg-white border-t border-gray-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto flex flex-col text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black text-text-main mb-6 tracking-tight">Kredibilitas & Pengalaman</h2>
          <p className="text-text-muted leading-relaxed text-lg md:text-xl">
            Sebagai <b className="text-text-main">Senior Sales Force IndiHome</b>, saya memiliki pengalaman lebih dari <b className="text-primary">5 Tahun</b> melayani pendaftaran dan pemasangan WiFi baru di area Kabupaten Tasikmalaya dan sekitarnya. Misi saya sederhana: memastikan Anda mendapatkan layanan internet terbaik secara resmi, aman, dan tanpa proses yang berbelit-belit.
          </p>
        </motion.div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-text-main mb-4 tracking-tight">Promo IndiHome Unlimited</h2>
            <p className="text-lg text-text-muted">Pilih paket internet sesuai dengan kebutuhan keluarga Anda.</p>
          </motion.div>
          
          <div className="flex flex-col gap-16">
            {packageCategories.map((pkgCat, index) => (
               <PackageCarouselRow key={index} pkgCat={pkgCat} index={index} waLink={waLink} fadeInUp={fadeInUp} />
            ))}
          </div>

           {/* Pricing Disclaimer */}
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="mt-8 md:mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8"
           >
             <div className="flex flex-col gap-2 text-left flex-1 w-full">
                <span className="text-red-500 font-bold text-base md:text-lg mb-1">* Syarat & Ketentuan Penting</span>
                <div className="text-text-muted text-sm md:text-base font-medium leading-relaxed">
                  <ul className="space-y-2 list-none">
                    <li>1. Layanan ini khusus area <b>Kabupaten Tasikmalaya</b>.</li>
                    <li>2. Harga Promo Paket ke-1 <b>SUDAH TERMASUK PPN 11%</b>. Paket lainnya belum termasuk PPN 11%.</li>
                    <li>3. Paket <b>50 Mbps ke atas</b> dikenakan Biaya Pasang Baru (PSB) <b>Rp 99.000</b>.</li>
                    <li>4. Khusus paket <b>20 Mbps</b> wajib <b>Deposit 1x tagihan</b> (uang deposit ini akan jadi gratis tagihan di bulan ke-13).</li>
                    <li className="pt-2"><span className="text-primary font-bold">PENTING:</span> Semua pembayaran (PSB & Deposit) dilakukan secara resmi <b>setelah teknisi selesai memasang WiFi</b> di rumah Anda.</li>
                  </ul>
                </div>
             </div>
             <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto shrink-0 mt-2 xl:mt-0">
               <div className="bg-white border border-red-100 shadow-sm rounded-xl px-5 py-4 text-center min-w-[180px] flex-1">
                  <span className="block text-[11px] text-text-muted font-bold mb-1 tracking-wider uppercase">Biaya Pasang (PSB)</span>
                  <span className="block text-3xl font-black text-primary tracking-tighter">Rp 99rb</span>
                  <span className="block text-[10px] text-red-500 font-bold mt-1.5 uppercase tracking-wide">*Khusus 50 Mbps++</span>
               </div>
               <div className="bg-white border border-red-100 shadow-sm rounded-xl px-5 py-4 text-center min-w-[180px] flex-1">
                  <span className="block text-[11px] text-text-muted font-bold mb-1 tracking-wider uppercase">Deposit Awal</span>
                  <span className="block text-3xl font-black text-primary tracking-tighter">1 Bulan</span>
                  <span className="block text-[10px] text-red-500 font-bold mt-1.5 uppercase tracking-wide">*Khusus 20 Mbps</span>
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="keunggulan" className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4">Kenapa Pasang Lewat Saya?</h2>
          </motion.div>
          
          <div className="flex flex-col gap-24">
            {/* Feature 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/flat_trust.png" alt="100% Resmi Telkom" className="w-[300px] md:w-[400px] h-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-text-main tracking-tight">100% Resmi Telkomsel</h3>
                <p className="text-lg text-text-muted leading-relaxed">Proses legal dan transparan. Langsung terdaftar di sistem pusat Telkomsel. Tidak ada biaya siluman atau biaya di luar ketentuan resmi.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20"
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/flat_speed.png" alt="Proses Cepat" className="w-[300px] md:w-[400px] h-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-text-main tracking-tight">Proses Super Cepat</h3>
                <p className="text-lg text-text-muted leading-relaxed">Hari ini Anda mendaftar, kami usahakan teknisi segera datang untuk melakukan survei dan pemasangan langsung di lokasi Anda tanpa harus menunggu lama.</p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/flat_wifi.png" alt="Dibantu Sampai Nyala" className="w-[300px] md:w-[400px] h-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-text-main tracking-tight">Dibantu Sampai Nyala</h3>
                <p className="text-lg text-text-muted leading-relaxed">Anda tidak perlu repot mengurus sendiri ke GraPARI / Plasa Telkom. Saya akan mengawal prosesnya dari pendaftaran awal sampai WiFi aktif dan siap Anda gunakan.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Cara Daftar Section */}
      <section id="cara-daftar" className="w-full py-20 px-6 bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full md:w-5/12 flex justify-center order-2 md:order-1"
          >
            <img src="/flat_registration.png" alt="Cara Daftar IndiHome" className="w-[300px] md:w-[400px] h-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
          </motion.div>
          
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-black text-text-main mb-4 tracking-tight">Cara Daftar <span className="text-primary">Anti Ribet</span></h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10">Pendaftaran fleksibel dan dijamin 100% aman. Data diri Anda diproses langsung ke sistem pusat IndiHome.</p>
              
              <div className="flex flex-col gap-8">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-main mb-2">Pilih Paket & Hubungi WA</h4>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">Klik tombol pesan pada paket yang Anda mau untuk terhubung langsung dengan Bapak Ajat via WhatsApp.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-main mb-2">Siapkan Data (Sangat Fleksibel)</h4>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3">Siapkan persyaratan standar: <b className="text-text-main">Foto KTP, Share Lokasi, Email, dan Nomor Aktif (WA & Telepon).</b> Ada dua pilihan cara input data:</p>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-text-muted leading-relaxed"><b>Cara Praktis (Online):</b> Cukup kirim data via WA/Email, langsung diproses ke sistem dari jarak jauh tanpa ribet.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-text-muted leading-relaxed"><b>Cara Super Aman (Tatap Muka):</b> Jika Anda ragu mengirim foto KTP, Bapak Ajat akan datang langsung ke lokasi untuk menginput data secara langsung di hadapan Anda.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-main mb-2">Verifikasi & Teknisi Datang</h4>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">Anda akan menerima link verifikasi resmi dari IndiHome ke email Anda. Setelah diverifikasi, tim teknisi akan segera meluncur ke lokasi untuk pemasangan!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-6 bg-red-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-4">Pertanyaan Seputar Pasang Baru</h2>
            <p className="text-lg text-text-muted">Jawaban cepat untuk hal-hal yang paling sering ditanyakan oleh calon pelanggan.</p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-red-50/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-text-main pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {/* Expandable Answer */}
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-text-muted leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="w-full bg-white border-t border-gray-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 bg-red-50 text-primary border border-red-100 rounded-full flex items-center justify-center mb-4">
            <Wifi className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-text-main mb-1 tracking-tight">Ajat Sudrajat</h2>
          <div className="flex flex-col items-center gap-1 mb-10">
            <p className="text-text-muted font-medium text-center">Sales Force Resmi Telkomsel IndiHome</p>
            <p className="text-sm font-bold text-text-main opacity-70">ID Sales: SF-XXXXXX</p>
          </div>
          
          <div className="w-full max-w-3xl bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-10 text-left text-[11px] md:text-xs text-text-muted leading-relaxed">
            <strong className="text-text-main block mb-2 uppercase tracking-wider">Disclaimer Hukum</strong>
            Website ini bukan merupakan website resmi Telkomsel atau IndiHome (website resmi: <a href="https://telkomsel.com/indihome" target="_blank" rel="noreferrer" className="underline hover:text-primary transition-colors">telkomsel.com/indihome</a>). Website ini merupakan media promosi independen yang dikelola oleh Ajat Sudrajat, selaku Sales Force resmi IndiHome yang melayani wilayah Kabupaten Tasikmalaya. Seluruh informasi mengenai paket, harga, dan ketentuan mengacu pada informasi resmi Telkomsel IndiHome. Setiap pengajuan pemasangan melalui website ini akan diproses secara resmi melalui sistem Telkomsel IndiHome.
          </div>
          
          <div className="w-full max-w-3xl border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex flex-col items-center md:items-start gap-1">
               <p className="text-xs text-text-muted font-medium tracking-wide">© {new Date().getFullYear()} Ajat Sudrajat - Promosi Sales Force.</p>
               <p className="text-[10px] text-gray-400">Built by <a href="#" className="font-bold text-gray-500 hover:text-primary transition-colors">K-Serv</a></p>
             </div>
             <div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Layanan Resmi</span>
                <div className="flex flex-col items-start bg-white px-2 py-1 rounded">
                  <span className="text-lg font-black text-[#E3000F] tracking-tighter leading-none">IndiHome</span>
                  <span className="text-[8px] font-black text-gray-800 tracking-widest mt-0.5 ml-0.5 uppercase">by Telkomsel</span>
                </div>
             </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA (Mobile especially) */}
      <a 
        href={waLink} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50 animate-bounce"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </main>
  );
}
