/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, Heart, Trees, Camera, Frame, Shield, Waves, UtensilsCrossed, Bath, Sunset, Coffee } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface StoryProps {
  onNavigateToRooms?: () => void;
}

export default function Story({ onNavigateToRooms }: StoryProps) {
  const storyPillars = [
    {
      num: "01",
      title: "FILMIC VIBES",
      subtitle: "와인과 함께 즐기는 영화",
      desc: "붉게 물드는 남해의 낙조를 배경으로 깊은 풍미의 와인과 대형 스크린 영화, 잔잔한 파도 소리가 함께 어우러져 잊지 못할 낭만적인 밤을 만끽할 수 있습니다.",
      image: "/src/assets/images/anuk_filmic_wine_1786379703140.jpg"
    },
    {
      num: "02",
      title: "OCEAN & TERRACE",
      subtitle: "바다 바람과 테라스 힐링",
      desc: "탁 트인 프라이빗 테라스에서 시원하게 불어오는 해풍과 드넓은 수평선을 마주하며, 일상의 번잡함을 내려놓고 온전한 평온과 여유를 즐길 수 있습니다.",
      image: "/src/assets/images/anuk_terrace_ocean_1786703028591.jpg"
    },
    {
      num: "03",
      title: "HINOKI & HEALING",
      subtitle: "편백나무 향과 따스한 노천스파",
      desc: "은은한 편백 피톤치드 향이 감도는 따스한 야외 노천스파에서 쏟아지는 밤하늘의 별빛과 파도 소리를 벗 삼아 지친 몸과 마음에 깊은 쉼을 선물합니다.",
      image: "/src/assets/images/anuk_hinoki_spa_1786703040764.jpg"
    }
  ];

  const featureHighlights = [
    {
      icon: Shield,
      title: "3개의 프라이빗 룸",
      coreDesc: "한 건물 내 완벽히 독립된 3개의 룸으로 외부 시선 없이 온전하고 고요한 프라이빗 휴식을 보장합니다.",
      badge: "ONLY 3 UNITS"
    },
    {
      icon: Waves,
      title: "프라이빗 온수풀",
      coreDesc: "남해 수평선과 맞닿아 32℃~34℃ 적정 온도가 24시간 유지되는 사계절 야외 인피니티 온수풀입니다.",
      badge: "4-SEASON WARM"
    },
    {
      icon: UtensilsCrossed,
      title: "오가닉 조식 바구니",
      coreDesc: "갓 구운 빵과 계절 과일, 수제 잼과 드립백 커피가 담긴 시그니처 바구니를 매일 아침 문 앞으로 무료 전달합니다.",
      badge: "FREE MORNING"
    },
    {
      icon: Bath,
      title: "히노끼 노천스파",
      coreDesc: "최고급 편백나무 향 가득한 야외 노천탕에서 천연 아로마 솔트와 함께 파도 소리를 들으며 심신을 이완합니다.",
      badge: "HINOKI SPA"
    }
  ];

  const architectureHighlights = [
    {
      icon: Frame,
      tag: "FULL OPENING WINDOW",
      title: "전면 개방형 폴딩 창호",
      desc: "전면 와이드 폴딩 창호를 활짝 열어 남해의 시원한 바닷바람과 파도 소리를 객실 안으로 온전히 들일 수 있습니다."
    },
    {
      icon: Camera,
      tag: "LIGHTING & SUNSET",
      title: "노을빛 자연 채광",
      desc: "해질녘 붉게 물드는 남해의 낙조를 침대에 누워 편안하게 감상할 수 있도록 감각적인 조도를 설계했습니다."
    },
    {
      icon: Shield,
      tag: "OCEANFRONT PRIVACY",
      title: "독립된 프라이빗 설계",
      desc: "외부 시선을 완벽히 차단하고 동선을 분리하여, 소중한 사람과의 시간과 남해의 절경에만 온전히 몰입할 수 있습니다."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] pt-10 md:pt-14 pb-20 md:pb-24 px-4 sm:px-6 md:px-12 border-t border-[#E5DFD5]/40" id="story-section">
      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-16 md:space-y-20">
        
        {/* 1. Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 px-2"
          id="story-header"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[12px] tracking-[0.3em] text-[#DFBA84] font-semibold block uppercase font-sans"
          >
            BRAND STORY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-light text-[#2B2927] text-[22px] md:text-[28px] tracking-wide break-keep"
          >
            <span className="block md:inline">우리를 잇는 남해의 쉼,</span>{' '}
            <span className="block mt-1 md:mt-0 md:inline">아눅 스테이</span>
          </motion.h2>
          <div className="w-12 h-[1.5px] bg-[#DFBA84] mx-auto" />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#6E6A64] text-[13.5px] sm:text-[14px] md:text-[15px] font-light max-w-xl mx-auto leading-[1.8] md:leading-relaxed pt-1 pb-4 md:pb-6 break-keep"
          >
            <span className="block md:inline">남해 바다 앞, 일상의 소음을 비우고</span>{' '}
            <span className="block mt-1 md:mt-0 md:inline">온전한 쉼과 평온을 누리는 공간입니다.</span>
          </motion.p>
        </motion.div>

        {/* 2. Combined ANUK PHILOSOPHY & SIGNATURE HIGHLIGHTS Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="p-5 sm:p-8 md:p-12 rounded-3xl bg-[#F3EFEA] border border-[#E5DFD5] space-y-6 sm:space-y-7 shadow-xs -mt-2 md:-mt-4"
          id="philosophy-highlights-unified-section"
        >
          {/* Section Header */}
          <div className="flex items-center justify-center md:justify-start space-x-2 border-b border-[#E5DFD5] pb-4 sm:pb-5">
            <span className="w-2 h-2 rounded-full bg-[#DFBA84]" />
            <span className="text-[11px] tracking-[0.25em] text-[#8F6D3C] font-semibold uppercase block font-sans">
              SIGNATURE HIGHLIGHTS
            </span>
          </div>

          {/* Unified Grid: Enriched Hero Photo + 4 Core Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* Left Main Hero Image Card without text overlay */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] shadow-sm group border-2 border-[#E5DFD5] bg-stone-100">
              <OptimizedImage 
                src="/src/assets/images/cequi_pool_villa_2_1783442617946.jpg" 
                alt="아눅 스테이 철학과 하이라이트" 
                priority={true}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
                containerClassName="absolute inset-0"
              />
            </div>

            {/* Right: 4 Core Highlights (Core Key Points) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {featureHighlights.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="bg-white px-6 sm:px-6.5 py-5 sm:py-5.5 rounded-2xl border border-[#E5DFD5] shadow-2xs hover:border-[#DFBA84] hover:shadow-md transition-all duration-150 flex flex-col justify-between space-y-3 sm:space-y-3.5 group text-left md:text-left h-full"
                  >
                    <div className="flex items-center justify-start">
                      <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5] text-[#8F6D3C] flex items-center justify-center shrink-0 group-hover:bg-[#DFBA84] group-hover:text-white transition-colors duration-150 shadow-2xs">
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-0.5 flex-1 flex flex-col justify-start">
                      <h4 className="font-serif text-[#2B2927] text-[15px] sm:text-[16px] font-medium leading-snug break-keep flex items-center justify-start md:justify-start">
                        {feat.title}
                      </h4>
                      <p className="text-[#6E6A64] text-[12.5px] sm:text-[13px] font-light leading-[1.8] md:leading-relaxed break-keep text-left md:text-left">
                        {feat.coreDesc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 3. SENSORY & FILMIC EXPERIENCE - Differentiated Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8 md:space-y-9 pt-1 sm:pt-2 md:pt-2.5"
          id="story-pillars-container"
        >
          <div className="text-center md:text-center space-y-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[11px] tracking-[0.25em] text-[#8F6D3C] font-semibold uppercase block font-sans"
            >
              SENSORY & FILMIC EXPERIENCE
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[#2B2927] text-[20px] sm:text-[22px] md:text-[26px] font-light break-keep"
            >
              아눅만의 <span className="hidden md:inline">3가지 </span>대표 시그니처
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[#6E6A64] text-[13px] sm:text-[13.5px] md:text-[14px] font-light max-w-2xl mx-auto md:mx-auto leading-[1.8] md:leading-relaxed pt-0.5 break-keep"
            >
              <span className="hidden md:inline">남해의 자연 속에서 오롯이 휴식에 몰입하는 </span>
              <span className="block md:inline">아눅 스테이의 3가지 시그니처 힐링 프로그램입니다.</span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 text-left md:text-left pt-2 sm:pt-3 md:pt-3.5" id="story-pillars-grid">
            {storyPillars.map((item, idx) => {
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-white rounded-2xl border border-[#E5DFD5] shadow-xs space-y-0 text-left md:text-left hover:border-[#DFBA84]/60 hover:shadow-md transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
                  id={`story-pillar-${idx}`}
                >
                  {/* Pillar Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <OptimizedImage 
                      src={item.image} 
                      alt={item.title} 
                      priority={true}
                      motionDuration={9 + idx * 2.5}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      containerClassName="w-full h-full"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-5 sm:p-6 md:p-6 lg:p-6 flex-1 flex flex-col justify-start text-left md:text-left">
                    <h4 className="font-serif text-[#2B2927] text-[17px] sm:text-[18px] md:text-[19px] font-medium leading-snug break-keep flex items-center justify-start text-left gap-1.5 sm:gap-2">
                      <span className="shrink-0">{item.num}.</span>
                      <span>{item.subtitle}</span>
                    </h4>

                    <div className="border-t border-[#E5DFD5]/50 pt-3 mt-3 sm:mt-3.5 flex-1 flex flex-col justify-start text-left md:text-left">
                      <p className="text-[#6E6A64] text-[12.5px] sm:text-[13px] leading-[1.8] md:leading-relaxed font-light break-keep text-left md:text-left">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 4. ARCHITECTURAL DESIGN - Concise Header & Full Opening Window Feature */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white border border-[#E5DFD5] rounded-3xl p-5 sm:p-8 md:p-12 lg:p-14 space-y-6 sm:space-y-8 md:space-y-10 shadow-xs max-w-5xl mx-auto hover:border-[#DFBA84]/60 transition-colors duration-300"
          id="story-arch-card"
        >
          {/* Section Title */}
          <div className="border-b border-[#E5DFD5] pb-4 sm:pb-5 text-center md:text-left space-y-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[11px] tracking-[0.25em] text-[#8F6D3C] font-bold uppercase block font-sans"
            >
              ARCHITECTURAL DESIGN
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[20px] sm:text-[22px] md:text-[26px] font-light text-[#2B2927] leading-snug break-keep"
            >
              자연과 일상이 하나 되는 공간
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[#6E6A64] text-[13px] sm:text-[13.5px] md:text-[14px] font-light max-w-2xl mx-auto md:mx-0 leading-[1.8] md:leading-relaxed break-keep"
            >
              <span className="block md:inline">전면 개방형 창호로 남해의 바다와</span>{' '}
              <span className="block mt-1 md:mt-0 md:inline">노을을 객실 안으로 담았습니다.</span>
            </motion.p>
          </div>

          {/* Genuine High-Res Anuk Villa Photograph Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden group shadow-sm bg-stone-100"
          >
            <OptimizedImage 
              src="/src/assets/images/cequi_pool_villa_1_1783442590314.jpg" 
              alt="아눅 스테이 실외 건축 전경" 
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              containerClassName="w-full h-full"
            />
          </motion.div>

          {/* Concise 3-Column Highlights Grid with Generous Spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-left md:text-left">
            {architectureHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-[#FAF9F6] p-4.5 sm:p-6 rounded-2xl border border-[#E5DFD5]/70 space-y-2.5 sm:space-y-3 hover:bg-white hover:border-[#DFBA84]/60 hover:shadow-xs transition-all duration-300 text-left md:text-left"
                >
                  <div className="flex items-center justify-start md:justify-start space-x-2 text-[#8F6D3C] text-left md:text-left">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-[11px] tracking-[0.18em] font-bold uppercase font-sans">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-serif text-[#2B2927] text-[15.5px] sm:text-[16px] font-medium leading-snug break-keep text-left md:text-left">
                    {item.title}
                  </h4>
                  <p className="text-[#6E6A64] text-[12.5px] sm:text-[13px] font-light leading-[1.8] md:leading-relaxed break-keep text-left md:text-left">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}


