import React from 'react';
import { useShop, ScreenName } from '../context/ShopContext';

export const MobileBottomNav: React.FC = () => {
  const { screen, navigateTo, cartItemCount } = useShop();

  const navItems: {
    id: ScreenName;
    label: string;
    icon: string;
    badge?: number;
  }[] = [
    { id: 'home', label: 'Beranda', icon: 'home' },
    { id: 'catalog', label: 'Katalog', icon: 'grid_view' },
    { id: 'cart', label: 'Keranjang', icon: 'shopping_bag', badge: cartItemCount },
    { id: 'order-confirmation', label: 'Pesanan', icon: 'receipt_long' },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fcf9f8]/95 dark:bg-[#1b1a22]/95 backdrop-blur-md border-t-2 border-[#1c1b1b] dark:border-[#484554] px-3 py-2 flex items-center justify-around shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
    >
      {navItems.map((item) => {
        const isActive =
          screen === item.id ||
          (item.id === 'catalog' && screen === 'product-detail') ||
          (item.id === 'cart' && screen === 'checkout');

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => navigateTo(item.id)}
            className={`relative flex flex-col items-center justify-center px-3 py-1 rounded-xl font-headline font-bold text-[11px] transition-all ${
              isActive
                ? 'bg-[#eaddff] dark:bg-[#4f348d] text-[#22055d] dark:text-[#eaddff] border-2 border-[#1c1b1b] dark:border-[#d0bcff] neo-shadow-sm'
                : 'text-[#494551] dark:text-[#cbc4d1]'
            }`}
          >
            <div className="relative">
              <span className="material-symbols-outlined text-xl">
                {item.icon}
              </span>
              {typeof item.badge === 'number' && item.badge > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-[#9b3e64] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full border border-[#1c1b1b] tabular-nums">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
