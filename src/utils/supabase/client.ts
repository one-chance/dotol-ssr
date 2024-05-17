import { createBrowserClient } from '@supabase/ssr';

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
    throw error;
  }

  return data.map(item => item.name);
};
