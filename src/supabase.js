import CONFIG from "./config";
import { createClient } from "@supabase/supabase-js";
console.log(CONFIG.API_KEY);
const supabaseUrl = "https://qpnzvqpmvotaxtztjzpm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbnp2cXBtdm90YXh0enRqenBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzMyMTksImV4cCI6MjA2MjgwOTIxOX0.VtQc9PflJppBg7Ypjzt5_tMTkH3849xNM2MMQVr5OdI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;