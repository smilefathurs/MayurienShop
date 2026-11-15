import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, formatIDR, Product } from '../data/products';

type SortOption = 'popular' | 'newest' | 'price-asc' | 'price-desc';
type QuickPriceRange = 'all' | 'under-30k' | '30k-75k' | 'over-75k';

export const CatalogPage: React.FC = () => {
  const {
    navigateTo,
    addToCart,
    wishlist,
    toggleWishlist,
    searchQuery,
    setSearchQuery,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    showToast,
  } = useShop();

  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [priceRange, setPriceRange] = useState<QuickPriceRange>('all');
  const [minPriceInput, setMinPriceInput] = useState<string>('10.000');
  const [maxPriceInput, setMaxPriceInput] = useState<string>('150.000');
  const [readyStockOnly, setReadyStockOnly] = useState<boolean>(true);
  const [includePreOrder, setIncludePreOrder] = useState<boolean>(false);
  const [highRatingOnly, setHighRatingOnly] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const catalogCategories = [
    { slug: 'all', label: 'Semua Kategori', count: 48 },
    { slug: 'notebooks-journal', label: 'Notebook & Binder', count: 14 },
    { slug: 'pens-highlighters', label: 'Pens, Pencils & Markers', count: 12 },
    { slug: 'desk-decor', label: 'Desk Organizers & Cups', count: 8 },
    { slug: 'sticky-washi', label: 'Sticky Notes & Washi Tape', count: 9 },
    { slug: 'gift-sets-pouches', label: 'Pouch & Gift Hampers', count: 5 },
  ];

  // Prioritize the 8 signature catalog products shown in code__8__fb0be591.html when on page 1 default
  const orderedCatalogBase = useMemo(() => {
    const priorityIds = [
      'prod-1',
      'prod-2',
      'prod-9',
      'prod-10',
      'prod-11',
      'prod-12',
      'prod-13',
      'prod-14',
      'prod-3',
      'prod-4',
      'prod-5',
      'prod-6',
      'prod-7',
      'prod-8',
      'prod-15',
      'prod-16',
    ];
    return priorityIds
      .map((id) => PRODUCTS.find((p) => p.id === id))
      .filter(Boolean) as Product[];
  }, []);

  const filteredProducts = useMemo(() => {
    return orderedCatalogBase
      .filter((p) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchShort = p.shortTitle.toLowerCase().includes(q);
          const matchCat = p.categoryLabel.toLowerCase().includes(q);
          if (!matchTitle && !matchShort && !matchCat) return false;
        }

        if (selectedCategoryFilter !== 'all') {
          if (selectedCategoryFilter === 'sticky-washi') {
            if (!p.categoryLabel.includes('WASHI') && !p.shortTitle.toLowerCase().includes('sticky')) {
              return false;
            }
          } else if (p.categorySlug !== selectedCategoryFilter) {
            return false;
          }
        }

        if (priceRange === 'under-30k' && p.price >= 30000) return false;
        if (priceRange === '30k-75k' && (p.price < 30000 || p.price > 75000))
          return false;
        if (priceRange === 'over-75k' && p.price <= 75000) return false;

        if (highRatingOnly && p.rating < 4.8) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'newest')
          return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
        return 0;
      });
  }, [
    orderedCatalogBase,
    searchQuery,
    selectedCategoryFilter,
    priceRange,
    highRatingOnly,
    sortBy,
  ]);

  const itemsPerPage = 8;
  const displayedProducts = useMemo(() => {
    if (currentPage === 1) {
      return filteredProducts.slice(0, itemsPerPage);
    }
    const start = ((currentPage - 1) * 4) % Math.max(1, filteredProducts.length);
    const slice = filteredProducts.slice(start, start + itemsPerPage);
    return slice.length >= 4 ? slice : filteredProducts.slice(0, itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategoryFilter('all');
    setPriceRange('all');
    setMinPriceInput('10.000');
    setMaxPriceInput('150.000');
    setHighRatingOnly(false);
    setReadyStockOnly(true);
    setCurrentPage(1);
    showToast('Filter Direset 🔄', 'Menampilkan seluruh koleksi MayurienShop.');
  };

  const activeCategoryObj =
    catalogCategories.find((c) => c.slug === selectedCategoryFilter) ||
    catalogCategories[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#494551] dark:text-[#cbc4d1] mb-4"
      >
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className="hover:text-[#674ba7] dark:hover:text-[#d0bcff] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">home</span>
          Beranda
        </button>
        <span>/</span>
        <span className="text-[#1c1b1b] dark:text-[#f5f3f7] font-bold">
          Katalog Produk
        </span>
      </nav>

      {/* Page Title & Hero Banner */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-[#1c1b1b]/15 dark:border-[#484554]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd9e3] dark:bg-[#7d244b] text-[#7c274c] dark:text-[#ffd9e3] border-2 border-[#1c1b1b] dark:border-[#fe8eb7] text-xs font-bold mb-3 neo-shadow-sm">
            <span className="material-symbols-outlined text-sm">storefront</span>
            <span>Katalog Terlengkap</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tracking-tight">
            Semua Produk Stationery &amp; Accessories
          </h1>
          <p className="text-[#494551] dark:text-[#cbc4d1] text-sm sm:text-base mt-1 font-medium">
            Menampilkan{' '}
            <strong className="text-[#1c1b1b] dark:text-[#f5f3f7] font-bold tabular-nums">
              {filteredProducts.length === orderedCatalogBase.length
                ? 48
                : filteredProducts.length}
            </strong>{' '}
            produk pilihan yang bikin aktivitas harianmu lebih ceria.
          </p>
        </div>

        {/* Trust Pill */}
        <div className="flex items-center gap-3 bg-[#f6f3f2] dark:bg-[#25242d] px-4 py-2.5 rounded-2xl border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm self-start md:self-end">
          <span className="material-symbols-outlined text-[#674ba7] dark:text-[#d0bcff] text-2xl">
            verified
          </span>
          <div className="text-xs font-semibold leading-tight">
            <p className="text-[#1c1b1b] dark:text-[#f5f3f7] font-bold">
              100% Produk Original &amp; Kawaii
            </p>
          </div>
        </div>
      </div>

      {/* Active Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#494551] dark:text-[#cbc4d1] mr-1">
            Filter Aktif:
          </span>

          {/* Category Active Chip */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] dark:border-[#d0bcff] text-xs font-bold">
            {activeCategoryObj.label}
            {selectedCategoryFilter !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedCategoryFilter('all')}
                aria-label="Hapus filter kategori"
                className="hover:opacity-70 flex items-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            )}
          </span>

          {/* Price Active Chip */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0eded] dark:bg-[#2a2933] text-[#1c1b1b] dark:text-[#f5f3f7] border-2 border-[#1c1b1b] dark:border-[#484554] text-xs font-bold">
            {priceRange === 'under-30k'
              ? 'Di bawah Rp 30.000'
              : priceRange === '30k-75k'
              ? 'Rp 30.000 - Rp 75.000'
              : priceRange === 'over-75k'
              ? 'Di atas Rp 75.000'
              : 'Di bawah Rp 100.000'}
            {priceRange !== 'all' && (
              <button
                type="button"
                onClick={() => setPriceRange('all')}
                aria-label="Hapus filter harga"
                className="hover:text-[#9b3e64] flex items-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            )}
          </span>

          {/* Rating Active Chip */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0eded] dark:bg-[#2a2933] text-[#1c1b1b] dark:text-[#f5f3f7] border-2 border-[#1c1b1b] dark:border-[#484554] text-xs font-bold">
            {highRatingOnly ? 'Rating 4.8+' : 'Rating 4.5+'}
            {highRatingOnly && (
              <button
                type="button"
                onClick={() => setHighRatingOnly(false)}
                aria-label="Hapus filter rating"
                className="hover:text-[#9b3e64] flex items-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            )}
          </span>

          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe081] text-[#231b00] border-2 border-[#1c1b1b] text-xs font-bold">
              Cari: &ldquo;{searchQuery}&rdquo;
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="hover:opacity-75 flex items-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFilterOpen((prev) => !prev)}
            className="lg:hidden neo-btn px-3 py-1.5 rounded-xl bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] text-xs font-bold flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">tune</span>
            Filter ({selectedCategoryFilter !== 'all' ? 2 : 1})
          </button>

          <button
            type="button"
            onClick={handleResetFilters}
            className="text-xs font-bold text-[#9b3e64] dark:text-[#fe8eb7] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            Reset Filter
          </button>
        </div>
      </div>

      {/* Main Layout: Sidebar + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT SIDEBAR: Filter Panel */}
        <aside
          aria-label="Product Filters"
          className={`lg:col-span-3 bg-[#ffffff] dark:bg-[#25242d] rounded-2xl border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-5 space-y-6 lg:sticky lg:top-28 ${
            mobileFilterOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          {/* Filter Search within Catalog */}
          <div>
            <h2 className="font-headline font-bold text-base mb-2.5 text-[#1c1b1b] dark:text-[#f5f3f7]">
              Cari Barang
            </h2>
            <div className="relative">
              <span className="material-symbols-outlined text-base text-[#494551] dark:text-[#cbc4d1] absolute left-3 top-2.5">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Filter nama barang..."
                className="w-full pl-9 pr-3 py-2 bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-xl text-xs font-semibold text-[#1c1b1b] dark:text-[#f5f3f7] placeholder:text-[#494551]/60 focus:outline-none focus:ring-2 focus:ring-[#674ba7]"
              />
            </div>
          </div>

          <hr className="border-t-2 border-[#1c1b1b]/10 dark:border-[#484554]" />

          {/* Category Filter */}
          <div>
            <h2 className="font-headline font-bold text-base mb-3 text-[#1c1b1b] dark:text-[#f5f3f7] flex items-center justify-between">
              <span>Kategori</span>
              <span className="material-symbols-outlined text-base">
                expand_less
              </span>
            </h2>
            <ul className="space-y-2.5 text-sm font-semibold">
              {catalogCategories.map((cat) => {
                const isSelected = selectedCategoryFilter === cat.slug;
                return (
                  <li key={cat.slug}>
                    <label
                      onClick={() => {
                        setSelectedCategoryFilter(cat.slug);
                        setCurrentPage(1);
                      }}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {
                            setSelectedCategoryFilter(cat.slug);
                            setCurrentPage(1);
                          }}
                          className="w-4 h-4 rounded border-2 border-[#1c1b1b] text-[#674ba7] focus:ring-[#674ba7] accent-[#674ba7]"
                        />
                        <span
                          className={
                            isSelected
                              ? 'text-[#1c1b1b] dark:text-[#f5f3f7] font-bold group-hover:text-[#674ba7] dark:group-hover:text-[#d0bcff]'
                              : 'text-[#494551] dark:text-[#cbc4d1] group-hover:text-[#1c1b1b] dark:group-hover:text-[#f5f3f7]'
                          }
                        >
                          {cat.label}
                        </span>
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-bold tabular-nums ${
                          isSelected
                            ? 'bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border border-[#1c1b1b]'
                            : 'bg-[#f0eded] dark:bg-[#1b1a22] text-[#494551] dark:text-[#cbc4d1]'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <hr className="border-t-2 border-[#1c1b1b]/10 dark:border-[#484554]" />

          {/* Price Range Filter */}
          <div>
            <h2 className="font-headline font-bold text-base mb-3 text-[#1c1b1b] dark:text-[#f5f3f7]">
              Rentang Harga (IDR)
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-[#494551] dark:text-[#cbc4d1] block mb-1">
                    Min (Rp)
                  </label>
                  <input
                    type="text"
                    value={minPriceInput}
                    onChange={(e) => setMinPriceInput(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-lg text-xs font-bold tabular-nums text-[#1c1b1b] dark:text-[#f5f3f7]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#494551] dark:text-[#cbc4d1] block mb-1">
                    Max (Rp)
                  </label>
                  <input
                    type="text"
                    value={maxPriceInput}
                    onChange={(e) => setMaxPriceInput(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-lg text-xs font-bold tabular-nums text-[#1c1b1b] dark:text-[#f5f3f7]"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setPriceRange((prev) =>
                      prev === 'under-30k' ? 'all' : 'under-30k'
                    );
                    setMinPriceInput('10.000');
                    setMaxPriceInput('30.000');
                  }}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-colors cursor-pointer ${
                    priceRange === 'under-30k'
                      ? 'bg-[#ffd9e3] dark:bg-[#7d244b] border-2 border-[#1c1b1b] text-[#3e0020] dark:text-[#ffd9e3]'
                      : 'bg-[#f0eded] dark:bg-[#1b1a22] border-[#1c1b1b] dark:border-[#484554] hover:bg-[#eaddff]'
                  }`}
                >
                  &lt; Rp 30rb
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPriceRange((prev) =>
                      prev === '30k-75k' ? 'all' : '30k-75k'
                    );
                    setMinPriceInput('30.000');
                    setMaxPriceInput('75.000');
                  }}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-colors cursor-pointer ${
                    priceRange === '30k-75k' || priceRange === 'all'
                      ? 'bg-[#ffd9e3] dark:bg-[#7d244b] border-2 border-[#1c1b1b] dark:border-[#fe8eb7] text-[#3e0020] dark:text-[#ffd9e3]'
                      : 'bg-[#f0eded] dark:bg-[#1b1a22] border-[#1c1b1b] dark:border-[#484554] hover:bg-[#eaddff]'
                  }`}
                >
                  Rp 30rb - 75rb
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPriceRange((prev) =>
                      prev === 'over-75k' ? 'all' : 'over-75k'
                    );
                    setMinPriceInput('75.000');
                    setMaxPriceInput('150.000');
                  }}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-colors cursor-pointer ${
                    priceRange === 'over-75k'
                      ? 'bg-[#ffd9e3] dark:bg-[#7d244b] border-2 border-[#1c1b1b] text-[#3e0020] dark:text-[#ffd9e3]'
                      : 'bg-[#f0eded] dark:bg-[#1b1a22] border-[#1c1b1b] dark:border-[#484554] hover:bg-[#eaddff]'
                  }`}
                >
                  &gt; Rp 75rb
                </button>
              </div>
            </div>
          </div>

          <hr className="border-t-2 border-[#1c1b1b]/10 dark:border-[#484554]" />

          {/* Stock & Condition Filter */}
          <div>
            <h2 className="font-headline font-bold text-base mb-3 text-[#1c1b1b] dark:text-[#f5f3f7]">
              Ketersediaan
            </h2>
            <div className="space-y-2 text-sm font-semibold">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={readyStockOnly}
                  onChange={(e) => setReadyStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded border-2 border-[#1c1b1b] text-[#674ba7] accent-[#674ba7]"
                />
                <span className="text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Ready Stock Saja
                </span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includePreOrder}
                  onChange={(e) => setIncludePreOrder(e.target.checked)}
                  className="w-4 h-4 rounded border-2 border-[#1c1b1b] text-[#674ba7] accent-[#674ba7]"
                />
                <span className="text-[#494551] dark:text-[#cbc4d1]">
                  Termasuk Pre-Order
                </span>
              </label>
            </div>
          </div>

          <hr className="border-t-2 border-[#1c1b1b]/10 dark:border-[#484554]" />

          {/* Rating Filter */}
          <div>
            <h2 className="font-headline font-bold text-base mb-3 text-[#1c1b1b] dark:text-[#f5f3f7]">
              Rating Toko
            </h2>
            <label className="flex items-center justify-between cursor-pointer text-sm font-semibold">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={highRatingOnly}
                  onChange={(e) => setHighRatingOnly(e.target.checked)}
                  className="w-4 h-4 rounded border-2 border-[#1c1b1b] text-[#674ba7] accent-[#674ba7]"
                />
                <span className="flex items-center gap-1 text-[#1c1b1b] dark:text-[#f5f3f7]">
                  <span className="material-symbols-outlined text-base text-[#caa82c] dark:text-[#ffe081] icon-filled">
                    star
                  </span>
                  4.8 ke atas
                </span>
              </span>
              <span className="text-xs font-bold text-[#494551] dark:text-[#cbc4d1] bg-[#f0eded] dark:bg-[#1b1a22] px-2 py-0.5 rounded-full">
                32
              </span>
            </label>
          </div>

          {/* Promo Card inside Sidebar */}
          <div className="p-4 rounded-xl bg-[#ffe081] dark:bg-[#2a2736] border-2 border-[#1c1b1b] dark:border-[#ffe081]/40 neo-shadow-sm space-y-2">
            <div className="flex items-center gap-1.5 font-headline font-bold text-xs text-[#231b00] dark:text-[#ffe081]">
              <span className="material-symbols-outlined text-base">
                redeem
              </span>
              <span>Extra Hadiah Gratis!</span>
            </div>
            <p className="text-xs font-semibold text-[#564500] dark:text-[#cbc4d1] leading-snug">
              Beli min. 3 produk kategori apa pun dapat free Cute Stickers
              sheet!
            </p>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT: Sorting Bar + Product Grid + Pagination */}
        <section aria-label="Daftar Produk" className="lg:col-span-9 space-y-6">
          {/* Sorting & View Controls Bar */}
          <div className="bg-[#ffffff] dark:bg-[#25242d] rounded-2xl border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#494551] dark:text-[#cbc4d1]">
              <span>
                Menampilkan{' '}
                <strong className="text-[#1c1b1b] dark:text-[#f5f3f7] font-bold tabular-nums">
                  1-{displayedProducts.length}
                </strong>{' '}
                dari{' '}
                <strong className="text-[#1c1b1b] dark:text-[#f5f3f7] font-bold tabular-nums">
                  {filteredProducts.length === orderedCatalogBase.length
                    ? 48
                    : filteredProducts.length}
                </strong>{' '}
                produk
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#674ba7] dark:bg-[#d0bcff]" />
            </div>

            <div className="flex items-center gap-3">
              <label
                htmlFor="sort-select"
                className="text-xs font-bold text-[#494551] dark:text-[#cbc4d1]"
              >
                Urutkan:
              </label>
              <div className="relative">
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-[#f6f3f2] dark:bg-[#1b1a22] border-2 border-[#1c1b1b] dark:border-[#484554] rounded-xl pl-3.5 pr-9 py-1.5 text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] focus:outline-none focus:ring-2 focus:ring-[#674ba7] cursor-pointer"
                >
                  <option value="popular">Paling Populer (Default)</option>
                  <option value="newest">Terbaru</option>
                  <option value="price-asc">Harga: Rendah ke Tinggi</option>
                  <option value="price-desc">Harga: Tinggi ke Rendah</option>
                </select>
                <span className="material-symbols-outlined text-base text-[#1c1b1b] dark:text-[#f5f3f7] absolute right-2.5 top-1.5 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* PRODUCT CARDS GRID */}
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {displayedProducts.map((product) => {
                const isWishlisted = wishlist.includes(product.id);
                return (
                  <article
                    key={product.id}
                    className="group bg-[#ffffff] dark:bg-[#25242d] rounded-2xl border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div className="relative aspect-square bg-[#f6f3f2] dark:bg-[#1b1a22] border-b-2 border-[#1c1b1b] dark:border-[#484554] overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.shortTitle}
                        referrerPolicy="no-referrer"
                        onClick={() =>
                          navigateTo('product-detail', product.slug)
                        }
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                      {/* Top-left Badges */}
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
                        {product.badgeText && (
                          <span
                            className={`px-2.5 py-0.5 rounded-full border-2 border-[#1c1b1b] text-[11px] font-bold neo-shadow-sm ${
                              product.badgeStyle === 'bestseller'
                                ? 'bg-[#ffe081] text-[#231b00]'
                                : product.badgeStyle === 'promo'
                                ? 'bg-[#ffd9e3] text-[#3e0020]'
                                : 'bg-[#fe8eb7] text-[#3e0020]'
                            }`}
                          >
                            {product.badgeText}
                          </span>
                        )}
                        {product.secondBadgeText && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#eaddff] text-[#22055d] border-2 border-[#1c1b1b] text-[10px] font-bold">
                            {product.secondBadgeText}
                          </span>
                        )}
                      </div>

                      {/* Wishlist Heart Button */}
                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        aria-label="Tambah ke Wishlist"
                        className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full border-2 border-[#1c1b1b] flex items-center justify-center transition-colors neo-shadow-sm cursor-pointer ${
                          isWishlisted
                            ? 'bg-[#fe8eb7] text-[#3e0020]'
                            : 'bg-[#ffffff]/90 dark:bg-[#1b1a22]/90 text-[#1c1b1b] dark:text-[#f5f3f7] hover:bg-[#ffd9e3] hover:text-[#9b3e64]'
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

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#674ba7] dark:text-[#d0bcff]">
                          {product.categoryLabel}
                        </span>
                        <h3 className="font-headline font-bold text-base text-[#1c1b1b] dark:text-[#f5f3f7] mt-0.5 line-clamp-1 group-hover:text-[#674ba7] dark:group-hover:text-[#d0bcff] transition-colors">
                          <button
                            type="button"
                            onClick={() =>
                              navigateTo('product-detail', product.slug)
                            }
                            className="text-left cursor-pointer"
                          >
                            {product.shortTitle}
                          </button>
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-[#494551] dark:text-[#cbc4d1]">
                          <span className="material-symbols-outlined text-sm text-[#caa82c] dark:text-[#ffe081] icon-filled">
                            star
                          </span>
                          <span className="font-bold text-[#1c1b1b] dark:text-[#f5f3f7] tabular-nums">
                            {product.rating.toFixed(1)}
                          </span>
                          <span>•</span>
                          <span className="tabular-nums">
                            ({product.soldCount} terjual)
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#1c1b1b]/10 dark:border-[#484554] flex items-end justify-between gap-2">
                        <div>
                          {product.compareAtPrice && (
                            <span className="text-[11px] text-[#494551] dark:text-[#cbc4d1] line-through font-semibold tabular-nums block">
                              {formatIDR(product.compareAtPrice)}
                            </span>
                          )}
                          <p className="font-headline font-bold text-lg text-[#674ba7] dark:text-[#d0bcff] tabular-nums leading-none">
                            {formatIDR(product.price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => addToCart(product, 1)}
                          aria-label={`Tambah ${product.shortTitle} ke Keranjang`}
                          className="neo-btn p-2 rounded-xl bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] dark:border-[#d0bcff] neo-shadow-sm flex items-center justify-center hover:bg-[#674ba7] hover:text-white transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-lg">
                            add_shopping_cart
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow p-8 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#9b3e64] dark:text-[#fe8eb7]">
                search_off
              </span>
              <h3 className="font-headline font-bold text-lg text-[#1c1b1b] dark:text-[#f5f3f7]">
                Produk tidak ditemukan untuk filter ini
              </h3>
              <p className="text-sm text-[#494551] dark:text-[#cbc4d1]">
                Yuk coba reset filter atau gunakan kata kunci pencarian lain!
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="neo-btn px-5 py-2.5 rounded-xl bg-[#674ba7] text-white font-headline font-bold text-xs border-2 border-[#1c1b1b] neo-shadow-sm cursor-pointer"
              >
                Reset Semua Filter
              </button>
            </div>
          )}

          {/* Subtle Empty State / Help Prompt Box */}
          <div className="rounded-2xl bg-[#f6f3f2] dark:bg-[#25242d]/60 border-2 border-dashed border-[#1c1b1b]/30 dark:border-[#484554] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#ffd9e3] dark:bg-[#7d244b] border-2 border-[#1c1b1b] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl text-[#3e0020] dark:text-[#ffd9e3]">
                  sentiment_satisfied
                </span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-sm sm:text-base text-[#1c1b1b] dark:text-[#f5f3f7]">
                  Yah, produk yang kamu cari belum ketemu?
                </h3>
                <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1]">
                  Coba kurangi kombinasi filter atau hubungi mimin via live chat
                  untuk request item favoritmu!
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                showToast(
                  'Halo dari Min-Mayu! ✨',
                  'Silakan tulis produk stationery yang ingin kamu request, kami catat ya!'
                )
              }
              className="neo-btn px-4 py-2 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm text-xs font-bold shrink-0 cursor-pointer"
            >
              Chat Min-Mayu ✨
            </button>
          </div>

          {/* Pagination Controls */}
          <nav
            aria-label="Pagination"
            className="pt-4 flex items-center justify-center gap-2"
          >
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="neo-btn px-3.5 py-2 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm text-xs font-bold text-[#494551] dark:text-[#cbc4d1] flex items-center gap-1 disabled:opacity-50 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">
                chevron_left
              </span>
              Prev
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }}
                aria-current={currentPage === page ? 'page' : undefined}
                className={`neo-btn w-9 h-9 rounded-xl border-2 font-headline font-bold text-xs flex items-center justify-center cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#674ba7] dark:bg-[#d0bcff] text-white dark:text-[#22055d] border-[#1c1b1b] neo-shadow-sm'
                    : 'bg-[#ffffff] dark:bg-[#25242d] border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm text-[#1c1b1b] dark:text-[#f5f3f7] hover:bg-[#eaddff]'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
              className="neo-btn px-3.5 py-2 rounded-xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#484554] neo-shadow-sm text-xs font-bold text-[#1c1b1b] dark:text-[#f5f3f7] flex items-center gap-1 hover:bg-[#eaddff] cursor-pointer"
            >
              Next
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </button>
          </nav>
        </section>
      </div>
    </div>
  );
};
