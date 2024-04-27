import { PetEquipReforge } from '@/components/pet-equip';
import { getJSON } from '@/utils';

export default async function PetEquipReforgePage() {
  const DATA = await getJSON('upgrade/pet-equip-reforge');

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <PetEquipReforge data={DATA} />
    </div>
  );
}
