
export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  quote: string;
  languages: string[];
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}
