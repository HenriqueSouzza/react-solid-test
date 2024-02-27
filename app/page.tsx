'use client'

import { useEffect } from "react";
import { usePage } from "@/hooks";
import { useRouter } from "next/navigation";

export default function Page() {
  const { authenticated } = usePage();
  const { push } = useRouter();

  useEffect(() => {
    if (authenticated) {
      push('/dashboard')
    }
    push('/login')
  }, [push, authenticated]);
}