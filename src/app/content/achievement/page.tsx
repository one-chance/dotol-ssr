import { AchievementTable } from '@/components/table';
import jsonData from '@/contants/achievement.json';

export default function AchievementPage() {
  return (
    <div className="flex flex-col grow max-w-[600px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <AchievementTable data={jsonData} />
    </div>
  );
}
