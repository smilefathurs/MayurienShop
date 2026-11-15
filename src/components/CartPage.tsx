import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { formatIDR } from '../data/products';

export const CartPage: React.FC = () => {
  const {
    cart,
    navigateTo,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    restoreDemoCart,
    appliedVoucher,
    applyVoucherCode,
    removeVoucher,
    cartSubtotal,
    cartCompareSubtotal,
    storeAutomaticDiscount,
    cartItemCount,
    showToast,
  } = useShop();

  const [voucherInput, setVoucherInput] = useState<string>(
    appliedVoucher?.code || 'GEMAS15'
  );
  const [secondsLeft, setSecondsLeft] = useState<number>(59 * 60 + 42);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 59 * 60 + 42));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, '0');
  const secs = (secondsLeft % 60).toString().padStart(2, '0');

  // Free shipping threshold logic matching reference screen
  const freeShippingThreshold = 218000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progressPercentage = Math.min(
    100,
    Math.round((cartSubtotal / freeShippingThreshold) * 100)
  );

  const estimatedShipping = 12000;
  const voucherDiscount = appliedVoucher ? appliedVoucher.discount : 0;
  const totalSavings = storeAutomaticDiscount + voucherDiscount;
  const grandTotal =
    cart.length > 0
      ? Math.max(0, cartSubtotal + estimatedShipping - voucherDiscount)
      : 0;

  const handleVoucherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyVoucherCode(voucherInput);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#494551] dark:text-[#cbc4d1] mb-6"
      >
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">home</span>
          Beranda
        </button>
        <span className="text-[#ccc4d1]">/</span>
        <span className="text-[#1c1b1b] dark:text-[#f5f3f7]">
          Keranjang Belanja
        </span>
      </nav>

      {/* Page Title & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaddff] dark:bg-[#4f348d] border-2 border-[#1c1b1b] dark:border-[#d0bcff] text-[#22055d] dark:text-[#eaddff] text-xs font-bold mb-2">
            <span className="material-symbols-outlined text-sm">
              local_mall
            </span>
            <span>Langkah 1 dari 3 • Cek Belanjaanmu</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1b1b] dark:text-[#f5f3f7] flex items-center gap-3 flex-wrap">
            Keranjang Belanja
            <span className="text-base sm:text-lg font-headline font-bold px-3 py-0.5 rounded-full bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] neo-shadow-sm tabular-nums">
              {cart.length} Item Dipilih
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-[#494551] dark:text-[#cbc4d1] bg-[#ffffff] dark:bg-[#25242d] px-3.5 py-2 rounded-xl border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm self-start sm:self-end">
          <span className="material-symbols-outlined text-base text-[#725c00] dark:text-[#ffe081]">
            timer
          </span>
          <span>
            Pesanan disimpan selama{' '}
            <strong className="text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
              {mins}:{secs}
            </strong>
          </span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="rounded-3xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-10 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#ffd9e3] dark:bg-[#7d244b] border-2 border-[#1c1b1b] flex items-center justify-center text-[#3e0020] dark:text-[#ffd9e3]">
            <span className="material-symbols-outlined text-3xl">
              shopping_bag
            </span>
          </div>
          <h2 className="font-headline text-2xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
            Keranjang Belanjamu Masih Kosong Nih! 🥺
          </h2>
          <p className="text-sm font-medium text-[#494551] dark:text-[#cbc4d1] max-w-md mx-auto">
            Yuk isi dengan koleksi buku jurnal, gel pen pastel, atau desk
            organizer gemas pilihanmu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigateTo('catalog')}
              className="neo-btn px-6 py-3 rounded-2xl bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] font-headline font-bold text-sm border-2 border-[#1c1b1b] neo-shadow cursor-pointer"
            >
              Jelajahi Katalog Produk
            </button>
            <button
              type="button"
              onClick={restoreDemoCart}
              className="neo-btn px-5 py-3 rounded-2xl bg-[#ffe081] text-[#231b00] font-headline font-bold text-sm border-2 border-[#1c1b1b] neo-shadow cursor-pointer"
            >
              Pulihkan 3 Item Contoh ✨
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Cart Items List (8 Cols) */}
          <div className="lg:col-span-8 space-y-5">
            {/* Free Shipping Progress Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow">
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-[#ffe081] text-[#231b00] border-2 border-[#1c1b1b] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">
                      local_shipping
                    </span>
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                    {remainingForFreeShipping > 0 ? (
                      <>
                        Belanja{' '}
                        <span className="text-[#9b3e64] dark:text-[#fe8eb7] font-extrabold tabular-nums">
                          {formatIDR(remainingForFreeShipping)}
                        </span>{' '}
                        lagi untuk dapatkan{' '}
                        <span className="underline decoration-2 decoration-[#674ba7] dark:decoration-[#d0bcff]">
                          GRATIS ONGKIR!
                        </span>
                      </>
                    ) : (
                      <>
                        Hore! Pesananmu sudah memenuhi syarat{' '}
                        <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                          GRATIS ONGKIR! 🎉
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <span className="text-xs font-extrabold text-[#674ba7] dark:text-[#d0bcff] tabular-nums shrink-0">
                  {progressPercentage}%
                </span>
              </div>
              <div className="w-full h-3 bg-[#f0eded] dark:bg-[#1b1a22] rounded-full border-2 border-[#1c1b1b] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#8064c2] via-[#fe8eb7] to-[#ffe081] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Cart Items Stack */}
            <div className="space-y-4">
              {cart.map((item) => {
                const lineTotal = item.price * item.quantity;
                const lineCompareTotal = item.compareAtPrice
                  ? item.compareAtPrice * item.quantity
                  : undefined;

                return (
                  <article
                    key={item.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 relative transition-all hover:border-[#674ba7] dark:hover:border-[#d0bcff]"
                  >
                    {/* Product Thumbnail */}
                    <div
                      onClick={() => navigateTo('product-detail', item.slug)}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] overflow-hidden shrink-0 relative cursor-pointer"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {item.badgeText && (
                        <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-[#fe8eb7] text-[#3e0020] border border-[#1c1b1b] text-[10px] font-headline font-bold">
                          {item.badgeText}
                        </span>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#674ba7] dark:text-[#d0bcff]">
                            {item.categoryLabel}
                          </span>
                          <h2 className="font-headline font-bold text-base sm:text-lg text-[#1c1b1b] dark:text-[#f5f3f7] leading-snug">
                            <button
                              type="button"
                              onClick={() =>
                                navigateTo('product-detail', item.slug)
                              }
                              className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors text-left cursor-pointer"
                            >
                              {item.title}
                            </button>
                          </h2>
                        </div>
                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Hapus ${item.title}`}
                          title="Hapus dari keranjang"
                          className="neo-btn p-2 rounded-xl bg-[#f6f3f2] dark:bg-[#1b1a22] hover:bg-red-100 dark:hover:bg-red-950/60 text-[#494551] dark:text-[#cbc4d1] hover:text-red-600 border-2 border-[#1c1b1b] dark:border-[#484554] shrink-0 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                        </button>
                      </div>

                      {/* Variant Pills */}
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#f0eded] dark:bg-[#1b1a22] border border-[#1c1b1b]/30 dark:border-[#484554] text-xs font-bold text-[#494551] dark:text-[#cbc4d1]">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#d0bcff] border border-[#1c1b1b]" />
                          Varian: {item.variantLabel}
                        </span>
                        {item.layoutLabel && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#f0eded] dark:bg-[#1b1a22] border border-[#1c1b1b]/30 dark:border-[#484554] text-xs font-bold text-[#494551] dark:text-[#cbc4d1]">
                            {item.layoutLabel}
                          </span>
                        )}
                        {item.stockNote && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-600/40 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                            <span className="material-symbols-outlined text-xs">
                              inventory_2
                            </span>
                            {item.stockNote}
                          </span>
                        )}
                      </div>

                      {/* Bottom Row: Quantity Controls & Price */}
                      <div className="mt-4 pt-3 border-t border-[#1c1b1b]/10 dark:border-[#484554] flex flex-wrap items-center justify-between gap-4">
                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-1 bg-[#f6f3f2] dark:bg-[#1b1a22] p-1 rounded-xl border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm">
                          <button
                            type="button"
                            onClick={() => updateCartQuantity(item.id, -1)}
                            aria-label="Kurangi jumlah"
                            className="w-7 h-7 rounded-lg bg-[#ffffff] dark:bg-[#25242d] hover:bg-[#eaddff] text-[#1c1b1b] dark:text-[#f5f3f7] border border-[#1c1b1b] flex items-center justify-center font-bold transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">
                              remove
                            </span>
                          </button>
                          <span className="w-9 text-center font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateCartQuantity(item.id, 1)}
                            aria-label="Tambah jumlah"
                            className="w-7 h-7 rounded-lg bg-[#eaddff] dark:bg-[#4f348d] hover:bg-[#8064c2] text-[#22055d] dark:text-[#eaddff] border border-[#1c1b1b] flex items-center justify-center font-bold transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">
                              add
                            </span>
                          </button>
                        </div>

                        {/* Price Info */}
                        <div className="text-right">
                          {lineCompareTotal ? (
                            <span className="text-xs text-[#494551] dark:text-[#cbc4d1] line-through tabular-nums block">
                              {formatIDR(lineCompareTotal)}
                            </span>
                          ) : item.quantity > 1 ? (
                            <span className="text-xs text-[#494551] dark:text-[#cbc4d1] font-semibold tabular-nums block">
                              {formatIDR(item.price)} / set
                            </span>
                          ) : null}
                          <span className="font-headline font-bold text-lg text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                            {formatIDR(lineTotal)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Actions: Continue Shopping & Clear Cart */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigateTo('catalog')}
                className="neo-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ffffff] dark:bg-[#25242d] text-[#1c1b1b] dark:text-[#f5f3f7] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm font-headline font-bold text-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">
                  arrow_back
                </span>
                <span>Lanjut Belanja</span>
              </button>

              <button
                type="button"
                onClick={clearCart}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#494551] dark:text-[#cbc4d1] hover:text-red-600 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">
                  delete_sweep
                </span>
                <span>Kosongkan Keranjang</span>
              </button>
            </div>

            {/* Cute Assurance Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#eaddff]/60 via-[#fcf9f8] to-[#ffd9e3]/60 dark:from-[#2c2540] dark:via-[#25242d] dark:to-[#3b2234] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#ffffff] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center text-[#9b3e64] dark:text-[#fe8eb7] shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    redeem
                  </span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-sm sm:text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
                    Bonus Gratis Stiker Pack Tiap Order! 🎁
                  </h3>
                  <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1]">
                    Semua pesanan dikemas cantik dengan bubble wrap berlapis
                    &amp; kertas tisu pastel tanpa biaya tambahan.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#ffe081] text-[#231b00] border-2 border-[#1c1b1b] font-headline font-bold text-xs shrink-0">
                Otomatis Aktif ✨
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Order Summary (4 Cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <div className="rounded-3xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-lg p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between border-b-2 border-[#1c1b1b]/10 dark:border-[#484554] pb-4">
                <h2 className="font-headline font-bold text-xl text-[#1c1b1b] dark:text-[#f5f3f7] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#674ba7] dark:text-[#d0bcff]">
                    receipt_long
                  </span>
                  Ringkasan Belanja
                </h2>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#f6f3f2] dark:bg-[#1b1a22] border border-[#1c1b1b]/20 text-[#494551] dark:text-[#cbc4d1] tabular-nums">
                  {cartItemCount} Pcs
                </span>
              </div>

              {/* Promo / Voucher Code Input */}
              <div className="space-y-2">
                <label
                  htmlFor="voucher-code"
                  className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7]"
                >
                  Punya Kode Promo / Voucher?
                </label>
                <form onSubmit={handleVoucherSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined text-base text-[#674ba7] dark:text-[#d0bcff] absolute left-3 top-2.5">
                      confirmation_number
                    </span>
                    <input
                      id="voucher-code"
                      type="text"
                      value={voucherInput}
                      onChange={(e) => setVoucherInput(e.target.value)}
                      placeholder="Masukkan kode"
                      className="w-full pl-9 pr-3 py-2 bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-xl text-xs font-bold uppercase tracking-wider text-[#1c1b1b] dark:text-[#f5f3f7] focus:outline-none focus:ring-2 focus:ring-[#674ba7]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="neo-btn px-4 py-2 rounded-xl bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] neo-shadow-sm font-headline font-bold text-xs shrink-0 cursor-pointer"
                  >
                    Pakai
                  </button>
                </form>
                {/* Applied Voucher Tag */}
                {appliedVoucher && (
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-600/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">
                        check_circle
                      </span>
                      Kode <strong>{appliedVoucher.code}</strong> terpasang!
                    </span>
                    <button
                      type="button"
                      onClick={removeVoucher}
                      className="text-[#9b3e64] dark:text-[#fe8eb7] font-extrabold tabular-nums hover:underline cursor-pointer"
                      title="Klik untuk lepas voucher"
                    >
                      -{formatIDR(appliedVoucher.discount).replace('Rp ', 'Rp ')}
                    </button>
                  </div>
                )}
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-3 pt-2 border-t-2 border-dashed border-[#1c1b1b]/15 dark:border-[#484554] text-sm">
                <div className="flex items-center justify-between text-[#494551] dark:text-[#cbc4d1] font-semibold">
                  <span>Total Harga ({cartItemCount} Barang)</span>
                  <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                    {formatIDR(cartCompareSubtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[#494551] dark:text-[#cbc4d1] font-semibold">
                  <span>Estimasi Ongkos Kirim</span>
                  <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                    {formatIDR(estimatedShipping)}
                  </span>
                </div>
                {storeAutomaticDiscount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-400 font-bold">
                    <span>Diskon Promo Toko</span>
                    <span className="tabular-nums">
                      -{formatIDR(storeAutomaticDiscount)}
                    </span>
                  </div>
                )}
                {appliedVoucher && (
                  <div className="flex items-center justify-between text-[#9b3e64] dark:text-[#fe8eb7] font-bold">
                    <span>Voucher ({appliedVoucher.code})</span>
                    <span className="tabular-nums">
                      -{formatIDR(appliedVoucher.discount)}
                    </span>
                  </div>
                )}
              </div>

              {/* Grand Total */}
              <div className="pt-4 border-t-2 border-[#1c1b1b] dark:border-[#484554] flex items-end justify-between">
                <div>
                  <span className="block text-xs font-bold text-[#494551] dark:text-[#cbc4d1]">
                    Total Pembayaran
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                    Sudah termasuk PPN (jika berlaku)
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-headline font-bold text-2xl text-[#674ba7] dark:text-[#d0bcff] tabular-nums block leading-none">
                    {formatIDR(grandTotal)}
                  </span>
                  {totalSavings > 0 && (
                    <span className="text-[11px] font-bold text-[#9b3e64] dark:text-[#fe8eb7] tabular-nums">
                      Hemat {formatIDR(totalSavings)}!
                    </span>
                  )}
                </div>
              </div>

              {/* Primary Checkout CTA */}
              <button
                type="button"
                onClick={() => navigateTo('checkout')}
                className="neo-btn w-full py-4 px-6 rounded-2xl bg-[#674ba7] hover:bg-[#583f94] dark:bg-[#d0bcff] dark:hover:bg-[#bfa3ff] text-white dark:text-[#22055d] font-headline font-bold text-base border-2 border-[#1c1b1b] neo-shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lanjut ke Pembayaran</span>
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </button>

              {/* Trust & Security Badges */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#494551] dark:text-[#cbc4d1]">
                  <span className="material-symbols-outlined text-base text-emerald-600 dark:text-emerald-400">
                    verified_user
                  </span>
                  <span>100% Transaksi Aman &amp; Bergaransi</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {['QRIS', 'BCA', 'Mandiri', 'GoPay', 'ShopeePay'].map(
                    (method) => (
                      <span
                        key={method}
                        className="px-2 py-0.5 bg-[#f6f3f2] dark:bg-[#1b1a22] border border-[#1c1b1b]/30 dark:border-[#484554] rounded text-[10px] font-bold"
                      >
                        {method}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Help / Customer Support Mini Card */}
            <div className="rounded-2xl bg-[#ffe081]/40 dark:bg-[#2a2736] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#ffe081] text-[#231b00] border border-[#1c1b1b] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-lg">
                    support_agent
                  </span>
                </span>
                <div>
                  <p className="font-headline font-bold text-xs text-[#1c1b1b] dark:text-[#f5f3f7]">
                    Butuh Bantuan Pesanan?
                  </p>
                  <p className="text-[11px] font-medium text-[#494551] dark:text-[#cbc4d1]">
                    Min-Mayu siap bantu bungkus kado!
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  showToast(
                    'CS Min-Mayu Online 💬',
                    'Bisa request bungkus kado & kartu ucapan gratis di catatan checkout ya!'
                  )
                }
                className="text-xs font-headline font-bold text-[#674ba7] dark:text-[#d0bcff] underline shrink-0 cursor-pointer"
              >
                Chat CS
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};
