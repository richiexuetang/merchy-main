import React from 'react';

interface PageItemWrapperProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
}

const PageItemWrapper: React.FC<PageItemWrapperProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};

export default PageItemWrapper;
