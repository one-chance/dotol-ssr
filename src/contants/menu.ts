export const MENUS = [
  {
    category: '치장',
    menu: [
      {
        name: '치장 목록',
        path: '/costume/list',
      },
      {
        name: '명품의 목록',
        path: '/costume/luxury-list',
      },
      {
        name: '캐릭터 룩북',
        path: '/costume/lookbook',
      },
    ],
  },
  {
    category: '도감',
    menu: [
      {
        name: '일반 장비',
        path: '/db/normal-equip',
      },
      {
        name: '환수 장비',
        path: '/db/pet-equip',
      },
      // {
      //   name: '환수 시동',
      //   path: '/db/pet-activate',
      // },
      {
        name: '신수 유물',
        path: '/db/artifact-equip',
      },
      {
        name: '한벌 효과',
        path: '/db/set-effect',
      },
      {
        name: '장비 마법',
        path: '/db/equip-skill',
      },
      {
        name: '특수 마법',
        path: '/db/special-skill',
      },
    ],
  },
  {
    category: '강화',
    menu: [
      {
        name: '일반 장비 - 제작',
        path: '/upgrade/normal-equip/make',
      },
      {
        name: '일반 장비 - 강화',
        path: '/upgrade/normal-equip/reforge',
      },
      {
        name: '일반 장비 - 연마',
        path: '/upgrade/normal-equip/hone',
      },
      {
        name: '일반 장비 - 기술 능력',
        path: '/upgrade/normal-equip/enchant',
      },
      {
        name: '환수 장비 - 재련',
        path: '/upgrade/pet-equip/reforge',
      },
      {
        name: '신수 유물 - 제작',
        path: '/upgrade/artifact-equip/make',
      },
      // {
      //   name: '신수 유물 - 분해',
      //   path: '/upgrade/artifact-equip/disassemble',
      // },
      {
        name: '신체 강화 - 능력치',
        path: '/upgrade/body-enhance/ability',
      },
      {
        name: '신체 강화 - 재료',
        path: '/upgrade/body-enhance/recipe',
      },
      {
        name: '신체 강화 - 보너스',
        path: '/upgrade/body-enhance/bonus',
      },
    ],
  },
  {
    category: '콘텐츠',
    menu: [
      {
        name: '업적',
        path: '/content/achievement',
      },
      {
        name: '탐험일지',
        path: '/content/adventure',
      },
      {
        name: '고고학',
        path: '/content/archeology',
      },
    ],
  },
  {
    category: '계산기',
    menu: [
      {
        name: '연마 재료',
        path: '/calculator/honing-recipe',
      },
      {
        name: '연마 분해',
        path: '/calculator/honing-disassemble',
      },
      {
        name: '생산 재료',
        path: '/calculator/production',
      },
      {
        name: '전투력',
        path: '/calculator/power',
      },
      {
        name: '능력치',
        path: '/calculator/ability',
      },
      {
        name: '각인수치',
        path: '/calculator/old-engrave',
      },
      {
        name: '세시마을 달력',
        path: '/calculator/calendar',
      },
    ],
  },
];

export const USER_MENUS = [
  { name: '프로필', path: '/user/profile' },
  { name: '비밀번호 변경', path: '/user/change-password' },
  { name: '캐릭터 관리', path: '/user/character' },
];
