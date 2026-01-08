import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nthzagrxdjrbhbondaau.supabase.co";
const supabaseAnonKey = "sb_publishable_N99TOiu19x4ioKwgoaDJoQ_jrnpWk6M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
