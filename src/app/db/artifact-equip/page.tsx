import { ArtifactEquipList } from '@/components/artifact-equip';
import { getJSON } from '@/utils';

export default async function AntiquityEquipPage() {
  const DATA = await getJSON('db/artifact-equip-list');

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <ArtifactEquipList data={DATA} />
    </div>
  );
}
