import { AchievementTable } from '@/components/table';
import { getJSON } from '@/utils';

export default async function AchievementPage() {
  const apiData = await getJSON('content/achievement');

  return (
    <div className="flex flex-col grow max-w-[600px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <AchievementTable data={apiData} />
    </div>
  );
}
