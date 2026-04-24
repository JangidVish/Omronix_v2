import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  id,
  containerClassName = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-background',
    alt: 'bg-[#0A1628]',
    gradient: 'bg-gradient-to-b from-[#0A1628] to-[#050D1A]'
  };

  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 overflow-hidden ${variants[variant]} ${className}`}
    >
      <div className={`container mx-auto px-6 max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  align = 'left',
  className = ''
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`max-w-3xl mb-16 ${alignments[align]} ${className}`}>
      {subtitle && (
        <span className="text-secondary font-heading font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-white/60 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default Section;
