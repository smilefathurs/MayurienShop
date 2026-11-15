/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HomePage } from './components/HomePage';
import { CatalogPage } from './components/CatalogPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { OrderConfirmationPage } from './components/OrderConfirmationPage';

const AppContent: React.FC = () => {
  const { screen, toasts, dismissToast } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1c1b1b] dark:bg-[#1b1a22] dark:text-[#f5f3f7] transition-colors duration-200">
      <Header />

      <main className="flex-1">
        {screen === 'home' && <HomePage />}
        {screen === 'catalog' && <CatalogPage />}
        {screen === 'product-detail' && <ProductDetailPage />}
        {screen === 'cart' && <CartPage />}
        {screen === 'checkout' && <CheckoutPage />}
        {screen === 'order-confirmation' && <OrderConfirmationPage />}
      </main>

      <Footer />
      <MobileBottomNav />

      {/* Neobrutalist Toast Notifications */}
      {toasts.length > 0 && (
        <div
          aria-live="polite"
          className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
        >
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className="pointer-events-auto rounded-2xl bg-[#ffffff] dark:bg-[#25242d] border-2 border-[#1c1b1b] dark:border-[#d0bcff] neo-shadow p-3.5 flex items-start justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200"
            >
              <div className="flex items-start gap-2.5">
                <span
                  className={`w-8 h-8 rounded-xl border border-[#1c1b1b] flex items-center justify-center shrink-0 ${
                    toast.type === 'warning'
                      ? 'bg-[#ffe081] text-[#231b00]'
                      : toast.type === 'info'
                      ? 'bg-[#eaddff] text-[#22055d]'
                      : 'bg-[#ffd9e3] text-[#3e0020]'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">
                    {toast.type === 'warning'
                      ? 'info'
                      : toast.type === 'info'
                      ? 'notifications'
                      : 'auto_awesome'}
                  </span>
                </span>
                <div>
                  <p className="font-headline font-bold text-xs sm:text-sm text-[#1c1b1b] dark:text-[#f5f3f7]">
                    {toast.title}
                  </p>
                  {toast.subtitle && (
                    <p className="text-xs font-medium text-[#494551] dark:text-[#cbc4d1] mt-0.5">
                      {toast.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => dismissToast(toast.id)}
                aria-label="Tutup notifikasi"
                className="text-[#494551] dark:text-[#cbc4d1] hover:text-[#1c1b1b] cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">
                  close
                </span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
