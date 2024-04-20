import jsonData from '@/contants/adventure.json';
import { AdventureTable } from '@/components/table';

export default function AchievementPage() {
  return (
    <div className="flex flex-col grow max-w-[600px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <AdventureTable data={jsonData} />
    </div>
  );
}
