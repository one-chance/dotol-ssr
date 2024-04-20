import jsonData from '@/contants/archeology.json';

type ArcheologyItem = {
  아이템: string;
  장소: string;
  '사용 방법': string;
  수량: string;
  보상: string;
};

export default function ArcheologyPage() {
  const DATA = jsonData;

  return (
    <div className="flex flex-col grow max-w-[600px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-semibold">고고학 정보</span>

      <div className="border-t border-r border-gray-300">
        {DATA.map((item: ArcheologyItem, index: number) => (
          <div key={index} className="border-b border-gray-300 select-none">
            {Object.entries(item).map(([key, value]) => (
              <div key={key} className="flex flex-row">
                <span className="w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">{key}</span>
                <span className="flex-1 px-2 py-1 text-sm sm:text-base whitespace-pre-wrap keep-all">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
