'use client'

import React from 'react'
import { AppContext } from '@/context';
import { useRootContext } from '@/hooks';

interface ContextProviderProps {
  children: React.ReactNode
}

export default function ContextProvider({ children }: ContextProviderProps) {
  return (
    <AppContext.Provider value={useRootContext()}>
      {children}
    </AppContext.Provider>
  )
}