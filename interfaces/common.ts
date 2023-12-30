import { ChildrenProps, CssProps, ElementProps } from ".";

export interface CommonProps {
  css?: CssProps
  component?: ElementProps
  children?: ChildrenProps
  className?: string
}