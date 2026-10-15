/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Calendar, AlertCircle, Sparkles, CheckCircle2, ArrowRight, Calculator, Check } from 'lucide-react';
import { ROOMS_DATA } from '../data';

interface AccordionSection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

export default function Reservation() {
  const [openSectionId, setOpenSectionId] = useState<string | null>('naver-guide');

  const toggleSection = (id: string) => {
    setOpenSectionId(openSectionId === id ? null : id);
  };

  const sections: AccordionSection[] = [
    {
      id: 'naver-guide',
      number: '01',
      title: '예약 신청 방법 및 절차 안내',
      content: (
        <div className="space-y-3 font-light text-[13px] md:text-[14px] leading-relaxed text-[#6E6A64]">
          <p>아눅 스테이는 네이버 예약 시스템을 통해 실시간 객실 현황 확인 및 예약을 통합 운영하고 있습니다.</p>
          <ul className="space-y-2 list-decimal list-inside pl-1 text-[#2B2927]">
            <li>아래의 <strong className="text-[#DFBA84] font-medium">‘네이버 예약 바로가기’</strong> 버튼을 클릭합니다.</li>
            <li>원하시는 객실과 예약 일정을 선택합니다.</li>
            <li>옵션 상품(부르고뉴 와인, 오가닉 조식 바구니 등)을 선택한 뒤 결제를 완료합니다.</li>
            <li>결제 완료 후 발송되는 예약 확정 안내 문자를 확인합니다.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'refund-policy',
      number: '02',
      title: '취소 및 환불 규정',
      content: (
        <div className="space-y-4">
          <p className="text-[13px] md:text-[14px] font-light leading-relaxed text-[#6E6A64]">
            올바른 예약 문화 정착을 위해 아래와 같이 환불 규정을 정하고 있습니다. 예약 취소 및 변경은 이용일 기준으로 적용되오니 신중한 결정을 부탁드립니다.
          </p>
          {/* Elegant Refund Table */}
          <div className="overflow-hidden rounded-2xl border border-[#E5DFD5]/70 text-[13px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-[#E5DFD5]">
                  <th className="px-4 py-3 font-medium text-[#2B2927]">취소 요청일 (이용일 기준)</th>
                  <th className="px-4 py-3 font-semibold text-[#DFBA84]">환불 비율</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5]/50 text-[#6E6A64] font-light">
                <tr>
                  <td className="px-4 py-2.5">이용 10일 전까지</td>
                  <td className="px-4 py-2.5 font-medium text-[#2B2927]">100% 전액 환불</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">이용 9일 전</td>
                  <td className="px-4 py-2.5">90% 환불</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">이용 8일 전</td>
                  <td className="px-4 py-2.5">80% 환불</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">이용 7일 전</td>
                  <td className="px-4 py-2.5">70% 환불</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">이용 6일 전</td>
                  <td className="px-4 py-2.5">60% 환불</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">이용 5일 전</td>
                  <td className="px-4 py-2.5">50% 환불</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">이용 4일 전</td>
                  <td className="px-4 py-2.5">40% 환불</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">이용 3일 전 ~ 당일</td>
                  <td className="px-4 py-2.5 text-[#7A2D23] font-medium">환불 불가</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3.5 rounded-xl bg-[#7A2D23]/5 text-[#7A2D23] text-[13px] leading-relaxed flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>기상악화 및 개인 사정에 의한 당일 취소도 환불 규정이 동일하게 적용되오니 기상 상황을 미리 점검해 주시기 바랍니다.</span>
          </div>
        </div>
      )
    },
    {
      id: 'precheck',
      number: '03',
      title: '예약 전 필수 최종 확인 사항',
      content: (
        <ul className="space-y-2.5 text-left text-[13px] md:text-[14px] text-[#6E6A64] font-light leading-relaxed">
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#DFBA84] shrink-0 mt-1" />
            <span>상업적 동영상 촬영 및 사전 협의 없는 드론 촬영은 일절 제한됩니다.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#DFBA84] shrink-0 mt-1" />
            <span>객실 정비 수준 관리를 위해 모든 유형의 반려동물 동반은 불가합니다.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#DFBA84] shrink-0 mt-1" />
            <span>가전 가구 파손 시 동일한 스펙 제품으로 손해배상이 청구되오니 세심히 다뤄주시길 부탁드립니다.</span>
          </li>
        </ul>
      )
    }
  ];

  return (
    <div className="bg-[#FAF9F6] pt-10 md:pt-14 pb-20 md:pb-24 px-4 sm:px-6 md:px-12 border-t border-[#E5DFD5]/40" id="reservation-section">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 sm:space-y-4 px-2" 
          id="reservation-header"
        >
          <span className="text-[12px] sm:text-[13px] tracking-[0.3em] text-[#DFBA84] font-semibold block uppercase font-sans">
            RESERVATION GUIDE
          </span>
          <h2 className="font-serif font-light text-[#2B2927] text-[22px] md:text-[28px] tracking-wide break-keep">
            예약 안내 및 수칙
          </h2>
          <div className="w-16 h-[1.5px] bg-[#DFBA84] mx-auto" />
          <p className="text-[#6E6A64] text-[13.5px] sm:text-[14px] md:text-[15px] font-light max-w-xl mx-auto leading-[1.8] md:leading-relaxed break-keep">
            <span className="block md:inline">예약 전 이용 수칙 및 환불 규정을</span>{' '}
            <span className="block mt-1 md:mt-0 md:inline">확인해 주시기 바랍니다.</span>
          </p>
        </motion.div>

        {/* 1. FIRST: Collapsible/Expandable Guidelines Accordion with Alternating #F3EFEA Section Background */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-3.5 sm:space-y-4 max-w-3xl mx-auto p-4.5 sm:p-6 md:p-8 rounded-3xl bg-[#F3EFEA] border border-[#E5DFD5]" 
          id="collapsible-reservation-accordion"
        >
          <h4 className="font-serif text-[#2B2927] text-[17px] sm:text-[18px] md:text-[20px] font-light text-center md:text-left mb-4 sm:mb-6 flex items-center justify-center md:justify-start space-x-2">
            <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#DFBA84]" />
            <span>예약 전 숙지 가이드</span>
          </h4>

          {sections.map((sec) => {
            const isOpen = openSectionId === sec.id;

            return (
              <div 
                key={sec.id}
                className="bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-150"
                id={`reservation-accordion-${sec.id}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleSection(sec.id)}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex justify-between items-center cursor-pointer select-none min-h-[48px]"
                  id={`reservation-accordion-btn-${sec.id}`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <span className="font-sans text-[#DFBA84] text-[12px] sm:text-[13px] md:text-[14px] font-semibold">
                      {sec.number}
                    </span>
                    <span className="font-serif text-[#2B2927] text-[14.5px] sm:text-[15px] md:text-[17px] font-medium text-left break-keep">
                      {sec.title}
                    </span>
                  </div>
                  <div className="shrink-0 ml-2">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#6E6A64]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#6E6A64]" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content expanding downwards */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 sm:px-6 md:px-8 pb-5 sm:pb-6 pt-1 text-left border-t border-[#FAF9F6]">
                        {sec.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* 2. Naver Reservation Agreement & Direct Link Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6 max-w-3xl mx-auto pt-1 sm:pt-2 text-center" 
          id="naver-shortcut-card"
        >
          {/* Agreement Notice Box */}
          <div className="bg-white border border-[#E5DFD5] p-5 sm:p-6 md:p-8 rounded-2xl text-center space-y-2 sm:space-y-2.5 shadow-xs">
            <h4 className="text-[#2B2927] text-[14.5px] sm:text-[15px] md:text-[16px] font-medium font-sans flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#DFBA84] shrink-0" />
              <span>실시간 예약 동의 안내</span>
            </h4>
            <p className="text-[#6E6A64] text-[12.5px] sm:text-[13px] md:text-[14px] font-light leading-[1.8] md:leading-relaxed max-w-lg mx-auto break-keep">
              <span className="block">네이버 실시간 예약을 진행하시면 위 안내된 입퇴실 시간 및</span>
              <span className="block mt-1">주요 이용 수칙 및 환불 규정에 동의하신 것으로 간주됩니다.</span>
            </p>
          </div>

          {/* Centered Point Color Reservation Button */}
          <div className="flex justify-center pt-1">
            <a
              href="https://booking.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#DFBA84] hover:bg-[#B89662] text-white font-sans text-[13px] sm:text-[14px] font-medium rounded-full transition-all duration-300 flex items-center justify-center space-x-2.5 select-none cursor-pointer shadow-xs hover:shadow-md group min-h-[44px]"
              id="naver-reservation-direct-link"
            >
              <Calendar className="w-4 h-4 text-white shrink-0" />
              <span>네이버 예약 바로가기</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
