import { NormalEquipEnchant } from '@/components/normal-equip';
import { getJSON } from '@/utils';

export default async function SkillAbilityPage() {
  const DATA = await getJSON('upgrade/skill-ability');

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <NormalEquipEnchant data={DATA} />
    </div>
  );
}
