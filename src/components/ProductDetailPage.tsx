import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import {
  PRODUCTS,
  PRODUCT_REVIEWS,
  formatIDR,
} from '../data/products';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProduct,
    navigateTo,
    addToCart,
    wishlist,
    toggleWishlist,
    setSelectedCategoryFilter,
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    selectedProduct.colorVariants[0]?.label || 'Lilac Cloud'
  );
  const [selectedLayout, setSelectedLayout] = useState<string>(
    selectedProduct.layoutVariants?.[0] || 'Grid / Kotak-kotak (Favorit)'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedColor(selectedProduct.colorVariants[0]?.label || 'Standard');
    setSelectedLayout(
      selectedProduct.layoutVariants?.[0] || 'Grid / Kotak-kotak (Favorit)'
    );
    setQuantity(1);
  }, [selectedProduct.id]);

  const gallery =
    selectedProduct.gallery.length > 0
      ? selectedProduct.gallery
      : [{ url: selectedProduct.imageUrl, alt: selectedProduct.title }];

  const currentImage = gallery[activeImageIndex] || gallery[0];
  const isWishlisted = wishlist.includes(selectedProduct.id);
  const savings = selectedProduct.compareAtPrice
    ? selectedProduct.compareAtPrice - selectedProduct.price
    : 0;

  // Signature 4 related recommendations from code__8__fd918d2c.html
  const relatedItems = [
    {
      product: PRODUCTS.find((p) => p.id === 'prod-14') || PRODUCTS[3],
      displayTitle: 'Pastel Dual-Tip Highlighter Set (6 Colors)',
      displayCategory: 'Pens & Highlighters',
      displayPrice: 42000,
      comparePrice: undefined,
      rating: 4.9,
      badge: 'Terlaris',
      badgeClass: 'bg-[#ffe081] text-[#231b00]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiCWa-DeGMli4CiDct9hROFWv3nYMK1g-gi_wQf0ja7z8KauBZnDQ4BGMPInWnvM3PB7u_-WBSlzv8eZg3_24sIBhq-V6li-M0maURpxaeMdfx4-U-uWvNuB4T7PYzAE0nHh66h9zG5kKEkZKR-IIONvIi7XqxE5HsvgCBsmN3WGB8Do9k0YPa188W5xOLR7flXAs_hiH1CH0kjIJ_MD36dRk4kYOyGVDHNsUOrw',
    },
    {
      product: PRODUCTS.find((p) => p.id === 'prod-5') || PRODUCTS[4],
      displayTitle: 'Cloud & Star Grid Washi Tape Roll (Set of 3)',
      displayCategory: 'Stickers & Washi',
      displayPrice: 24500,
      comparePrice: undefined,
      rating: 5.0,
      badge: 'Baru!',
      badgeClass: 'bg-[#eaddff] text-[#22055d]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA21QzdzHbcLrqMDhSyFaLKg6N19PRnbpwHj1ugEILRqYN2IwRYtGGPDKsDFLJqfazhjzCJtvrU6yqgeZ7N47KhAio_is_UpdPhyl1cEtquWPrFURhAQWjbENBctTIQjmghe_d8PEIDpssXRrkxAgAPXQP22n184lvXOEyqwTA2qqIqfFrj1umMBxxDy0pWnIWdNS7hedpyDXzOFK7K68ob5_hNHqnrDGgVsBXFlA',
    },
    {
      product: PRODUCTS.find((p) => p.id === 'prod-9') || PRODUCTS[8],
      displayTitle: 'Macaron Mini Desk Drawer Organizer',
      displayCategory: 'Desk Decor',
      displayPrice: 55000,
      comparePrice: 65000,
      rating: 4.8,
      badge: 'Hemat 15%',
      badgeClass: 'bg-[#ffd9e3] text-[#3e0020]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZBzu-wR8qCZwVaQUCOL2_0UPISqHkUXycOISutw5pwdCEk4BPyXwN2svFumqWo9-GqOgPTiWFRAdKSVAUF1-RWEHAsfpX_SfC8TJcPfSCovtpgSNvQmkb3Vl0AdMjrldhooOB1pQxXqHdMEa2NtkYLoocxUdF5_-GYhlvRCmfwM4Kzl0jgu6-M3RoHMu5jkkZJtcgZbNRYKDzf5r4tUdNvxSOwQ9x-TTDxMlbvA',
    },
    {
      product: PRODUCTS.find((p) => p.id === 'prod-2') || PRODUCTS[1],
      displayTitle: 'Smooth Gel Pen 0.5mm Pastel Pack (5 Pcs)',
      displayCategory: 'Pens & Highlighters',
      displayPrice: 35000,
      comparePrice: undefined,
      rating: 4.9,
      badge: undefined,
      badgeClass: '',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI-FdUAo8fSLvZnrb9oksGlr9I6TcURFNDpzD8HRTaLYwHPxpOxyswEztv31HRx33WfhhS3ROaLdurJCwM_zBPopTnONw7l10oDZH4sjkULN9C3vv46SzJgpODuqL71QSojk2qwJuupgFKl1QC6D10sj6jlIjn9MDHI4B5A4kF24kEzLXzKf0crKELaUuVLa5baQKCYgY8qybTeqqTYmu3PPrHR8yKhwrW3MtArw',
    },
  ];

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity, selectedColor, selectedLayout);
    navigateTo('checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#494551] dark:text-[#cbc4d1] overflow-x-auto whitespace-nowrap pb-1"
      >
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">home</span>
          Beranda
        </button>
        <span className="text-[#ccc4d1]">/</span>
        <button
          type="button"
          onClick={() => {
            setSelectedCategoryFilter(selectedProduct.categorySlug);
            navigateTo('catalog');
          }}
          className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] cursor-pointer"
        >
          Stationery &amp; Planners
        </button>
        <span className="text-[#ccc4d1]">/</span>
        <span className="text-[#1c1b1b] dark:text-[#f5f3f7] font-bold truncate">
          {selectedProduct.shortTitle}
        </span>
      </nav>

      {/* 1. PRODUCT HERO SPLIT (Gallery Left + Purchase Info Right) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Product Gallery (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main 1:1 Image Showcase */}
          <div className="relative aspect-square w-full rounded-3xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-lg overflow-hidden group">
            {/* Top-left Sticker Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#ffe081] text-[#231b00] border-2 border-[#1c1b1b] neo-shadow-sm font-headline font-bold text-xs flex items-center gap-1">
                🔥 Hype Item
              </span>
              {selectedProduct.badgeText && (
                <span className="px-3.5 py-1.5 rounded-full bg-[#fe8eb7] text-[#3e0020] border-2 border-[#1c1b1b] neo-shadow-sm font-headline font-bold text-xs">
                  {selectedProduct.badgeText}
                </span>
              )}
            </div>

            {/* Top-right Wishlist Button */}
            <button
              type="button"
              onClick={() => toggleWishlist(selectedProduct.id)}
              aria-label="Simpan ke Wishlist"
              className={`neo-btn absolute top-4 right-4 z-10 w-11 h-11 rounded-full border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center transition-colors cursor-pointer ${
                isWishlisted
                  ? 'bg-[#fe8eb7] text-[#3e0020]'
                  : 'bg-[#ffffff] dark:bg-[#25242d] text-[#9b3e64] dark:text-[#fe8eb7] hover:bg-[#ffd9e3]'
              }`}
            >
              <span
                className={`material-symbols-outlined text-2xl ${
                  isWishlisted ? 'icon-filled' : ''
                }`}
              >
                favorite
              </span>
            </button>

            {/* Main Product Image */}
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              referrerPolicy="no-referrer"
              onClick={() => setIsZoomOpen(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
            />

            {/* Bottom-right Zoom Hint */}
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-[#fcf9f8]/90 dark:bg-[#1b1a22]/90 backdrop-blur-sm border-2 border-[#1c1b1b] dark:border-[#484554] text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-[#eaddff]"
            >
              <span className="material-symbols-outlined text-sm">zoom_in</span>
              Klik untuk perbesar
            </button>
          </div>

          {/* Thumbnail Switcher Row */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {(gallery.length >= 4
              ? gallery.slice(0, 4)
              : [...gallery, ...gallery, ...gallery, ...gallery].slice(0, 4)
            ).map((thumb, idx) => {
              const isSelected = activeImageIndex === idx;
              return (
                <button
                  key={`${thumb.url}-${idx}`}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`neo-btn aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#eaddff] border-[#674ba7] dark:border-[#d0bcff] ring-2 ring-[#674ba7]/40 neo-shadow-sm'
                      : 'bg-[#ffffff] dark:bg-[#25242d] border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb.url}
                    alt={thumb.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Product Information & Purchase Controls (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Category Badge & Title */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] dark:border-[#d0bcff] text-xs font-bold tracking-wide uppercase">
                Notebooks &amp; Planners
              </span>
              <span className="text-xs font-bold text-[#494551] dark:text-[#cbc4d1]">
                SKU: MYR-PLN-025
              </span>
            </div>

            <h1 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7] leading-tight">
              {selectedProduct.title}
            </h1>

            {/* Rating & Sold Stats */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-1 bg-[#ffe081]/60 dark:bg-[#564500]/50 px-2.5 py-1 rounded-lg border border-[#1c1b1b]/30 dark:border-[#ffe081]/40">
                <span className="material-symbols-outlined text-base text-[#caa82c] dark:text-[#ffe081] icon-filled">
                  star
                </span>
                <span className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                  {selectedProduct.rating.toFixed(1)}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('reviews');
                    document
                      .getElementById('pdp-tabs')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-[#494551] dark:text-[#cbc4d1] underline ml-1 cursor-pointer"
                >
                  ({selectedProduct.reviewCount} Ulasan Pembeli)
                </button>
              </div>
              <span className="text-[#ccc4d1]">•</span>
              <span className="text-xs sm:text-sm font-bold text-[#494551] dark:text-[#cbc4d1] tabular-nums">
                Terjual {selectedProduct.soldCount}+ pcs
              </span>
            </div>
          </div>

          {/* Price Container */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f6f3f2] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow flex flex-wrap items-baseline justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-headline text-3xl sm:text-4xl font-bold text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                  {formatIDR(selectedProduct.price)}
                </span>
                {selectedProduct.compareAtPrice && (
                  <span className="text-base font-bold text-[#494551]/70 dark:text-[#cbc4d1]/60 line-through tabular-nums">
                    {formatIDR(selectedProduct.compareAtPrice)}
                  </span>
                )}
              </div>
              <p className="text-xs font-bold text-[#9b3e64] dark:text-[#fe8eb7] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  sell
                </span>
                {savings > 0
                  ? `Hemat ${formatIDR(savings)} + Dapat Freebies Stiker Gemas!`
                  : 'Harga Spesial + Dapat Freebies Stiker Gemas!'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border-2 border-[#1c1b1b] dark:border-emerald-500/50 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tabular-nums">
                Stok: {selectedProduct.stock} pcs
              </span>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-sm sm:text-base font-medium text-[#494551] dark:text-[#cbc4d1] leading-relaxed">
            {selectedProduct.description}
          </p>

          {/* Variant Selector 1: Cover Color */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                Pilih Warna Sampul:{' '}
                <span className="text-[#674ba7] dark:text-[#d0bcff]">
                  {selectedColor}
                </span>
              </label>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {selectedProduct.colorVariants.map((variant) => {
                const isSelected = selectedColor === variant.label;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedColor(variant.label)}
                    className={`neo-btn px-3.5 py-2 rounded-xl border-2 font-bold text-xs flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-[#1c1b1b] dark:border-[#d0bcff] neo-shadow-sm'
                        : 'bg-[#ffffff] dark:bg-[#25242d] text-[#1c1b1b] dark:text-[#f5f3f7] border-[#1c1b1b] dark:border-[#484554] hover:bg-[#f0eded]'
                    }`}
                  >
                    {variant.colorHex && (
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-[#1c1b1b]"
                        style={{ backgroundColor: variant.colorHex }}
                      />
                    )}
                    {variant.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Variant Selector 2: Page Layout */}
          {selectedProduct.layoutVariants &&
            selectedProduct.layoutVariants.length > 0 && (
              <div className="space-y-2.5">
                <label className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7] block">
                  Pilih Tipe Kertas Dalam:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProduct.layoutVariants.map((layout) => {
                    const isSelected = selectedLayout === layout;
                    return (
                      <button
                        key={layout}
                        type="button"
                        onClick={() => setSelectedLayout(layout)}
                        className={`neo-btn px-3.5 py-2 rounded-xl border-2 font-bold text-xs cursor-pointer ${
                          isSelected
                            ? 'bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-[#1c1b1b] dark:border-[#fe8eb7] neo-shadow-sm'
                            : 'bg-[#ffffff] dark:bg-[#25242d] text-[#1c1b1b] dark:text-[#f5f3f7] border-[#1c1b1b] dark:border-[#484554] hover:bg-[#f0eded]'
                        }`}
                      >
                        {layout}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

          {/* Quantity & Action CTA Row */}
          <div className="pt-2 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Quantity Stepper */}
              <div className="flex items-center justify-between sm:justify-start bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-2xl p-1.5 neo-shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Kurangi jumlah"
                  className="w-9 h-9 rounded-xl bg-[#f0eded] dark:bg-[#353440] hover:bg-[#ffd9e3] text-[#1c1b1b] dark:text-[#f5f3f7] font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">
                    remove
                  </span>
                </button>
                <span className="w-12 text-center font-headline font-bold text-base tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.min(selectedProduct.stock, q + 1))
                  }
                  aria-label="Tambah jumlah"
                  className="w-9 h-9 rounded-xl bg-[#f0eded] dark:bg-[#353440] hover:bg-[#eaddff] text-[#1c1b1b] dark:text-[#f5f3f7] font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                </button>
              </div>

              {/* Primary Add to Cart CTA */}
              <button
                type="button"
                onClick={() =>
                  addToCart(
                    selectedProduct,
                    quantity,
                    selectedColor,
                    selectedLayout
                  )
                }
                className="neo-btn flex-1 py-3.5 px-6 rounded-2xl bg-[#674ba7] hover:bg-[#583e94] dark:bg-[#d0bcff] dark:hover:bg-[#bfa4ff] text-white dark:text-[#22055d] font-headline font-bold text-base border-2 border-[#1c1b1b] neo-shadow flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">
                  add_shopping_cart
                </span>
                <span>Tambah ke Keranjang</span>
              </button>

              {/* Secondary Direct Buy CTA */}
              <button
                type="button"
                onClick={handleBuyNow}
                className="neo-btn py-3.5 px-6 rounded-2xl bg-[#ffe081] hover:bg-[#f5d265] text-[#231b00] font-headline font-bold text-base border-2 border-[#1c1b1b] neo-shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">bolt</span>
                <span>Beli Sekarang</span>
              </button>
            </div>
          </div>

          {/* Guarantee & Delivery Perks Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] flex items-center gap-2.5">
              <span className="material-symbols-outlined text-2xl text-[#674ba7] dark:text-[#d0bcff]">
                verified
              </span>
              <div>
                <p className="font-headline font-bold text-xs text-[#1c1b1b] dark:text-[#f5f3f7]">
                  100% Original Mayurien
                </p>
                <p className="text-[11px] text-[#494551] dark:text-[#cbc4d1]">
                  Kurasi kualitas premium
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] flex items-center gap-2.5">
              <span className="material-symbols-outlined text-2xl text-[#9b3e64] dark:text-[#fe8eb7]">
                inventory_2
              </span>
              <div>
                <p className="font-headline font-bold text-xs text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Free Bubble Wrap
                </p>
                <p className="text-[11px] text-[#494551] dark:text-[#cbc4d1]">
                  Packing kardus + stiker lucu
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] flex items-center gap-2.5">
              <span className="material-symbols-outlined text-2xl text-[#725c00] dark:text-[#ffe081]">
                local_shipping
              </span>
              <div>
                <p className="font-headline font-bold text-xs text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Kirim Hari Ini
                </p>
                <p className="text-[11px] text-[#494551] dark:text-[#cbc4d1]">
                  Order sebelum 15:00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT DETAILS, SPECS & REVIEWS TABS */}
      <section
        id="pdp-tabs"
        className="rounded-3xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow overflow-hidden"
      >
        {/* Tab Headers */}
        <div className="flex flex-wrap border-b-2 border-[#1c1b1b] dark:border-[#484554] bg-[#f6f3f2] dark:bg-[#1b1a22] p-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('desc')}
            className={`px-5 py-2.5 rounded-xl font-headline font-bold text-sm transition-colors cursor-pointer ${
              activeTab === 'desc'
                ? 'bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border-2 border-[#1c1b1b] neo-shadow-sm'
                : 'text-[#494551] dark:text-[#cbc4d1] hover:bg-[#eaddff]/40'
            }`}
          >
            Deskripsi Lengkap
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`px-5 py-2.5 rounded-xl font-headline font-bold text-sm transition-colors cursor-pointer ${
              activeTab === 'specs'
                ? 'bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border-2 border-[#1c1b1b] neo-shadow-sm'
                : 'text-[#494551] dark:text-[#cbc4d1] hover:bg-[#eaddff]/40'
            }`}
          >
            Spesifikasi Produk
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('reviews')}
            className={`px-5 py-2.5 rounded-xl font-headline font-bold text-sm transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'reviews'
                ? 'bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border-2 border-[#1c1b1b] neo-shadow-sm'
                : 'text-[#494551] dark:text-[#cbc4d1] hover:bg-[#eaddff]/40'
            }`}
          >
            <span>Ulasan Pembeli</span>
            <span className="px-2 py-0.5 rounded-full bg-[#ffd9e3] text-[#3e0020] border border-[#1c1b1b] text-xs font-extrabold tabular-nums">
              {selectedProduct.reviewCount}
            </span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 lg:p-10">
          {activeTab === 'desc' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Teman Journaling Terbaik untuk Tahun yang Lebih Produktif ✨
                </h2>
                <p className="text-sm sm:text-base font-medium text-[#494551] dark:text-[#cbc4d1] leading-relaxed">
                  {selectedProduct.description} Dirancang khusus oleh tim studio
                  MayurienShop bagi kamu pecinta alat tulis kawaii yang tetap
                  mengutamakan fungsi dan kenyamanan menulis setiap hari.
                </p>
                <div className="space-y-2.5 pt-2">
                  <h3 className="font-headline font-bold text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
                    Keunggulan Utama:
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm font-semibold text-[#1c1b1b] dark:text-[#f5f3f7]"
                      >
                        <span className="material-symbols-outlined text-lg text-[#674ba7] dark:text-[#d0bcff] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column Specs Card inside Desc */}
              <div className="lg:col-span-5 bg-[#f6f3f2] dark:bg-[#1b1a22] rounded-2xl border-2 border-[#1c1b1b] dark:border-[#484554] p-5 space-y-4">
                <h3 className="font-headline font-bold text-base text-[#1c1b1b] dark:text-[#f5f3f7] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#674ba7] dark:text-[#d0bcff]">
                    straighten
                  </span>
                  Ringkasan Spesifikasi
                </h3>
                <dl className="divide-y divide-[#1c1b1b]/10 dark:divide-[#484554] text-xs sm:text-sm">
                  {selectedProduct.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="py-2.5 flex justify-between gap-4"
                    >
                      <dt className="font-semibold text-[#494551] dark:text-[#cbc4d1]">
                        {spec.label}
                      </dt>
                      <dd className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] text-right">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="max-w-2xl space-y-4">
              <h2 className="font-headline text-xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]">
                Detail Spesifikasi &amp; Material
              </h2>
              <div className="rounded-2xl border-2 border-[#1c1b1b] dark:border-[#484554] overflow-hidden">
                {selectedProduct.specs.map((spec, idx) => (
                  <div
                    key={spec.label}
                    className={`px-4 py-3 flex justify-between text-sm ${
                      idx % 2 === 0
                        ? 'bg-[#f6f3f2] dark:bg-[#1b1a22]'
                        : 'bg-[#ffffff] dark:bg-[#25242d]'
                    }`}
                  >
                    <span className="font-bold text-[#494551] dark:text-[#cbc4d1]">
                      {spec.label}
                    </span>
                    <span className="font-extrabold text-[#1c1b1b] dark:text-[#f5f3f7]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1c1b1b]/15 dark:border-[#484554]">
                <div className="flex items-center gap-4">
                  <div className="px-4 py-3 rounded-2xl bg-[#ffe081] text-[#231b00] border-2 border-[#1c1b1b] text-center">
                    <span className="font-headline text-3xl font-bold block tabular-nums">
                      {selectedProduct.rating.toFixed(1)}
                    </span>
                    <span className="text-[11px] font-bold">dari 5.0</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
                      99% Pembeli Puas dengan Produk Ini 💖
                    </p>
                    <p className="text-xs font-semibold text-[#494551] dark:text-[#cbc4d1]">
                      Berdasarkan {selectedProduct.reviewCount} ulasan terverifikasi
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PRODUCT_REVIEWS.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-full bg-[#eaddff] text-[#22055d] border border-[#1c1b1b] font-headline font-bold text-xs flex items-center justify-center">
                          {rev.avatarInitials}
                        </span>
                        <div>
                          <p className="font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                            {rev.author}
                          </p>
                          <p className="text-[11px] font-semibold text-[#494551] dark:text-[#cbc4d1]">
                            {rev.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-[#caa82c] dark:text-[#ffe081]">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-sm icon-filled"
                          >
                            star
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#ffffff] dark:bg-[#25242d] border border-[#1c1b1b]/20 text-[11px] font-bold text-[#674ba7] dark:text-[#d0bcff]">
                      Varian: {rev.variantPurchased}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#1c1b1b] dark:text-[#f5f3f7] leading-relaxed">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. RELATED RECOMMENDATIONS ("Kamu Mungkin Suka Juga ✨") */}
      <section aria-labelledby="related-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#9b3e64] dark:text-[#fe8eb7]">
              Pasangan Serasi Journaling
            </span>
            <h2
              id="related-heading"
              className="font-headline text-2xl sm:text-3xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]"
            >
              Kamu Mungkin Suka Juga ✨
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('catalog')}
            className="text-sm font-bold text-[#674ba7] dark:text-[#d0bcff] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Lihat Katalog Lengkap</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedItems.map((item, idx) => (
            <article
              key={`${item.product.id}-${idx}`}
              className="group rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow overflow-hidden flex flex-col justify-between transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-square bg-[#f6f3f2] dark:bg-[#1b1a22] border-b-2 border-[#1c1b1b] dark:border-[#484554] overflow-hidden">
                  {item.badge && (
                    <span
                      className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full ${item.badgeClass} border border-[#1c1b1b] font-headline font-bold text-[11px]`}
                    >
                      {item.badge}
                    </span>
                  )}
                  <img
                    src={item.img}
                    alt={item.displayTitle}
                    referrerPolicy="no-referrer"
                    onClick={() =>
                      navigateTo('product-detail', item.product.slug)
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#494551] dark:text-[#cbc4d1] mb-1">
                    <span>{item.displayCategory}</span>
                    <span className="flex items-center gap-0.5 text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                      <span className="material-symbols-outlined text-sm text-[#caa82c] dark:text-[#ffe081] icon-filled">
                        star
                      </span>
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-base text-[#1c1b1b] dark:text-[#f5f3f7] line-clamp-2 group-hover:text-[#674ba7] dark:group-hover:text-[#d0bcff]">
                    <button
                      type="button"
                      onClick={() =>
                        navigateTo('product-detail', item.product.slug)
                      }
                      className="text-left cursor-pointer"
                    >
                      {item.displayTitle}
                    </button>
                  </h3>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2 flex items-center justify-between">
                <div>
                  <span className="font-headline font-bold text-lg text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                    {formatIDR(item.displayPrice)}
                  </span>
                  {item.comparePrice && (
                    <span className="text-xs text-[#494551]/70 line-through block tabular-nums">
                      {formatIDR(item.comparePrice)}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(item.product, 1)}
                  aria-label={`Tambah ${item.displayTitle} ke Keranjang`}
                  className="neo-btn w-9 h-9 rounded-xl bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] flex items-center justify-center hover:bg-[#674ba7] hover:text-white transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">
                    add_shopping_cart
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox Image Zoom Modal */}
      {isZoomOpen && (
        <div
          onClick={() => setIsZoomOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#ffffff] dark:bg-[#25242d] rounded-3xl border-2 border-[#1c1b1b] p-4 neo-shadow-lg"
          >
            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-[#ffd9e3] text-[#3e0020] border-2 border-[#1c1b1b] flex items-center justify-center font-bold cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              referrerPolicy="no-referrer"
              className="w-full aspect-square object-cover rounded-2xl border border-[#1c1b1b]"
            />
            <p className="mt-3 text-center font-headline font-bold text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
              {selectedProduct.title} — {selectedColor}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
