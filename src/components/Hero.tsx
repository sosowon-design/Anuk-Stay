/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, PhoneCall, MessageCircle, Instagram, Globe, Calendar } from 'lucide-react';

interface HeroProps {
  onExploreClick: (view: string) => void;
}

const HERO_IMAGES = [
  { url: "/src/assets/images/cequi_pool_villa_1_1783442590314.jpg" },
  { url: "/src/assets/images/cequi_pool_villa_2_1783442617946.jpg" },
  { url: "/src/assets/images/cequi_pool_villa_3_1783442630167.jpg" },
  { url: "/src/assets/images/anuk_bedroom_hero_1783706667607.jpg" },
  { url: "/src/assets/images/anuk_hero_sunset_villa_1786457631691.jpg" }
];

export default function Hero({ onExploreClick }: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Preload upcoming slides so slider transitions are immediate and natural
  useEffect(() => {
    const nextIdx = (index + 1) % HERO_IMAGES.length;
    const prevIdx = (index - 1 + HERO_IMAGES.length) % HERO_IMAGES.length;
    [nextIdx, prevIdx].forEach((idx) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = HERO_IMAGES[idx].url;
    });
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#2B2927]" id="hero-section">
      {/* Background Images with continuous slow pan/zoom (Ken Burns) effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.06 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 7, ease: 'linear' }
          }}
          className="absolute inset-0 w-full h-full"
          id={`hero-bg-${index}`}
        >
          <img
            src={HERO_IMAGES[index].url}
            alt={`아눅 스테이 전경 ${index + 1}`}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Elegant dark scrim overlay for high-contrast visibility */}
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>

      {/* Centered Well-Blended Brand Typography and Actions */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-4 sm:space-y-6"
          id="hero-centered-content"
        >
          <h1 className="font-serif leading-none text-[#FAF9F6] tracking-[0.2em] font-light text-[30px] sm:text-[38px] md:text-[46px] uppercase drop-shadow-md">
            ANUK
          </h1>

          {/* Action Button: Centered Explore */}
          <div className="pt-2 flex items-center justify-center">
            <button
              onClick={() => onExploreClick('story')}
              className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-white/15 hover:bg-[#DFBA84] text-white hover:text-white rounded-full transition-all duration-300 border border-white/30 hover:border-transparent backdrop-blur-md flex items-center space-x-2 text-[13px] sm:text-[14px] tracking-[0.1em] font-medium cursor-pointer shadow-lg hover:shadow-[#DFBA84]/20 min-h-[44px]"
              id="hero-story-explore-btn"
            >
              <span>아눅 스테이 둘러보기</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Left: Natural SNS Links Bar */}
      <div 
        className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 md:left-12 z-20 flex items-center space-x-1.5 sm:space-x-2 text-white"
        id="hero-sns-bar"
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-auto md:h-auto md:px-3 md:py-2.5 rounded-full bg-white/10 hover:bg-[#DFBA84] text-white backdrop-blur-md transition-all duration-300 border border-white/20 cursor-pointer group flex items-center justify-center md:space-x-1.5 shadow-sm"
          title="인스타그램"
          aria-label="인스타그램 바로가기"
          id="hero-sns-instagram"
        >
          <Instagram className="w-4 h-4 shrink-0" />
          <span className="text-[12px] font-sans font-medium hidden md:inline">인스타그램</span>
        </a>
        
        <a
          href="https://pf.kakao.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-auto md:h-auto md:px-3 md:py-2.5 rounded-full bg-white/10 hover:bg-[#DFBA84] text-white backdrop-blur-md transition-all duration-300 border border-white/20 cursor-pointer group flex items-center justify-center md:space-x-1.5 shadow-sm"
          title="카카오톡 채널"
          aria-label="카카오톡 문의 바로가기"
          id="hero-sns-kakao"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span className="text-[12px] font-sans font-medium hidden md:inline">카카오톡 문의</span>
        </a>

        <a
          href="https://blog.naver.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-auto md:h-auto md:px-3 md:py-2.5 rounded-full bg-white/10 hover:bg-[#DFBA84] text-white backdrop-blur-md transition-all duration-300 border border-white/20 cursor-pointer group flex items-center justify-center md:space-x-1.5 shadow-sm"
          title="네이버 블로그"
          aria-label="공식 블로그 바로가기"
          id="hero-sns-blog"
        >
          <Globe className="w-4 h-4 shrink-0" />
          <span className="text-[12px] font-sans font-medium hidden md:inline">공식 블로그</span>
        </a>
      </div>

      {/* Elegant Slide Number Indicator with timeline progress bar & chevrons */}
      <div 
        className="absolute bottom-6 sm:bottom-10 right-4 sm:right-6 md:right-12 z-20 flex items-center space-x-3 sm:space-x-6 text-[#FAF9F6] font-serif select-none" 
        id="hero-slide-counter"
      >
        <div className="flex items-baseline space-x-1 font-serif">
          <span className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold font-serif">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[12px] sm:text-[13px] text-[#FAF9F6]/40 font-serif">/</span>
          <span className="text-[12px] sm:text-[13px] text-[#FAF9F6]/60 font-serif">05</span>
        </div>

        {/* Dynamic timeline progress line */}
        <div className="h-[2px] w-12 sm:w-16 bg-white/20 relative overflow-hidden hidden sm:block">
          <motion.div 
            key={index}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 7, ease: 'linear' }}
            className="absolute left-0 top-0 h-full bg-[#DFBA84]" 
          />
        </div>

        {/* Chevron buttons */}
        <div className="flex items-center space-x-1.5">
          <button 
            onClick={handlePrev} 
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="이전 슬라이드"
            id="hero-prev-slide"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button 
            onClick={handleNext} 
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="다음 슬라이드"
            id="hero-next-slide"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
