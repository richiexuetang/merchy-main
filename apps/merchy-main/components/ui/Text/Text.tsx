/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, CSSProperties } from 'react';

interface TextProps {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | any;
  html?: string;
  onClick?: () => any;
}

type Variant = 'heading' | 'body' | 'pageHeading' | 'sectionHeading';

const Text: FunctionComponent<TextProps> = ({ children }) => {
  // const componentsMap: {
  //   [P in Variant]: React.ComponentType<any> | string;
  // } = {
  //   body: 'div',
  //   heading: 'h1',
  //   pageHeading: 'h1',
  //   sectionHeading: 'h2',
  // };

  // const Component:
  //   | JSXElementConstructor<any>
  //   | React.ReactElement<any>
  //   | React.ComponentType<any>
  //   | string = componentsMap![variant!];

  // const htmlContentProps = html
  //   ? {
  //       dangerouslySetInnerHTML: { __html: html },
  //     }
  //   : {};

  return (
    // <Component
    //   className={cn(
    //     {
    //       [s.body]: variant === 'body',
    //       [s.heading]: variant === 'heading',
    //       [s.pageHeading]: variant === 'pageHeading',
    //       [s.sectionHeading]: variant === 'sectionHeading',
    //     },
    //     className
    //   )}
    //   onClick={onClick}
    //   style={style}
    //   {...htmlContentProps}
    // >
    //   {children}
    // </Component>
    <div>{children}</div>
  );
};

export default Text;
