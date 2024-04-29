'use client';

import { Select } from '@/components';
import { useState } from 'react';
import { HONE_RECIPE, HONE_BREAK_RECIPE } from '@/contants';
import { addCommaToNumber } from '@/utils';

const SUBJECTS = ['종류', '용', '중국', '일본', '환웅', '타계', '기타'] as const;
type Subjects = (typeof SUBJECTS)[number];
export default function HoningRecipePage() {
  const [subject, setSubject] = useState<Subjects>('종류');
  const [level, setLevel] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0,
  });

  const [honeRecipe, setHonerecipe] = useState({
    연마석: 0,
    금전: 0,
  });

  const [breakMaterial, setBreakMaterial] = useState<{ 이름: string; 수량: number }[]>([]);
  const [breakMoney, setBreakMoney] = useState<number>(0);

  const [showResult, setShowResult] = useState<boolean>(false);

  const selectSubject = (item: string) => {
    setShowResult(false);
    setLevel({ start: 0, end: 0 });
    setSubject(item as Subjects);
  };

  const inputStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowResult(false);
    const value = e.target.value.replace(/[^0-9]/g, '');

    if (Number(value) > 89) return setLevel({ ...level, start: Number(value) });
    setLevel({ ...level, start: Number(value) });
  };

  const inputEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowResult(false);
    const value = e.target.value.replace(/[^0-9]/g, '');

    if (Number(value) >= 90) return setLevel({ ...level, end: Number(value) });
    setLevel({ ...level, end: Number(value) });
  };

  const accumulateMaterials = (data: typeof HONE_BREAK_RECIPE, start: number, end: number, type: string) => {
    const materialMap = data.reduce((acc: { [key: string]: number }, item) => {
      if (item.돌파레벨 >= start && item.돌파레벨 < end) {
        const name = type === '기타' ? item.기타재료.이름 : item.일반재료.이름;
        const amount = type === '기타' ? item.기타재료.수량 : item.일반재료.수량;

        if (acc[name]) {
          acc[name] += amount;
        } else {
          acc[name] = amount;
        }
      }
      return acc;
    }, {});

    const result = Object.keys(materialMap).map(key => ({
      이름: key,
      수량: materialMap[key],
    }));

    return result;
  };

  const accumulateMoney = (data: typeof HONE_BREAK_RECIPE, start: number, end: number) => {
    return data.reduce((acc, item) => {
      if (item.돌파레벨 >= start && item.돌파레벨 < end) {
        acc += item.금전;
      }
      return acc;
    }, 0);
  };

  const calculateRecipe = () => {
    setHonerecipe({
      연마석: HONE_RECIPE[level.end].누적_연마석 - HONE_RECIPE[level.start].누적_연마석,
      금전: HONE_RECIPE[level.end].누적_금전 - HONE_RECIPE[level.start].누적_금전,
    });

    setBreakMaterial(accumulateMaterials(HONE_BREAK_RECIPE, level.start, level.end, subject));
    setBreakMoney(accumulateMoney(HONE_BREAK_RECIPE, level.start, level.end));

    setShowResult(true);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-bold">연마 재료 계산기</span>

      <span className="text-red-500 text-sm sm:text-base">
        연마 레벨 90까지의 정보를 제공하며 추후 확장됩니다.
        <br />
        종류, 시작 레벨, 목표 레벨을 입력하고 계산을 누르세요.
      </span>

      <div className="flex flex-row gap-4">
        <Select className="w-24" name={subject} items={SUBJECTS} onSelect={selectSubject} />

        <div className="flex flex-row items-center gap-1">
          <input
            disabled={subject === '종류'}
            className="w-20 h-10 border rounded outline-none text-center"
            placeholder="0"
            value={level.start || ''}
            onChange={inputStart}
          />
          <span> ~ </span>
          <input
            disabled={subject === '종류'}
            className="w-20 h-10 border rounded outline-none text-center"
            placeholder="90"
            value={level.end || ''}
            onChange={inputEnd}
          />
          <button
            type="button"
            className="w-14 h-10 rounded bg-blue-500 text-white outline-none disabled:opacity-50"
            disabled={subject === '종류' || level.end === 0}
            onClick={calculateRecipe}
          >
            계산
          </button>
        </div>
      </div>

      <div className="flex flex-col min-h-32 border rounded p-4 gap-10">
        {showResult && (
          <>
            <div className="flex flex-col gap-1">
              <span className="font-medium">
                연마 레벨 {level.start}부터 {level.end}까지 필요한 연마 재료
              </span>
              <span>{`필요 재료: 연마석(${subject}) ${honeRecipe.연마석}개`}</span>
              <span>{`필요 금전: ${addCommaToNumber(honeRecipe.금전)}`}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium">
                연마 레벨 {level.start}부터 {level.end}까지 필요한 돌파 재료
              </span>
              <div className="flex flex-row">
                <span>필요 재료: </span>
                <div className="flex flex-row flex-wrap flex-1 px-2 gap-1">
                  {breakMaterial?.map((item, index) => <span key={index}>{`${item.이름}-${item.수량}개`}</span>)}
                </div>
              </div>
              <span>{`필요 금전: ${addCommaToNumber(breakMoney)}전`}</span>
            </div>
          </>
        )}
      </div>

      {showResult && (
        <div className="flex flex-col select-none">
          <div className="flex flex-row py-1 bg-gray-200">
            <span className="flex-1 text-center text-sm sm:text-base font-medium">연마 레벨</span>
            <span className="flex-1 text-center text-sm sm:text-base font-medium">연마석</span>
            <span className="flex-1 text-center text-sm sm:text-base font-medium">금전</span>
            <span className="flex-1 text-center text-sm sm:text-base font-medium">누적 연마석</span>
            <span className="flex-1 text-center text-sm sm:text-base font-medium">누적 금전</span>
          </div>

          {HONE_RECIPE?.slice(level.start + 1, level.end + 1).map((item, index) => (
            <div key={index} className="flex flex-row flex-1 py-1 border-b border-gray-300">
              <span className="flex-1 text-center text-sm sm:text-base">{item.연마레벨}</span>
              <span className="flex-1 text-center text-sm sm:text-base">{item.연마석}</span>
              <span className="flex-1 text-center text-sm sm:text-base">{item.금전}</span>
              <span className="flex-1 text-center text-sm sm:text-base">{item.누적_연마석}</span>
              <span className="flex-1 text-center text-sm sm:text-base">{item.누적_금전}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
