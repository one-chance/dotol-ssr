import { EquipSkillList } from '@/components';
import { SKILL_LIST } from '@/contants';

export default function EquipSkillPage() {
  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-semibold">장비 마법</span>

      <div className="flex flex-col gap-8 sm:gap-16">
        <EquipSkillList
          title="[고유 마법]"
          description="장비를 착용하면 사용할 수 있는 액티브 스킬"
          list={SKILL_LIST.unique}
        />

        <EquipSkillList
          title="[부여 마법]"
          description="NPC를 통해 장비에 부여한 액티브 스킬"
          list={SKILL_LIST.enchant}
        />

        <EquipSkillList
          title="[기술서 마법]"
          description="기술서를 통해 신화 등급의 갑옷에 부여한 액티브 스킬"
          list={SKILL_LIST.book}
        />

        <EquipSkillList
          title="[자동버프 마법]"
          description="장비를 착용하면 자동으로 적용되는 패시브 스킬"
          list={SKILL_LIST.buff}
        />
      </div>
    </div>
  );
}
