/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Compass, Music, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'story', label: '아눅 스토리', icon: Compass },
    { id: 'rooms', label: '객실 안내', icon: Layers },
    { id: 'experience', label: '특별한 경험', icon: Music },
    { id: 'inquiry', label: '이용 안내', icon: BookOpen },
  ];

  const handleNavClick = (id: string) => {
    onViewChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isHeaderOpaque = currentView !== 'home' || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isHeaderOpaque 
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5DFD5]/40 shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer group flex items-center space-x-2.5 sm:space-x-3 select-none"
            id="logo-container"
          >
            {/* Logo Icon Design */}
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center text-[12px] sm:text-[13px] tracking-tighter font-serif transition-transform duration-500 group-hover:rotate-45 ${
              isHeaderOpaque ? 'border-[#2B2927]/60 text-[#2B2927]' : 'border-white/60 text-white'
            }`}>
              AN
            </div>
            <div className="flex flex-col items-start">
              <span 
                className={`font-serif tracking-[0.22em] sm:tracking-[0.25em] font-medium transition-colors duration-300 text-[17px] sm:text-[19px] md:text-[22px] leading-none ${
                  isHeaderOpaque ? 'text-[#2B2927]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                }`}
                id="logo-text"
              >
                아눅
              </span>
              <span 
                className={`font-serif tracking-[0.15em] font-light text-[11px] sm:text-[12px] md:text-[13px] mt-0.5 sm:mt-1 uppercase transition-colors duration-300 ${
                  isHeaderOpaque ? 'text-[#6E6A64]' : 'text-[#E5DFD5] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
                }`}
                id="logo-subtext"
              >
                ANUK STAY
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12" id="desktop-nav">
            {menuItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 flex flex-col items-center group cursor-pointer`}
                  id={`nav-item-${item.id}`}
                >
                  <span
                    className={`font-sans font-medium tracking-[0.1em] text-[13px] transition-colors duration-300 ${
                      isActive
                        ? 'text-[#DFBA84]'
                        : isHeaderOpaque
                        ? 'text-[#2B2927] hover:text-[#DFBA84]'
                        : 'text-[#FAF9F6] hover:text-[#DFBA84]'
                    }`}
                  >
                    {item.label}
                  </span>
                  
                  {/* Underline bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 w-4 h-[1.5px] bg-[#DFBA84]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Book Now Button */}
            <button
              onClick={() => handleNavClick('reservation')}
              className={`group flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 text-[13px] font-medium tracking-wider cursor-pointer active:scale-98 ${
                isHeaderOpaque
                  ? 'bg-[#DFBA84] hover:bg-[#B8935C] text-white border border-transparent shadow-xs hover:shadow-md'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-[#DFBA84] hover:text-white hover:border-transparent backdrop-blur-md'
              }`}
              id="nav-book-btn"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>예약 바로가기</span>
            </button>
          </nav>

          {/* Mobile Menu Button - 44px touch target */}
          <div className="lg:hidden flex items-center" id="mobile-menu-trigger">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-11 h-11 flex items-center justify-center rounded-full focus:outline-none transition-colors duration-300 cursor-pointer ${
                isHeaderOpaque 
                  ? 'text-[#2B2927] hover:bg-[#E5DFD5]/30 active:bg-[#E5DFD5]/50' 
                  : 'text-white hover:bg-white/15 active:bg-white/25'
              }`}
              aria-label="모바일 메뉴 열기"
              id="mobile-toggle-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#2B2927]/98 backdrop-blur-lg flex flex-col justify-between overflow-y-auto px-6 py-20"
            id="mobile-drawer"
          >
            <div className="max-w-sm mx-auto w-full flex flex-col space-y-7 my-auto">
              <div className="text-center pb-5 border-b border-white/10 space-y-1">
                <span className="font-serif text-[26px] sm:text-[28px] tracking-[0.2em] text-white block">
                  아눅 스테이
                </span>
                <span className="text-[12px] sm:text-[13px] text-[#E5DFD5]/70 block tracking-[0.1em] font-light">
                  우리를 잇는 남해의 쉼, ANUK
                </span>
              </div>
              
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;
                  return (
                    <motion.button
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all duration-200 text-left cursor-pointer min-h-[48px] ${
                        isActive
                          ? 'bg-white/15 text-white border-white/25 font-semibold shadow-xs backdrop-blur-xs'
                          : 'bg-white/5 text-[#E5DFD5]/80 border-white/10 hover:bg-white/10 active:bg-white/15'
                      }`}
                      id={`mobile-nav-item-${item.id}`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-[#E5DFD5]'}`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span className={`text-[14.5px] sm:text-[15px] tracking-[0.08em] block ${isActive ? 'text-white font-medium' : 'text-[#E5DFD5]/90'}`}>
                          {item.label}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </nav>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick('reservation')}
                className="w-full py-3.5 sm:py-4 bg-[#DFBA84] hover:bg-[#B8935C] text-white font-medium rounded-xl text-[14.5px] tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-black/30 cursor-pointer min-h-[48px]"
                id="mobile-drawer-book-btn"
              >
                <Calendar className="w-4.5 h-4.5 text-white" />
                <span>실시간 예약 바로가기</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
