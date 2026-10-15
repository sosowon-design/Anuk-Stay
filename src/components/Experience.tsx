/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { SPECIAL_EXPERIENCES } from '../data';
import { ArrowRight, Sparkles, Waves, UtensilsCrossed, Wine, Coffee, Compass, Star, ShieldCheck, Car, Key, MapPin, BookOpen, Check } from 'lucide-react';

interface ExperienceProps {
  onNavigateToBooking: () => void;
  onNavigateToInquiry?: () => void;
}

export default function Experience({ onNavigateToBooking, onNavigateToInquiry }: ExperienceProps) {
  const getExperienceIcon = (id: string) => {
    if (id === 'pool') return Waves;
    if (id === 'breakfast') return UtensilsCrossed;
    if (id === 'spa') return Sparkles;
    return Wine;
  };

  const getEnglishBadge = (id: string) => {
    if (id === 'pool') return '4-SEASON HEATED POOL';
    if (id === 'breakfast') return 'FRESH ORGANIC MORNING BASKET';
    if (id === 'spa') return 'HINOKI OUTSIDE GARDEN SPA';
    return 'BOURGOGNE PINOT NOIR CURATION';
  };

  const getExperienceTags = (id: string) => {
    if (id === 'pool') return ['사계절 32℃ 온수풀', '남해 오션 파노라마', '프라이빗 온수풀빌라'];
    if (id === 'breakfast') return ['무료 오가닉 조식 바구니', '매일 아침 08:30 객실 전달', '수제 잼 & 갓구운 빵 & 드립커피'];
    if (id === 'spa') return ['천연 편백나무 노천탕', '사박거리는 대나무 정원', '별빛 야외 온열 반신욕'];
    return ['프랑스 부르고뉴 피노 누아', '전용 와인 셀러 & 크리스탈 글라스', '노을 테라스 페어링'];
  };

  const guestConciergeCare = [
    {
      icon: Car,
      title: "전기차 충전 가능",
      desc: (
        <>
          <span className="block md:inline">객실 바로 앞 전용 주차 공간과</span>{' '}
          <span className="block mt-0.5 md:mt-0 md:inline">100kW 급속 전기차 충전기를 무료 제공합니다.</span>
        </>
      )
    },
    {
      icon: Key,
      title: "프라이버시 비대면 체크인",
      desc: (
        <>
          <span className="block md:inline">타인과의 마주침 없이 모바일 스마트키로</span>{' '}
          <span className="block mt-0.5 md:mt-0 md:inline">입실부터 퇴실까지 완벽한 자유를 누립니다.</span>
        </>
      )
    },
    {
      icon: Wine,
      title: "와인 스페셜 세팅",
      desc: (
        <>
          <span className="block md:inline">부르고뉴 전용 글라스, 샴페인 쿨러,</span>{' '}
          <span className="block mt-0.5 md:mt-0 md:inline">미니 아이스 바스켓이 기본 비치되어 있습니다.</span>
        </>
      )
    },
    {
      icon: MapPin,
      title: "남해 여행 가이드",
      desc: (
        <>
          <span className="block md:inline">한적한 해안 산책로와 감성 카페,</span>{' '}
          <span className="block mt-0.5 md:mt-0 md:inline">남해 명소 포인트를 담은 모바일 가이드를 제공합니다.</span>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#FAF9F6] pt-10 md:pt-14 pb-20 md:pb-24 px-4 sm:px-6 md:px-12 border-t border-[#E5DFD5]/40" id="experience-section">
      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-20 md:space-y-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 sm:space-y-4 px-2" 
          id="experience-header"
        >
          <span className="text-[12px] sm:text-[13px] text-[#DFBA84] font-semibold block uppercase tracking-[0.3em] font-sans">
            SPECIAL EXPERIENCES
          </span>
          <h2 className="font-serif font-light text-[#2B2927] text-[22px] md:text-[28px] tracking-wide break-keep">
            아눅 스테이만의 특별한 경험
          </h2>
          <div className="w-16 h-[1.5px] bg-[#DFBA84] mx-auto" />
          <p className="text-[#6E6A64] text-[13.5px] sm:text-[14px] md:text-[15px] font-light max-w-xl mx-auto leading-[1.8] md:leading-relaxed break-keep">
            <span className="block md:inline">남해의 아름다운 자연 속에서 온전한 쉼을</span>{' '}
            <span className="block mt-1 md:mt-0 md:inline">누리실 수 있도록 정성껏 준비했습니다.</span>
          </p>
        </motion.div>

        {/* 1. Main Signature Experiences Showcase Grid with Separated Cards & Opposite Slide-In Animations */}
        <div className="space-y-14 sm:space-y-20 md:space-y-32" id="experiences-grid">
          {SPECIAL_EXPERIENCES.map((exp, idx) => {
            const Icon = getExperienceIcon(exp.id);
            const englishBadge = getEnglishBadge(exp.id);
            const tags = getExperienceTags(exp.id);
            const isEven = idx % 2 === 0;

            // Opposite entrance positions:
            // Even: Image comes from -60 (Left), Content comes from +60 (Right)
            // Odd: Image comes from +60 (Right), Content comes from -60 (Left)
            const imgInitialX = isEven ? -60 : 60;
            const contentInitialX = isEven ? 60 : -60;

            return (
              <div 
                key={exp.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-stretch"
                id={`exp-card-${exp.id}`}
              >
                {/* Photo Showcase Container (6 cols) - Pure, clean photo without text overlays */}
                <motion.div 
                  initial={{ opacity: 0, x: imgInitialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`lg:col-span-6 relative rounded-3xl overflow-hidden shadow-md border-2 border-[#E5DFD5] bg-stone-100 group min-h-[280px] sm:min-h-[380px] md:min-h-[480px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  id={`exp-img-box-${exp.id}`}
                >
                  <motion.img 
                    src={exp.image} 
                    alt={exp.title} 
                    loading="eager"
                    decoding="async"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      y: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 9 + (idx * 2),
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut" 
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Narrative Content Card (6 cols) */}
                <motion.div 
                  initial={{ opacity: 0, x: contentInitialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className={`lg:col-span-6 bg-white p-5 sm:p-8 md:p-10 rounded-3xl border border-[#E5DFD5] shadow-xs flex flex-col justify-between space-y-5 sm:space-y-6 text-center md:text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`} 
                  id={`exp-desc-${exp.id}`}
                >
                  <div className="space-y-4 sm:space-y-5">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-center md:justify-start">
                        <div className="inline-flex items-center space-x-2 bg-[#DFBA84]/10 border border-[#DFBA84]/30 px-3 sm:px-3.5 py-1 rounded-full text-[10.5px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.18em] text-[#8F6D3C] font-semibold uppercase font-sans">
                          <Sparkles className="w-3.5 h-3.5 text-[#DFBA84]" />
                          <span>EXPERIENCE {String(idx + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-serif font-light text-[#2B2927] text-[20px] sm:text-[22px] md:text-[25px] tracking-wide leading-tight break-keep">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <p className="text-[#6E6A64] text-[13px] sm:text-[13.5px] md:text-[14px] leading-[1.8] md:leading-relaxed font-light tracking-wide border-b border-[#E5DFD5] pb-3.5 sm:pb-4 break-keep">
                      {exp.description}
                    </p>

                    {/* Detailed Features & Highlights */}
                    <div className="space-y-2 sm:space-y-2.5 text-center md:text-left">
                      <span className="text-[10.5px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider text-[#8F6D3C] block text-center md:text-left">
                        시그니처 무료 구성 & 혜택
                      </span>
                      <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center md:justify-start gap-1.5 sm:gap-2">
                        {tags.map((tag, tIdx) => (
                          <motion.span 
                            key={tIdx} 
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="bg-[#FAF9F6] text-[#2B2927] text-[11.5px] sm:text-[12px] px-3 sm:px-3.5 py-2 md:py-1.5 rounded-xl border border-[#E5DFD5] font-light flex items-center justify-center md:justify-start space-x-2 shadow-2xs cursor-default break-keep w-full md:w-auto text-center md:text-left"
                          >
                            <Sparkles className="w-3 h-3 text-[#DFBA84] shrink-0" />
                            <span>{tag}</span>
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Specialized Information Box per Experience */}
                    <div className="bg-[#FAF9F6] p-3.5 sm:p-4.5 rounded-2xl border border-[#E5DFD5] text-[#6E6A64] space-y-1 sm:space-y-1.5 text-center md:text-left">
                      <p className="font-semibold text-[#2B2927] flex items-center justify-center md:justify-start space-x-1.5 text-[10.5px] sm:text-[11px] uppercase tracking-wider font-sans">
                        <Coffee className="w-3.5 h-3.5 text-[#DFBA84] shrink-0" />
                        <span>ANUK STAY INCLUSION DETAILS</span>
                      </p>
                      {exp.id === 'breakfast' ? (
                        <p className="text-[11.5px] sm:text-[12px] font-light leading-[1.75] md:leading-relaxed break-keep">
                          <span className="block md:inline">무료 오가닉 조식 바구니</span>{' '}
                          <span className="block mt-0.5 md:mt-0 md:inline text-[#8C867D] md:text-[#6E6A64]">(갓 구운 수제 빵, 계절 과일, 수제 잼, 요거트, 핸드드립 원두 커피 포함)</span>
                        </p>
                      ) : exp.id === 'pool' ? (
                        <p className="text-[11.5px] sm:text-[12px] font-light leading-[1.75] md:leading-relaxed break-keep">
                          <span className="block md:inline">32℃~34℃ 사계절 온수 무료 제공</span>{' '}
                          <span className="block mt-0.5 md:mt-0 md:inline text-[#8C867D] md:text-[#6E6A64]">&middot; 오션뷰 전용 타월 및 아웃도어 로브 무료 세팅</span>
                        </p>
                      ) : (exp.id === 'spa' || exp.id === 'hinoki') ? (
                        <p className="text-[11.5px] sm:text-[12px] font-light leading-[1.75] md:leading-relaxed break-keep">
                          <span className="block md:inline">편백나무 아웃도어 노천탕 무료 이용</span>{' '}
                          <span className="block mt-0.5 md:mt-0 md:inline text-[#8C867D] md:text-[#6E6A64]">&middot; 천연 아로마 바스 솔트 및 릴렉싱 배스 세팅</span>
                        </p>
                      ) : (
                        <p className="text-[11.5px] sm:text-[12px] font-light leading-[1.75] md:leading-relaxed break-keep">
                          <span className="block md:inline">프랑스 부르고뉴 피노 누아 와인 세팅</span>{' '}
                          <span className="block mt-0.5 md:mt-0 md:inline text-[#8C867D] md:text-[#6E6A64]">&middot; 전용 글라스 및 오션 오디오 트랙 제공</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bottom Information Line (Refined Badge Layout) */}
                  <div className="pt-3 sm:pt-3.5 flex flex-wrap items-center justify-center md:justify-between gap-2 border-t border-[#E5DFD5]/80 text-[#6E6A64]">
                    <div className="inline-flex items-center space-x-1.5 bg-[#FAF9F6] border border-[#E5DFD5] px-2.5 sm:px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-sans font-medium text-[#2B2927] shadow-2xs">
                      <Check className="w-3.5 h-3.5 text-[#8F6D3C] shrink-0 stroke-[2.5]" />
                      <span>투숙객 전용 혜택 &middot; 무료 자동 세팅</span>
                    </div>
                    <span className="hidden md:inline text-[10.5px] sm:text-[11px] font-sans text-[#8F6D3C] font-semibold tracking-wider uppercase">
                      EXPERIENCE {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

        {/* 2. GUEST CONCIERGE & CARE SERVICES - Alternating Section Background #F3EFEA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#F3EFEA] border border-[#E5DFD5] p-5 sm:p-8 md:p-12 rounded-3xl space-y-6 sm:space-y-8 text-center md:text-left shadow-xs"
          id="experience-concierge-card"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-b border-[#E5DFD5] pb-4 sm:pb-6">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center space-x-2 text-[#8F6D3C]">
                <ShieldCheck className="w-4 h-4 text-[#DFBA84]" />
                <span className="text-[11px] sm:text-[12px] tracking-[0.25em] font-semibold uppercase font-sans">GUEST CARE & SERVICES</span>
              </div>
              <h3 className="font-serif text-[19px] sm:text-[22px] md:text-[24px] font-light text-[#2B2927] break-keep">
                투숙객 편의를 위한 섬세한 케어 서비스
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-1 sm:pt-2">
            {guestConciergeCare.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="bg-white p-4.5 sm:p-5 rounded-2xl border border-[#E5DFD5] space-y-2 sm:space-y-2.5 hover:border-[#DFBA84] hover:shadow-md transition-all duration-150 text-center md:text-left"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FAF9F6] text-[#DFBA84] border border-[#E5DFD5]/50 flex items-center justify-center mx-auto md:mx-0">
                    <Icon className="w-4 h-4 text-[#DFBA84]" />
                  </div>
                  <h4 className="font-serif text-[#2B2927] text-[14.5px] sm:text-[15px] font-medium">{item.title}</h4>
                  <p className="text-[#6E6A64] text-[11.5px] sm:text-[12px] font-light leading-[1.8] md:leading-relaxed break-keep text-center md:text-left">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
