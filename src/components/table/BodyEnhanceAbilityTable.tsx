type AbilityCell = {
  등급: string;
  선택_능력: string[];
  기본_능력: string[];
};

type TableProps = {
  data: AbilityCell[];
};

export default function BodyEnhanceAbilityTable({ data }: TableProps) {
  return (
    <div>
      <div className="flex flex-row bg-gray-300 py-2">
        <span className="w-16 text-center font-bold text-sm sm:text-base">등급</span>
        <span className="w-32 text-center font-bold text-sm sm:text-base">선택 능력</span>
        <span className="flex-1 text-center font-bold text-sm sm:text-base">기본 능력</span>
      </div>

      <div>
        {data.map((item: AbilityCell, index: number) => (
          <div key={index} className="flex flex-row items-center border-b py-1 bg-gray-100">
            <div className="flex w-16">
              <span className="w-full text-center text-sm sm:text-base">{item.등급}</span>
            </div>

            <div className="flex flex-col items-center w-32">
              {item.선택_능력.map((ability: string) => (
                <span key={ability} className="text-sm">
                  {ability}
                </span>
              ))}
            </div>

            <div className="flex flex-row flex-wrap justify-start items-center gap-1 flex-1 px-2">
              {item.기본_능력.map((ability: string) => (
                <span key={ability} className="text-sm">
                  {ability}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
