import { BodyEnhanceBonus } from '@/components/body-enhance';
import { getJSON } from '@/utils';

export default async function BonusPage() {
  const DATA = await getJSON('upgrade/body-enhance-bonus');

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <BodyEnhanceBonus data={DATA} />
    </div>
  );
}
