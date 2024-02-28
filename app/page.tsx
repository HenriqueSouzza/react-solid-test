'use client'

import { useRouter } from "next/navigation";

export default function Page() {
  const { push } = useRouter();
  push('/login')
}