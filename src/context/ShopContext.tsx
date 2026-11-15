import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PRODUCTS,
  Product,
  SHIPPING_OPTIONS,
  PAYMENT_OPTIONS,
  formatIDR,
} from '../data/products';

export type ScreenName =
  | 'home'
  | 'catalog'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'order-confirmation';

export interface CartItem {
  id: string;
  productId: string;
  slug: string;
  title: string;
  categoryLabel: string;
  variantLabel: string;
  layoutLabel?: string;
  price: number;
  compareAtPrice?: number;
  quantity: number;
  imageUrl: string;
  badgeText?: string;
  stockNote?: string;
}

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  province: string;
  city: string;
  district: string;
  postalCode: string;
  courierNote: string;
}

export interface OrderRecord {
  orderId: string;
  createdAt: string;
  estimatedArrival: string;
  trackingNumber: string;
  customer: CustomerInfo;
  shippingMethodId: string;
  paymentMethodId: string;
  items: CartItem[];
  subtotal: number;
  voucherCode: string;
  voucherDiscount: number;
  shippingCost: number;
  serviceFee: number;
  grandTotal: number;
}

interface ToastMessage {
  id: string;
  title: string;
  subtitle?: string;
  type?: 'success' | 'info' | 'warning';
}

interface ShopContextValue {
  screen: ScreenName;
  navigateTo: (screen: ScreenName, productSlug?: string) => void;
  selectedProduct: Product;
  setSelectedProductBySlug: (slug: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  cart: CartItem[];
  addToCart: (
    product: Product,
    quantity?: number,
    variantLabel?: string,
    layoutLabel?: string
  ) => void;
  updateCartQuantity: (itemId: string, delta: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  restoreDemoCart: () => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  voucherCode: string;
  appliedVoucher: { code: string; discount: number } | null;
  applyVoucherCode: (code: string) => void;
  removeVoucher: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;
  customerInfo: CustomerInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  selectedShippingId: string;
  setSelectedShippingId: (id: string) => void;
  selectedPaymentId: string;
  setSelectedPaymentId: (id: string) => void;
  lastOrder: OrderRecord;
  placeOrder: () => void;
  isQrisModalOpen: boolean;
  setIsQrisModalOpen: (open: boolean) => void;
  toasts: ToastMessage[];
  showToast: (title: string, subtitle?: string, type?: 'success' | 'info' | 'warning') => void;
  dismissToast: (id: string) => void;
  cartSubtotal: number;
  cartCompareSubtotal: number;
  storeAutomaticDiscount: number;
  cartItemCount: number;
}

const DEFAULT_CART: CartItem[] = [
  {
    id: 'cart-item-1',
    productId: 'prod-1',
    slug: 'pastel-cloud-daily-planner-2025',
    title: 'Pastel Cloud Daily Planner 2025',
    categoryLabel: 'NOTEBOOK & PLANNER',
    variantLabel: 'Lilac Cloud',
    layoutLabel: 'Grid (A5)',
    price: 68000,
    compareAtPrice: 85000,
    quantity: 1,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwlYYB18k6J3SWwb55MRofbh1UwnGICJnaz6BQt8kYrdPJunhi6Z_tMEnihIFNcSfZ1yaImahclSTiPkygvwfrmVpKTrIA1Db_adpi_SS8Mftn3suAsYH3aFxb11oOfFz0FNz9_3H-eDMQGy48qNKb5bPInViDXljcII58wNiDZaVutAPkR6dr5xhVKZ3BFYBnXotZuB6qpIWT8ysr-4ElkFG_hOxsiX9aHhaxDQ',
    badgeText: 'Hemat 20%',
  },
  {
    id: 'cart-item-2',
    productId: 'prod-2',
    slug: 'retro-click-gel-pen-set-05mm',
    title: 'Vintage Morandi Gel Pen Set (5 Pcs)',
    categoryLabel: 'PENS & HIGHLIGHTERS',
    variantLabel: '0.5mm Black Ink',
    layoutLabel: 'Sweet Macaron',
    price: 38500,
    quantity: 2,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1oHjf0Lb9qJxkVb9HskjDO9fe-wwOYSWiSaaX-rjH740F-jYcWJK2CKwEVEfMnkPc_Vv3cv-5j6jXqgIYjpLesjQBn60JTCiWnLA1OB6yGbVmGKFYZY6HPzd46b1wu33_2MdPoiHv2humublAb4Z8SzkWlOz8SVKex8h0mBVxEibMMDialmUAEpQDwpPTNTHDS7-CBabDLPic9MJJPVMobeUw66H5MQRvMcnPaQ',
    badgeText: 'Best Seller',
  },
  {
    id: 'cart-item-3',
    productId: 'prod-3',
    slug: 'mini-tulip-ceramic-pen-holder',
    title: 'Mini Tulip Ceramic Pen Holder',
    categoryLabel: 'DESK DECOR',
    variantLabel: 'Butter Cream Yellow',
    price: 52000,
    quantity: 1,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgwVh5siNjUX1zIsajwHuv-jH1jC-XYu6qfC1rAKp_ODUkjbwM1Mk0RK26EMY6uKFccaeM4r6f6wJ9J_USF8q2z9BZh1BEg6j5_DJiJCprYWWTo3ECi1ZnpKybE0ylaiXfMtxWIyciEHeQYIhTebfs9IHDm29mGSnQQLRzBt6Bs7kQWTi_C41FV8pFSDqjCi7fNypKgeO5T9ZOSZbpGzIWeI4q1cKvKysyncre-Q',
    stockNote: 'Sisa 4 stok!',
  },
];

const DEFAULT_CUSTOMER: CustomerInfo = {
  fullName: 'Nadia Putri',
  email: 'nadiaputri@gmail.com',
  phone: '0812-3456-7890',
  address: 'Jl. Melati No. 18, RT 04 / RW 02',
  province: 'DKI Jakarta',
  city: 'Jakarta Barat',
  district: 'Kebon Jeruk',
  postalCode: '11530',
  courierNote: 'Pagar hitam samping pos satpam.',
};

const DEFAULT_ORDER: OrderRecord = {
  orderId: '#MS-20261108-0001',
  createdAt: '8 November 2026, 14:28 WIB',
  estimatedArrival: 'Senin, 9 November 2026',
  trackingNumber: 'JP9823102448',
  customer: DEFAULT_CUSTOMER,
  shippingMethodId: 'jnt-regular',
  paymentMethodId: 'qris',
  items: [
    {
      id: 'ord-item-1',
      productId: 'prod-1',
      slug: 'pastel-cloud-daily-planner-2025',
      title: 'Pastel Dream Journal 2025',
      categoryLabel: 'NOTEBOOK & PLANNER',
      variantLabel: 'Lavender Lilac (A5 Hardcover)',
      price: 89000,
      quantity: 1,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAgVttFZvF3XJyRa3gkDE37HlAcgI5Li6i1yUc-yY7Vg2SmxornMOZMSFkrTGEGqZMkSoVwVP7FBL0yO-Du39Wo7wq-jDcUed75iVh9lJMAgiifbK36xVT2w4bfCnhzwZfMzMb-e1Rlr8uOuI1YjFH4VC1Df-LdQR2BCdOWzwnX6_qYa-d0HaF6Il_W6rkJRDRGfenY1Xzui4_TO5pi0MZmpKeuJ1atvqpjVvs73A',
    },
    {
      id: 'ord-item-2',
      productId: 'prod-5',
      slug: 'botanical-washi-tape-box-set',
      title: 'Sakura Washi Tape Set (5 Rolls)',
      categoryLabel: 'STICKY NOTES & WASHI',
      variantLabel: 'Spring Blossom (Foil Edition)',
      price: 48000,
      quantity: 1,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCwREVtv-ym16zV52c8b9r-kIkWb7NRZX3m_6ZWC40Lue4qDQunUnQUh305WJ_E8zkgpYJQNr3x73uDG_Mb5M4QRTr-WCyQoli8APVHvtRfJtPcM3AbMDeyJZKA-sBtcP2a4d_jLV-vPep6Y6zDjnrfujaT_P6XGCHxGrY8t2ZAyxgU0P_-5ptIBcPplHEiIhkCfZZKC8Pe1zO1jb3fT5HX32uXmLVxgrSJrWL88g',
    },
    {
      id: 'ord-item-3',
      productId: 'prod-3',
      slug: 'mini-tulip-ceramic-pen-holder',
      title: 'Ceramic Bear Desk Organizer',
      categoryLabel: 'DESK DECOR',
      variantLabel: 'Butter Yellow',
      price: 60000,
      quantity: 1,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCiVF9MKEywu7cO-t-kk1pt2ClF8dHpQzXB3eO5Vi4_6SWTe9xdD4XC4B7dom-GOsqY23Iny3hJCOqXhuSDgTb0H7IkdnprrflmKakwwUNe1uE5qgypX8QHVSpfnPpzNcvxYme4-K7Q1plIamMCp7uz-78Xsa5Q6UmesMxLjhoir4-Ltn3cuHg22UB-dLJOYUjBYCY_qKRGUnoPdSJT2Q3T9nA8k6udm5ivglBKPQ',
    },
  ],
  subtotal: 197000,
  voucherCode: 'GEMAS15',
  voucherDiscount: 15000,
  shippingCost: 12000,
  serviceFee: 1000,
  grandTotal: 195000,
};

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screen, setScreen] = useState<ScreenName>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>(PRODUCTS[0].slug);

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('mayurien_theme');
      return saved === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('mayurien_theme', isDark ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mayurien_cart_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return DEFAULT_CART;
  });

  useEffect(() => {
    try {
      localStorage.setItem('mayurien_cart_v1', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const [wishlist, setWishlist] = useState<string[]>(['prod-1', 'prod-3']);
  const [voucherCode, setVoucherCode] = useState<string>('GEMAS15');
  const [appliedVoucher, setAppliedVoucher] = useState<{
    code: string;
    discount: number;
  } | null>({
    code: 'GEMAS15',
    discount: 15000,
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>(DEFAULT_CUSTOMER);
  const [selectedShippingId, setSelectedShippingId] = useState<string>(
    SHIPPING_OPTIONS[0].id
  );
  const [selectedPaymentId, setSelectedPaymentId] = useState<string>(
    PAYMENT_OPTIONS[0].id
  );
  const [lastOrder, setLastOrder] = useState<OrderRecord>(DEFAULT_ORDER);
  const [isQrisModalOpen, setIsQrisModalOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (
    title: string,
    subtitle?: string,
    type: 'success' | 'info' | 'warning' = 'success'
  ) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    setToasts((prev) => [...prev.slice(-2), { id, title, subtitle, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3400);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const navigateTo = (targetScreen: ScreenName, productSlug?: string) => {
    if (productSlug) {
      setSelectedProductSlug(productSlug);
    }
    setScreen(targetScreen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setSelectedProductBySlug = (slug: string) => {
    setSelectedProductSlug(slug);
  };

  const selectedProduct =
    PRODUCTS.find((p) => p.slug === selectedProductSlug) || PRODUCTS[0];

  const addToCart = (
    product: Product,
    quantity = 1,
    variantLabel?: string,
    layoutLabel?: string
  ) => {
    const chosenVariant =
      variantLabel || product.colorVariants[0]?.label || 'Standard';
    const chosenLayout = layoutLabel || product.layoutVariants?.[0];

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.productId === product.id &&
          item.variantLabel === chosenVariant &&
          item.layoutLabel === chosenLayout
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}`,
          productId: product.id,
          slug: product.slug,
          title: product.shortTitle,
          categoryLabel: product.categoryLabel,
          variantLabel: chosenVariant,
          layoutLabel: chosenLayout,
          price: product.price,
          compareAtPrice: product.compareAtPrice,
          quantity,
          imageUrl: product.imageUrl,
          badgeText: product.badgeText,
          stockNote: product.stockNote,
        },
      ];
    });

    showToast(
      'Ditambahkan ke Keranjang! 🛍️',
      `${quantity}x ${product.shortTitle} (${chosenVariant}) siap di-checkout.`
    );
  };

  const updateCartQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id !== itemId) return item;
          const nextQty = item.quantity + delta;
          return nextQty > 0 ? { ...item, quantity: nextQty } : null;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (itemId: string) => {
    const target = cart.find((c) => c.id === itemId);
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    if (target) {
      showToast('Produk Dihapus', `${target.title} dihapus dari keranjang.`, 'info');
    }
  };

  const clearCart = () => {
    setCart([]);
    showToast('Keranjang Dikosongkan', 'Semua produk telah dihapus dari keranjang.', 'info');
  };

  const restoreDemoCart = () => {
    setCart(DEFAULT_CART);
    showToast('Keranjang Dipulihkan ✨', '3 produk favorit berhasil dimasukkan kembali!');
  };

  const toggleWishlist = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(
          'Dihapus dari Wishlist',
          prod ? `${prod.shortTitle} dihapus dari favoritmu.` : undefined,
          'info'
        );
        return prev.filter((id) => id !== productId);
      } else {
        showToast(
          'Disimpan ke Wishlist! 💖',
          prod ? `${prod.shortTitle} masuk daftar impianmu.` : undefined,
          'success'
        );
        return [...prev, productId];
      }
    });
  };

  const applyVoucherCode = (rawCode: string) => {
    const code = rawCode.trim().toUpperCase();
    setVoucherCode(code);
    if (!code) {
      showToast('Kode Voucher Kosong', 'Masukkan kode promo seperti GEMAS15 atau GEMAS.', 'warning');
      return;
    }
    if (code === 'GEMAS15' || code === 'GEMAS' || code === 'MAYURIEN') {
      const discount = code === 'GEMAS' ? 12000 : 15000;
      setAppliedVoucher({ code, discount });
      showToast(
        `Voucher ${code} Terpasang! 🎉`,
        `Hore! Kamu hemat ${formatIDR(discount)} untuk pesanan ini.`
      );
    } else {
      showToast(
        'Voucher Tidak Ditemukan',
        'Coba gunakan kode promo aktif: GEMAS15 atau GEMAS ✨',
        'warning'
      );
    }
  };

  const removeVoucher = () => {
    setAppliedVoucher(null);
    setVoucherCode('');
    showToast('Voucher Dilepas', 'Kode voucher telah dihapus dari rincian belanja.', 'info');
  };

  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCompareSubtotal = cart.reduce(
    (acc, item) => acc + (item.compareAtPrice || item.price) * item.quantity,
    0
  );
  const storeAutomaticDiscount = Math.max(0, cartCompareSubtotal - cartSubtotal);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const placeOrder = () => {
    const shippingOption =
      SHIPPING_OPTIONS.find((s) => s.id === selectedShippingId) ||
      SHIPPING_OPTIONS[0];
    const subtotal = cartSubtotal > 0 ? cartSubtotal : 197000;
    const voucherDiscount = appliedVoucher ? appliedVoucher.discount : 0;
    const shippingCost = shippingOption.price;
    const serviceFee = 1000;
    const grandTotal = Math.max(0, subtotal - voucherDiscount + shippingCost + serviceFee);

    const newOrder: OrderRecord = {
      orderId: '#MS-20261108-0001',
      createdAt: '8 November 2026, 14:28 WIB',
      estimatedArrival: 'Senin, 9 November 2026',
      trackingNumber: 'JP9823102448',
      customer: customerInfo,
      shippingMethodId: selectedShippingId,
      paymentMethodId: selectedPaymentId,
      items: cart.length > 0 ? [...cart] : DEFAULT_ORDER.items,
      subtotal,
      voucherCode: appliedVoucher?.code || 'GEMAS15',
      voucherDiscount,
      shippingCost,
      serviceFee,
      grandTotal,
    };

    setLastOrder(newOrder);
    setIsQrisModalOpen(false);
    navigateTo('order-confirmation');
    showToast(
      'Hore! Pesanan Berhasil Dibuat! 🎉✨',
      `Nomor Pesanan ${newOrder.orderId} sedang disiapkan Min-Mayu.`
    );
  };

  return (
    <ShopContext.Provider
      value={{
        screen,
        navigateTo,
        selectedProduct,
        setSelectedProductBySlug,
        isDark,
        toggleTheme,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        restoreDemoCart,
        wishlist,
        toggleWishlist,
        voucherCode,
        appliedVoucher,
        applyVoucherCode,
        removeVoucher,
        searchQuery,
        setSearchQuery,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        customerInfo,
        setCustomerInfo,
        selectedShippingId,
        setSelectedShippingId,
        selectedPaymentId,
        setSelectedPaymentId,
        lastOrder,
        placeOrder,
        isQrisModalOpen,
        setIsQrisModalOpen,
        toasts,
        showToast,
        dismissToast,
        cartSubtotal,
        cartCompareSubtotal,
        storeAutomaticDiscount,
        cartItemCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
};
