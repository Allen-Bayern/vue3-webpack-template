# Vue 3 Webpack Template

**Vue CLI(webpack)** 기반의 간결하고 현대적인 **Vue 3 + TypeScript** 템플릿입니다.

[English](./README.md) | [简体中文](./README.zh-CN.md) | [한국어](./README.ko.md)

## 특징

- **Vue 3** — Composition API 지원
- **TypeScript** — `ts-loader` 없이 `@babel/preset-typescript`와 `babel-loader`로 컴파일
- **JSX / TSX** — `@vue/babel-plugin-jsx`로 지원
- **Sass / SCSS** — 별도 설정 없이 바로 사용 가능
- **CSS Modules** — `*.module.css` / `*.module.scss` 파일에 자동 적용, camelCase 내보내기 규칙 포함
- **ESLint + Prettier** — 사전 구성 완료, 개발 서버에서 저장 시 린트 실행
- **Autoprefixer** — PostCSS를 통해 적용, 대상 브라우저는 `browserslist`로 결정
- **core-js** — 필요할 때 polyfill 자동 주입(`useBuiltIns: 'usage'`), 수동 import 불필요
- **경로 별칭** — `@` → `src/`, `assets` → `src/assets/`
- 간결하고 읽기 쉬운 설정으로 직접 소유하고 커스터마이징하기 좋음

## 사전 요구 사항

- Node.js `>= 16`
- pnpm 8+ ([Corepack](https://nodejs.org/api/corepack.html)으로 활성화: `corepack enable`)

## 빠른 시작

[degit](https://github.com/Rich-Harris/degit)으로 새 프로젝트를 생성하세요 — git 이력 없이 템플릿 파일만 가져옵니다:

```bash
npx degit Allen-Bayern/vue3-webpack-template my-app
# 또는: pnpm dlx degit Allen-Bayern/vue3-webpack-template my-app

cd my-app
pnpm install
pnpm dev
```

그 다음 <http://localhost:2000>을 열고 개발을 시작하세요.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | 개발 서버 실행(HMR 포함), 포트 `2000` |
| `pnpm build` | 프로덕션 빌드, `dist/`로 출력 |

## 프로젝트 구조

```text
├── index.html              # HTML 템플릿(lang과 title은 vue.config.js에서 주입)
├── static/                 # dist/에 그대로 복사됨(favicon.ico)
├── src/
│   ├── main.ts             # 앱 엔트리
│   ├── App.vue             # 루트 컴포넌트
│   ├── components/         # 재사용 컴포넌트
│   ├── assets/             # 번들링되는 리소스(별칭: assets/)
│   └── shims-vue.d.ts      # .vue 모듈 타입 선언
├── babel.config.js         # Babel 설정(TS, JSX, 온디맨드 polyfill)
├── vue.config.js           # Vue CLI / webpack 설정(엔트리, 로더, 별칭, CSS Modules)
├── tsconfig.json           # TypeScript 설정
├── .eslintrc.cjs           # ESLint 설정
└── .prettierrc.yml         # Prettier 설정
```

## 커스터마이징

- **개발 서버 포트** — `vue.config.js`의 `devServer.port` 수정(기본값 `2000`)
- **페이지 제목 / 언어** — `vue.config.js`의 `getHtmlPluginConfig()`에서 `title`과 `lang` 수정
- **대상 브라우저** — `package.json`의 `browserslist` 필드 수정(기본값 `> 1%`, `last 2 versions`)
- **파비콘** — `static/favicon.ico` 교체
