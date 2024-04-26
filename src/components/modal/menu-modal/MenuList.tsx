'use client';

import Link from 'next/link';
import { useState } from 'react';
import { clothes, book, hammer, search, calculator } from '@/components/icon';
import { MENUS } from '@/contants';
import { Menu } from '@/types';

const arrow = (open: boolean) => {
  return (
    <svg width="24" height="24" fill="none">
      {open ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.192 15.754a.75.75 0 001.059.057l6.748-6.053 6.75 6.053a.75.75 0 101-1.116L12.5 8.192a.75.75 0 00-1.001 0l-7.25 6.503a.75.75 0 00-.057 1.059z"
          fill="#E9E2D1"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.192 10.25a.75.75 0 011.059-.058l6.748 6.053 6.75-6.053a.75.75 0 011 1.116L12.5 17.811a.75.75 0 01-1.001 0l-7.25-6.503a.75.75 0 01-.057-1.059z"
          fill="#E9E2D1"
        />
      )}
    </svg>
  );
};

type MenuListProps = {
  onClose: () => void;
};

export default function MenuList({ onClose }: MenuListProps) {
  const ICONS = [clothes, book, hammer, search, calculator];
  const [showSubMenu, setShowSubMenu] = useState([false, false, false, false, false]);

  const switchSubMenu = (index: number) => {
    const newShowSubMenu = [...showSubMenu];
    newShowSubMenu[index] = !newShowSubMenu[index];
    setShowSubMenu(newShowSubMenu);
  };

  return (
    <div className="flex flex-col gap-6">
      {MENUS.map((main: Menu, index: number) => (
        <div key={main.category} className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center" onClick={() => switchSubMenu(index)}>
            <div className="flex flex-row items-center gap-3">
              <span className="text-2xl text-[#E9E2D1]">{ICONS[index]}</span>
              <span className="text-2xl text-[#E9E2D1] leading-none">{main.category}</span>
            </div>

            <span>{arrow(showSubMenu[index])}</span>
          </div>

          {showSubMenu[index] && (
            <div className="flex flex-col pl-8 gap-1">
              {main.menu.map(item => (
                <Link key={item.name} href={item.path} className="text-[#E9E2D1] leading-[36px]" onClick={onClose}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
