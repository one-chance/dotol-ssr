import { NormalEquipSetEffect } from '@/components/normal-equip';
import { getJSON } from '@/utils';

export default async function SetEffectPage() {
  const DATA = await getJSON('db/set-effect');

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <NormalEquipSetEffect data={DATA} />
    </div>
  );
}
