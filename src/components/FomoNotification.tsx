"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const fomoData = [
  { name: "Budi", area: "Indihiang", package: "Paket 50 Mbps" },
  { name: "Asep", area: "Cipedes", package: "Paket 100 Mbps" },
  { name: "Rina", area: "Kawalu", package: "Paket 30 Mbps" },
  { name: "Agus", area: "Mangkubumi", package: "Internet Only 50 Mbps" },
  { name: "Siti", area: "Cihideung", package: "Paket 150 Mbps" },
  { name: "Wahyu", area: "Tawang", package: "Paket 50 Mbps" },
  { name: "Hendra", area: "Cibeureum", package: "Internet Only 30 Mbps" },
  { name: "Lina", area: "Tamansari", package: "Paket 100 Mbps" },
];

export default function FomoNotification() {
  const [currentFomo, setCurrentFomo] = useState<any>(null);

  useEffect(() => {
    // Tunggu 8 detik sebelum memunculkan notifikasi pertama biar gak ganggu LCP
    const initialDelay = setTimeout(() => {
      showRandomFomo();
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, []);

  const showRandomFomo = () => {
    const random = fomoData[Math.floor(Math.random() * fomoData.length)];
    setCurrentFomo(random);

    // Hilang setelah 4 detik
    setTimeout(() => {
      setCurrentFomo(null);
      // Muncul lagi secara acak antara 15 - 30 detik kemudian
      setTimeout(() => {
        showRandomFomo();
      }, Math.random() * 15000 + 15000);
    }, 4000);
  };

  return (
    <AnimatePresence>
      {currentFomo && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-50 bg-white/95 backdrop-blur-md shadow-2xl border border-red-50 p-3 rounded-2xl flex items-center gap-3 max-w-[280px] pointer-events-none"
        >
          <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
            <MapPin className="text-primary w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-0.5">Baru saja mendaftar</p>
            <p className="text-sm font-black text-text-main leading-tight">
              {currentFomo.name} dari {currentFomo.area}
            </p>
            <p className="text-xs text-primary font-bold mt-0.5">{currentFomo.package}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
