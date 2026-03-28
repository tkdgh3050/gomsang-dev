"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentDateShort, setCurrentDateShort] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatted = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}`;
    setCurrentDateShort(formatted);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="space-y-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium dark:bg-orange-900/30 dark:text-orange-300"
        >
          Frontend Developer
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          곰처럼 우직한 개발자 <span className="text-orange-600">김상호</span> 입니다 🐻
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed"
        >
          기술의 화려함보다는 본질에 집중하며, 팀의 생산성을 높이는 효율적인 프론트엔드 환경을 구축하는 것에 가치를 둡니다.
        </motion.p>
      </section>

      {/* Philosophy Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Award className="text-orange-500" /> 핵심 가치
        </h2>
        <div className="grid gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-card hover:shadow-md transition-all cursor-default"
          >
            <h3 className="font-medium text-lg mb-2">1. 기술의 본질에 집중</h3>
            <p className="text-muted-foreground">단순히 UI를 구현하는 것을 넘어, 비즈니스 로직을 효율적으로 처리할 수 있는 아키텍처를 고민합니다.</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-card hover:shadow-md transition-all cursor-default"
          >
            <h3 className="font-medium text-lg mb-2">2. 생산성 높은 환경 구축</h3>
            <p className="text-muted-foreground">Lint/Prettier 설정, 커스텀 에디터 구축 등 팀원들이 더 중요한 고민에 집중할 수 있는 환경을 만듭니다.</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-card hover:shadow-md transition-all cursor-default"
          >
            <h3 className="font-medium text-lg mb-2">3. 책임감과 리더십</h3>
            <p className="text-muted-foreground">TF 리더로서 일정을 관리하고 요구사항을 조율하며 결과로 증명하는 리더십을 발휘합니다.</p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Briefcase className="text-orange-500" /> 경력 사항
        </h2>
        <div className="space-y-12 border-l-2 border-muted pl-6 ml-2">
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-background" />
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="text-xl font-bold">이노룰스 (InnoRules)</h3>
                <span className="text-sm text-muted-foreground">2025.01 – {currentDateShort || "---"} (재직중)</span>
              </div>
              <p className="text-orange-600 font-medium">Frontend Developer</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Astro + React 하이브리드 아키텍처 도입</li>
                <li>CodeMirror 6 기반 커스텀 수식 입력기 개발</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-muted border-4 border-background" />
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="text-xl font-bold">주식회사 티맥스핀테크 (Tmax Fintech)</h3>
                <span className="text-sm text-muted-foreground">2023.06 – 2024.10</span>
              </div>
              <p className="text-orange-600 font-medium">Frontend Developer</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>배달서비스공제조합 백오피스 FE 개발</li>
                <li>AI 디지털교과서 수학 활동 교구 개발 및 TF 리더</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-muted border-4 border-background" />
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="text-xl font-bold">(주)신세계아이앤씨 (Shinsegae I&C)</h3>
                <span className="text-sm text-muted-foreground">2019.09 – 2021.08</span>
              </div>
              <p className="text-orange-600 font-medium">Logistics System Manager</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>신세계 TV쇼핑 물류/WMS 시스템 운영 및 관리</li>
                <li>자체 WMS 시스템 구축 프로젝트 참여</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <BookOpen className="text-orange-500" /> 학력 및 자격
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-bold">고려대학교 대학원</h3>
              <p className="text-sm text-muted-foreground">인공지능학과 석사 중퇴 (2021 – 2023)</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold">숭실대학교</h3>
              <p className="text-sm text-muted-foreground">산업정보시스템공학과 학사 (2013 – 2019)</p>
            </div>
          </div>
          <div className="space-y-3 bg-muted/50 p-6 rounded-2xl">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Award size={14} className="text-orange-500" /> 정보처리기사 (2019)
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Award size={14} className="text-orange-500" /> 데이터분석 준전문가 ADsP (2019)
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Award size={14} className="text-orange-500" /> 투자자산운용사 (2024)
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-orange-50 dark:bg-orange-950/20 rounded-3xl space-y-6">
        <h2 className="text-2xl font-bold">프로젝트를 더 자세히 보고 싶으신가요?</h2>
        <div className="flex justify-center">
          <Button asChild size="lg" className="rounded-full bg-orange-600 hover:bg-orange-700 text-white border-none">
            <Link href="/projects">프로젝트 보러가기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
