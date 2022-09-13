import React from 'react';

interface PageTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  fontSize?: any;
  color?: string;
}

const PageText: React.FC<PageTextProps> = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};

export default PageText;
