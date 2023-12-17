import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://siwvvtuwisgtwftflmyu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpd3Z2dHV3aXNndHdmdGZsbXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTYwMjksImV4cCI6MjAxNjE3MjAyOX0.Q3m8-06OMiZlUaZ2lwk-lk-ukzZEzuN5rhQg_C4RfHE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
