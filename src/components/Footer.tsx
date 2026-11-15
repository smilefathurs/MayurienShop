import React from 'react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { navigateTo, setSelectedCategoryFilter, showToast } = useShop();

  return (
    <footer className="bg-[#f0eded] dark:bg-[#14131a] border-t-2 border-[#1c1b1b] dark:border-[#484554] pt-14 pb-24 md:pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 text-left cursor-pointer"
            >
              <span className="font-headline text-2xl font-bold text-[#674ba7] dark:text-[#d0bcff]">
                MayurienShop
              </span>
            </button>
            <p className="text-sm font-medium text-[#494551] dark:text-[#cbc4d1] leading-relaxed">
              Little Things, Big Happiness! Temukan ragam perlengkapan journal,
              alat tulis aesthetic, dan pernak-pernik lucu untuk harimu.
            </p>
            <div className="flex items-center gap-2.5 pt-1 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] dark:border-[#d0bcff] text-xs font-bold">
                ✨ 100% Original
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] dark:border-[#fe8eb7] text-xs font-bold">
                💖 Kawaii Quality
              </span>
            </div>
          </div>

          {/* Links 1: Koleksi Belanja */}
          <div>
            <h4 className="font-headline font-bold text-base mb-4 text-[#1c1b1b] dark:text-[#f5f3f7]">
              Koleksi Belanja
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-[#494551] dark:text-[#cbc4d1]">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategoryFilter('pens-highlighters');
                    navigateTo('catalog');
                  }}
                  className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors cursor-pointer"
                >
                  Stationery &amp; Pens
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategoryFilter('desk-decor');
                    navigateTo('catalog');
                  }}
                  className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors cursor-pointer"
                >
                  Desk Decor &amp; Organizers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategoryFilter('notebooks-journal');
                    navigateTo('catalog');
                  }}
                  className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors cursor-pointer"
                >
                  Cute Accessories &amp; Pins
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategoryFilter('gift-sets-pouches');
                    navigateTo('catalog');
                  }}
                  className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors cursor-pointer"
                >
                  Gift Sets &amp; Hampers
                </button>
              </li>
            </ul>
          </div>

          {/* Links 2: Bantuan & Layanan */}
          <div>
            <h4 className="font-headline font-bold text-base mb-4 text-[#1c1b1b] dark:text-[#f5f3f7]">
              Bantuan &amp; Layanan
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-[#494551] dark:text-[#cbc4d1]">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('order-confirmation')}
                  className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors cursor-pointer"
                >
                  Konfirmasi Pembayaran
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    navigateTo('order-confirmation');
                    showToast(
                      'Status Resi JP9823102448 📦',
                      'Paket sedang disiapkan di Gudang Mayurien Jakarta Pusat.'
                    );
                  }}
                  className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors cursor-pointer"
                >
                  Cek Status Resi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    showToast(
                      'Panduan Belanja MayurienShop ✨',
                      'Pilih produk gemas -> Masukkan kode GEMAS15 -> Bayar instan via QRIS!'
                    )
                  }
                  className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors cursor-pointer"
                >
                  FAQ &amp; Panduan Belanja
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    showToast(
                      'Garansi 100% Mayurien Care 🛡️',
                      'Rusak saat pengiriman? Kami ganti baru gratis tanpa ribet!'
                    )
                  }
                  className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors cursor-pointer"
                >
                  Kebijakan Pengembalian
                </button>
              </li>
            </ul>
          </div>

          {/* Payment & Shipping Badges */}
          <div>
            <h4 className="font-headline font-bold text-base mb-4 text-[#1c1b1b] dark:text-[#f5f3f7]">
              Pembayaran &amp; Kurir
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'BCA',
                'Mandiri',
                'QRIS',
                'GoPay',
                'JNE',
                'SiCepat',
                'J&T Express',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-lg text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t-2 border-[#1c1b1b]/20 dark:border-[#484554] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#494551] dark:text-[#cbc4d1]">
          <p>
            © 2025 MayurienShop. All rights reserved. Crafted with joy for
            stationery lovers.
          </p>
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() =>
                showToast('Syarat & Ketentuan', 'Seluruh transaksi dilindungi Mayurien SafeGuarantee.')
              }
              className="hover:underline cursor-pointer"
            >
              Syarat &amp; Ketentuan
            </button>
            <button
              type="button"
              onClick={() =>
                showToast('Kebijakan Privasi', 'Data pribadimu dijamin aman & terenkripsi.')
              }
              className="hover:underline cursor-pointer"
            >
              Kebijakan Privasi
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
