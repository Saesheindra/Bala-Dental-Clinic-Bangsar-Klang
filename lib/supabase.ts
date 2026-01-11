import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type for appointments table
export interface Appointment {
  id?: string;
  name: string;
  email: string;
  phone: string;
  emergency_contact: string | null;
  date: string;
  time: string;
  service: string;
  notes: string | null;
  submitted_at?: string;
  created_at?: string;
}
