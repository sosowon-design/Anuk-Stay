/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Rooms from './components/Rooms';
import Experience from './components/Experience';
import Reservation from './components/Reservation';
import InquiryBoard from './components/Inquiry';
import Footer from './components/Footer';
import { X, ChevronUp, MessageCircle, Phone, Mail, Clock, ExternalLink, Check, Copy } from 'lucide-react';
import { PENSION_INFO } from './data';
import { preloadAllImages } from './utils/imagePreloader';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewKey, setViewKey] = useState<number>(0);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string>('goyo');
  const [zoomImage, setZoomImage] = useState<{ url: string; caption: string } | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [showInquiryPopup, setShowInquiryPopup] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    setViewKey(prev => prev + 1);
    setShowInquiryPopup(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView, viewKey]);

  React.useEffect(() => {
    preloadAllImages();
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookShortcut = (roomId: string) => {
    setSelectedRoomForBooking(roomId);
    setCurrentView('reservation');
  };

  const handleNavigateToExperience = () => {
    setCurrentView('experience');
  };

  const handleNavigateToBooking = () => {
    setCurrentView('reservation');
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#2B2927] font-sans antialiased selection:bg-[#DFBA84]/20 selection:text-[#DFBA84]" id="app-root">
      
      {/* Absolute Floating Navigation Header */}
      <Header currentView={currentView} onViewChange={handleViewChange} />

      {/* Main Orchestrated View Layout with transitions */}
      <main className="relative" id="main-content-layout">
        <AnimatePresence mode="wait">
          
          {/* HOME VIEW: Immersive, pure landing page with ONLY Hero and NO Footer */}
          {currentView === 'home' && (
            <motion.div
              key={`home-view-${viewKey}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-0"
              id="view-home"
            >
              {/* Full-screen Hero Slider */}
              <Hero onExploreClick={handleViewChange} />
            </motion.div>
          )}

          {/* STORY VIEW */}
          {currentView === 'story' && (
            <motion.div
              key={`story-view-${viewKey}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-24 md:pt-28"
            >
              <Story onNavigateToRooms={() => handleViewChange('rooms')} />
            </motion.div>
          )}

          {/* ROOMS VIEW */}
          {currentView === 'rooms' && (
            <motion.div
              key={`rooms-view-${viewKey}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-24 md:pt-28"
            >
              <Rooms 
                onBookShortcut={handleBookShortcut} 
                onNavigateToExperience={handleNavigateToExperience} 
              />
            </motion.div>
          )}

          {/* EXPERIENCE VIEW */}
          {currentView === 'experience' && (
            <motion.div
              key={`experience-view-${viewKey}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-24 md:pt-28"
            >
              <Experience 
                onNavigateToBooking={handleNavigateToBooking} 
                onNavigateToInquiry={() => handleViewChange('inquiry')}
              />
            </motion.div>
          )}

          {/* RESERVATION VIEW */}
          {currentView === 'reservation' && (
            <motion.div
              key={`reservation-view-${viewKey}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-24 md:pt-28"
            >
              <Reservation initialRoomId={selectedRoomForBooking} />
            </motion.div>
          )}

          {/* POLICY & GUIDELINES VIEW */}
          {currentView === 'inquiry' && (
            <motion.div
              key={`inquiry-view-${viewKey}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-24 md:pt-28"
            >
              <InquiryBoard onNavigateToReservation={() => handleViewChange('reservation')} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Floating Action Buttons: Quick Inquiry + Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <>
            {/* Backdrop to close inquiry popover on outside click */}
            {showInquiryPopup && (
              <div 
                className="fixed inset-0 z-30 bg-transparent" 
                onClick={() => setShowInquiryPopup(false)}
              />
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed bottom-7 right-5 sm:bottom-8 sm:right-6 md:right-8 z-40 flex flex-col items-center gap-2.5 select-none"
              id="floating-actions-container"
            >
              {/* Floating Inquiry Popover */}
              <AnimatePresence>
                {showInquiryPopup && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute bottom-full right-0 mb-3 w-[285px] sm:w-[320px] max-w-[calc(100vw-2.5rem)] bg-[#FAF8F5] rounded-2xl shadow-xl border border-[#E2DDD5] p-4 sm:p-5 text-left text-[#2B2927] z-50 select-text"
                    id="floating-inquiry-popover"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5]">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#DFBA84]/20 flex items-center justify-center text-[#B8935C] shrink-0">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif text-[15px] font-medium text-[#2B2927] tracking-wide">
                          {PENSION_INFO.name} 문의
                        </h4>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowInquiryPopup(false);
                        }}
                        className="p-1 rounded-full text-[#8C867D] hover:text-[#2B2927] hover:bg-stone-200/50 transition-colors cursor-pointer"
                        aria-label="문의 팝업 닫기"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Inquiry Content */}
                    <div className="py-3.5 space-y-2.5 text-[12.5px]">
                      {/* Telephone with copy only (no navigation) */}
                      <div 
                        onClick={() => {
                          navigator.clipboard.writeText(PENSION_INFO.phone);
                          setCopiedPhone(true);
                          setTimeout(() => setCopiedPhone(false), 2000);
                        }}
                        className="p-3 rounded-xl bg-white border border-[#E5DFD5] shadow-xs flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center space-x-2.5 flex-1 mr-2 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-[#DFBA84]/15 flex items-center justify-center text-[#B8935C] shrink-0">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10.5px] sm:text-[11px] text-[#8C867D]">전화 문의</div>
                            <div className="font-medium text-[#2B2927] text-[13px] sm:text-[13.5px] tracking-tight sm:tracking-normal">
                              {PENSION_INFO.phone}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(PENSION_INFO.phone);
                            setCopiedPhone(true);
                            setTimeout(() => setCopiedPhone(false), 2000);
                          }}
                          className={`p-1.5 rounded-md transition-colors cursor-pointer shrink-0 ${
                            copiedPhone 
                              ? 'bg-emerald-50 text-emerald-600' 
                              : 'text-[#8C867D] hover:text-[#B8935C] hover:bg-[#DFBA84]/20'
                          }`}
                          title="전화번호 복사"
                          aria-label="전화번호 복사"
                        >
                          {copiedPhone ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Email with copy only (no navigation) */}
                      <div 
                        onClick={() => {
                          navigator.clipboard.writeText(PENSION_INFO.email);
                          setCopiedEmail(true);
                          setTimeout(() => setCopiedEmail(false), 2000);
                        }}
                        className="p-3 rounded-xl bg-white border border-[#E5DFD5] shadow-xs flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center space-x-2.5 flex-1 mr-2 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-[#DFBA84]/15 flex items-center justify-center text-[#B8935C] shrink-0">
                            <Mail className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10.5px] sm:text-[11px] text-[#8C867D]">이메일 문의</div>
                            <div className="font-medium text-[#2B2927] text-[12.5px] sm:text-[13px] truncate">
                              {PENSION_INFO.email}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(PENSION_INFO.email);
                            setCopiedEmail(true);
                            setTimeout(() => setCopiedEmail(false), 2000);
                          }}
                          className={`p-1.5 rounded-md transition-colors cursor-pointer shrink-0 ${
                            copiedEmail 
                              ? 'bg-emerald-50 text-emerald-600' 
                              : 'text-[#8C867D] hover:text-[#B8935C] hover:bg-[#DFBA84]/20'
                          }`}
                          title="이메일 복사"
                          aria-label="이메일 복사"
                        >
                          {copiedEmail ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Operating Hours */}
                      <div className="flex items-center space-x-2 px-2 pt-0.5 text-[11.5px] sm:text-[12px] text-[#6E6A64]">
                        <Clock className="w-3.5 h-3.5 text-[#B8935C] shrink-0" />
                        <span>상담 시간: 09:00 ~ 20:00 (연중무휴)</span>
                      </div>
                    </div>

                    {/* Direct Links */}
                    <div className="pt-2.5 border-t border-[#E5DFD5] flex gap-2">
                      <button
                        onClick={() => {
                          setShowInquiryPopup(false);
                          handleViewChange('inquiry');
                        }}
                        className="flex-1 py-2 px-2.5 sm:px-3 rounded-xl bg-[#EFEAE2] hover:bg-[#E5DFD5] text-[#3D3730] border border-[#D9D1C5] text-[12px] font-sans font-medium flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                        id="popup-goto-inquiry-btn"
                      >
                        <span>이용안내 보기</span>
                        <ExternalLink className="w-3 h-3 text-[#9A7A4C] shrink-0" />
                      </button>
                      <button
                        onClick={() => {
                          setShowInquiryPopup(false);
                          handleViewChange('reservation');
                        }}
                        className="py-2 px-3 sm:px-3.5 rounded-xl bg-[#C4A67A] hover:bg-[#B39366] text-white text-[12px] font-sans font-medium flex items-center justify-center transition-colors cursor-pointer shadow-xs shrink-0 whitespace-nowrap"
                        id="popup-goto-reservation-btn"
                      >
                        <span className="px-1 sm:px-1.5 inline-block">실시간 예약</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Upper Floating Button: Inquiry Icon (자연스러운 웜 톤 컬러, 아이콘 전용) */}
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setShowInquiryPopup(prev => !prev)}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${
                  showInquiryPopup 
                    ? 'bg-[#332E29] border-[#C4A67A] ring-2 ring-[#C4A67A]/30' 
                    : 'bg-[#423C36] hover:bg-[#342F2A] border-[#D4C3AF]/80 hover:border-[#D4C3AF]'
                } text-white shadow-md border transition-all duration-150 cursor-pointer flex items-center justify-center group`}
                aria-label="문의하기 안내"
                title="문의하기 안내"
                id="floating-inquiry-shortcut-btn"
              >
                <MessageCircle className="w-5 h-5 text-[#E5C9A3] group-hover:scale-110 transition-transform duration-150" />
              </motion.button>

              {/* Lower Floating Button: Scroll To Top (자연스러운 샌드 골드 톤, 동일한 규격) */}
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                onClick={scrollToTop}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#C4A67A] hover:bg-[#B39366] text-white shadow-md border border-[#BFA073] transition-colors duration-150 cursor-pointer flex items-center justify-center group"
                aria-label="최상단으로 이동"
                title="최상단으로 이동"
                id="scroll-to-top-btn"
              >
                <ChevronUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform duration-150" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Shared Informative Footer (Only shown on subpages, NOT on home view) */}
      {currentView !== 'home' && <Footer onNavClick={handleViewChange} currentView={currentView} />}

      {/* PHOTO LIGHTBOX/ZOOM OVERLAY */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center p-4 cursor-zoom-out select-none"
            id="lightbox-overlay"
          >
            {/* Close button */}
            <button 
              onClick={() => setZoomImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              id="lightbox-close-btn"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center justify-center space-y-4" id="lightbox-content-box">
              <motion.img
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25 }}
                src={zoomImage.url}
                alt={zoomImage.caption}
                className="max-h-[80vh] rounded-xl overflow-hidden object-contain max-w-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center bg-black/40 px-6 py-2.5 rounded-full border border-white/10 backdrop-blur-md">
                <span className="text-[13px] text-[#E5DFD5]/70 block font-mono uppercase tracking-widest">STAY PHOTO DETAILED VIEW</span>
                <p className="text-[15px] text-white font-serif font-medium mt-0.5">{zoomImage.caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
