import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card = ({ children, className = '', hoverEffect = true }: CardProps) => {
    return (
        <div className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 ${hoverEffect ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
