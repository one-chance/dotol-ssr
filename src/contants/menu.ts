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
        name: '태닝 목록',
        path: '/costume/tanning',
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
        name: '일반 장비 - 목록',
        path: '/db/normal-equip/list',
      },
      {
        name: '일반 장비 - 제작',
        path: '/db/normal-equip/make',
      },
      {
        name: '일반 장비 - 재련',
        path: '/db/normal-equip/reforge',
      },
      {
        name: '일반 장비 - 연마',
        path: '/db/normal-equip/enhance',
      },
      {
        name: '일반 장비 - 한벌효과',
        path: '/db/normal-equip/set-effect',
      },
      {
        name: '환수 장비 - 목록',
        path: '/db/pet-equip/list',
      },
      {
        name: '환수 장비 - 재련',
        path: '/db/pet-equip/reforge',
      },
      {
        name: '환수 장비 - 명중률',
        path: '/db/pet-equip/accuracy',
      },
      {
        name: '신수 유물 - 목록',
        path: '/db/artifact-equip/list',
      },
      {
        name: '신수 유물 - 제작',
        path: '/db/artifact-equip/make',
      },
      {
        name: '기술 능력',
        path: '/db/skill-ability',
      },
      {
        name: '장비 마법',
        path: '/db/equip-skill',
      },
    ],
  },
  {
    category: '콘텐츠',
    menu: [
      {
        name: '업적 정보',
        path: '/content/achievement',
      },
      {
        name: '탐험일지 정보',
        path: '/content/adventure',
      },
      {
        name: '고고학 정보',
        path: '/content/archeology',
      },
      {
        name: '신체 강화 - 능력치',
        path: '/content/body-enhance/ability',
      },
      {
        name: '신체 강화 - 재료',
        path: '/content/body-enhance/recipe',
      },
      {
        name: '신체 강화 - 보너스',
        path: '/content/body-enhance/bonus',
      },
    ],
  },
  {
    category: '계산기',
    menu: [
      {
        name: '생산',
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
        name: '세시마을',
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
