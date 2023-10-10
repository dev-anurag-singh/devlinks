import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://xhzwkxqtgpkrgspmmfbx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoendreHF0Z3BrcmdzcG1tZmJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MzEyODcsImV4cCI6MjAxMjUwNzI4N30.YEsz5oY0cgyfQiMIOFB62nPJtcwSR7MDCJt2eYxI23w';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
