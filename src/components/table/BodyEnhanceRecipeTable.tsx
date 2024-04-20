type BodyEnhanceRecipeCell = {
  등급: string;
  비약: string;
  전표: string;
  누적_비약: string;
  누적_전표: string;
};

type TableProps = {
  data: BodyEnhanceRecipeCell[];
};

export default function BodyEnhanceRecipeTable({ data }: TableProps) {
  const TITLES = ['등급', '비약', '전표', '누적_비약', '누적_전표'] as const;

  return (
    <div>
      <div className="flex flex-row">
        {TITLES.map((title: string) => (
          <span key={title} className="w-32 bg-gray-300 py-2 font-bold text-sm sm:text-base text-center">
            {title.replace('_', ' ')}
          </span>
        ))}
      </div>

      {data.map((item: BodyEnhanceRecipeCell, index: number) => (
        <div key={index} className="flex flex-row border-b border-gray-300 select-none bg-gray-100">
          {Object.values(item).map((value: string, index: number) => (
            <span key={index} className="flex-1 py-1 text-sm sm:text-base text-center">
              {value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
