import React from 'react';
import { CommonProps } from '@/interfaces';
import styled from 'styled-components';
import { Component } from '@/components';

interface CardContentProps extends CommonProps { }

export const CardContent = styled(Component)(({ css }: CardContentProps) => ({ ...css }));
