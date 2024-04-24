type NormalEquipTableProps = {
  list: { [key: string]: string }[];
};

export default function NormalEquipTable({ list }: NormalEquipTableProps) {
  return (
    <div className="border-t border-r border-gray-300">
      {list.map((item: { [key: string]: string }, index: number) => (
        <div key={index} className="border-b border-gray-300 select-none">
          {Object.entries(item).map(([key, value]) => (
            <div key={key} className="flex flex-row">
              <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
                {key.replace('_', ' ')}
              </span>
              <span className="flex-1 px-2 py-1 text-sm sm:text-base">{value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
