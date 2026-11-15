import React from 'react';
import { useShop } from '../context/ShopContext';
import {
  CATEGORIES,
  PRODUCTS,
  HERO_WORKSPACE_IMG,
  PROMO_GIFT_BOX_IMG,
  formatIDR,
  Product,
} from '../data/products';

export const HomePage: React.FC = () => {
  const {
    navigateTo,
    addToCart,
    wishlist,
    toggleWishlist,
    setSelectedCategoryFilter,
  } = useShop();

  const trendingProducts = PRODUCTS.filter((p) => p.isTrending).slice(0, 4);
  const newArrivalProducts = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);
  const journalKitProduct =
    PRODUCTS.find((p) => p.slug === 'pastel-journal-kit-curated-box') ||
    PRODUCTS[0];

  const getBadgeStyle = (style?: Product['badgeStyle']) => {
    switch (style) {
      case 'discount':
        return 'bg-[#ffd9e3] text-[#3e0020]';
      case 'trending':
        return 'bg-[#ffe081] text-[#231b00]';
      case 'bestseller':
        return 'bg-[#eaddff] text-[#22055d]';
      case 'promo':
        return 'bg-[#d1fae5] text-emerald-950';
      case 'limited':
        return 'bg-[#ffd9e3] text-[#3e0020]';
      case 'new':
      default:
        return 'bg-[#ffe081] text-[#231b00]';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-12 sm:space-y-14">
      {/* 1. HERO SECTION */}
      <section className="relative rounded-3xl bg-gradient-to-br from-[#eaddff] via-[#fcf9f8] to-[#ffd9e3] dark:from-[#2c2540] dark:via-[#23222b] dark:to-[#3b2234] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-lg p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div
          className="absolute -top-12 -right-12 w-48 h-48 bg-[#ffe081]/40 dark:bg-[#ffe081]/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffe081] dark:bg-[#564500] text-[#231b00] dark:text-[#ffe081] border-2 border-[#1c1b1b] dark:border-[#ffe081]/50 neo-shadow-sm text-xs font-bold">
              <span className="material-symbols-outlined text-sm">redeem</span>
              <span>Koleksi Musim Baru 2025</span>
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#1c1b1b] dark:text-[#f5f3f7] leading-[1.12] tracking-tight">
              Make Every Little Thing{' '}
              <span className="text-[#674ba7] dark:text-[#d0bcff] underline decoration-[#fe8eb7] decoration-wavy decoration-4 underline-offset-4">
                More Fun!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#494551] dark:text-[#cbc4d1] font-medium max-w-xl leading-relaxed">
              Temukan ragam stationery estetik, journal supplies, dan desk
              accessories gemas yang siap bikin meja belajar, ruang kerja, dan
              hari-harimu jadi seru dan penuh warna.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryFilter('all');
                  navigateTo('catalog');
                }}
                className="neo-btn px-7 py-3.5 rounded-2xl bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] font-headline font-bold text-base border-2 border-[#1c1b1b] neo-shadow flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Collection</span>
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('trending-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigateTo('catalog');
                  }
                }}
                className="neo-btn px-6 py-3.5 rounded-2xl bg-[#ffffff] dark:bg-[#25242d] text-[#1c1b1b] dark:text-[#f5f3f7] font-headline font-bold text-base border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl text-[#9b3e64] dark:text-[#fe8eb7]">
                  local_fire_department
                </span>
                <span>See What&apos;s Trending</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-bold text-[#494551] dark:text-[#cbc4d1]">
              <div className="flex items-center gap-1.5 bg-[#ffffff]/80 dark:bg-[#1b1a22]/80 px-3 py-1.5 rounded-xl border border-[#1c1b1b]/20 dark:border-[#484554]">
                <span className="material-symbols-outlined text-base text-[#674ba7] dark:text-[#d0bcff]">
                  verified
                </span>
                <span>100% Original Brand</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#ffffff]/80 dark:bg-[#1b1a22]/80 px-3 py-1.5 rounded-xl border border-[#1c1b1b]/20 dark:border-[#484554]">
                <span className="material-symbols-outlined text-base text-[#9b3e64] dark:text-[#fe8eb7]">
                  local_shipping
                </span>
                <span>Pengiriman Aman Ekstra Bubble</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#ffffff]/80 dark:bg-[#1b1a22]/80 px-3 py-1.5 rounded-xl border border-[#1c1b1b]/20 dark:border-[#484554]">
                <span className="material-symbols-outlined text-base text-[#725c00] dark:text-[#ffe081]">
                  card_giftcard
                </span>
                <span>Kemasan Super Cute</span>
              </div>
            </div>
          </div>

          {/* Right Hero Showcase Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-3">
              {/* Top Floating Sticker Badges */}
              <div className="absolute -top-3.5 left-4 z-20 flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffe081] text-[#231b00] border-2 border-[#1c1b1b] neo-shadow-sm font-headline font-bold text-xs">
                  <span className="material-symbols-outlined text-sm">
                    verified
                  </span>
                  Best Seller!
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#fe8eb7] text-[#3e0020] border-2 border-[#1c1b1b] neo-shadow-sm font-headline font-bold text-xs">
                  Diskon 15% Gemas
                </span>
              </div>

              <div
                onClick={() =>
                  navigateTo('product-detail', journalKitProduct.slug)
                }
                className="aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-[#f6f3f2] dark:bg-[#1b1a22] border border-[#1c1b1b]/20 cursor-pointer"
              >
                <img
                  src={HERO_WORKSPACE_IMG}
                  alt="Playful pastel workspace scene with hardcover pastel lilac bullet journal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Mini Product Card inside Hero */}
              <div className="mt-3 flex items-center justify-between bg-[#fcf9f8] dark:bg-[#1b1a22] p-3 rounded-xl border-2 border-[#1c1b1b] dark:border-[#484554]">
                <button
                  type="button"
                  onClick={() =>
                    navigateTo('product-detail', journalKitProduct.slug)
                  }
                  className="flex items-center gap-2.5 text-left cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#eaddff] dark:bg-[#4f348d] border border-[#1c1b1b] flex items-center justify-center text-[#674ba7] dark:text-[#eaddff]">
                    <span className="material-symbols-outlined text-lg">
                      auto_awesome
                    </span>
                  </span>
                  <div>
                    <p className="font-headline font-bold text-xs sm:text-sm text-[#1c1b1b] dark:text-[#f5f3f7] leading-tight">
                      Pastel Journal Kit
                    </p>
                    <p className="text-xs font-extrabold text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                      Rp 125.000
                    </p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => addToCart(journalKitProduct, 1)}
                  aria-label="Tambah Pastel Journal Kit ke Keranjang"
                  className="neo-btn px-3 py-1.5 rounded-lg bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] text-xs font-bold border border-[#1c1b1b] cursor-pointer flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-sm">
                    add_shopping_cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES */}
      <section aria-labelledby="categories-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#674ba7] dark:text-[#d0bcff]">
              Inspirasi Koleksi
            </span>
            <h2
              id="categories-heading"
              className="font-headline text-2xl sm:text-3xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]"
            >
              Kategori Pilihan Buat Mood Booster-mu
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedCategoryFilter('all');
              navigateTo('catalog');
            }}
            className="inline-flex items-center gap-1 text-sm font-bold text-[#674ba7] dark:text-[#d0bcff] hover:underline cursor-pointer"
          >
            <span>Jelajahi Semua Kategori</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => {
                setSelectedCategoryFilter(cat.slug);
                navigateTo('catalog');
              }}
              className="group neo-btn rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-3 sm:p-4 flex flex-col justify-between text-left cursor-pointer"
            >
              <div
                className={`aspect-[4/3] rounded-xl ${cat.accentBg} border-2 border-[#1c1b1b] overflow-hidden mb-3 relative w-full`}
              >
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#ffffff]/90 dark:bg-[#1b1a22]/90 text-[#1c1b1b] dark:text-[#f5f3f7] text-[11px] font-bold border border-[#1c1b1b]">
                  {cat.countLabel}
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="font-headline font-bold text-base sm:text-lg text-[#1c1b1b] dark:text-[#f5f3f7]">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#494551] dark:text-[#cbc4d1] font-medium">
                    {cat.subtitle}
                  </p>
                </div>
                <span
                  className={`w-8 h-8 rounded-full ${cat.accentBg} border-2 border-[#1c1b1b] flex items-center justify-center text-[#1c1b1b] dark:text-[#f5f3f7] ${cat.hoverText} transition-colors shrink-0`}
                >
                  <span className="material-symbols-outlined text-base">
                    chevron_right
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. TRENDING PRODUCTS ("Lagi Hype Banget!") */}
      <section
        id="trending-section"
        aria-labelledby="trending-heading"
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-xl bg-[#ffd9e3] dark:bg-[#7d244b] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center text-[#9b3e64] dark:text-[#ffd9e3]">
              <span className="material-symbols-outlined text-xl">
                local_fire_department
              </span>
            </span>
            <div>
              <h2
                id="trending-heading"
                className="font-headline text-2xl sm:text-3xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]"
              >
                Lagi Hype Banget!
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedCategoryFilter('all');
              navigateTo('catalog');
            }}
            className="inline-flex items-center gap-1 text-sm font-bold text-[#674ba7] dark:text-[#d0bcff] hover:underline cursor-pointer"
          >
            <span>Lihat Semua ({PRODUCTS.length})</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <article
                key={product.id}
                className="group rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-3 sm:p-4 flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-square rounded-xl bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] overflow-hidden mb-3">
                    <img
                      src={product.imageUrl}
                      alt={product.shortTitle}
                      referrerPolicy="no-referrer"
                      onClick={() =>
                        navigateTo('product-detail', product.slug)
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    {product.badgeText && (
                      <span
                        className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full ${getBadgeStyle(
                          product.badgeStyle
                        )} border border-[#1c1b1b] font-headline font-bold text-[11px]`}
                      >
                        {product.badgeText}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Simpan ke Wishlist"
                      className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full border border-[#1c1b1b] flex items-center justify-center transition-colors cursor-pointer ${
                        isWishlisted
                          ? 'bg-[#fe8eb7] text-[#3e0020]'
                          : 'bg-[#ffffff]/90 dark:bg-[#25242d]/90 text-[#1c1b1b] dark:text-[#f5f3f7] hover:bg-[#ffd9e3] hover:text-[#9b3e64]'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-base ${
                          isWishlisted ? 'icon-filled' : ''
                        }`}
                      >
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#725c00] dark:text-[#ffe081] mb-1">
                    <span className="material-symbols-outlined text-sm icon-filled">
                      star
                    </span>
                    <span className="tabular-nums">{product.rating.toFixed(1)}</span>
                    <span className="text-[#494551] dark:text-[#cbc4d1] font-medium">
                      ({product.reviewCount} ulasan)
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-sm sm:text-base text-[#1c1b1b] dark:text-[#f5f3f7] line-clamp-1">
                    <button
                      type="button"
                      onClick={() =>
                        navigateTo('product-detail', product.slug)
                      }
                      className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] text-left cursor-pointer"
                    >
                      {product.shortTitle}
                    </button>
                  </h3>
                  <p className="text-xs text-[#494551] dark:text-[#cbc4d1] mt-0.5 line-clamp-1">
                    {product.shortSubtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#1c1b1b]/10 dark:border-[#484554] flex items-center justify-between gap-2">
                  <div>
                    <span className="block font-headline font-bold text-sm sm:text-base text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                      {formatIDR(product.price)}
                    </span>
                    {product.compareAtPrice ? (
                      <span className="text-[11px] text-[#494551] dark:text-[#cbc4d1] line-through tabular-nums">
                        {formatIDR(product.compareAtPrice)}
                      </span>
                    ) : (
                      <span
                        className={`text-[11px] font-semibold ${
                          product.stock <= 10
                            ? 'text-[#9b3e64] dark:text-[#fe8eb7]'
                            : 'text-emerald-600 dark:text-emerald-400'
                        }`}
                      >
                        {product.stockNote || 'Stok Ready'}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart(product, 1)}
                    aria-label={`Tambah ${product.shortTitle} ke Keranjang`}
                    className="neo-btn px-3 py-2 rounded-xl bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] neo-shadow-sm font-headline font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">
                      add
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. PROMOTIONAL SPLIT MID-BANNER */}
      <section className="rounded-3xl bg-[#ffd9e3] dark:bg-[#3a1f2e] border-2 border-[#1c1b1b] dark:border-[#fe8eb7]/60 neo-shadow p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#ffffff] dark:bg-[#25242d] text-[#9b3e64] dark:text-[#fe8eb7] border-2 border-[#1c1b1b] text-xs font-bold">
              🎉 Spesial Gifting Season
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-[#3e0020] dark:text-[#ffd9e3] leading-tight">
              Paket Hadiah Gemas Siap Kirim! 🎁
            </h2>
            <p className="text-sm sm:text-base text-[#3e0020]/85 dark:text-[#ffd9e3]/90 font-medium max-w-xl">
              Bisa request kartu ucapan custom tulisan tangan dan packaging pita
              pastel. Hadiah manis untuk sahabat, self-reward, atau perayaan
              wisuda tanpa ribet!
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  navigateTo('product-detail', journalKitProduct.slug)
                }
                className="neo-btn px-6 py-3 rounded-xl bg-[#1c1b1b] dark:bg-[#ffd9e3] text-white dark:text-[#3e0020] font-headline font-bold text-sm border-2 border-[#1c1b1b] flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">
                  redeem
                </span>
                <span>Lihat Koleksi Gift Box</span>
              </button>
              <span className="text-xs font-bold text-[#3e0020] dark:text-[#ffd9e3] bg-[#ffffff]/60 dark:bg-[#1b1a22]/50 px-3 py-2 rounded-lg border border-[#1c1b1b]/30">
                Mulai Rp 89.000 (Free greeting card)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              onClick={() =>
                navigateTo('product-detail', journalKitProduct.slug)
              }
              className="aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#1c1b1b] neo-shadow-sm bg-[#ffffff] cursor-pointer"
            >
              <img
                src={PROMO_GIFT_BOX_IMG}
                alt="Charming pastel curated stationery gift box"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW ARRIVALS ("Baru Mendarat Nih!") */}
      <section aria-labelledby="new-arrivals-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-xl bg-[#ffe081] dark:bg-[#564500] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center text-[#231b00] dark:text-[#ffe081]">
              <span className="material-symbols-outlined text-xl">
                new_releases
              </span>
            </span>
            <div>
              <h2
                id="new-arrivals-heading"
                className="font-headline text-2xl sm:text-3xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7]"
              >
                Baru Mendarat Nih!
              </h2>
              <p className="text-xs sm:text-sm text-[#494551] dark:text-[#cbc4d1] font-medium">
                Update stok terbaru minggu ini langsung dari studio.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedCategoryFilter('all');
              navigateTo('catalog');
            }}
            className="inline-flex items-center gap-1 text-sm font-bold text-[#674ba7] dark:text-[#d0bcff] hover:underline cursor-pointer"
          >
            <span>Lihat Produk Baru</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivalProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <article
                key={product.id}
                className="group rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-3 sm:p-4 flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-square rounded-xl bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] overflow-hidden mb-3">
                    <img
                      src={product.imageUrl}
                      alt={product.shortTitle}
                      referrerPolicy="no-referrer"
                      onClick={() =>
                        navigateTo('product-detail', product.slug)
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    {product.badgeText && (
                      <span
                        className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full ${getBadgeStyle(
                          product.badgeStyle
                        )} border border-[#1c1b1b] font-headline font-bold text-[11px]`}
                      >
                        {product.badgeText}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Simpan ke Wishlist"
                      className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full border border-[#1c1b1b] flex items-center justify-center transition-colors cursor-pointer ${
                        isWishlisted
                          ? 'bg-[#fe8eb7] text-[#3e0020]'
                          : 'bg-[#ffffff]/90 dark:bg-[#25242d]/90 text-[#1c1b1b] dark:text-[#f5f3f7] hover:bg-[#ffd9e3] hover:text-[#9b3e64]'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-base ${
                          isWishlisted ? 'icon-filled' : ''
                        }`}
                      >
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#725c00] dark:text-[#ffe081] mb-1">
                    <span className="material-symbols-outlined text-sm icon-filled">
                      star
                    </span>
                    <span className="tabular-nums">{product.rating.toFixed(1)}</span>
                    <span className="text-[#494551] dark:text-[#cbc4d1] font-medium">
                      ({product.reviewCount} ulasan)
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-sm sm:text-base text-[#1c1b1b] dark:text-[#f5f3f7] line-clamp-1">
                    <button
                      type="button"
                      onClick={() =>
                        navigateTo('product-detail', product.slug)
                      }
                      className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] text-left cursor-pointer"
                    >
                      {product.shortTitle}
                    </button>
                  </h3>
                  <p className="text-xs text-[#494551] dark:text-[#cbc4d1] mt-0.5 line-clamp-1">
                    {product.shortSubtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#1c1b1b]/10 dark:border-[#484554] flex items-center justify-between gap-2">
                  <div>
                    <span className="block font-headline font-bold text-sm sm:text-base text-[#674ba7] dark:text-[#d0bcff] tabular-nums">
                      {formatIDR(product.price)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart(product, 1)}
                    aria-label={`Tambah ${product.shortTitle} ke Keranjang`}
                    className="neo-btn px-3 py-2 rounded-xl bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] neo-shadow-sm font-headline font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">
                      add
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 6. BRAND VALUE PROPOSITIONS BAR */}
      <section className="rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#eaddff] dark:bg-[#4f348d] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center text-[#22055d] dark:text-[#eaddff]">
              <span className="material-symbols-outlined text-2xl">
                local_shipping
              </span>
            </div>
            <h3 className="font-headline font-bold text-sm sm:text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
              Pengiriman Cepat
            </h3>
            <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
              Diproses di hari yang sama
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#ffd9e3] dark:bg-[#7d244b] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center text-[#3e0020] dark:text-[#ffd9e3]">
              <span className="material-symbols-outlined text-2xl">
                loyalty
              </span>
            </div>
            <h3 className="font-headline font-bold text-sm sm:text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
              Free Stiker Gemas
            </h3>
            <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
              Bonus di setiap unboxing
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#ffe081] dark:bg-[#564500] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center text-[#231b00] dark:text-[#ffe081]">
              <span className="material-symbols-outlined text-2xl">
                support_agent
              </span>
            </div>
            <h3 className="font-headline font-bold text-sm sm:text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
              CS Ramah &amp; Aktif
            </h3>
            <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
              Siap bantu konsultasi pesanan
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#d1fae5] dark:bg-[#065f46] border-2 border-[#1c1b1b] neo-shadow-sm flex items-center justify-center text-emerald-950 dark:text-emerald-100">
              <span className="material-symbols-outlined text-2xl">
                verified_user
              </span>
            </div>
            <h3 className="font-headline font-bold text-sm sm:text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
              Garansi Pecah/Rusak
            </h3>
            <p className="text-xs text-[#494551] dark:text-[#cbc4d1]">
              Ganti baru 100% tanpa ribet
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
