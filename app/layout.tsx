import React from 'react';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { ChildrenProps } from '@/interfaces';
import ContextProvider from '@/provider/context-provider';

export const metadata: Metadata = {
  title: 'Conceitos teste',
  description: 'App conceitos de teste',
}

interface LoginLayoutProps {
  children: ChildrenProps
}

export default function RootLayout({ children }: LoginLayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ContextProvider>
            {children}
          </ContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
