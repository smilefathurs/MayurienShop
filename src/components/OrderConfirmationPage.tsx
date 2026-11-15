import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, formatIDR } from '../data/products';

export const OrderConfirmationPage: React.FC = () => {
  const { lastOrder, navigateTo, addToCart, showToast } = useShop();
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);

  const retroTvProduct =
    PRODUCTS.find((p) => p.slug === 'retro-tv-sticky-note-dispenser') ||
    PRODUCTS[PRODUCTS.length - 1];

  const handleCopyText = (text: string, label: string) => {
    try {
      navigator.clipboard?.writeText(text);
    } catch {
      // ignore
    }
    showToast(`${label} Disalin! 📋`, `${text} berhasil disalin ke clipboard.`);
  };

  const handleDownloadInvoice = () => {
    showToast(
      'Mengunduh Invoice PDF 📄',
      `E-Receipt ${lastOrder.orderId} siap disimpan untuk arsipmu!`
    );
  };

  return (
    <div className="min-h-screen">
      {/* Checkout Progress Stepper Sub-Bar (Step 3 Active) */}
      <div className="bg-[#f6f3f2] dark:bg-[#1f1f26] border-b-2 border-[#1c1b1b] dark:border-[#484554] py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#674ba7] dark:bg-[#d0bcff] -z-0" />

            {/* Step 1: Completed */}
            <button
              type="button"
              onClick={() => navigateTo('cart')}
              className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center font-headline font-bold text-sm">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-xs font-bold text-[#674ba7] dark:text-[#d0bcff]">
                1. Keranjang
              </span>
            </button>

            {/* Step 2: Completed */}
            <button
              type="button"
              onClick={() => navigateTo('checkout')}
              className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center font-headline font-bold text-sm">
                <span className="material-symbols-outlined text-lg">
                  local_shipping
                </span>
              </div>
              <span className="text-xs font-bold text-[#674ba7] dark:text-[#d0bcff]">
                2. Pengiriman &amp; Bayar
              </span>
            </button>

            {/* Step 3: Active */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-[#fe8eb7] text-[#3e0020] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center font-headline font-bold text-sm ring-4 ring-[#fe8eb7]/30">
                <span className="material-symbols-outlined text-lg">
                  celebration
                </span>
              </div>
              <span className="text-xs font-extrabold text-[#9b3e64] dark:text-[#fe8eb7]">
                3. Selesai ✨
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* HERO CELEBRATION CARD */}
        <section className="rounded-3xl bg-gradient-to-br from-[#eaddff]/65 via-[#ffffff] to-[#ffd9e3]/75 dark:from-[#2c2540] dark:via-[#22202a] dark:to-[#3b2032] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-lg p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3.5 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffe081] dark:bg-[#d0bcff] text-[#231b00] dark:text-[#22055d] border-2 border-[#1c1b1b] neo-shadow-sm font-headline font-bold text-xs">
                POP! 🎉 Little Things, Big Happiness!
              </span>

              <h1 className="font-headline text-2xl sm:text-4xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7] leading-tight">
                Hore! Pesanan Berhasil Dibuat! 🎉 ✨
              </h1>

              <p className="text-sm sm:text-base font-medium text-[#494551] dark:text-[#cbc4d1] leading-relaxed">
                Terima kasih,{' '}
                <strong className="text-[#1c1b1b] dark:text-[#f5f3f7] font-bold">
                  {lastOrder.customer.fullName}!
                </strong>{' '}
                Pernak-pernik gemas pesananmu segera disiapkan dan dikemas
                Min-Mayu dengan penuh cinta dan bubble wrap tebal berlapis. 🎀
              </p>

              {/* Order ID & Timestamp Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#ffffff] dark:bg-[#14131a] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm text-xs">
                  <span className="font-semibold text-[#494551] dark:text-[#cbc4d1]">
                    No. Pesanan:
                  </span>
                  <span className="font-headline font-bold text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                    {lastOrder.orderId}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyText(lastOrder.orderId, 'Nomor Pesanan')
                    }
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#f0eded] dark:bg-[#25242d] hover:bg-[#eaddff] text-[#1c1b1b] dark:text-[#f5f3f7] border border-[#1c1b1b] font-bold text-[11px] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xs">
                      content_copy
                    </span>
                    Salin
                  </button>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f6f3f2]/90 dark:bg-[#14131a]/90 border border-[#1c1b1b]/25 dark:border-[#484554] text-xs font-bold text-[#494551] dark:text-[#cbc4d1] tabular-nums">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>{lastOrder.createdAt}</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setTrackingModalOpen(true)}
                className="neo-btn px-6 py-3.5 rounded-2xl bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] font-headline font-bold text-sm border-2 border-[#1c1b1b] neo-shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">
                  local_shipping
                </span>
                <span>Lacak Pesanan 📦</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadInvoice}
                className="neo-btn px-6 py-3 rounded-2xl bg-[#ffffff] dark:bg-[#1f1f26] text-[#1c1b1b] dark:text-[#f5f3f7] font-headline font-bold text-sm border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                <span>Unduh Invoice PDF 📄</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2-COLUMN DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Card 1: Status Pembayaran */}
            <section className="rounded-3xl bg-[#ffffff] dark:bg-[#1f1f26] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#ffe081] dark:bg-[#2a2936] text-[#231b00] dark:text-[#d0bcff] border-2 border-[#1c1b1b] dark:border-[#484554] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                      payments
                    </span>
                  </span>
                  <div>
                    <h2 className="font-headline font-bold text-base sm:text-lg text-[#1c1b1b] dark:text-[#f5f3f7]">
                      Status Pembayaran
                    </h2>
                    <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1]">
                      Metode QRIS Otomatis Terverifikasi
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] dark:border-[#fe8eb7] font-headline font-bold text-[11px]">
                  QRIS Terverifikasi • Lunas Otomatis
                </span>
              </div>

              {/* Total Paid Box */}
              <div className="p-4 rounded-2xl bg-[#f6f3f2] dark:bg-[#14131a] border-2 border-[#1c1b1b]/15 dark:border-[#484554] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border border-[#1c1b1b] dark:border-[#484554] flex items-center justify-center text-[#674ba7] dark:text-[#d0bcff]">
                    <span className="material-symbols-outlined text-xl">
                      qr_code_2
                    </span>
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-[#494551] dark:text-[#cbc4d1] block">
                      Total Pembayaran
                    </span>
                    <span className="font-headline text-2xl font-bold text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                      {formatIDR(lastOrder.grandTotal)}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#ffe081] dark:bg-[#4f348d] text-[#231b00] dark:text-[#eaddff] font-bold text-[11px] border border-[#1c1b1b]">
                    Lunas Otomatis
                  </span>
                  <p className="text-[11px] font-semibold text-[#494551] dark:text-[#cbc4d1] mt-1 tabular-nums">
                    Ref: QRS-889104-MYRN
                  </p>
                </div>
              </div>

              {/* 3 Micro Perks */}
              <div className="grid grid-cols-3 gap-2 text-[11px] font-bold text-[#494551] dark:text-[#cbc4d1]">
                <div className="px-2.5 py-2 rounded-xl bg-[#fcf9f8] dark:bg-[#25242d] border border-[#1c1b1b]/15 dark:border-[#484554] flex items-center gap-1.5 truncate">
                  <span className="material-symbols-outlined text-sm text-[#674ba7] dark:text-[#d0bcff]">
                    verified
                  </span>
                  <span className="truncate">Bebas Biaya Admin</span>
                </div>
                <div className="px-2.5 py-2 rounded-xl bg-[#fcf9f8] dark:bg-[#25242d] border border-[#1c1b1b]/15 dark:border-[#484554] flex items-center gap-1.5 truncate">
                  <span className="material-symbols-outlined text-sm text-[#674ba7] dark:text-[#d0bcff]">
                    receipt
                  </span>
                  <span className="truncate">PPN 11% Tercakup</span>
                </div>
                <div className="px-2.5 py-2 rounded-xl bg-[#fcf9f8] dark:bg-[#25242d] border border-[#1c1b1b]/15 dark:border-[#484554] flex items-center gap-1.5 truncate">
                  <span className="material-symbols-outlined text-sm text-[#9b3e64] dark:text-[#fe8eb7]">
                    inventory_2
                  </span>
                  <span className="truncate">Free Eco-Bubblewrap</span>
                </div>
              </div>

              {/* Email Notice */}
              <div className="p-3 rounded-xl bg-[#eaddff]/35 dark:bg-[#2c2540] border border-[#674ba7]/30 dark:border-[#d0bcff]/30 flex items-center gap-2.5 text-xs font-semibold text-[#1c1b1b] dark:text-[#f5f3f7]">
                <span className="material-symbols-outlined text-base text-[#674ba7] dark:text-[#d0bcff]">
                  mail
                </span>
                <span>
                  Salinan bukti pembayaran digital dan e-receipt lengkap telah
                  dikirim ke{' '}
                  <strong className="underline text-[#674ba7] dark:text-[#d0bcff]">
                    {lastOrder.customer.email}
                  </strong>
                  .
                </span>
              </div>
            </section>

            {/* Card 2: Informasi Pengiriman */}
            <section className="rounded-3xl bg-[#ffffff] dark:bg-[#1f1f26] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                      local_shipping
                    </span>
                  </span>
                  <div>
                    <h2 className="font-headline font-bold text-base sm:text-lg text-[#1c1b1b] dark:text-[#f5f3f7]">
                      Informasi Pengiriman
                    </h2>
                    <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1]">
                      Diproses dari Gudang Mayurien Jakarta Pusat
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] font-headline font-bold text-xs">
                  Siap Dikemas 📦
                </span>
              </div>

              {/* Courier & Tracking Row */}
              <div className="p-4 rounded-2xl bg-[#f6f3f2] dark:bg-[#14131a] border-2 border-[#1c1b1b]/15 dark:border-[#484554] flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                      J&amp;T Express Regular
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] text-[10px] font-bold">
                      Termurah
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#494551] dark:text-[#cbc4d1]">
                    <span>Nomor Resi:</span>
                    <strong className="font-headline font-bold text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                      {lastOrder.trackingNumber}
                    </strong>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyText(lastOrder.trackingNumber, 'Nomor Resi')
                      }
                      aria-label="Salin Nomor Resi"
                      className="hover:text-[#674ba7] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">
                        content_copy
                      </span>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setTrackingModalOpen(true)}
                  className="neo-btn px-3.5 py-2 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                  <span>Lacak di J&amp;T Web</span>
                </button>
              </div>

              {/* Two Boxes: Estimasi Tiba & Alamat Pengiriman */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#fcf9f8] dark:bg-[#25242d] border border-[#1c1b1b]/20 dark:border-[#484554] space-y-1">
                  <span className="text-xs font-bold text-[#9b3e64] dark:text-[#fe8eb7] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    Estimasi Tiba
                  </span>
                  <p className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                    Besok Sore (1x24 Jam)
                  </p>
                  <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1]">
                    {lastOrder.estimatedArrival}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#fcf9f8] dark:bg-[#25242d] border border-[#1c1b1b]/20 dark:border-[#484554] space-y-1">
                  <span className="text-xs font-bold text-[#674ba7] dark:text-[#d0bcff] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    Alamat Pengiriman
                  </span>
                  <p className="font-headline font-bold text-xs text-[#1c1b1b] dark:text-[#f5f3f7]">
                    {lastOrder.customer.fullName} ({lastOrder.customer.phone})
                  </p>
                  <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1]">
                    {lastOrder.customer.address}, {lastOrder.customer.district},{' '}
                    {lastOrder.customer.city}, {lastOrder.customer.postalCode}.
                  </p>
                  {lastOrder.customer.courierNote && (
                    <p className="text-[11px] italic text-[#725c00] dark:text-[#ffe081] pt-0.5">
                      Catatan: {lastOrder.customer.courierNote}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Card 3: Rincian Produk Dipesan */}
            <section className="rounded-3xl bg-[#ffffff] dark:bg-[#1f1f26] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#ffe081] dark:bg-[#2a2936] text-[#231b00] dark:text-[#d0bcff] border-2 border-[#1c1b1b] dark:border-[#484554] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                      shopping_bag
                    </span>
                  </span>
                  <div>
                    <h2 className="font-headline font-bold text-base sm:text-lg text-[#1c1b1b] dark:text-[#f5f3f7]">
                      Rincian Produk Dipesan
                    </h2>
                    <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1]">
                      3 Item Utama + 1 Hadiah Spesial Unboxing
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#f0eded] dark:bg-[#25242d] text-[#1c1b1b] dark:text-[#f5f3f7] border border-[#1c1b1b]/30 dark:border-[#484554] text-xs font-bold tabular-nums">
                  Total: 4 Barang
                </span>
              </div>

              <div className="space-y-3">
                {lastOrder.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-[#fcf9f8] dark:bg-[#14131a] border border-[#1c1b1b]/15 dark:border-[#484554]"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover border border-[#1c1b1b]"
                      />
                      <div>
                        <h3 className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                          Variasi: {item.variantLabel}
                        </p>
                        <p className="text-[11px] font-semibold text-[#494551] dark:text-[#cbc4d1] tabular-nums">
                          {item.quantity}x @ {formatIDR(item.price)}
                        </p>
                      </div>
                    </div>
                    <span className="font-headline font-bold text-sm text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                      {formatIDR(item.price * item.quantity)}
                    </span>
                  </div>
                ))}

                {/* Free Gift Item Row */}
                <div className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-[#ffe081]/30 dark:bg-[#3a1f2e]/60 border-2 border-dashed border-[#9b3e64] dark:border-[#fe8eb7]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-xl bg-[#ffe081] dark:bg-[#7d244b] border-2 border-[#1c1b1b] flex items-center justify-center text-[#231b00] dark:text-[#ffd9e3] shrink-0">
                      <span className="material-symbols-outlined text-2xl">
                        redeem
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="px-2 py-0.5 rounded bg-[#9b3e64] text-white text-[10px] font-extrabold uppercase">
                          HADIAH SPESIAL
                        </span>
                        <h3 className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                          Sticker Pack Hologram Min-Mayu
                        </h3>
                      </div>
                      <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                        Edisi Kolektor Komunitas Jurnal Mayurien
                      </p>
                      <p className="text-[11px] font-extrabold text-[#9b3e64] dark:text-[#fe8eb7]">
                        1x GRATIS (Free Gift)
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-headline font-bold text-sm text-[#9b3e64] dark:text-[#fe8eb7] block">
                      FREE
                    </span>
                    <span className="text-[11px] text-[#494551] dark:text-[#cbc4d1] line-through tabular-nums">
                      Rp 25.000
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Ringkasan Biaya Card */}
            <aside className="rounded-3xl bg-[#ffffff] dark:bg-[#1f1f26] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1c1b1b]/15 dark:border-[#484554]">
                <h2 className="font-headline font-bold text-lg text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Ringkasan Biaya
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-[#ffe081] dark:bg-[#4f348d] text-[#231b00] dark:text-[#eaddff] text-xs font-bold border border-[#1c1b1b]">
                  Lunas
                </span>
              </div>

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between text-[#494551] dark:text-[#cbc4d1] font-medium">
                  <span>Subtotal Produk (3 item)</span>
                  <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                    {formatIDR(lastOrder.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-[#9b3e64] dark:text-[#fe8eb7] font-bold">
                  <span className="flex items-center gap-1.5">
                    Potongan Voucher
                    <span className="px-1.5 py-0.5 rounded bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] text-[10px]">
                      {lastOrder.voucherCode}
                    </span>
                  </span>
                  <span className="tabular-nums">
                    -{formatIDR(lastOrder.voucherDiscount)}
                  </span>
                </div>
                <div className="flex justify-between text-[#494551] dark:text-[#cbc4d1] font-medium">
                  <span>Ongkos Kirim (J&amp;T Regular)</span>
                  <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                    {formatIDR(lastOrder.shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-[#494551] dark:text-[#cbc4d1] font-medium">
                  <span>Biaya Layanan &amp; Asuransi</span>
                  <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                    {formatIDR(lastOrder.serviceFee)}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[#1c1b1b] dark:border-[#484554] flex items-baseline justify-between">
                <div>
                  <span className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7] block">
                    Total Tagihan Dibayar
                  </span>
                  <span className="text-[11px] text-[#494551] dark:text-[#cbc4d1]">
                    Sudah termasuk PPN 11%
                  </span>
                </div>
                <span className="font-headline text-2xl font-bold text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                  {formatIDR(lastOrder.grandTotal)}
                </span>
              </div>

              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] font-bold text-[#494551] dark:text-[#cbc4d1]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#725c00] dark:text-[#ffe081]">
                    verified_user
                  </span>
                  Transaksi Terlindungi
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#674ba7] dark:text-[#d0bcff]">
                    inventory_2
                  </span>
                  Bubble Wrap Tebal
                </span>
              </div>
            </aside>

            {/* WhatsApp CS Help Card */}
            <div className="rounded-3xl bg-[#ecfdf5] dark:bg-[#112620] border-2 border-[#1c1b1b] dark:border-emerald-700/60 neo-shadow p-5 space-y-3.5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-emerald-500 text-white border-2 border-[#1c1b1b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">
                    chat
                  </span>
                </span>
                <div>
                  <h3 className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                    Butuh Bantuan Pesanan?
                  </h3>
                  <p className="text-[11px] font-semibold text-[#494551] dark:text-emerald-200/80">
                    Min-Mayu aktif jam 08:00 - 22:00 WIB
                  </p>
                </div>
              </div>
              <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1] leading-relaxed">
                Ingin tambah request kartu ucapan ulang tahun atau revisi
                catatan kurir? Min-Mayu siap bantu!
              </p>
              <button
                type="button"
                onClick={() =>
                  showToast(
                    'Terhubung ke WhatsApp CS Min-Mayu 💬',
                    `Halo Kak ${lastOrder.customer.fullName}, pesanan ${lastOrder.orderId} siap kami bantu!`
                  )
                }
                className="neo-btn w-full py-2.5 px-4 rounded-xl bg-[#ffffff] dark:bg-[#16332b] border-2 border-[#1c1b1b] dark:border-emerald-500/60 text-emerald-700 dark:text-emerald-300 font-headline font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">
                  support_agent
                </span>
                <span>Chat Min-Mayu di CS WhatsApp</span>
              </button>
            </div>

            {/* Continue Shopping CTA */}
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="neo-btn w-full py-4 px-6 rounded-2xl bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] font-headline font-bold text-sm border-2 border-[#1c1b1b] neo-shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">
                storefront
              </span>
              <span>Lanjut Belanja di MayurienShop 🛍️</span>
            </button>

            {/* Mungkin Kamu Suka Teaser Card */}
            <div className="rounded-2xl bg-[#ffffff] dark:bg-[#1f1f26] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-4 space-y-2.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#674ba7] dark:text-[#d0bcff] block">
                MUNGKIN KAMU SUKA
              </span>
              <div className="flex items-center justify-between gap-3">
                <div
                  onClick={() =>
                    navigateTo('product-detail', retroTvProduct.slug)
                  }
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src={retroTvProduct.imageUrl}
                    alt={retroTvProduct.shortTitle}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover border border-[#1c1b1b]"
                  />
                  <div>
                    <h4 className="font-headline font-bold text-xs text-[#1c1b1b] dark:text-[#f5f3f7]">
                      {retroTvProduct.shortTitle}
                    </h4>
                    <p className="font-headline font-bold text-xs text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                      {formatIDR(retroTvProduct.price)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(retroTvProduct, 1)}
                  aria-label="Tambah Retro TV Sticky Note Dispenser ke Keranjang"
                  className="neo-btn w-9 h-9 rounded-xl bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border border-[#1c1b1b] flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">
                    add_shopping_cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Shipment Tracking Modal */}
      {trackingModalOpen && (
        <div
          onClick={() => setTrackingModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full rounded-3xl bg-[#ffffff] dark:bg-[#1f1f26] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-lg p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-lg font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                Lacak Pengiriman J&amp;T 📦
              </h3>
              <button
                type="button"
                onClick={() => setTrackingModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f6f3f2] dark:bg-[#2a2933] border border-[#1c1b1b] flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">
                  close
                </span>
              </button>
            </div>
            <div className="p-3 rounded-xl bg-[#eaddff]/40 dark:bg-[#2c2540] border border-[#1c1b1b]/20 text-xs font-bold flex justify-between">
              <span>Resi: {lastOrder.trackingNumber}</span>
              <span className="text-[#674ba7] dark:text-[#d0bcff]">
                On Schedule ✨
              </span>
            </div>
            <ol className="space-y-3 text-xs border-l-2 border-[#674ba7] ml-3 pl-4">
              <li>
                <p className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Pesanan Sedang Dikemas dengan Bubble Wrap Berlapis 🎀
                </p>
                <p className="text-[#494551] dark:text-[#cbc4d1]">
                  8 Nov 2026, 14:35 WIB — Studio Mayurien Jakarta Pusat
                </p>
              </li>
              <li>
                <p className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Nomor Resi J&amp;T Express Otomatis Diterbitkan
                </p>
                <p className="text-[#494551] dark:text-[#cbc4d1]">
                  8 Nov 2026, 14:29 WIB
                </p>
              </li>
              <li>
                <p className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Pembayaran QRIS Terverifikasi Lunas
                </p>
                <p className="text-[#494551] dark:text-[#cbc4d1]">
                  8 Nov 2026, 14:28 WIB
                </p>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
