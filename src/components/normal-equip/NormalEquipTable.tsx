'use client';

import { useLayoutEffect, useState } from 'react';
import { MakeData, ReforgeData } from '@/types';
import { getMakeData, getReforgeData } from '@/utils/supabase';

type TableProps = {
  as: 'make' | 'reforge';
  equip: string;
};

const MakeTable = ({ equip }: { equip: string }) => {
  const TITLES = ['장비', '제작고문서', '재료', '금전'];
  const [data, setData] = useState<MakeData[]>([]);

  useLayoutEffect(() => {
    const getData = async () => {
      const tempData = await getMakeData(equip);
      setData(tempData);
    };

    getData();
  }, [equip]);

  return data?.map((item: MakeData, index: number) => (
    <div key={index} className="flex flex-col border-b border-gray-300">
      <div className="flex flex-row">
        <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
          {TITLES[0]}
        </span>
        <span className="flex-1 px-2 py-1 text-sm sm:text-base">{item.equip}</span>
      </div>
      <div className="flex flex-row">
        <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
          {TITLES[1]}
        </span>
        <span className="flex-1 px-2 py-1 text-sm sm:text-base">{item.book}</span>
      </div>
      <div className="flex flex-row">
        <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
          {TITLES[2]}
        </span>
        <span className="flex-1 px-2 py-1 text-sm sm:text-base">{item.material}</span>
      </div>
      <div className="flex flex-row">
        <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
          {TITLES[3]}
        </span>
        <span className="flex-1 px-2 py-1 text-sm sm:text-base">{item.money}</span>
      </div>
    </div>
  ));
};

const ReforgeTable = ({ equip }: { equip: string }) => {
  const TITLES = ['장비', '재료', '금전', '확률'];
  const [data, setData] = useState<ReforgeData[]>([]);

  useLayoutEffect(() => {
    const getData = async () => {
      const tempData = await getReforgeData(equip);
      setData(tempData);
    };

    getData();
  }, [equip]);

  return data?.map((item: ReforgeData, index: number) => (
    <div key={index} className="flex flex-col border-b border-gray-300">
      <div className="flex flex-row">
        <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
          {TITLES[0]}
        </span>
        <span className="flex-1 px-2 py-1 text-sm sm:text-base">{item.equip}</span>
      </div>
      <div className="flex flex-row">
        <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
          {TITLES[1]}
        </span>
        <span className="flex-1 px-2 py-1 text-sm sm:text-base">{item.material}</span>
      </div>
      <div className="flex flex-row">
        <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
          {TITLES[2]}
        </span>
        <span className="flex-1 px-2 py-1 text-sm sm:text-base">{item.money}</span>
      </div>
      <div className="flex flex-row">
        <span className="w-24 sm:w-32 bg-gray-200 px-2 py-1 font-medium text-sm sm:text-base text-center">
          {TITLES[3]}
        </span>
        <span className="flex-1 px-2 py-1 text-sm sm:text-base">{item.probability}</span>
      </div>
    </div>
  ));
};

export default function NormalEquipTable({ as, equip }: TableProps) {
  const Table = {
    make: MakeTable,
    reforge: ReforgeTable,
  }[as];

  return (
    <div className="border-t border-r border-gray-300">
      <Table equip={equip} />
    </div>
  );
}
