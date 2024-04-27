import { AdventureTable } from '@/components/table';
import { getJSON } from '@/utils';

export default async function AchievementPage() {
  const DATA = await getJSON('content/adventure');

  return (
    <div className="flex flex-col grow max-w-[600px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <AdventureTable data={DATA} />
    </div>
  );
}
