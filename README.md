# 도톨 v3

## About the Project

https://dotols.com<br/>
2021년부터 운영 중인 바람의나라 게임 커뮤니티입니다. 게임에서 제공하지 않지만, 유저에겐 필요한 데이터와 기능을 제공합니다. 넥슨과 협업하여 비공개 API를 제공받는 [공식 팬사이트](https://baram.nexon.com/FanSite/List)입니다. 개인 프로젝트로 혼자서 개발, 배포, 운영을 담당합니다.

<img src="https://asset.dotols.com/image/termsofservice.png" style="max-width:600px" />

## Stack Share

베이스: Next.js, TypeScirpt

번들러: Turbopack

컨벤션: ESLint, Prettier

상태관리: Jotai

스타일링: Tailwind

배포: Vercel

## Timeline

23.08 v2 배포 및 운영<br />
24.04 v3 개발 시작<br />
24.05 v3 배포 및 운영

## Improvement

v2 : React(v18), TypeScript(v5), Recoil, React-Query, Emotion, Vite <br/>
v3 : Next.js(v14), TypeScript(v5), Jotai, Tailwind, Vercel, Supabase <br/>

- Client Side Rendering이 Server Side Rendering으로 변경되었습니다.
  - 사이트에서 제공하는 약 40개 고정 페이지에 알맞은 SEO를 적용했습니다.
  - 추가되는 사용자 게시물에 대해 동적으로 사이트맵과 SEO가 생성됩니다.
  - 서버에서 렌더링된 HTML을 제공하므로 초기 로딩 시간이 감소했습니다.
  - 로컬 스토리지 대신 쿠키와 미들웨어를 사용하여 보안을 강화했습니다.
  - Server Components, Server Actions, API Routes로 코드 복잡성을 줄였습니다.
- Next 14는 Emotion과 호환되지 않아 Tailwind로 변경했습니다.
  - 프로젝트 전체에서 일관된 스타일을 유지할 수 있습니다.
  - 반응형 디자인을 쉽게 구현할 수 있습니다.
- 상태관리 라이브러리를 Recoil에서 Jotai로 변경했습니다.
  - 번들 크기가 감소하고 호환성이 증가합니다.
  - 비동기 상태 관리가 간단하고 Suspense를 지원합니다.
  - 최소한의 리렌더링을 통해 성능을 최적화합니다.
- AWS S3를 통해 정적 호스팅하던 방식에서 Vercel로 배포 방식을 변경했습니다.
  - 빌드, 배포, 모니터링, 로깅, 테스트, 라우팅, 환경변수를 통합 관리합니다.
  - CI/CD가 자동으로 지원되며 무료 버전으로 사용할 수 있습니다.

## Conclusion

v2는 리뉴얼한 덕분에 v1 보다 안정적이고 확장성 높은 구조를 가지게 되었으나 웹사이트에서 제공하는 기능이 많아지면서 코드 스플리팅이 복잡해지고, 페이지별로 맞춤 SEO를 적용하지 못하는 문제가 발생했습니다. 그래서 Server Side Rendering 방식으로 변경하는 v3 리뉴얼을 진행하게 되었습니다. Next 14 버전의 최신 기능인 React Server Components, Server Actions, API Routes, App Router, Middleware 등을 적절히 사용한 덕분에 서버 관련 작업을 쉽게 처리하고 최적화할 수 있었습니다. 기존 CSR 프로젝트와 달리 Next.js에서 사용할 수 없는 라이브러리의 대체제를 찾아보면서 SSR 환경에서 발생할 수 있는 문제와 그 해결 과정을 경험했고, 특히 Vercel을 통해 배포까지 진행한 과정이 많은 도움이 되었습니다.

## Author

Github: [one-chance](https://github.com/one-chance)<br/>
Email: woody.front@gmail.com
