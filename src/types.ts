/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Room {
  id: string;
  name: string;
  engName: string;
  title: string;
  subtitle: string;
  size: string;
  capacity: {
    standard: number;
    max: number;
  };
  checkIn: string;
  checkOut: string;
  priceWeekday: number;
  priceWeekend: number;
  description: string;
  details: string[];
  amenities: {
    category: string;
    items: string[];
  }[];
  mainImage: string;
  galleryImages: string[];
  musicTheme: {
    title: string;
    artist: string;
    audioUrl: string;
    cover: string;
  };
}

export interface Booking {
  id: string;
  roomId: string;
  roomName: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
  options: {
    wine: boolean;
    bbq: boolean;
    breakfast: boolean;
  };
  totalPrice: number;
  guestName: string;
  guestPhone: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface Inquiry {
  id: string;
  title: string;
  content: string;
  writer: string;
  date: string;
  isPrivate: boolean;
  password?: string;
  reply?: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  content: string;
  date: string;
  emotion: string; // e.g., "Warmth", "Sea Breeze", "Deep Calm", "Sunset Light"
  bgTone: string; // hex code for emotional background card tint
}
