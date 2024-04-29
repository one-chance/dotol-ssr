/* eslint-disable @next/next/no-img-element */
type CostumeInfo = {
  index: number;
  name: string;
  part: number;
  gender: number;
  luxury: boolean;
};

type CostumeListProps = {
  list: CostumeInfo[];
  selectedList: string[];
  onWear: (item: string) => void;
};

export default function CostumeList({ list, selectedList, onWear }: CostumeListProps) {
  const basicURl = 'https://avatar.baram.nexon.com/Profile/itemRender.aspx?inm=';

  return (
    <div className="flex flex-row flex-wrap content-start min-h-[622px] gap-2.5 flex-grow p-2.5">
      {list?.map((item: CostumeInfo) => (
        <div key={item.index} className="flex flex-col cursor-pointer" onClick={() => onWear(item.name)}>
          <div className="flex flex-col justify-center items-center w-[150px] min-h-[90px] bg-[#E6E5E5]">
            <img src={`${basicURl}${encodeURI(item.name)}`} alt={item.name} />
          </div>
          <div className="flex flex-row justify-between px-2 py-1 bg-[#E6E5E5]">
            <span className="text-xs">{item.gender === 0 ? '공용' : item.gender === 1 ? '남자' : '여자'}</span>
            <span className="text-xs">{item.luxury ? '명품의' : ''}</span>
          </div>
          <div className="flex flex-row justify-center border px-1 py-0.5 max-w-[150px]">
            <span className={`text-xs ${selectedList.includes(item.name) && 'text-red-500'}`}>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
