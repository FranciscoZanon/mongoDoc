import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
    const menuItems = [
        { label: 'Products', hasSubmenu: true },
        { label: 'Resources', hasSubmenu: true },
        { label: 'Solutions', hasSubmenu: true },
        { label: 'Company', hasSubmenu: true },
        { label: 'Pricing', hasSubmenu: false },
    ];

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-[1900px] mx-4 flex items-center h-16">
                {/* Logo */}
                <div className="flex items-center space-x-8">
                    <a href="/" className="flex items-center">
                        <img
                            src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
                            alt="MongoDB Logo"
                            className="h-8"
                        />
                    </a>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                className="flex items-center space-x-1 text-gray-600 hover:text-green-700 bg-transparent border-none focus:outline-none"
                            >
                                <span>{item.label}</span>
                                {item.hasSubmenu && <ChevronDown size={16} />}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4 ml-auto">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-green-700 bg-transparent border-none focus:outline-none">
                        <Globe size={16} />
                        <span>Eng</span>
                        <ChevronDown size={16} />
                    </button>
                    <a href="/support" className="text-gray-600 hover:text-green-700">
                        Support
                    </a>
                    <a href="/signin" className="text-gray-600 hover:text-green-700">
                        Sign In
                    </a>
                    <a
                        href="/try-free"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        Try Free
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;