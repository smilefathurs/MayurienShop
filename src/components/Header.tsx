import React, { useState } from 'react';
import { useShop, ScreenName } from '../context/ShopContext';
import { formatIDR } from '../data/products';

export const Header: React.FC = () => {
  const {
    screen,
    navigateTo,
    isDark,
    toggleTheme,
    cartSubtotal,
    cartItemCount,
    appliedVoucher,
    searchQuery,
    setSearchQuery,
    setSelectedCategoryFilter,
    applyVoucherCode,
    showToast,
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const displayCartTotal =
    cartSubtotal > 0
      ? Math.max(0, cartSubtotal - (appliedVoucher ? 12000 : 0))
      : 185000;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo('catalog');
  };

  const handleCopyPromo = () => {
    try {
      navigator.clipboard?.writeText('GEMAS');
    } catch {
      // ignore
    }
    applyVoucherCode('GEMAS');
  };

  const screenPills: { id: ScreenName; label: string; icon: string }[] = [
    { id: 'home', label: '1. Beranda', icon: 'home' },
    { id: 'catalog', label: '2. Katalog', icon: 'storefront' },
    { id: 'product-detail', label: '3. Detail Produk', icon: 'menu_book' },
    { id: 'cart', label: '4. Keranjang', icon: 'shopping_bag' },
    { id: 'checkout', label: '5. Checkout', icon: 'local_shipping' },
    { id: 'order-confirmation', label: '6. Selesai ✨', icon: 'celebration' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#ffe081] dark:bg-[#2a2736] text-[#231b00] dark:text-[#f5f3f7] border-b-2 border-[#1c1b1b] dark:border-[#484554] py-2 px-4 text-center text-xs sm:text-sm font-bold tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="material-symbols-outlined text-base text-[#9b3e64] dark:text-[#fe8eb7]">
            auto_awesome
          </span>
          <span>
            Gratis Ongkir se-Indonesia untuk pesanan di atas Rp 150.000! Gunakan kode:{' '}
            <button
              type="button"
              onClick={handleCopyPromo}
              className="underline decoration-2 font-extrabold text-[#674ba7] dark:text-[#d0bcff] hover:opacity-80 cursor-pointer"
              title="Klik untuk pakai kode GEMAS"
            >
              GEMAS
            </button>
          </span>
          <span className="material-symbols-outlined text-base text-[#9b3e64] dark:text-[#fe8eb7]">
            auto_awesome
          </span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#fcf9f8]/95 dark:bg-[#1b1a22]/95 backdrop-blur-md border-b-2 border-[#1c1b1b] dark:border-[#484554]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 group shrink-0 text-left cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-[#674ba7] dark:text-[#d0bcff] leading-none">
                MayurienShop
              </span>
              <span className="text-[11px] font-semibold text-[#494551] dark:text-[#cbc4d1] tracking-wide mt-0.5">
                Little Things, Big Happiness!
              </span>
            </div>
          </button>

          {/* Primary Nav Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className={`px-4 py-2 rounded-xl font-headline font-semibold text-sm transition-colors cursor-pointer ${
                screen === 'home'
                  ? 'bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] dark:border-[#d0bcff] neo-shadow-sm'
                  : 'text-[#1c1b1b] dark:text-[#f5f3f7] hover:bg-[#f0eded] dark:hover:bg-[#2a2933]'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedCategoryFilter('all');
                navigateTo('catalog');
              }}
              className={`px-4 py-2 rounded-xl font-headline font-semibold text-sm transition-colors cursor-pointer ${
                screen === 'catalog' || screen === 'product-detail'
                  ? 'bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] dark:border-[#d0bcff] neo-shadow-sm'
                  : 'text-[#1c1b1b] dark:text-[#f5f3f7] hover:bg-[#f0eded] dark:hover:bg-[#2a2933]'
              }`}
            >
              Shop
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedCategoryFilter('notebooks-journal');
                navigateTo('catalog');
              }}
              className="px-4 py-2 rounded-xl font-headline font-semibold text-sm text-[#1c1b1b] dark:text-[#f5f3f7] hover:bg-[#f0eded] dark:hover:bg-[#2a2933] transition-colors cursor-pointer"
            >
              Categories
            </button>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 md:flex-initial justify-end">
            {/* Search Input (Desktop/Tablet) */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden sm:flex items-center relative w-full max-w-[240px] lg:max-w-[280px]"
            >
              <span className="material-symbols-outlined text-lg text-[#494551] dark:text-[#cbc4d1] absolute left-3.5 pointer-events-none">
                search
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (screen !== 'catalog') {
                    navigateTo('catalog');
                  }
                }}
                placeholder="Cari notebook aesthetic, pen..."
                className="w-full pl-10 pr-4 py-2 bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-full text-sm font-medium text-[#1c1b1b] dark:text-[#f5f3f7] placeholder:text-[#494551]/70 dark:placeholder:text-[#cbc4d1]/60 focus:outline-none focus:ring-2 focus:ring-[#674ba7] dark:focus:ring-[#d0bcff]"
              />
            </form>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Dark or Light Mode"
              title={isDark ? 'Ganti ke Light Mode' : 'Ganti ke Dark Mode'}
              className="neo-btn h-10 w-10 shrink-0 rounded-xl bg-[#f0eded] dark:bg-[#2a2933] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm text-[#1c1b1b] dark:text-[#ffe081] flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl leading-none">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Cart Button with Badge & Total */}
            <button
              type="button"
              onClick={() => navigateTo('cart')}
              className="neo-btn h-10 shrink-0 whitespace-nowrap flex items-center gap-2.5 px-3.5 rounded-xl bg-[#ffd9e3] dark:bg-[#7d244b] text-[#3e0020] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] dark:border-[#fe8eb7] neo-shadow-sm font-headline font-bold text-sm cursor-pointer"
            >
              <div className="relative flex items-center shrink-0">
                <span className="material-symbols-outlined text-xl leading-none">
                  shopping_bag
                </span>
                <span className="absolute -top-2 -right-2 bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] text-[10px] leading-none font-bold px-1.5 py-0.5 rounded-full border border-[#1c1b1b] tabular-nums">
                  {cartItemCount}
                </span>
              </div>
              <span className="hidden lg:inline tabular-nums whitespace-nowrap leading-none">
                {formatIDR(displayCartTotal)}
              </span>
            </button>

            {/* User Profile Button */}
            <button
              type="button"
              onClick={() =>
                showToast(
                  'Halo, Nadia Putri! 💜',
                  'Status Akun: Member VIP Mayurien (Poin: 1.250 ✨)',
                  'info'
                )
              }
              aria-label="Akun Saya"
              className="neo-btn h-10 w-10 shrink-0 rounded-full bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] dark:border-[#d0bcff] neo-shadow-sm hidden sm:flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl leading-none">person</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Buka Menu"
              className="md:hidden neo-btn p-2 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Interactive Screen Switcher Bar (Allows 1-click preview of all 6 designed screens) */}
        <div className="bg-[#f6f3f2] dark:bg-[#14131a] border-t border-[#1c1b1b]/15 dark:border-[#484554]/60 py-1.5 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="inline-flex items-center gap-1 font-headline font-bold text-[#674ba7] dark:text-[#d0bcff] px-2 py-0.5 rounded-md bg-[#eaddff]/60 dark:bg-[#4f348d]/40 border border-[#1c1b1b]/20 dark:border-[#d0bcff]/30">
                <span className="material-symbols-outlined text-xs">view_carousel</span>
                Layar App:
              </span>
              {screenPills.map((item) => {
                const isActive = screen === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateTo(item.id)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border border-[#1c1b1b] shadow-[1px_1px_0px_#1c1b1b]'
                        : 'text-[#494551] dark:text-[#cbc4d1] hover:bg-[#eaddff]/50 dark:hover:bg-[#2a2933]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <span className="hidden xl:inline text-[11px] font-semibold text-[#494551] dark:text-[#cbc4d1] shrink-0">
              Mode: {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </span>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#ffffff] dark:bg-[#25242d] border-t-2 border-[#1c1b1b] dark:border-[#484554] px-4 py-4 space-y-3">
            <form onSubmit={handleSearchSubmit} className="relative">
              <span className="material-symbols-outlined text-lg text-[#494551] dark:text-[#cbc4d1] absolute left-3.5 top-2.5">
                search
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari notebook, gel pen, washi tape..."
                className="w-full pl-10 pr-4 py-2 bg-[#fcf9f8] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-xl text-sm font-semibold"
              />
            </form>
            <div className="grid grid-cols-2 gap-2">
              {screenPills.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    navigateTo(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl font-headline font-bold text-xs border-2 border-[#1c1b1b] dark:border-[#484554] ${
                    screen === item.id
                      ? 'bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff]'
                      : 'bg-[#fcf9f8] dark:bg-[#1b1a22]'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
