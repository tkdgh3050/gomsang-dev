"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authenticate } from "./actions";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    setError(false);
    
    try {
      const result = await authenticate(password);
      
      if (result.success) {
        router.push("/");
        router.refresh();
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950/40">
            <Lock size={40} />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Access Restricted</h1>
          <p className="text-muted-foreground leading-relaxed">
            지원자의 개인정보 보호를 위해 암호를 입력받고 있습니다. <br />
            지원자 이름을 입력하시면 웹 페이지로 이동됩니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <input
              type="password"
              placeholder="지원자 이름 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isPending}
              className={`w-full h-12 px-4 rounded-xl border bg-card focus:outline-none focus:ring-2 transition-all ${
                error ? "border-red-500 focus:ring-red-200" : "border-muted focus:ring-orange-200"
              } disabled:opacity-50`}
            />
            {error && (
              <p className="text-sm text-red-500 font-medium">비밀번호가 일치하지 않습니다.</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-12 rounded-xl bg-orange-600 hover:bg-orange-700 text-white border-none disabled:opacity-70"
          >
            {isPending ? "확인 중..." : "확인"}
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gomsang.dev. All rights reserved.
        </p>
      </div>
    </div>
  );
}
