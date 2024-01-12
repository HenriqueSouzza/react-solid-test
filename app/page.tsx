'use client'

import { useAuth } from "@/hooks"
import { redirect } from "next/navigation";

export default function Page() {
  const { isUserLogged } = useAuth();

  if (!isUserLogged) {
    redirect('/login')
  }

  redirect('/dashboard')
}