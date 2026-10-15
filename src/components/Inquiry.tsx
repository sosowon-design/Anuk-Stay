/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, FileText, Compass, AlertCircle, Sparkles, CheckCircle2, PhoneCall, MessageCircle, Mail, Send, Calendar, ArrowRight } from 'lucide-react';
import { PENSION_INFO } from '../data';

interface GuideSection {
  id: string;
  number: string;
  title: string;
  icon: any;
  items: string[];
}

interface InquiryProps {
  onNavigateToReservation?: () => void;
}

export default function InquiryBoard({ onNavigateToReservation }: InquiryProps) {
  const [openSections, setOpenSections] = useState<string[]>(['checkin']);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const guideSections: GuideSection[] = [
    {
      id: 'checkin',
      number: '',
      title: '입·퇴실 및 인원 규정',
      icon: Compass,
      items: [
        '체크인은 오후 3시부터, 체크아웃은 오전 11시까지입니다.',
        '다음 이용객을 위한 정비 시간(11:00 ~ 15:00) 준수를 위해 얼리 체크인 및 레이트 체크아웃은 불가능합니다.',
        '예약된 인원 외 외부 손님의 방문 및 동반 입실은 엄격히 제한되며, 위반 시 퇴실 조치가 취해질 수 있습니다.',
        '최대 인원 초과 시 입실이 제한되며, 이에 따른 당일 취소 및 환불은 불가합니다.',
        '만 12세 이하의 아동 및 영유아는 보호자의 각별한 케어가 필요하며, 안전사고에 대한 책임은 보호자에게 있습니다.'
      ]
    },
    {
      id: 'cooking',
      number: '',
      title: '객실 조리 및 청결 유지',
      icon: FileText,
      items: [
        '쾌적한 실내 환경 유지를 위해 객실 내부 전체는 금연구역입니다. 흡연은 지정된 야외 구역을 이용해 주시기 바랍니다.',
        '객실 내에서는 냄새가 강하거나 기름기가 많은 육류, 생선류, 튀김류의 조리가 불가능합니다. (전용 전기 그릴을 제공하는 테라스 바비큐 구역을 이용해 주세요.)',
        '사용하신 식기류 및 주방 도구는 퇴실 전에 반드시 세척 및 정리정돈해 주시기 바랍니다.',
        '발생한 모든 쓰레기는 객실 내 분리수거함 및 외부 지정된 장소에 분리수거하여 배출해 주셔야 합니다.'
      ]
    },
    {
      id: 'facility',
      number: '',
      title: '수영장 및 아웃도어 스파 안전 수칙',
      icon: Sparkles,
      items: [
        '프라이빗 사계절 온수 풀은 24시간 균일 온도(32℃ ~ 34℃)로 자동 유지됩니다.',
        '수영장 및 히노끼 노천탕 이용 시 입욕제, 꽃잎, 거품 목욕제 등의 사용은 필터 고장의 원인이 되므로 절대 금지합니다. (고장 시 수리비가 청구될 수 있습니다.)',
        '음주 후 수영장 및 노천스파 입수는 심장마비 및 미끄러짐 사고의 우려가 있어 절대 금지합니다.',
        '다이빙 행위는 수심이 낮아 심각한 부상을 유발하므로 절대 금지하며, 수영장 주변 바닥이 미끄러우니 뛰지 마십시오.'
      ]
    },
    {
      id: 'pets',
      number: '',
      title: '반려동물 동반 및 촬영 규정',
      icon: AlertCircle,
      items: [
        '아눅 스테이는 알레르기 및 청결 수칙을 위해 모든 객실에 반려동물 동반 입실을 금지하고 있습니다. 동반 시 입실 거부 및 퇴실 조치될 수 있습니다.',
        '사전 협의되지 않은 상업적 촬영(쇼핑몰, 유튜브 촬영 등) 및 드론 촬영은 다른 객실 투숙객의 프라이버시 보호를 위해 전면 금지합니다.',
        '상업 촬영을 희망하시는 경우, 전체 대관 및 사전 유선 협의가 필수적입니다.'
      ]
    },
    {
      id: 'damage',
      number: '',
      title: '시설물 파손 및 분실 배상',
      icon: CheckCircle2,
      items: [
        '객실 내 모든 가구, 수입 오브제, 빈티지 블루투스 기기 등은 아눅이 추구하는 가치를 담은 자산입니다. 파손 및 오염 시 실비 기준으로 배상이 청구됩니다.',
        '이염이 심한 화장품, 염색약, 와인 등의 사용으로 침구 및 리넨류가 오염될 경우 배상 금액이 발생할 수 있으니 주의 바랍니다.',
        '귀중품 분실에 대해서는 아눅에서 책임을 지지 않으므로 외출 시 문단속과 귀중품 보관에 유의하시기 바랍니다.'
      ]
    }
  ];

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) ? prev.filter(secId => secId !== id) : [...prev, id]
    );
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone || !inquiryMessage) return;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] pt-10 md:pt-14 pb-20 md:pb-24 px-4 sm:px-6 md:px-12 border-t border-[#E5DFD5]/40" id="inquiry-section">
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 sm:space-y-4 px-2" 
          id="inquiry-header"
        >
          <span className="text-[12px] sm:text-[13px] tracking-[0.3em] text-[#DFBA84] font-semibold block uppercase font-sans">
            STAY GUIDE & INQUIRY
          </span>
          <h2 className="font-serif font-light text-[#2B2927] text-[22px] md:text-[28px] tracking-wide break-keep">
            숙소 문의 및 이용 수칙
          </h2>
          <div className="w-16 h-[1.5px] bg-[#DFBA84] mx-auto" />
          <p className="text-[#6E6A64] text-[13.5px] sm:text-[14px] md:text-[15px] font-light max-w-xl mx-auto leading-[1.8] md:leading-relaxed break-keep">
            <span className="block md:inline">편안한 머무름을 위해 이용 수칙을 확인하시고,</span>{' '}
            <span className="block mt-1 md:mt-0 md:inline">궁금한 점은 언제든 문의해 주세요.</span>
          </p>
        </motion.div>

        {/* 1. QUICK CONTACT SECTION - PLACED ABOVE GUIDE ACCORDION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-3 text-center md:text-left font-sans"
          id="quick-contact-container"
        >
          <span className="text-[11px] font-semibold text-[#8F6D3C] tracking-widest uppercase block pl-1 font-sans">
            QUICK CONTACT
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 font-sans">
            <a
              href={`tel:${PENSION_INFO.phone}`}
              className="bg-white p-4 sm:p-4.5 rounded-2xl border border-[#E5DFD5] flex items-center justify-center sm:justify-start shadow-xs hover:border-[#DFBA84]/60 transition-colors"
              id="inquiry-direct-phone"
            >
              <div className="flex items-center space-x-3.5 w-[172px] sm:w-full">
                <div className="p-2.5 rounded-xl bg-[#DFBA84]/10 text-[#DFBA84] shrink-0">
                  <PhoneCall className="w-4 h-4 text-[#DFBA84]" />
                </div>
                <div className="min-w-0 text-left">
                  <span className="text-[10.5px] sm:text-[11px] text-[#6E6A64] font-medium block font-sans">전화 상담</span>
                  <span className="font-sans text-[#2B2927] text-[12px] sm:text-[12.5px] font-medium whitespace-nowrap block">{PENSION_INFO.phone}</span>
                </div>
              </div>
            </a>

            <div
              className="bg-white p-4 sm:p-4.5 rounded-2xl border border-[#E5DFD5] flex items-center justify-center sm:justify-start shadow-xs hover:border-[#DFBA84]/60 transition-colors"
              id="inquiry-direct-kakao"
            >
              <div className="flex items-center space-x-3.5 w-[172px] sm:w-full">
                <div className="p-2.5 rounded-xl bg-[#DFBA84]/10 text-[#DFBA84] shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#DFBA84]" />
                </div>
                <div className="min-w-0 text-left">
                  <span className="text-[10.5px] sm:text-[11px] text-[#6E6A64] font-medium block font-sans">카카오톡 문의</span>
                  <span className="font-sans text-[#2B2927] text-[12px] sm:text-[12.5px] font-medium whitespace-nowrap block">@anuk_stay</span>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${PENSION_INFO.email}`}
              className="bg-white p-4 sm:p-4.5 rounded-2xl border border-[#E5DFD5] flex items-center justify-center sm:justify-start shadow-xs hover:border-[#DFBA84]/60 transition-colors"
              id="inquiry-direct-email"
            >
              <div className="flex items-center space-x-3.5 w-[172px] sm:w-full">
                <div className="p-2.5 rounded-xl bg-[#DFBA84]/10 text-[#DFBA84] shrink-0">
                  <Mail className="w-4 h-4 text-[#DFBA84]" />
                </div>
                <div className="min-w-0 text-left">
                  <span className="text-[10.5px] sm:text-[11px] text-[#6E6A64] font-medium block font-sans">이메일 문의</span>
                  <span className="font-sans text-[#2B2927] text-[12px] sm:text-[12.5px] font-medium whitespace-nowrap block">{PENSION_INFO.email}</span>
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* 2. Detailed Collapsible Accordion Guidelines - Alternating #F3EFEA Background Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto p-4.5 sm:p-6 md:p-8 rounded-3xl bg-[#F3EFEA] border border-[#E5DFD5]" 
          id="collapsible-guide-accordion"
        >
          <div className="text-center md:text-left space-y-1.5 mb-5 sm:mb-6">
            <span className="text-[10.5px] sm:text-[11px] font-semibold text-[#8F6D3C] tracking-widest uppercase block font-sans">TERMS & GUIDELINES</span>
            <h3 className="font-serif text-[17px] sm:text-[18px] md:text-[20px] font-light text-[#2B2927]">아눅 스테이 세부 이용 수칙</h3>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {guideSections.map((sec) => {
              const isOpen = openSections.includes(sec.id);
              const Icon = sec.icon;

              return (
                <div 
                  key={sec.id}
                  className="bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-150"
                  id={`accordion-section-${sec.id}`}
                >
                  {/* Trigger Button */}
                  <button
                    type="button"
                    onClick={() => toggleSection(sec.id)}
                    className="w-full px-4 sm:px-6 md:px-8 py-3.5 sm:py-5 flex justify-between items-center cursor-pointer select-none min-h-[48px] text-left"
                    id={`accordion-btn-${sec.id}`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF9F6] text-[#DFBA84] shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-serif text-[#2B2927] text-[14.5px] sm:text-[16px] md:text-[17px] font-medium text-left break-keep">
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

                  {/* Collapsible Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-8 pb-5 sm:pb-6 pt-2 border-t border-[#FAF9F6] text-left">
                          <ul className="space-y-2.5 sm:space-y-3" id={`accordion-items-${sec.id}`}>
                            {sec.items.map((item, idx) => (
                              <li 
                                key={idx}
                                className="text-[12.5px] sm:text-[13px] md:text-[14px] text-[#6E6A64] font-light leading-relaxed flex items-start space-x-2.5 break-keep"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#DFBA84] shrink-0 mt-2" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 3. DIRECT MESSAGE FORM SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-white p-5 sm:p-8 md:p-10 rounded-3xl border border-[#DFBA84]/30 shadow-xs text-left max-w-4xl mx-auto space-y-5 sm:space-y-6"
          id="inquiry-form-container"
        >
          <div className="border-b border-[#E5DFD5]/40 pb-3.5 sm:pb-4 space-y-1.5 sm:space-y-2.5 text-center md:text-left">
            <span className="text-[11px] sm:text-[12px] tracking-[0.25em] text-[#DFBA84] font-semibold uppercase block font-sans">DIRECT MESSAGE</span>
            <h3 className="font-serif text-[#2B2927] text-[18px] sm:text-[20px] md:text-[22px] font-light">온라인 문의하기</h3>
          </div>

          <div>
            {isSubmitted ? (
              <div className="py-6 sm:py-8 text-center space-y-3 sm:space-y-4 bg-[#FAF9F6] rounded-2xl p-5 sm:p-6 border border-[#E5DFD5]/30">
                <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10 text-[#DFBA84] mx-auto" />
                <h4 className="font-serif text-[17px] sm:text-[18px] text-[#2B2927]">문의가 성공적으로 접수되었습니다.</h4>
                <p className="text-[#6E6A64] text-[12.5px] sm:text-[13px] font-light break-keep">
                  남겨주신 연락처(<span className="font-sans font-medium">{inquiryPhone}</span>)로 빠른 시일 내 담당자가 친절히 안내해 드리겠습니다.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-[13px] text-[#DFBA84] font-medium underline cursor-pointer"
                >
                  다른 문의 남기기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[12px] text-[#2B2927] font-medium block">성함 / 예약자명</label>
                    <input 
                      type="text" 
                      placeholder="홍길동"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#E5DFD5] text-[13px] focus:outline-none focus:border-[#DFBA84] bg-[#FAF9F6]/50 font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] text-[#2B2927] font-medium block">연락처</label>
                    <input 
                      type="tel" 
                      placeholder="010-0000-0000"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#E5DFD5] text-[13px] font-sans focus:outline-none focus:border-[#DFBA84] bg-[#FAF9F6]/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] text-[#2B2927] font-medium block">문의 내용 (희망 일자 / 객실 / 질문 사항)</label>
                  <textarea 
                    rows={4}
                    placeholder="숙소 예약 가능 여부, 온수 풀 온도, 인원 추가 등 궁금하신 점을 작성해 주세요."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    required
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#E5DFD5] text-[13px] focus:outline-none focus:border-[#DFBA84] bg-[#FAF9F6]/50 resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full py-3.5 bg-[#DFBA84] hover:bg-[#B8935C] text-white rounded-xl text-[13.5px] sm:text-[14px] font-medium tracking-wider transition-all duration-150 flex items-center justify-center space-x-2 cursor-pointer shadow-sm border border-[#DFBA84] hover:border-[#B8935C] min-h-[44px]"
                  id="inquiry-submit-btn"
                >
                  <Send className="w-4 h-4 text-white shrink-0" />
                  <span className="transition-colors duration-150">문의 전송하기</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
