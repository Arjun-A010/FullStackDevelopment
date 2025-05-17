import CONFIG from "./config";
import { createClient } from "@supabase/supabase-js";
console.log(CONFIG.API_KEY);
const supabaseUrl = CONFIG.API_LINK;
const supabaseKey = CONFIG.API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;