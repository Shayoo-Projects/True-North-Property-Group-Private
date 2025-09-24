
import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-auto text-tn-primary" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M50 10L90 50L50 90L10 50L50 10Z" stroke="currentColor" strokeWidth="4"/>
        <path d="M50 10V90" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 50L50 30L90 50L50 70L10 50Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M50 10L25 25L50 50L75 25L50 10Z" fill="currentColor" />
    </svg>
);

export default LogoIcon;
