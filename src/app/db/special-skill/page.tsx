import { SkillList } from '@/components';

export default function SetSkillPage() {
  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-semibold">특수 마법</span>

      <div className="flex flex-col gap-8 sm:gap-16">
        <SkillList type="set" title="[한벌 마법]" description="한벌 효과를 활성화하면 사용할 수 있는 액티브 스킬" />

        <SkillList
          type="status"
          title="[출세가도 마법]"
          description="출세가도의 특정 신분을 달성하면 사용할 수 있는 액티브 스킬"
        />

        <SkillList type="archeology" title="[고고학 마법]" description="고고학 보상으로 얻을 수 있는 액티브 스킬" />
      </div>
    </div>
  );
}
