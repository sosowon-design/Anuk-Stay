/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { getImageUrl } from '../assets/images';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  ambientMotion?: boolean;
  motionDuration?: number;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  ambientMotion = true,
  motionDuration = 10,
  ...props
}: OptimizedImageProps) {
  const resolvedSrc = getImageUrl(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(() => {
    // If running in browser and image already cached, mark loaded right away
    if (typeof window !== 'undefined') {
      const img = new Image();
      img.src = resolvedSrc;
      return img.complete && img.naturalWidth > 0;
    }
    return false;
  });

  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Check if the DOM image node is already complete upon mount or src change
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [resolvedSrc]);

  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      {/* Subtle warm skeleton placeholder while loading */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-[#EFECE6] transition-opacity duration-300 pointer-events-none"
          aria-hidden="true" 
        />
      )}
      <motion.img
        ref={imgRef}
        src={resolvedSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        animate={ambientMotion ? {
          scale: [1, 1.04, 1],
          y: [0, -2.5, 0]
        } : undefined}
        transition={ambientMotion ? {
          duration: motionDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        } : undefined}
        className={`${className} ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500 ease-out`}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
}
