# Vue 3 Webpack Template

**Vue CLI(webpack)** 기반의 간결하고 현대적인 **Vue 3 + TypeScript** 템플릿입니다. Vue Router, Pinia, JSX를 지원하며 ES5 호환 프로덕션 빌드를 생성합니다.

[English](./README.md) | [简体中文](./README.zh-CN.md) | [한국어](./README.ko.md)

## 특징

- **Vue 3 + TypeScript** — `<script setup>` Composition API; 엔트리는 `<RouterView />`를 직접 렌더링하는 JSX 루트 컴포넌트(`App.vue` 없음)
- **Vue Router + Pinia** — 해시 히스토리 라우팅과 라우트 단위 lazy loading, Pinia 기본 설치
- **Babel 기반 TypeScript** — `.ts` / `.tsx`를 `ts-loader` 없이 `@babel/preset-typescript` + `babel-loader`로 컴파일; 타입 오류는 빌드가 아닌 IDE / `vue-tsc`에서 확인
- **JSX / TSX** — `@vue/babel-plugin-jsx`로 지원
- **Sass / SCSS** — 별도 설정 없이 바로 사용 가능, 공용 변수는 `src/scss/main.scss`(`$color--primary` 등)
- **CSS Modules** — `*.module.css` / `*.module.scss` 파일에 자동 적용, 클래스명은 `[local]__[hash:base64]`, 원래 이름과 함께 camelCase도 내보냄
- **ES5 문법 기준** — `.browserslistrc`가 `ie 11`을 타겟으로 하여 Babel과 webpack 런타임이 ES5 전용 문법만 출력; core-js 폴리필을 온디맨드로 주입(`useBuiltIns: 'usage'`), `pnpm build`는 `--no-module`(레거시 출력만)로 실행
- **ESLint + Prettier** — 사전 구성 완료; 개발 서버에서 저장 시 린트 실행(`lintOnSave: 'error'`), VS Code에서 저장 시 Prettier 포맷팅
- **Autoprefixer** — `.postcssrc.js`를 통해 적용, 대상 브라우저는 browserslist로 결정
- **경로 별칭** — `@` / `~` → `src/`, `assets` → `src/assets/`
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

| 명령어       | 설명                                                |
| ------------ | --------------------------------------------------- |
| `pnpm dev`   | 개발 서버 실행(HMR 포함), 포트 `2000`, 저장 시 린트 |
| `pnpm build` | `dist/`로 프로덕션 빌드, `--no-module`(ES5 출력)    |

## 프로젝트 구조

```text
├── index.html              # HTML 템플릿(lang, title, favicon은 vue.config.js에서 주입)
├── static/                 # dist/에 그대로 복사됨(favicon.ico)
├── src/
│   ├── main.tsx            # 엔트리: Pinia + Router 설치, <RouterView /> 마운트
│   ├── router/             # vue-router(해시 히스토리, lazy routes)
│   ├── views/              # 라우트 단위 컴포넌트(HomeView.vue)
│   ├── components/         # 재사용 컴포넌트(HelloWorld.vue)
│   ├── assets/             # 번들링되는 리소스(logo.png; 별칭: assets/)
│   └── scss/               # 공용 SCSS 변수와 믹스인(main.scss)
├── types/                  # 환경(ambient) 선언(.vue, *.module.*, 이미지 등)
├── babel.config.js         # Babel 설정(TS/JSX, 온디맨드 polyfill, 런타임 헬퍼)
├── vue.config.js           # Vue CLI / webpack 설정(엔트리, 로더, 별칭, CSS Modules, HTML)
├── tsconfig.json           # TypeScript 설정(paths는 webpack 별칭과 일치)
├── .browserslistrc         # 대상 브라우저(ie 11 → ES5 문법 기준)
├── .postcssrc.js           # PostCSS(autoprefixer)
├── .eslintrc.cjs           # ESLint 설정
├── .prettierrc.yml         # Prettier 설정
└── .editorconfig           # 에디터 스타일
```

## 커스터마이징

- **개발 서버 포트** — `vue.config.js`의 `devServer.port` 수정(기본값 `2000`)
- **페이지 제목 / 언어** — `vue.config.js`의 `getHtmlPluginConfig()`에서 `title`과 `lang` 수정
- **대상 브라우저** — `.browserslistrc` 수정(현재 `ie 11`, ES5 문법 기준; 장단점은 파일 내 주석 참고)
- **경로 별칭** — `vue.config.js`(`chainWebpack`)와 `tsconfig.json`(`paths`) 양쪽에 추가
- **파비콘** — `static/favicon.ico` 교체
