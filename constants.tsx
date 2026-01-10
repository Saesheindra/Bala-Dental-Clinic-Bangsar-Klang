
import React from 'react';
import { Doctor, Service, Testimonial } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: "Dato' Dr. Balakrishnan",
    role: 'Principal Dentist & Founder',
    experience: '40+ Years Experience',
    quote: 'Dedicated to providing quality dental care for the whole family.',
    languages: ['BM', 'EN', 'Tamil'],
    image: 'https://picsum.photos/seed/dentist1/400/400'
  },
  {
    id: '2',
    name: 'Dr. Priya Menon',
    role: 'General Dentist',
    experience: '12+ Years Experience',
    quote: 'Gentle care for patients of all ages, making dental visits comfortable.',
    languages: ['BM', 'EN', 'Tamil'],
    image: 'https://picsum.photos/seed/dentist2/400/400'
  },
  {
    id: '3',
    name: 'Dr. Ahmad Faizal',
    role: 'General Dentist',
    experience: '8+ Years Experience',
    quote: 'Modern techniques combined with a caring approach.',
    languages: ['EN', 'BM'],
    image: 'https://picsum.photos/seed/dentist3/400/400'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'General Check-up',
    description: 'Comprehensive dental examination including oral cancer screening and treatment planning.',
    icon: '🦷'
  },
  {
    id: '2',
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing to remove plaque, tartar, and surface stains.',
    icon: '✨'
  },
  {
    id: '3',
    title: 'Fillings & Restorations',
    description: 'Tooth-colored composite fillings and restorations for cavities and damaged teeth.',
    icon: '🔧'
  },
  {
    id: '4',
    title: 'Extractions',
    description: 'Safe and gentle tooth removal including wisdom teeth extractions.',
    icon: '🏥'
  },
  {
    id: '5',
    title: 'Root Canal Treatment',
    description: 'Advanced endodontic treatment to save infected or damaged teeth.',
    icon: '💉'
  },
  {
    id: '6',
    title: 'Dentures & Crowns',
    description: 'Custom-made dentures, crowns, and bridges for missing or damaged teeth.',
    icon: '👄'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mei Ling T.',
    location: 'Bangsar Resident',
    content: "Been coming to Bala Dental for over 15 years. Dato' Dr. Bala is incredibly skilled and makes you feel at ease. Highly recommend!",
    rating: 5
  },
  {
    id: '2',
    name: 'Rajesh K.',
    location: 'Klang Patient',
    content: 'The best dental clinic in Klang! Professional staff and modern equipment. My whole family comes here.',
    rating: 5
  },
  {
    id: '3',
    name: 'Sarah A.',
    location: 'Bangsar Baru',
    content: 'Finally found a dentist I trust. The clinic is clean, staff is friendly, and prices are reasonable.',
    rating: 5
  }
];
