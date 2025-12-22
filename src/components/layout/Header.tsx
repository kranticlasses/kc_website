import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Award } from 'lucide-react';
import logo from '../../assets/Klogo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Results', path: '/results' },
        { name: 'Parents', path: '/parents' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-5xl font-bold flex items-center gap-3 -ml-2">
                    <img
                        src={logo}
                        alt="Kranti Classes Logo"
                        className="h-16 w-16 object-contain"
                        style={{ mixBlendMode: 'multiply' }}
                    />
                    <span style={{ fontFamily: 'Rakkas, serif' }}>
                        <span className="text-orange-500">Kranti</span>{' '}
                        <span className="text-blue-900">Classes</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/scholarship"
                        className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
                    >
                        <Award size={18} />
                        <span>Scholarship</span>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-gray-700 hover:text-blue-600 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/scholarship"
                            className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <Award size={18} />
                            <span>Scholarship</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
