import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c10] text-[#f5f6f9] relative selection:bg-[#d4af37] selection:text-[#0a0c10]">
      {/* Background Subtle Gradient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#1e2433]/40 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
      </div>

      <Navbar />

      <main className="flex-grow z-10 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
