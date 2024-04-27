import { ArtifactEquipMake } from '@/components/artifact-equip';
import { getJSON } from '@/utils';

export default async function ArtifactEquipMakePage() {
  const DATA = await getJSON('upgrade/artifact-equip-make');

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <ArtifactEquipMake data={DATA} />
    </div>
  );
}
