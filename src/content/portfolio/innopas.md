---
title: "InnoPAS"
company: "이노룰스 (InnoRules)"
period: "2025.02 – 현재"
role: "Frontend Developer (아키텍처 설계)"
description: "보험 상품 개발 시 PV 산출 및 로직 검증을 수행하는 웹 기반 솔루션 개발"
tags:
  - "Frontend - React, TypeScript, Astro, Jotai, Tailwind"
  - "Core - CodeMirror 6, API Pipeline"
---

## 목차
- [프로젝트 요약](#프로젝트-요약)
- [담당 업무](#담당-업무)
- [주요 개발 사항](#주요-개발-사항)

---

## 🌟 프로젝트 요약
### 개요
- 보험 상품 개발 과정에서 필수적인 PV(Premium Value) 산출을 브라우저 환경에서 빠르고 정확하게 진행할 수 있는 웹 기반 솔루션 개발 프로젝트입니다.

### 참여 정보
- **참여 기간**: 2025.02 – 현재 (진행 중)
- **참여 인원**: 총 5명 (FE 2명, BE 2명, 계리사 1명)

---

## 📋 담당 업무
- **FE 아키텍처 설계 및 구축**: 
  - 초석이 되는 개발 환경 구축 및 확장성 있는 전체 아키텍처 설계를 주도했습니다.
  - Astro와 React를 결합한 하이브리드 구조를 통해 초기 로딩 성능과 인터랙티브한 사용자 경험을 동시에 확보했습니다.
- **표준 파이프라인 구축**:
  - `ErrorBoundary`와 연계된 전역 에러 처리 시스템 및 공통 API 호출 파이프라인을 구축하여 안정적인 상태 관리를 구현했습니다.
- **커스텀 에디터 엔진 개발**:
  - 솔루션의 핵심인 수식 입력 및 로직 작성을 위한 `CodeMirror 6` 기반 웹 에디터를 구현했습니다.

---

## ⭐ 주요 개발 사항

### 1. CodeMirror 6 기반 커스텀 에디터
- **기능 요약**: 전문적인 보험 로직 작성을 위한 브라우저 기반 코드 에디터 엔진 개발.
- **주요 기능**:
  - 실시간 문법 하이라이팅 및 커스텀 자동완성(Autocomplete) 체계 구축.
  - 컴포넌트 렌더링 위치(팝업/모달 등)에 따른 입력 제어 및 고도화된 읽기 전용(Read-only) 모드 제공.
- **구현 방식**: CodeMirror 6의 `EditorState`와 `EditorView`를 활용하여 React 환경에 최적화된 고성능 `CustomEditor` 컴포넌트 설계.
- **Troubleshooting**:
  - **문제**: Chromium 기반 브라우저에서 모달 내 에디터 사용 시 포커스 이탈 및 전역 클립보드 이벤트 충돌 버그 발생.
  - **해결**: 관련 이슈(GitHub Issue Tracking) 리서치를 통해 브라우저 특화 패치인 `EditorView.EDIT_CONTEXT = false`를 `useEffect` 초기화 단계에 적용함으로써 입력 환경의 안정성을 확보했습니다.
