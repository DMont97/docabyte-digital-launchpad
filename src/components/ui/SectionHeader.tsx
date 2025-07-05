
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  smallTitle: string;
  mainTitle: string;
  icon?: LucideIcon;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  smallTitle,
  mainTitle,
  icon: Icon,
  className = ""
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {/* Small title with icon */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {Icon && (
          <Icon className="w-5 h-5 text-cyan-600" strokeWidth={2} />
        )}
        <span className="font-inter font-semibold text-sm uppercase tracking-wider text-cyan-600">
          {smallTitle}
        </span>
      </div>
      
      {/* Main title */}
      <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-800">
        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          {mainTitle}
        </span>
      </h2>
    </div>
  );
};

export default SectionHeader;
