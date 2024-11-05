// src/components/RightSidebar/index.tsx
import React from 'react';

const RightSidebar: React.FC = () => {
    const links: string[] = [
        'Definition',
        'Compatibility',
        'Syntax',
        'Behavior',
        'Examples',
        'Learn More'
    ];

    return (
        <div className="w-64 flex-shrink-0">
            <div className="border-l border-gray-200 pl-4">
                <h3 className="text-sm font-semibold mb-4">On this page</h3>
                <nav className="space-y-2">
                    {links.map(link => (
                        <a                      // ✅ Aquí está la etiqueta de apertura
                            key={link}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            className="block text-sm text-gray-600 hover:text-green-700"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default RightSidebar;