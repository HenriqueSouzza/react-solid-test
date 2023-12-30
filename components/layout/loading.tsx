'use client'

import { Spinner } from '@/icons';
import { Box } from '@/components';
import React from 'react';

export const Loading = () => {
  return (
    <Box
      component="section"
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        color: '#8953f2',
        backgroundColor: '#f7cff8',
        width: '100%',
        fontWeight: 700,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner height={100} width={100} />
      Loading...
    </Box>
  )
}
