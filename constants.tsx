
import React from 'react';
import { Doctor, Service, Testimonial } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Nordhiah Jury',
    role: 'GP & Family Medicine',
    experience: '32+ Years Experience',
    quote: 'Dedicated to keeping families healthy for over three decades.',
    languages: ['BM', 'EN', 'Mandarin'],
    image: 'https://picsum.photos/seed/doc1/400/400'
  },
  {
    id: '2',
    name: 'Dr. Ahmad Nasir',
    role: 'GP & Emergency Care',
    experience: '15+ Years Experience',
    quote: 'Available whenever your family needs urgent care, day or night.',
    languages: ['BM', 'EN'],
    image: 'https://picsum.photos/seed/doc2/400/400'
  },
  {
    id: '3',
    name: 'Dr. Sarah Lim',
    role: 'Women\'s Health Specialist',
    experience: '12+ Years Experience',
    quote: 'Personalized care for every stage of a woman\'s life.',
    languages: ['EN', 'BM', 'Cantonese'],
    image: 'https://picsum.photos/seed/doc3/400/400'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'General Consultation',
    description: 'From flu to chronic care, our doctors provide comprehensive diagnosis and treatment.',
    icon: '🩺'
  },
  {
    id: '2',
    title: 'Health Screening',
    description: 'Tailored full-body check-ups including blood chemistry analysis and ultrasound.',
    icon: '❤️'
  },
  {
    id: '3',
    title: 'Cardiac Testing',
    description: 'Advanced Resting ECG and Treadmill tests for heart health monitoring.',
    icon: '🫀'
  },
  {
    id: '4',
    title: 'Vaccinations',
    description: 'Full range of immunizations for infants, adults, and international travelers.',
    icon: '💉'
  },
  {
    id: '5',
    title: 'Women\'s Health',
    description: 'Specialized Pap Smears, family planning, and maternity wellness services.',
    icon: '🤰'
  },
  {
    id: '6',
    title: 'Emergency Care',
    description: '24/7 immediate medical attention for acute illnesses and minor injuries.',
    icon: '🚨'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah L.',
    location: 'TTDI Resident since 1995',
    content: 'Been coming here since my kids were babies. Now they bring their own children. That\'s the kind of trust you can\'t buy.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ahmad R.',
    location: 'Verified Patient',
    content: 'The only 24-hour clinic I trust in the area. Dr. Nasir is incredibly thorough and empathetic.',
    rating: 5
  },
  {
    id: '3',
    name: 'Jessica W.',
    location: 'Damansara Heights',
    content: 'Efficient, professional, and very friendly. The 24-hour service saved us during a midnight fever scare.',
    rating: 5
  }
];
