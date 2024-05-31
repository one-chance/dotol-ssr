import { getTodayVisitor, getTotalVisitor } from '@/actions/visit.action';

export default async function Visitor() {
  const todayVisitor = await getTodayVisitor();
  const totalVisitor = await getTotalVisitor();

  return (
    <div className="flex flex-col items-center gap-2 p-5 border-t border-b border-[#808396]">
      <span className="text-[#e9e1d1]">Today: {todayVisitor}</span>
      <span className="text-[#e9e1d1]">Total: {totalVisitor}</span>
    </div>
  );
}
