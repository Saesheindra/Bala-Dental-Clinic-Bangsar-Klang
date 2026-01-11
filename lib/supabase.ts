import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

// Create a placeholder client if env vars are missing to prevent crashes
let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase environment variables are missing. Some features may not work.');
  // Create a dummy client that won't crash - will still fail on actual operations
  supabase = createClient('https://placeholder.supabase.co', 'placeholder-key');
}

export { supabase };

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
