type CostumeInfo = {
  index: number;
  name: string;
  part: number;
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
    <div className="flex flex-row flex-wrap min-h-[360px] gap-2.5 flex-grow p-2.5">
      {list.map((item: CostumeInfo) => (
        <div key={item.index} className="flex flex-col cursor-pointer" onClick={() => onWear(item.name)}>
          <div className="flex flex-row justify-center items-center w-[150px] min-h-[80px] bg-[#E6E5E5]">
            <img src={`${basicURl}${encodeURI(item.name)}`} alt={item.name} />
          </div>
          <div className="flex flex-row justify-center border py-0.5">
            <span className={`text-sm ${selectedList.includes(item.name) && 'text-red-500'}`}>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
