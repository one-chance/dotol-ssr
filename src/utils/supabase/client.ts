import { createBrowserClient } from '@supabase/ssr';
import { HoneData, MakeData, ReforgeData } from '@/types';

type As = 'make' | 'reforge' | 'hone';

export const supabaseClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const getEquipList = async (subject: string, part: string, as: As): Promise<string[]> => {
  let query = supabaseClient.from('normal-equip').select('name').eq('subject', subject).eq(as, true);

  if (part !== '부위') query = query.eq('part', part);

  query = query.order('index', { ascending: true });

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data.map(item => item.name);
};

export const getMakeData = async (origin: string): Promise<MakeData[]> => {
  const { data, error } = await supabaseClient
    .from('normal-equip-make')
    .select('*')
    .eq('origin', origin)
    .order('index', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getReforgeData = async (origin: string): Promise<ReforgeData[]> => {
  const { data, error } = await supabaseClient
    .from('normal-equip-reforge')
    .select('*')
    .eq('origin', origin)
    .order('index', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getHoneList = async (origin: string): Promise<string[]> => {
  const { data, error } = await supabaseClient
    .from('normal-equip-hone')
    .select('equip')
    .eq('origin', origin)
    .order('index', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(item => item.equip);
};

export const getHoneData = async (origin: string, equip: string): Promise<HoneData> => {
  const { data, error } = await supabaseClient
    .from('normal-equip-hone')
    .select('*')
    .eq('origin', origin)
    .eq('equip', equip)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
