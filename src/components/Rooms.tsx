/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROOMS_DATA } from '../data';
import { 
  Maximize2, 
  Users, 
  Clock, 
  Info, 
  Sparkles, 
  ArrowRight, 
  BedDouble, 
  Utensils, 
  Bath,
  Sunset,
  Trees,
  Coffee,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface RoomsProps {
  onBookShortcut: (roomId: string) => void;
  onNavigateToExperience: () => void;
}

export default function Rooms({ onBookShortcut, onNavigateToExperience }: RoomsProps) {
  const [activeRoomId, setActiveRoomId] = useState<string>('goyo');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const activeRoom = ROOMS_DATA.find(r => r.id === activeRoomId) || ROOMS_DATA[0];

  // Preload all gallery and main images of ALL rooms for immediate switching
  React.useEffect(() => {
    ROOMS_DATA.forEach(room => {
      const mainImg = new Image();
      mainImg.src = room.mainImage;
      room.galleryImages.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    });
  }, []);

  const handleRoomChange = (id: string, shouldScroll = true) => {
    setActiveRoomId(id);
    setSelectedImageIndex(0);
    if (shouldScroll) {
      const targetEl = document.getElementById('rooms-section');
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex(prev => (prev === 0 ? activeRoom.galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex(prev => (prev === activeRoom.galleryImages.length - 1 ? 0 : prev + 1));
  };

  const renderRoomIcon = (roomId: string) => {
    if (roomId === 'goyo') return <Sunset className="w-4 h-4 text-[#DFBA84]" />;
    if (roomId === 'heureum') return <Trees className="w-4 h-4 text-[#DFBA84]" />;
    return <Coffee className="w-4 h-4 text-[#DFBA84]" />;
  };

  const formattedPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  // Render categories with custom icons beautifully
  const renderCategoryHeader = (cat: string) => {
    const catLower = cat.toLowerCase();
    if (catLower.includes('living')) {
      return (
        <div className="flex items-center justify-start md:justify-start space-x-2 text-[#DFBA84] mb-4 border-b border-[#E5DFD5]/20 pb-2 text-left md:text-left">
          <BedDouble className="w-4 h-4 shrink-0" />
          <span className="text-[13px] font-sans font-semibold tracking-[0.12em] uppercase block">
            침실 및 리빙
          </span>
        </div>
      );
    }
    if (catLower.includes('kitchen')) {
      return (
        <div className="flex items-center justify-start md:justify-start space-x-2 text-[#DFBA84] mb-4 border-b border-[#E5DFD5]/20 pb-2 text-left md:text-left">
          <Utensils className="w-4 h-4 shrink-0" />
          <span className="text-[13px] font-sans font-semibold tracking-[0.12em] uppercase block">
            키친 및 다이닝
          </span>
        </div>
      );
    }
    if (catLower.includes('bath')) {
      return (
        <div className="flex items-center justify-start md:justify-start space-x-2 text-[#DFBA84] mb-4 border-b border-[#E5DFD5]/20 pb-2 text-left md:text-left">
          <Bath className="w-4 h-4 shrink-0" />
          <span className="text-[13px] font-sans font-semibold tracking-[0.12em] uppercase block">
            욕실 및 스파
          </span>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-start md:justify-start space-x-2 text-[#DFBA84] mb-4 border-b border-[#E5DFD5]/20 pb-2 text-left md:text-left">
        <Sparkles className="w-4 h-4 shrink-0" />
        <span className="text-[13px] font-sans font-semibold tracking-[0.12em] uppercase block">
          {cat}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-[#FAF9F6] pt-10 md:pt-14 pb-20 md:pb-24 px-4 sm:px-6 md:px-12 border-t border-[#E5DFD5]/40" id="rooms-section">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 sm:space-y-4 px-2" 
          id="rooms-header"
        >
          <span className="text-[12px] sm:text-[13px] tracking-[0.3em] text-[#DFBA84] font-semibold block uppercase font-sans">
            OUR STAYS
          </span>
          <h2 className="font-serif font-light text-[#2B2927] text-[22px] md:text-[28px] tracking-wide break-keep">
            쉼이 흐르는 세 가지 독립 객실
          </h2>
          <div className="w-16 h-[1.5px] bg-[#DFBA84] mx-auto" />
          <p className="text-[#6E6A64] text-[13.5px] sm:text-[14px] md:text-[15px] font-light max-w-xl mx-auto leading-[1.8] md:leading-relaxed break-keep">
            <span className="block md:inline">남해 자연과 조화를 이루는</span>{' '}
            <span className="block mt-1 md:mt-0 md:inline">아눅만의 독립된 프라이빗 객실입니다.</span>
          </p>
        </motion.div>

        {/* Anuk Brand Harmonious Pill Room Selection Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md sm:max-w-xl mx-auto px-3 sm:px-0" 
          id="rooms-tab-selectors"
        >
          <div className="grid grid-cols-3 bg-[#F3EFEA] p-1.5 rounded-full border border-[#E3DDD3] shadow-xs gap-1 sm:gap-1.5">
            {ROOMS_DATA.map((room) => {
              const isActive = activeRoomId === room.id;
              return (
                <motion.button
                  key={room.id}
                  onClick={() => handleRoomChange(room.id, false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`relative py-2.5 sm:py-3 px-1 sm:px-4 rounded-full text-[12.5px] sm:text-[13.5px] md:text-[14px] font-sans transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center text-center select-none ${
                    isActive 
                      ? 'text-white font-medium' 
                      : 'text-[#6E6A64] hover:text-[#2B2927] hover:bg-white/50 font-medium'
                  }`}
                  id={`tab-btn-${room.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeRoomPill"
                      className="absolute inset-0 bg-[#DFBA84] rounded-full shadow-[0_2px_8px_rgba(223,186,132,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap tracking-tight sm:tracking-normal">
                    {room.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Integrated Harmonious 2-Column Split Layout for OUR STAYS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoomId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start"
            id={`room-display-${activeRoomId}`}
          >
            {/* Left Showcase (7 cols): Main Photo & Perspective Cards */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4" id="room-gallery-showcase">
              {/* Main Focal Feature Photo Container with NO text overlay */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-3xl shadow-sm bg-stone-100 group border border-[#E5DFD5]">
                <AnimatePresence>
                  <motion.img
                    key={`${activeRoomId}-${selectedImageIndex}`}
                    initial={{ opacity: 0.6 }}
                    animate={{ 
                      opacity: 1, 
                      scale: [1, 1.04, 1],
                      y: [0, -3, 0]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      opacity: { duration: 0.25, ease: "easeOut" },
                      scale: { duration: 11, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                      y: { duration: 11, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                    }}
                    src={activeRoom.galleryImages[selectedImageIndex]}
                    alt={`${activeRoom.name} view perspective ${selectedImageIndex + 1}`}
                    loading="eager"
                    decoding="sync"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Sleek, Luxury Glass Floating Slider Control Pill (Bottom Right) */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center space-x-2 sm:space-x-3 bg-black/55 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 text-white shadow-lg text-[11px] sm:text-[12px]">
                  <button
                    onClick={handlePrevImage}
                    className="p-1 hover:text-[#DFBA84] transition-colors cursor-pointer hover:scale-110 active:scale-90"
                    aria-label="이전 이미지"
                    id="room-gallery-prev-btn"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <span className="font-serif tracking-widest text-white/70">
                    0{selectedImageIndex + 1} / 0{activeRoom.galleryImages.length}
                  </span>
                  <button
                    onClick={handleNextImage}
                    className="p-1 hover:text-[#DFBA84] transition-colors cursor-pointer hover:scale-110 active:scale-90"
                    aria-label="다음 이미지"
                    id="room-gallery-next-btn"
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Redesigned Preview Thumbnails Layout: Asymmetric Strip with Angle Badges */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 pt-0.5" id="room-thumbnails-grid">
                {activeRoom.galleryImages.map((imgUrl, i) => {
                  const isSelected = selectedImageIndex === i;
                  return (
                    <motion.button
                      key={i}
                      onClick={() => setSelectedImageIndex(i)}
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer text-left group/thumb ${
                        isSelected 
                          ? 'border-[#DFBA84] shadow-md ring-2 ring-[#DFBA84]/30 opacity-100' 
                          : 'border-[#E5DFD5] opacity-75 hover:opacity-100 hover:border-[#DFBA84]/60'
                      }`}
                      id={`thumb-btn-${i}`}
                    >
                      <motion.img 
                        src={imgUrl} 
                        alt={`Perspective ${i + 1}`} 
                        loading="eager"
                        decoding="sync"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 7 + (i * 1.8), repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                      
                      {/* Active bottom indicator line */}
                      {isSelected && (
                        <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#DFBA84] z-10" />
                      )}

                      {/* Natural position indicator without numbers */}
                      <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 z-10 flex items-center">
                        {isSelected ? (
                          <span className="h-1 w-3.5 sm:w-4 rounded-full bg-[#DFBA84] shadow-xs" />
                        ) : (
                          <span className="h-0.5 w-2 rounded-full bg-white/40" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right Narrative & Specs Panel (5 cols) */}
            <div className="lg:col-span-5 bg-white p-5 sm:p-7 md:p-8 rounded-3xl border border-[#E5DFD5] shadow-xs flex flex-col justify-between space-y-5 sm:space-y-6 text-center md:text-left" id="room-details-column">
              <div className="space-y-4 sm:space-y-5">
                {/* Header Title & Subtitle */}
                <div className="space-y-2.5 sm:space-y-3 border-b border-[#E5DFD5] pb-4 sm:pb-5">
                  <div className="flex justify-center md:justify-start">
                    <div className="inline-flex items-center space-x-2 bg-[#DFBA84]/10 border border-[#DFBA84]/30 px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] tracking-[0.18em] text-[#8F6D3C] font-semibold uppercase font-sans">
                      {renderRoomIcon(activeRoom.id)}
                      <span>ANUK STAY &middot; {activeRoom.engName}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-[#2B2927] text-[20px] sm:text-[22px] md:text-[25px] font-light leading-snug break-keep">
                    {activeRoom.title}
                  </h3>
                  <p className="text-[#6E6A64] text-[13px] sm:text-[13.5px] leading-[1.75] md:leading-relaxed font-light pt-1 break-keep">
                    {activeRoom.subtitle.includes(',') ? (
                      activeRoom.subtitle.split(',').map((part, i) => (
                        <span key={i} className="block">{part.trim()}{i === 0 ? ',' : ''}</span>
                      ))
                    ) : (
                      activeRoom.subtitle
                    )}
                  </p>
                </div>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 text-[11.5px] sm:text-[12px]" id="room-specs-badges-row">
                  <div className="bg-[#FAF9F6] p-2.5 sm:p-3 rounded-xl border border-[#E5DFD5] text-[#2B2927] flex flex-col sm:flex-row items-center justify-center md:justify-start text-center md:text-left space-y-1 sm:space-y-0 sm:space-x-2">
                    <Users className="w-4 h-4 text-[#DFBA84] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#8F6D3C] block font-sans uppercase font-medium">수용 인원</span>
                      <span className="font-medium text-[#2B2927] truncate block">기준 {activeRoom.capacity.standard}인 / 최대 {activeRoom.capacity.max}인</span>
                    </div>
                  </div>

                  <div className="bg-[#FAF9F6] p-2.5 sm:p-3 rounded-xl border border-[#E5DFD5] text-[#2B2927] flex flex-col sm:flex-row items-center justify-center md:justify-start text-center md:text-left space-y-1 sm:space-y-0 sm:space-x-2">
                    <Clock className="w-4 h-4 text-[#DFBA84] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#8F6D3C] block font-sans uppercase font-medium">체크인/아웃</span>
                      <span className="font-medium text-[#2B2927] truncate block">{activeRoom.checkIn} ~ {activeRoom.checkOut}</span>
                    </div>
                  </div>

                  <div className="bg-[#FAF9F6] p-2.5 sm:p-3 rounded-xl border border-[#E5DFD5] text-[#2B2927] flex flex-col sm:flex-row items-center justify-center md:justify-start text-center md:text-left space-y-1 sm:space-y-0 sm:space-x-2">
                    <BedDouble className="w-4 h-4 text-[#DFBA84] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#8F6D3C] block font-sans uppercase font-medium">침구 스펙</span>
                      <span className="font-medium text-[#2B2927] truncate block">구스 라지킹 베드</span>
                    </div>
                  </div>

                  <div className="bg-[#FAF9F6] p-2.5 sm:p-3 rounded-xl border border-[#E5DFD5] text-[#2B2927] flex flex-col sm:flex-row items-center justify-center md:justify-start text-center md:text-left space-y-1 sm:space-y-0 sm:space-x-2">
                    <Sparkles className="w-4 h-4 text-[#DFBA84] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#8F6D3C] block font-sans uppercase font-medium">요금 가이드</span>
                      <span className="font-medium text-[#2B2927] truncate block">{formattedPrice(activeRoom.priceWeekday)} ~</span>
                    </div>
                  </div>
                </div>

                {/* Key Checklist Highlights */}
                <div className="bg-[#FAF9F6] p-3.5 sm:p-4.5 rounded-2xl border border-[#E5DFD5]/60 space-y-2.5 text-left md:text-left" id="room-highlights">
                  <span className="text-[11px] tracking-wider text-[#8F6D3C] font-semibold uppercase block font-sans text-left md:text-left">
                    시그니처 무료 혜택 & 비품
                  </span>
                  <div className="space-y-1.5 text-[#6E6A64]" id="room-highlights-list">
                    {activeRoom.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-start md:justify-start space-x-2 text-[11.5px] sm:text-[12px] font-light leading-snug text-left md:text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DFBA84] shrink-0" />
                        <span className="text-[#2B2927] break-keep">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Booking Button */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onBookShortcut(activeRoom.id)}
                  className="w-full py-3.5 bg-[#DFBA84] hover:bg-[#B8935C] text-white rounded-full font-medium tracking-wider text-[13px] md:text-[14px] transition-all duration-150 shadow-sm flex items-center justify-center space-x-2 cursor-pointer border border-[#DFBA84] hover:border-[#B8935C] min-h-[44px]"
                  id="room-booking-btn"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>{activeRoom.name} 바로 예약하기</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-150" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Re-designed Visual Card Grid for "다른 객실 바로 둘러보기" with Alternating #F3EFEA Background */}
        <div className="mt-12 sm:mt-16 md:mt-20 p-4 sm:p-8 md:p-10 rounded-3xl bg-[#F3EFEA] border border-[#E5DFD5]" id="bottom-gallery-room-selector">
          <div className="text-center sm:text-left space-y-1 mb-5 sm:mb-8">
            <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#DFBA84] font-semibold uppercase block">EXPLORE OTHER STAY</span>
            <h3 className="font-serif text-[#2B2927] text-[18px] sm:text-[20px] md:text-[22px] font-light">다른 객실 바로 둘러보기</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
            {ROOMS_DATA.filter((room) => room.id !== activeRoom.id).map((room) => (
              <motion.div
                key={room.id}
                whileHover={{ y: -3, scale: 1.01 }}
                onClick={() => handleRoomChange(room.id, true)}
                className="bg-white rounded-2xl border border-[#E5DFD5]/70 p-3.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:border-[#DFBA84] hover:shadow-md transition-all duration-150 text-left group"
                id={`gallery-bottom-card-${room.id}`}
              >
                <div className="flex flex-row items-center space-x-3.5 sm:space-x-4 md:space-x-5 min-w-0 flex-1 text-left">
                  <div className="w-[74px] h-[74px] sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 relative bg-stone-100 shadow-2xs">
                    <motion.img 
                      src={room.mainImage} 
                      alt={room.name} 
                      loading="eager"
                      decoding="sync"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0 space-y-1 sm:space-y-1.5 text-left flex-1">
                    <span className="text-[10px] sm:text-[11px] text-[#DFBA84] font-medium tracking-wider uppercase block font-sans text-left">{room.engName}</span>
                    <h4 className="font-serif text-[#2B2927] text-[15px] sm:text-[16px] font-medium truncate text-left">{room.name}</h4>
                    <p className="text-[#6E6A64] text-[11.5px] sm:text-[12px] font-light break-keep text-left leading-snug sm:leading-relaxed">
                      {room.title.includes(',') ? (
                        room.title.split(',').map((part, i) => (
                          <span key={i} className="block text-left">{part.trim()}{i === 0 ? ',' : ''}</span>
                        ))
                      ) : (
                        <span className="block text-left">{room.title}</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="shrink-0 w-full sm:w-auto">
                  <span className="w-full sm:w-auto justify-center px-3.5 py-2 sm:py-2 rounded-xl sm:rounded-full bg-[#FAF9F6] border border-[#E5DFD5] group-hover:bg-[#DFBA84] group-hover:text-white group-hover:border-transparent text-[11.5px] sm:text-[12px] font-medium text-[#2B2927] transition-all duration-150 inline-flex items-center space-x-1.5 shadow-2xs">
                    <span>객실 둘러보기</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Room Amenities Comprehensive Section with Framer Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-14 sm:mt-20 md:mt-24 border-t border-[#E5DFD5]/60 pt-10 sm:pt-16" 
          id="rooms-amenities-section"
        >
          <motion.h4 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-[#2B2927] text-[18px] md:text-[20px] font-light text-center sm:text-left mb-6 sm:mb-8 flex items-center justify-center sm:justify-start space-x-2"
          >
            <Sparkles className="w-5 h-5 text-[#DFBA84]" />
            <span>제공 비품 및 하이라이트</span>
          </motion.h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" id="amenities-category-grid">
            {activeRoom.amenities.map((category, catIdx) => (
              <motion.div 
                key={category.category} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E5DFD5]/30 shadow-sm text-left md:text-left hover:shadow-md transition-all duration-300"
                id={`amenity-cat-${category.category}`}
              >
                {/* Clean, categorized header with beautiful icons */}
                {renderCategoryHeader(category.category)}
                
                <ul className="space-y-2 text-[#6E6A64]">
                  {category.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="text-[12.5px] sm:text-[13px] font-light flex items-center justify-start md:justify-start space-x-2 text-left md:text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#DFBA84] shrink-0" />
                      <span className="break-keep">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-1.5 md:space-y-0 md:space-x-2.5 p-3.5 sm:p-4 bg-[#E5DFD5]/15 rounded-xl text-[#6E6A64] text-[12px] sm:text-[13px] font-light text-center md:text-left leading-[1.8] md:leading-relaxed break-keep" 
            id="amenities-disclaimer"
          >
            <Info className="w-4 h-4 text-[#DFBA84] shrink-0 md:mt-0.5" />
            <span>
              <span className="block">친환경 숲과 어우러지는 가치를 실천하기 위해</span>
              <span className="block mt-0.5 sm:mt-1">
                <span className="block sm:inline">일회용 친환경 칫솔과 이솝 다회용 스파 솔루션을 </span>
                <span className="block mt-0.5 sm:mt-0 sm:inline">준비해 두었습니다.</span>
              </span>
            </span>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
