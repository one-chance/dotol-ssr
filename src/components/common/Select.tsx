/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useEffect, useRef, useState } from 'react';

type SelectProps = {
  className?: string;
  name?: string;
  items: readonly string[];
  onSelect: (item: string) => void;
  disabled?: boolean;
};

export default function Select({ className, name, items, onSelect, disabled }: SelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(name ?? items[0]);

  const selectItem = (id: number) => {
    if (id === 0 && name) {
      setSelected(name);
      onSelect(name);
      setShow(false);
      return;
    }

    setSelected(items[id - 1]);
    onSelect(items[id - 1]);
    setShow(false);
  };

  useEffect(() => {
    const autoClose = (e: CustomEvent<MouseEvent>) => {
      if (!selectRef.current?.contains(e.target as Node) && !optionRef.current?.contains(e.target as Node)) {
        e.stopPropagation();
        setShow(false);
      }
    };

    window.addEventListener(`mousedown`, autoClose as EventListener);

    return () => {
      window.removeEventListener(`mousedown`, autoClose as EventListener);
    };
  }, []);

  return (
    <div className={`relative cursor-pointer ${className}`}>
      <div
        ref={selectRef}
        className={`flex flex-row w-full h-10 justify-between items-center border rounded px-2 bg-white gap-2`}
        onClick={() => {
          !disabled && setShow(!show);
        }}
      >
        <span className="flex-1 text-sm sm:text-base text-ellipsis overflow-hidden whitespace-nowrap">{selected}</span>

        <svg width="24" height="24" fill="none">
          {show ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.192 15.754a.75.75 0 001.059.057l6.748-6.053 6.75 6.053a.75.75 0 101-1.116L12.5 8.192a.75.75 0 00-1.001 0l-7.25 6.503a.75.75 0 00-.057 1.059z"
              fill="#131A22"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.192 10.25a.75.75 0 011.059-.058l6.748 6.053 6.75-6.053a.75.75 0 011 1.116L12.5 17.811a.75.75 0 01-1.001 0l-7.25-6.503a.75.75 0 01-.057-1.059z"
              fill="#131A22"
            />
          )}
        </svg>
      </div>

      {show && (
        <div ref={optionRef} className="absolute bg-white border rounded w-full mt-0.5 z-[100]">
          {name && (
            <div className="flex items-center h-8 px-2 hover:bg-gray-200" onClick={() => selectItem(0)}>
              <p className="text-sm sm:text-base select-none text-ellipsis overflow-hidden whitespace-nowrap">{name}</p>
            </div>
          )}

          {items.map((item: string, index: number) => (
            <div
              key={item}
              className="flex items-center h-8 px-2 hover:bg-gray-200 first:rounded-t last:rounded-b"
              onClick={() => selectItem(index + 1)}
            >
              <p className="text-sm sm:text-base select-none text-ellipsis overflow-hidden whitespace-nowrap">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
