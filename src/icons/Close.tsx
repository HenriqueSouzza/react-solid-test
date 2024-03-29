import React from "react";
import { IconProps } from "@/interfaces";

export const Close = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" data-testid={props.testId || 'Close'} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" height={props.height && `${props.height}px`} width={props.width && `${props.width}px`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);
