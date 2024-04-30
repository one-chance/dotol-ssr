import Link from 'next/link';
import { clothes, book, hammer, search, calculator } from '@/components/icon';
import { MENUS } from '@/contants';
import { Menu } from '@/types';
import { getTodayVisitor, getTotalVisitor } from '@/utils/api';
import UserMenu from './UserMenu';
import Login from './Login';
import Visitor from './Visitor';

export default async function Sidebar() {
  const ICONS = [clothes, book, hammer, search, calculator];

  const todayVisitor = await getTodayVisitor();
  const totalVisitor = await getTotalVisitor();

  return (
    <aside className="min-w-60 z-10 hidden md:block">
      <div className="flex flex-col w-60 bg-[#223A54] p-5 gap-5 fixed top-0 bottom-0">
        <div className="flex flex-row justify-center">
          <Link href="/" className="text-4xl font-bold text-white">
            도톨
          </Link>
        </div>

        <UserMenu />

        <hr className="bg-[#808496]" />

        <nav className="flex flex-col gap-8 overflow-y-scroll scrollbar-hidden">
          {MENUS.map((main: Menu, index: number) => (
            <div key={main.category} className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-2">
                <span className="text-xl text-[#808496]">{ICONS[index]}</span>
                <span className="text-xl font-semibold text-[#808496]">{main.category}</span>
              </div>

              <div className="flex flex-col gap-2 pl-7">
                {main.menu.map(item => (
                  <Link key={item.name} href={item.path} className="font-medium text-[#E9E1D1]">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Visitor />
        </nav>
      </div>

      <Login />
    </aside>
  );
}
