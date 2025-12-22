import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    to?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({
    children,
    variant = 'primary',
    to,
    onClick,
    className = '',
    type = 'button'
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
        secondary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-lg hover:shadow-xl",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={styles} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
