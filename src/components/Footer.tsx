/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PENSION_INFO } from '../data';
import { Instagram, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavClick: (view: string) => void;
  currentView?: string;
}

export default function Footer({ onNavClick, currentView }: FooterProps) {
  const handleLinkClick = (view: string) => {
    onNavClick(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-[#F3EFEA] text-[#2B2927] py-10 sm:py-14 px-4 sm:px-6 md:px-12 border-t border-[#E5DFD5] transition-colors duration-150" id="pension-footer">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8 text-center md:text-left">
        
        {/* Brand & Small Info */}
        <div className="space-y-2.5 sm:space-y-3 text-center md:text-left flex flex-col items-center md:items-start" id="footer-col-brand">
          <span 
            onClick={() => handleLinkClick('home')}
            className="font-serif tracking-[0.2em] font-medium text-[17px] sm:text-[18px] md:text-[20px] text-[#2B2927] block cursor-pointer select-none text-center md:text-left"
          >
            아눅 스테이 (ANUK STAY)
          </span>
          <p className="text-[12.5px] sm:text-[13px] text-[#6E6A64] font-light leading-[1.8] md:leading-relaxed break-keep text-center md:text-left max-w-md md:max-w-none">
            <span className="block md:inline">우리를 잇는 남해의 쉼, 아눅 스테이</span>{' '}
            <span className="block mt-0.5 md:mt-0 md:inline">&middot; {PENSION_INFO.location}</span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-3.5 gap-y-1 text-[11.5px] sm:text-[12px] text-[#8C867D] font-light text-center md:text-left">
            <span>상호: 아눅 스테이</span>
            <span>대표자: 정고요</span>
            <span>사업자등록번호: 312-81-94562</span>
          </div>
        </div>

        {/* Contact & Info Display (Not buttons) */}
        <div className="space-y-2 sm:space-y-2.5 text-center md:text-right flex flex-col items-center md:items-end w-full md:w-auto border-t border-[#E5DFD5]/60 pt-4 md:border-t-0 md:pt-0 select-text cursor-default" id="footer-col-contact">
          <div className="flex items-center justify-center md:justify-end space-x-2 text-[12.5px] sm:text-[13px] text-[#2B2927] font-sans font-normal">
            <Phone className="w-3.5 h-3.5 text-[#DFBA84] shrink-0" />
            <span>Tel: {PENSION_INFO.phone}</span>
          </div>

          <div className="flex items-center justify-center md:justify-end space-x-2 text-[12.5px] sm:text-[13px] text-[#2B2927] font-sans font-normal">
            <Mail className="w-3.5 h-3.5 text-[#DFBA84] shrink-0" />
            <span>Email: {PENSION_INFO.email}</span>
          </div>
          
          <div 
            className="flex items-center justify-center md:justify-end space-x-2 text-[12.5px] sm:text-[13px] text-[#2B2927] font-sans font-normal pt-0.5"
            id="footer-instagram-info"
          >
            <Instagram className="w-3.5 h-3.5 text-[#DFBA84] shrink-0" />
            <span>Instagram: @anuk_namhae</span>
          </div>
        </div>

      </div>

      {/* Under footer */}
      <div className="max-w-5xl mx-auto border-t border-[#E5DFD5] mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col md:flex-row justify-between items-center text-[12px] sm:text-[13px] text-[#8C867D] font-sans font-light gap-4 text-center md:text-left" id="footer-copyright-panel">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-[12.5px] sm:text-[13px] font-sans font-medium">
          <button 
            type="button"
            onClick={() => handleLinkClick('story')} 
            className={`transition-colors duration-150 cursor-pointer font-sans py-1 ${
              currentView === 'story'
                ? 'text-[#8F6D3C] font-semibold underline underline-offset-[6px] decoration-[#DFBA84] decoration-1' 
                : 'text-[#6E6A64] hover:text-[#2B2927]'
            }`}
          >
            스토리
          </button>
          <span className="text-[#E5DFD5]">&middot;</span>
          <button 
            type="button"
            onClick={() => handleLinkClick('rooms')} 
            className={`transition-colors duration-150 cursor-pointer font-sans py-1 ${
              currentView === 'rooms'
                ? 'text-[#8F6D3C] font-semibold underline underline-offset-[6px] decoration-[#DFBA84] decoration-1' 
                : 'text-[#6E6A64] hover:text-[#2B2927]'
            }`}
          >
            객실 안내
          </button>
          <span className="text-[#E5DFD5]">&middot;</span>
          <button 
            type="button"
            onClick={() => handleLinkClick('experience')} 
            className={`transition-colors duration-150 cursor-pointer font-sans py-1 ${
              currentView === 'experience'
                ? 'text-[#8F6D3C] font-semibold underline underline-offset-[6px] decoration-[#DFBA84] decoration-1' 
                : 'text-[#6E6A64] hover:text-[#2B2927]'
            }`}
          >
            특별한 경험
          </button>
          <span className="text-[#E5DFD5]">&middot;</span>
          <button 
            type="button"
            onClick={() => handleLinkClick('inquiry')} 
            className={`transition-colors duration-150 cursor-pointer font-sans py-1 ${
              currentView === 'inquiry'
                ? 'text-[#8F6D3C] font-semibold underline underline-offset-[6px] decoration-[#DFBA84] decoration-1' 
                : 'text-[#6E6A64] hover:text-[#2B2927]'
            }`}
          >
            이용 안내
          </button>
          <button 
            type="button"
            onClick={() => handleLinkClick('reservation')} 
            className={`ml-1 sm:ml-2 px-3.5 sm:px-4.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer font-sans font-medium text-[11.5px] sm:text-[12px] shadow-xs ${
              currentView === 'reservation'
                ? 'bg-[#8F6D3C] text-white border border-[#8F6D3C] ring-2 ring-[#DFBA84]/50'
                : 'bg-[#DFBA84] text-white border border-[#DFBA84] hover:bg-[#B8935C] hover:border-[#B8935C]'
            }`}
          >
            예약 바로가기
          </button>
        </div>
        <p className="font-sans text-[11.5px] sm:text-[12px] text-[#8C867D] text-center md:text-right">
          &copy; {new Date().getFullYear()} ANUK STAY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
