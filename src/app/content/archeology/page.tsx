import { getJSON } from '@/utils';

export default async function ArcheologyPage() {
  const DATA = await getJSON('content/archeology');

  return (
    <div className="flex flex-col grow max-w-[600px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-semibold">고고학 정보</span>

      <div className="border-t border-r border-gray-300">
        {DATA.map((item: { [key: string]: string }, index: number) => (
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
