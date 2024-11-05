import React from 'react';

const Breadcrumb: React.FC = () => {
    const items: string[] = ['Docs Home', 'MongoDB Manual', 'Reference', 'mongosh Methods', 'Collections'];

    return (
        <div className="px-4 py-4 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
                {items.map((item, index) => (
                    <React.Fragment key={item}>
                        <span>{item}</span>
                        {index < items.length - 1 && <span>/</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Breadcrumb;
