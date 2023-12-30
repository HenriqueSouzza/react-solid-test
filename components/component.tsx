import { CommonProps } from "@/interfaces";

type ComponentProps = CommonProps;

export const Component = ({ className, children, component: Component = 'div', ...props }: ComponentProps) => {
  const { css, ...abstractProps } = props

  if (children) {
    return <Component className={className} {...abstractProps}>{children}</Component>
  }

  return <Component className={className} {...abstractProps} />
}
