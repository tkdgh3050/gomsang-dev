---
title: "YouTIL"
company: "개인 프로젝트"
period: "2022"
role: "Full-stack Developer"
description: "유튜브 동영상에 원하는 재생시간을 북마크로 추가하고 마지막으로 보던 위치를 이어서 볼 수 있도록 하는 등의 편의기능을 제공하는 웹사이트"
tags:
  - "Frontend - React, TypeScript, Redux, Styled-components"
  - "Backend - Express, TypeScript, MySQL"
  - "Deploy - Amazon EC2, NGINX"
---

![YouTIL Preview](/images/portfolio/youtil/responsive-pc-main.png)

## 목차
- [서비스 소개](#서비스-소개)
- [주요 기능](#주요-기능)
- [Troubleshooting](#troubleshooting)
- [개선 사항](#개선-사항-performance-optimization)

---

## 🌟 서비스 소개
### 서비스 요약
- 유튜브 동영상에 원하는 재생시간을 북마크로 추가하고 마지막으로 보던 위치를 이어서 볼 수 있도록 하는 등의 편의기능을 제공하는 웹 서비스입니다.

### 서비스 링크
- [http://youtil.store](http://youtil.store) (과금으로 인한 서비스 중단)

### 개발 배경
- **탐색 피로도 해소**: 긴 유튜브 동영상을 시청하다 실수로 나갔을 때, 마지막 시청 위치를 찾기 위해 다시 탐색해야 하는 불편함을 해결하고자 했습니다.
- **간편한 북마크**: 다시 보고 싶은 특정 재생 시점을 간편하게 저장하고 관리할 수 있는 기능이 필요했습니다.
- **통합 학습 환경**: 영상 시청과 동시에 필기가 가능하도록 하여 학습 효율을 극대화하고자 구현했습니다.

### 개발 기간
- **2023.02.13 – 2023.03.10** (약 1개월)

---

## 주요 기능

### 1. 반응형 웹 구현
- **기능 요약**: 디바이스 크기에 따른 가변 레이아웃 구현 (768px 기준 분기점).
- **구현 방식**: CSS Media Query를 활용한 반응형 그리드 및 컴포넌트 재배치.

![PC Main](/images/portfolio/youtil/responsive-pc-main.png)
![Mobile Main](/images/portfolio/youtil/responsive-mobile-main.png)

![PC Video](/images/portfolio/youtil/responsive-pc-video.png)
![Mobile Video](/images/portfolio/youtil/responsive-mobile-video.png)

### 2. 이어보기 기능
- **기능 요약**: 마지막 시청 위치를 저장하여 재시청 시 해당 시점부터 이어서 재생.

![Resume Modal](/images/portfolio/youtil/resume-modal.png)

### 3. 북마크 기능
- **기능 요약**: 특정 재생 시점을 북마크로 저장하고 클릭 시 즉시 해당 위치로 이동.

![Bookmark Feature](/images/portfolio/youtil/bookmark.png)

### 4. 실시간 노트필기 기능
- **기능 요약**: 영상 시청 중 필기가 가능하며 자동 저장 기능 제공.

![Note Taking](/images/portfolio/youtil/note-taking.png)

### 5. STT (Speech To Text) 연동
- **기능 요약**: 마이크 입력을 통한 실시간 음성-텍스트 변환 및 필기 추가.

![STT Feature](/images/portfolio/youtil/stt.png)

### 6. 카테고리 별 정리 및 즐겨찾기
- **기능 요약**: 동영상별 카테고리 관리 및 중요 영상 즐겨찾기 폴더링.

![Category & Favorite](/images/portfolio/youtil/category.png)

---

## 🛠️ Troubleshooting

### 1. forEach 비동기 작업 순차 실행 문제
- **문제**: `forEach` 내 `await` 작업이 순차적으로 완료되지 않아 데이터 정합성 문제 발생.
- **해결**: `forEach`를 `for...of` 루프로 변경하여 비동기 작업의 순차적 완료를 보장함.

### 2. 새로고침 시 Redux 상태 초기화 현상
- **문제**: 브라우저 새로고침 시 전역 상태(로그인 정보 등)가 소멸됨.
- **해결**: `redux-persist`를 도입하여 상태를 `localStorage`에 영속화함으로써 상태 유실 방지.

---

## 📈 개선 사항 (Performance & Optimization)

### 1. API 호출 최적화 (Debounce 적용)
- **개선**: 커스텀 훅을 통해 `Debounce(1s)`를 적용, 호출 횟수를 **약 95% 감소**시킴.

![Debounce Before](/images/portfolio/youtil/debounce-before.gif)
![Debounce After](/images/portfolio/youtil/debounce-after.gif)

### 2. 웹 호환성 개선 (Dialog Polyfill)
- **개선**: `dialog-polyfill`을 적용하여 크로스 브라우징 호환성 확보.

![Safari Issue](/images/portfolio/youtil/safari-issue.png)
![Safari Polyfill Result](/images/portfolio/youtil/safari-result.gif)

### 3. Lighthouse 기반 로딩 성능 최적화
- **결과**: **FCP 약 20%, LCP 약 29% 개선**.

![Lighthouse Before](/images/portfolio/youtil/lighthouse-before.png)
![Lighthouse After](/images/portfolio/youtil/lighthouse-after.png)
