import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  glow = false,
  blur = 'md',
  ...props 
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <div 
      className={`
        bg-surface-card 
        border border-white/10 
        rounded-xl 
        ${blurClasses[blur]} 
        ${glow ? 'shadow-[0_0_30px_rgba(37,99,235,0.05)]' : ''} 
        transition-all duration-300
        hover:border-primary/30
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-white/5 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-white/5 ${className}`}>{children}</div>
);

export default Card;
