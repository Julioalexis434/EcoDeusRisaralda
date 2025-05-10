import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://emckthstdsiwoskychfa.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtY2t0aHN0ZHNpd29za3ljaGZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MjEzMjMsImV4cCI6MjA1OTA5NzMyM30.IIQR9MXdiFKIcGG9HnfHNcM_lTfFLyznphFpz49T-L0'; // Reemplaza con tu clave anónima

export const supabase = createClient(supabaseUrl, supabaseAnonKey);