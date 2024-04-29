'use client';

import { useEffect, useRef, useState } from 'react';

type SelectProps = {
  className?: string;
  name: string;
  items: readonly string[];
  onSelect: (item: string) => void;
  disabled?: boolean;
  maxHeight?: string;
};

export default function Select({ className, name, items, onSelect, disabled, maxHeight }: SelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(name);

  const selectItem = (item: string) => {
    setSelected(item);
    onSelect(item);
    setShow(false);
  };

  useEffect(() => {
    setSelected(name);
  }, [name]);

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
    <div className={`relative cursor-pointer h-10 ${className}`}>
      <div
        ref={selectRef}
        className={`flex flex-row w-full h-full justify-between items-center border rounded px-2 bg-white gap-2`}
        onClick={() => {
          !disabled && setShow(!show);
        }}
      >
        <span
          className={`flex-1 text-sm sm:text-base text-ellipsis overflow-hidden whitespace-nowrap ${disabled && 'text-gray-400'}`}
        >
          {selected}
        </span>

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
              fill={disabled ? '#9CA3AF' : '#131A22'}
            />
          )}
        </svg>
      </div>

      {show && (
        <div
          ref={optionRef}
          className={`absolute bg-white border rounded w-full mt-0.5 z-[100] ${maxHeight && `${maxHeight} overflow-y-auto`}`}
        >
          {/* {name && (
            <div className="flex items-center h-8 px-2 hover:bg-gray-200" onClick={() => selectItem(name)}>
              <p className="text-sm sm:text-base select-none text-ellipsis overflow-hidden whitespace-nowrap">{name}</p>
            </div>
          )} */}

          {items?.map(item => (
            <div
              key={item}
              className="flex items-center h-8 px-2 hover:bg-gray-200 first:rounded-t last:rounded-b"
              onClick={() => selectItem(item)}
            >
              <p className="text-sm sm:text-base select-none text-ellipsis overflow-hidden whitespace-nowrap">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
