import { BodyEnhanceRecipe } from '@/components/body-enhance';
import { getJSON } from '@/utils';

export default async function BodyEnhanceRecipePage() {
  const DATA = await getJSON('upgrade/body-enhance-recipe');

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <BodyEnhanceRecipe data={DATA} />
    </div>
  );
}
