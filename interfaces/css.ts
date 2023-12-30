import CSS from 'csstype';

export type CssProps = CSS.Properties | {
  [key: string]: CSS.Properties
}
