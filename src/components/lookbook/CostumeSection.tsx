/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Pagination, Select } from '@/components';
import { CostumeInfo, CostumePart } from '@/types';
import { getClothesList2 } from '@/utils';
import { COSTUME_PARTS } from '@/contants';

type CostumeSectionProps = {
  selected: string[];
  onSelect: (item: string) => void;
};

export default function CostumeSection({ selected, onSelect }: CostumeSectionProps) {
  const baseURL = 'https://avatar.baram.nexon.com/Item/Render/';
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [part, setPart] = useState<CostumePart>('부위');
  const [keyword, setKeyword] = useState<string>('');
  const [itemList, setItemList] = useState<CostumeInfo[]>([]);

  const selectPart = (item: string) => {
    setPart(item as CostumePart);
    router.replace(`${pathname}?page=1`);
  };

  const inputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const searchByKeyword = () => {
    router.replace(`${pathname}?page=1`);
  };

  const wearEquip = (item: string) => {
    if (selected.length === 10) return;
    onSelect(item);
  };

  useEffect(() => {
    const pageParam = searchParams.get('page');
    const pageNumber = Number(pageParam);

    if (!pageParam) {
      return setItemList([] as CostumeInfo[]);
    }

    if (pageNumber < 1 || isNaN(pageNumber)) {
      setItemList([] as CostumeInfo[]);
      return router.replace(pathname);
    }

    getClothesList2(keyword, part, pageNumber).then(res => {
      if (res.statusCode === 200) {
        setItemList(res.data.list);
        setCount(res.data.count);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, searchParams.get('page')]);

  return (
    <div className="flex flex-col gap-2.5 px-2.5 sm:px-4">
      <span className="min-w-28 text-lg font-medium">치장 목록</span>

      <div className="flex flex-row gap-2">
        <Select className="w-[120px] sm:w-[140px] h-9" name={part} items={COSTUME_PARTS} onSelect={selectPart} />

        <input
          value={keyword || ''}
          placeholder="치장 이름"
          className="w-32 sm:w-40 border rounded px-2 ountline-none"
          onChange={inputKeyword}
          onKeyDown={e => e.key === 'Enter' && searchByKeyword()}
        />
        <button
          type="button"
          className="w-12 sm:w-16 text-sm sm:text-base bg-blue-500 text-white rounded h-9"
          onClick={searchByKeyword}
        >
          검색
        </button>
      </div>

      <div className="flex flex-row flex-wrap content-start min-h-[440px] gap-2.5">
        {itemList?.map((item: CostumeInfo) => (
          <div key={item.index} className="flex flex-col cursor-pointer" onClick={() => wearEquip(item.name)}>
            <div className="relative flex flex-col justify-center items-center w-[150px] min-h-[90px] bg-[#E6E5E5]">
              <img src={`${baseURL}${encodeURIComponent(item.source)}`} alt={item.name} />
            </div>
            <div className="flex flex-row justify-between px-2 py-1 bg-[#E6E5E5]">
              <span className="text-xs">{item.gender}</span>
              <span className="text-xs">{item.luxury ? '명품의' : ''}</span>
            </div>
            <div className="flex flex-row justify-center border px-1 py-0.5 max-w-[150px]">
              <span className={`text-xs ${selected?.includes(item.name) && 'text-red-500'}`}>{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      <Pagination currentPage={page} totalPage={Math.ceil(count / 12)} />
    </div>
  );
}
