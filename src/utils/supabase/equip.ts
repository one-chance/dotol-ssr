import { EquipInfo, HoneData, MakeData, ReforgeData } from '@/types';
import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
}

export const getEquipList = async (
  subject: string,
  part: string,
  as: 'make' | 'reforge' | 'hone',
): Promise<EquipInfo[]> => {
  const supabase = createClient();

  let query = supabase.from('normal-equip').select('*').eq('subject', subject).eq(as, true);

  if (part !== '부위') query = query.eq('part', part);

  query = query.order('index', { ascending: true });

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getMakeData = async (origin: string): Promise<MakeData[]> => {
  const supabase = createClient();

  const { data, error } = await supabase
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
  const supabase = createClient();

  const { data, error } = await supabase
    .from('normal-equip-reforge')
    .select('*')
    .eq('origin', origin)
    .order('index', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getHoneData = async (origin: string): Promise<HoneData[]> => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('normal-equip-hone')
    .select('*')
    .eq('origin', origin)
    .order('index', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getHoneDataByEquip = async (origin: string, equip: string): Promise<HoneData> => {
  const supabase = createClient();

  const { data, error } = await supabase
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
