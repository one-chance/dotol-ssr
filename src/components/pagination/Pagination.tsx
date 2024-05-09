'use client';

import { left, right } from '@/components/icon';
import { usePathname, useRouter } from 'next/navigation';

type PaginationProps = {
  currentPage: number;
  totalPage: number;
};

export default function Pagination({ currentPage, totalPage }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();

  const movePage = (_page: number) => {
    router.replace(`${pathname}?page=${_page}`);
  };

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPage, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageList = getPageNumbers();

  return (
    <div className="flex flex-row justify-center items-center w-full h-9 gap-2.5">
      <button
        type="button"
        disabled={currentPage === 1}
        className="text-[#6877ff] outline-none disabled:opacity-50"
        onClick={() => movePage(Math.max(1, currentPage - 5))}
      >
        {left}
      </button>

      <div className="flex flex-row items-center min-w-[220px] gap-2.5">
        {pageList.map((pageNumber: number) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => movePage(pageNumber)}
            className={`w-9 h-9 rounded font-medium outline-none select-none ${pageNumber === currentPage && 'text-[#6877ff]'}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={totalPage < 5 || currentPage === totalPage}
        className="text-[#6877ff] outline-none disabled:opacity-50"
        onClick={() => movePage(Math.min(totalPage, currentPage + 5))}
      >
        {right}
      </button>
    </div>
  );
}
