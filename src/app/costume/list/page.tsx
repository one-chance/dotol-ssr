'use client';

import { useEffect, useState } from 'react';
import { Avatar, CostumeList, Select, Pagination } from '@/components';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getClothesList } from '@/utils';
import { useAtomValue } from 'jotai';
import { isloggedinAtom } from '@/states';

const PARTS = [
  '치장 부위',
  '목/어깨장식',
  '투구',
  '얼굴장식',
  '무기',
  '겉옷',
  '방패/보조무기',
  '망토',
  '신발',
  '장신구',
  '세트옷',
] as const;
type Parts = (typeof PARTS)[number];

type CostumeInfo = {
  index: number;
  name: string;
  part: number;
  gender: number;
  luxury: boolean;
};

export default function CostumeListPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isLoggedIn = useAtomValue(isloggedinAtom);

  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [part, setPart] = useState<Parts>('치장 부위');
  const [keyword, setKeyword] = useState('');
  const [itemList, setItemList] = useState<CostumeInfo[]>([]);
  const [selectedEquip, setSelectedEquip] = useState<string[]>([]);

  const selectPart = (item: string) => {
    setPart(item as Parts);
    setKeyword('');
    if (item !== '치장 부위') router.replace(`${pathname}?part=${PARTS.indexOf(item as Parts)}&page=1`);
    else router.replace(`${pathname}?page=1`);
  };

  const inputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const searchByKeyword = () => {
    if (!keyword) return;

    setPart('치장 부위');
    router.replace(`${pathname}?keyword=${keyword}&page=1`);
  };

  const wearEquip = (item: string) => {
    if (!isLoggedIn) return alert('캐릭터를 등록하면 아바타가 보입니다.');

    if (selectedEquip.length >= 10) return;
    setSelectedEquip(prev => (prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]));
  };

  const removeEquip = (item: string) => {
    setSelectedEquip(prev => prev.filter(i => i !== item));
  };

  useEffect(() => {
    const pageParam = searchParams.get('page') ?? '1';
    const partParam = searchParams.get('part') ?? '0';
    const keywordParam = searchParams.get('keyword') ?? '';

    if (Number(pageParam) < 1 || isNaN(Number(pageParam))) {
      setPage(0);
      setItemList([] as CostumeInfo[]);
      setCount(0);
      router.replace(pathname);
    } else if (partParam === '0' && keywordParam === '') {
      setPage(0);
      setItemList([] as CostumeInfo[]);
      setCount(0);
      router.replace(pathname);
    } else if (partParam !== '0') {
      setPart(PARTS[Number(partParam)]);
      setPage(Number(pageParam));
      getClothesList('', Number(partParam), Number(pageParam)).then(res => {
        if (res.statusCode === 200) {
          setItemList(res.data.list);
          setCount(res.data.count);
        }
      });
      router.replace(`${pathname}?part=${partParam}&page=${pageParam}`);
    } else if (keywordParam !== '') {
      setKeyword(keywordParam);
      setPage(Number(pageParam));
      getClothesList(keywordParam, 0, Number(pageParam)).then(res => {
        if (res.statusCode === 200) {
          setItemList(res.data.list);
          setCount(res.data.count);
        }
      });
      router.replace(`${pathname}?keyword=${keywordParam}&page=${pageParam}`);
    } else {
      setPage(Number(pageParam));
      setPart(PARTS[Number(partParam)]);
      setKeyword(keywordParam);
      getClothesList(keywordParam ?? '', Number(partParam) ?? 0, Number(pageParam)).then(res => {
        if (res.statusCode === 200) {
          setItemList(res.data.list);
          setCount(res.data.count);
        }
      });
    }
  }, [pathname, router, searchParams]);

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-semibold">치장 목록</span>

      <div className="flex flex-row flex-wrap gap-2.5">
        <div className="flex flex-col gap-2 mx-auto">
          <Avatar equips={selectedEquip} />

          <div className="flex flex-col flex-1 p-2.5 gap-2.5 border rounded max-w-[214px] max-h-[290px] min-h-20">
            <span className="font-medium text-center">착용 목록</span>

            <div className="flex flex-col gap-1">
              {selectedEquip?.map(equip => (
                <div key={equip} className="flex flex-row justify-between items-center gap-4">
                  <span className="text-xs text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">{equip}</span>

                  <button type="button" className="text-xs text-gray-500 min-w-7" onClick={() => removeEquip(equip)}>
                    해제
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 border rounded">
          <div className="flex flex-row px-2.5 py-2 gap-2 border-b">
            <Select className="w-[120px] sm:w-[140px] h-9" name={part} items={PARTS} onSelect={selectPart} />
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

          <CostumeList list={itemList} selectedList={selectedEquip} onWear={wearEquip} />

          {page !== 0 && <Pagination currentPage={page} totalPage={Math.ceil(count / 12)} />}
        </div>
      </div>
    </div>
  );
}
