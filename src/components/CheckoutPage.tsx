import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  SHIPPING_OPTIONS,
  PAYMENT_OPTIONS,
  formatIDR,
} from '../data/products';

const CHECKOUT_SHOWCASE_ITEMS = [
  {
    id: 'chk-1',
    title: 'Dreamy Pastel Hardcover Journal A5',
    variant: 'Varian: Lilac Bloom · Qty: 1',
    price: 89000,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgVttFZvF3XJyRa3gkDE37HlAcgI5Li6i1yUc-yY7Vg2SmxornMOZMSFkrTGEGqZMkSoVwVP7FBL0yO-Du39Wo7wq-jDcUed75iVh9lJMAgiifbK36xVT2w4bfCnhzwZfMzMb-e1Rlr8uOuI1YjFH4VC1Df-LdQR2BCdOWzwnX6_qYa-d0HaF6Il_W6rkJRDRGfenY1Xzui4_TO5pi0MZmpKeuJ1atvqpjVvs73A',
  },
  {
    id: 'chk-2',
    title: 'Mochi Retractable Gel Pen (Set of 6)',
    variant: 'Varian: Sweet Macaron · Qty: 1',
    price: 65000,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDo8vja2KDFB4okTa3LBTv_AuvZf0Vo8z7HwUS0sov4iGlJfMWeGSA8mrQ-EJ1vdQAmS3CM8ahJz-ttGunXMpBpwaMlvhqrR1tDQbTrnhk7FTU7LOmOOF0oAUrSy-JfqnGVYvZopqKPbTGuMLaUNYT7Ed-P1wpJKxUyvCuDxkeedJXHwuv6iFopATHz-MCVn1KeyXsg0SX07k5WMdqTLSe5TpHJ_CVstZa4B-ZFiA',
  },
  {
    id: 'chk-3',
    title: 'Sparkle Hologram Die-Cut Sticker Pack',
    variant: 'Varian: Celestial Bunny · Qty: 1',
    price: 43000,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlYEg4IOqCWOYke7mUIRcOerLBkbumrfq9YvAajIE35D6Z7vjED6pTfQXA7UPQwgudsQFDlUNAV2udLO8GpcRvLleIBYpEaw8hxYhMFjxQ377OJjJ7Sr5tyDkeFsQ38Lo3J4Zo3CfxTydGkKS9UaAvNOdhvEJeoDH7mbRtbPpt0sxG5Wl879Oj3um6JkiOIcjWVgdhiDjgEHw39mA2Ivtu978XUZ6AxLpap4nMBQ',
  },
];

export const CheckoutPage: React.FC = () => {
  const {
    navigateTo,
    customerInfo,
    setCustomerInfo,
    selectedShippingId,
    setSelectedShippingId,
    selectedPaymentId,
    setSelectedPaymentId,
    appliedVoucher,
    placeOrder,
    isQrisModalOpen,
    setIsQrisModalOpen,
    showToast,
  } = useShop();

  const [useShowcaseItems, setUseShowcaseItems] = useState<boolean>(true);

  const selectedShipping =
    SHIPPING_OPTIONS.find((s) => s.id === selectedShippingId) ||
    SHIPPING_OPTIONS[0];

  const subtotal = 197000;
  const shippingCost = selectedShipping.price;
  const voucherDiscount = appliedVoucher ? appliedVoucher.discount : 15000;
  const serviceFee = 1000;
  const grandTotal = subtotal + shippingCost - voucherDiscount + serviceFee;

  const handlePayNowClick = () => {
    if (!customerInfo.fullName.trim() || !customerInfo.address.trim()) {
      showToast(
        'Lengkapi Data Pengiriman 📝',
        'Mohon isi nama lengkap dan alamat pengiriman terlebih dahulu.',
        'warning'
      );
      return;
    }
    if (selectedPaymentId === 'qris') {
      setIsQrisModalOpen(true);
    } else {
      placeOrder();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Checkout Progress Stepper Sub-Bar */}
      <div className="bg-[#f6f3f2] dark:bg-[#1f1f26] border-b-2 border-[#1c1b1b] dark:border-[#484554] py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#e5e2e1] dark:bg-[#35343c] -z-0" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-1 bg-[#674ba7] dark:bg-[#d0bcff] -z-0" />

            {/* Step 1: Completed */}
            <button
              type="button"
              onClick={() => navigateTo('cart')}
              className="relative z-10 flex flex-col items-center gap-1.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center font-headline font-bold text-sm">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-xs font-bold text-[#674ba7] dark:text-[#d0bcff]">
                1. Keranjang
              </span>
            </button>

            {/* Step 2: Active */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] dark:border-[#fe8eb7] neo-shadow-sm flex items-center justify-center font-headline font-bold text-sm ring-4 ring-[#fe8eb7]/30">
                <span className="material-symbols-outlined text-lg">
                  local_shipping
                </span>
              </div>
              <span className="text-xs font-extrabold text-[#1c1b1b] dark:text-[#f5f3f7]">
                2. Pengiriman &amp; Bayar
              </span>
            </div>

            {/* Step 3: Upcoming */}
            <button
              type="button"
              onClick={() => placeOrder()}
              className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#e5e2e1] dark:bg-[#2a2931] text-[#494551] dark:text-[#cbc4d1] border-2 border-[#1c1b1b] dark:border-[#484554] flex items-center justify-center font-headline font-bold text-sm">
                3
              </div>
              <span className="text-xs font-semibold text-[#494551] dark:text-[#cbc4d1]">
                3. Selesai
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Checkout Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Customer & Shipping Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section 1: Informasi Kontak */}
            <section className="rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center font-headline font-bold">
                    1
                  </span>
                  <div>
                    <h2 className="font-headline text-lg sm:text-xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                      Informasi Kontak
                    </h2>
                    <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                      Notifikasi invoice &amp; update pengiriman dikirim ke
                      kontak ini
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ffd9e3]/60 dark:bg-[#7d244b]/50 text-[#7c274c] dark:text-[#ffd9e3] text-xs font-bold border border-[#1c1b1b]/20 dark:border-[#fe8eb7]/40">
                  Member VIP 💜
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                    Nama Lengkap Penerima
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined text-lg text-[#494551] dark:text-[#cbc4d1] absolute left-3.5 top-2.5">
                      person
                    </span>
                    <input
                      type="text"
                      value={customerInfo.fullName}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      placeholder="Masukkan nama lengkap"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-semibold text-[#1c1b1b] dark:text-[#f5f3f7] focus:outline-none focus:ring-2 focus:ring-[#674ba7]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                    Alamat Email Aktif
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined text-lg text-[#494551] dark:text-[#cbc4d1] absolute left-3.5 top-2.5">
                      mail
                    </span>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="nama@email.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-semibold text-[#1c1b1b] dark:text-[#f5f3f7] focus:outline-none focus:ring-2 focus:ring-[#674ba7]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                    Nomor WhatsApp / HP
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined text-lg text-[#494551] dark:text-[#cbc4d1] absolute left-3.5 top-2.5">
                      chat
                    </span>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-semibold tabular-nums text-[#1c1b1b] dark:text-[#f5f3f7] focus:outline-none focus:ring-2 focus:ring-[#674ba7]"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Alamat Pengiriman */}
            <section className="rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-xl bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center font-headline font-bold">
                  2
                </span>
                <div>
                  <h2 className="font-headline text-lg sm:text-xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                    Alamat Pengiriman
                  </h2>
                  <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                    Pastikan alamat lengkap beserta nomor rumah atau patokan
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                    Alamat Lengkap &amp; Nomor Rumah
                  </label>
                  <textarea
                    rows={2}
                    value={customerInfo.address}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    placeholder="Nama jalan, nomor rumah, RT/RW..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-semibold text-[#1c1b1b] dark:text-[#f5f3f7] focus:outline-none focus:ring-2 focus:ring-[#674ba7]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                      Provinsi
                    </label>
                    <select
                      value={customerInfo.province}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({
                          ...prev,
                          province: e.target.value,
                        }))
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-semibold text-[#1c1b1b] dark:text-[#f5f3f7]"
                    >
                      <option>DKI Jakarta</option>
                      <option>Jawa Barat</option>
                      <option>Banten</option>
                      <option>Jawa Timur</option>
                      <option>DI Yogyakarta</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                      Kota / Kabupaten
                    </label>
                    <select
                      value={customerInfo.city}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-semibold text-[#1c1b1b] dark:text-[#f5f3f7]"
                    >
                      <option>Jakarta Barat</option>
                      <option>Jakarta Selatan</option>
                      <option>Jakarta Pusat</option>
                      <option>Bandung</option>
                      <option>Tangerang Selatan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                      Kecamatan
                    </label>
                    <select
                      value={customerInfo.district}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({
                          ...prev,
                          district: e.target.value,
                        }))
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-semibold text-[#1c1b1b] dark:text-[#f5f3f7]"
                    >
                      <option>Kebon Jeruk</option>
                      <option>Palmerah</option>
                      <option>Tanjung Duren</option>
                      <option>Kembangan</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                      Kode Pos
                    </label>
                    <input
                      type="text"
                      value={customerInfo.postalCode}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({
                          ...prev,
                          postalCode: e.target.value,
                        }))
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-semibold tabular-nums text-[#1c1b1b] dark:text-[#f5f3f7]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] mb-1.5">
                      Catatan untuk Kurir (Opsional)
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined text-lg text-[#494551] dark:text-[#cbc4d1] absolute left-3.5 top-2.5">
                        sticky_note_2
                      </span>
                      <input
                        type="text"
                        value={customerInfo.courierNote}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            courierNote: e.target.value,
                          }))
                        }
                        placeholder="Contoh: Tolong titip di satpam..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] text-sm font-medium text-[#1c1b1b] dark:text-[#f5f3f7]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Metode Pengiriman */}
            <section className="rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-xl bg-[#ffe081] dark:bg-[#564500] text-[#231b00] dark:text-[#ffe081] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center font-headline font-bold">
                  3
                </span>
                <div>
                  <h2 className="font-headline text-lg sm:text-xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                    Pilihan Ekspedisi
                  </h2>
                  <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                    Pilih opsi pengiriman paling sesuai dengan kebutuhanmu
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {SHIPPING_OPTIONS.map((option) => {
                  const isSelected = selectedShippingId === option.id;
                  return (
                    <label
                      key={option.id}
                      onClick={() => setSelectedShippingId(option.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#eaddff]/35 dark:bg-[#4f348d]/25 border-[#674ba7] dark:border-[#d0bcff] neo-shadow-sm'
                          : 'bg-[#fcf9f8] dark:bg-[#1b1a22] border-[#1c1b1b]/30 dark:border-[#484554] hover:border-[#1c1b1b]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <input
                          type="radio"
                          name="shipping"
                          checked={isSelected}
                          onChange={() => setSelectedShippingId(option.id)}
                          className="w-4 h-4 accent-[#674ba7]"
                        />
                        <div className="w-10 h-10 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#9b3e64] dark:text-[#fe8eb7]">
                            {option.icon}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                              {option.name}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${option.badgeColor}`}
                            >
                              {option.badgeText}
                            </span>
                          </div>
                          <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                            {option.eta}
                          </p>
                        </div>
                      </div>
                      <span className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                        {formatIDR(option.price)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* Section 4: Metode Pembayaran */}
            <section className="rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-xl bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center font-headline font-bold">
                  4
                </span>
                <div>
                  <h2 className="font-headline text-lg sm:text-xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                    Metode Pembayaran
                  </h2>
                  <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                    Pilih channel pembayaran favoritmu secara aman &amp; instan
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {PAYMENT_OPTIONS.map((option) => {
                  const isSelected = selectedPaymentId === option.id;
                  return (
                    <label
                      key={option.id}
                      onClick={() => setSelectedPaymentId(option.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#eaddff]/35 dark:bg-[#4f348d]/25 border-[#674ba7] dark:border-[#d0bcff] neo-shadow-sm'
                          : 'bg-[#fcf9f8] dark:bg-[#1b1a22] border-[#1c1b1b]/30 dark:border-[#484554] hover:border-[#1c1b1b]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <input
                          type="radio"
                          name="payment"
                          checked={isSelected}
                          onChange={() => setSelectedPaymentId(option.id)}
                          className="w-4 h-4 accent-[#674ba7]"
                        />
                        <div className="w-10 h-10 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#674ba7] dark:text-[#d0bcff]">
                            {option.icon}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                              {option.name}
                            </span>
                            {option.badgeText && (
                              <span className="px-2 py-0.5 rounded-full bg-[#ffe081] text-[#231b00] dark:bg-[#564500] dark:text-[#ffe081] text-[10px] font-bold">
                                {option.badgeText}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                            {option.subtitle}
                          </p>
                        </div>
                      </div>
                      {isSelected ? (
                        <span className="material-symbols-outlined text-[#674ba7] dark:text-[#d0bcff]">
                          check_circle
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-[#494551] dark:text-[#cbc4d1]">
                          {option.rightLabel}
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Sticky Live Order Summary (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <aside className="rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 sm:p-6">
              <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-dashed border-[#1c1b1b]/20 dark:border-[#484554]">
                <h2 className="font-headline text-xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Rincian Pesanan
                </h2>
                <button
                  type="button"
                  onClick={() => setUseShowcaseItems((prev) => !prev)}
                  className="px-2.5 py-1 rounded-full bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] font-headline font-bold text-xs border border-[#1c1b1b] tabular-nums cursor-pointer"
                >
                  3 Item
                </button>
              </div>

              {/* Cart Items List inside Summary */}
              <div className="space-y-3.5 mb-5">
                {CHECKOUT_SHOWCASE_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3.5 p-2.5 rounded-xl bg-[#f6f3f2] dark:bg-[#1b1a22] border border-[#1c1b1b]/15 dark:border-[#484554]"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-lg object-cover border border-[#1c1b1b]"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7] truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
                        {item.variant}
                      </p>
                      <p className="font-headline font-bold text-sm text-[#674ba7] dark:text-[#d0bcff] tabular-nums mt-0.5">
                        {formatIDR(item.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Voucher Applied Box */}
              <div className="p-3 rounded-xl bg-[#ffe081]/35 dark:bg-[#2a2736] border-2 border-[#1c1b1b] dark:border-[#484554] mb-5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#674ba7] dark:text-[#d0bcff]">
                    confirmation_number
                  </span>
                  <div>
                    <p className="text-xs font-extrabold text-[#1c1b1b] dark:text-[#f5f3f7]">
                      Voucher: GEMAS15
                    </p>
                    <p className="text-[11px] font-semibold text-[#9b3e64] dark:text-[#fe8eb7]">
                      Hemat Rp 15.000 aktif!
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] text-xs font-bold border border-[#1c1b1b]">
                  Terpasang
                </span>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-2.5 text-sm border-t-2 border-dashed border-[#1c1b1b]/20 dark:border-[#484554] pt-4 mb-5">
                <div className="flex justify-between text-[#494551] dark:text-[#cbc4d1] font-medium">
                  <span>Subtotal Produk</span>
                  <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                    {formatIDR(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-[#494551] dark:text-[#cbc4d1] font-medium">
                  <span>Ongkos Kirim</span>
                  <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                    {formatIDR(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-[#9b3e64] dark:text-[#fe8eb7] font-bold">
                  <span>Potongan Voucher (GEMAS15)</span>
                  <span className="tabular-nums">
                    -{formatIDR(voucherDiscount)}
                  </span>
                </div>
                <div className="flex justify-between text-[#494551] dark:text-[#cbc4d1] font-medium">
                  <span>Biaya Layanan &amp; Asuransi</span>
                  <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                    {formatIDR(serviceFee)}
                  </span>
                </div>

                <div className="pt-3 mt-3 border-t-2 border-[#1c1b1b] dark:border-[#484554] flex items-baseline justify-between">
                  <div>
                    <span className="font-headline font-bold text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
                      Total Tagihan
                    </span>
                    <p className="text-[11px] text-[#494551] dark:text-[#cbc4d1]">
                      Sudah termasuk PPN 11%
                    </p>
                  </div>
                  <span className="font-headline font-bold text-2xl text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                    {formatIDR(grandTotal)}
                  </span>
                </div>
              </div>

              {/* Primary CTA Button */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handlePayNowClick}
                  className="neo-btn w-full py-3.5 px-6 rounded-2xl bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] font-headline font-bold text-base border-2 border-[#1c1b1b] neo-shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">
                    lock
                  </span>
                  <span>Bayar Sekarang ({formatIDR(grandTotal)})</span>
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </button>

                <button
                  type="button"
                  onClick={placeOrder}
                  className="w-full py-2 rounded-xl text-xs font-bold text-[#674ba7] dark:text-[#d0bcff] hover:underline cursor-pointer"
                >
                  Simulasi Lunas Instan → Lihat Halaman Konfirmasi Pesanan ✨
                </button>
              </div>

              {/* Security & Guarantee Footer */}
              <div className="mt-4 pt-3 flex items-center justify-center gap-4 text-[11px] font-bold text-[#494551] dark:text-[#cbc4d1]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#674ba7] dark:text-[#d0bcff]">
                    verified_user
                  </span>
                  Garansi Keamanan
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#9b3e64] dark:text-[#fe8eb7]">
                    local_shipping
                  </span>
                  Packing Bubble Wrap Rapi
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* QRIS Payment Scan Modal (Matches code__10__28f74941.html) */}
      {isQrisModalOpen && (
        <div
          onClick={() => setIsQrisModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full rounded-3xl bg-[#ffffff] dark:bg-[#1f1f26] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-lg p-6 space-y-5 relative"
          >
            <button
              type="button"
              onClick={() => setIsQrisModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f6f3f2] dark:bg-[#2a2933] border-2 border-[#1c1b1b] flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="text-center space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe081] text-[#231b00] border-2 border-[#1c1b1b] text-xs font-bold">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                Selesaikan dalam 23:59:14
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7] pt-1">
                Scan QRIS MayurienShop
              </h3>
              <p className="text-xs font-semibold text-[#494551] dark:text-[#cbc4d1]">
                Mendukung GoPay, OVO, ShopeePay, DANA &amp; Mobile Banking
              </p>
            </div>

            {/* Crisp SVG QR Code Card */}
            <div className="bg-[#fcf9f8] p-5 rounded-2xl border-2 border-[#1c1b1b] neo-shadow-sm flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-[#1c1b1b]/15">
                <span className="font-headline font-bold text-xs text-[#674ba7]">
                  MAYURIEN STUDIO ID
                </span>
                <span className="px-2 py-0.5 rounded bg-[#ffd9e3] text-[#3e0020] font-bold text-[10px] border border-[#1c1b1b]">
                  NMID: ID1025099821
                </span>
              </div>
              <svg
                viewBox="0 0 120 120"
                className="w-44 h-44 border-2 border-[#1c1b1b] rounded-xl p-2 bg-white"
              >
                <rect width="120" height="120" fill="#ffffff" />
                <rect x="8" y="8" width="32" height="32" fill="#1c1b1b" />
                <rect x="13" y="13" width="22" height="22" fill="#ffffff" />
                <rect x="18" y="18" width="12" height="12" fill="#674ba7" />
                <rect x="80" y="8" width="32" height="32" fill="#1c1b1b" />
                <rect x="85" y="13" width="22" height="22" fill="#ffffff" />
                <rect x="90" y="18" width="12" height="12" fill="#674ba7" />
                <rect x="8" y="80" width="32" height="32" fill="#1c1b1b" />
                <rect x="13" y="85" width="22" height="22" fill="#ffffff" />
                <rect x="18" y="90" width="12" height="12" fill="#674ba7" />
                <rect x="48" y="12" width="8" height="8" fill="#1c1b1b" />
                <rect x="60" y="20" width="8" height="16" fill="#1c1b1b" />
                <rect x="46" y="44" width="28" height="28" rx="6" fill="#ffd9e3" stroke="#1c1b1b" strokeWidth="2" />
                <text x="60" y="62" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3e0020">
                  M✨
                </text>
                <rect x="14" y="48" width="20" height="8" fill="#1c1b1b" />
                <rect x="82" y="50" width="24" height="8" fill="#1c1b1b" />
                <rect x="48" y="82" width="12" height="24" fill="#1c1b1b" />
                <rect x="68" y="76" width="16" height="12" fill="#1c1b1b" />
                <rect x="88" y="88" width="20" height="20" fill="#1c1b1b" />
              </svg>
              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-[#494551] block">
                  Total Pembayaran QRIS
                </span>
                <span className="font-headline text-2xl font-bold text-[#674ba7] tabular-nums">
                  {formatIDR(grandTotal)}
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={placeOrder}
                className="neo-btn w-full py-3.5 rounded-2xl bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] font-headline font-bold text-sm border-2 border-[#1c1b1b] neo-shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">
                  verified
                </span>
                <span>Saya Sudah Bayar (Konfirmasi Otomatis)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
