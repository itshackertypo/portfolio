import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function submitContactMessage(name, email, message) {
  if (!supabase) {
    return { data: null, error: { message: 'Database not configured.' } }
  }
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([{ name, email, message }])
  return { data, error }
}
