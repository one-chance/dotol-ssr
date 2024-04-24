import { BodyEnhanceAbility } from '@/components/body-enhance';
import { getJSON } from '@/utils';

export default async function BodyEnhanceAbilityPage() {
  const DATA = await getJSON('upgrade/body-enhance-ability');

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <BodyEnhanceAbility data={DATA} />
    </div>
  );
}
