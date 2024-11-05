import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Driver {
    name: string;
    logo: string;
}

const DriversSection: React.FC = () => {
    const drivers: Driver[] = [
        {
            name: 'C#',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKa6FP89rKybb6GWI04Xqj5fd3A9jLyDeAdA&s'
        },
        {
            name: 'Java Sync',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-47NADCfJ84KvNoDW-pWNeejlLMSUbu-1gA&s'
        },
        {
            name: 'Node.js',
            logo: 'https://www.shutterstock.com/image-vector/nellore-india-june-10-2023-260nw-2315312313.jpg'
        },
        {
            name: 'PyMongo',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzH0xZzn3JAa7IFU1exo7rdYaQSObTiaIuw&s'
        }
    ];

    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="font-bold mb-4">MongoDB with drivers</h2>
            <p className="text-sm mb-4">
                This page documents a mongosh method. To see the equivalent method in a MongoDB driver, see the
                corresponding page for your programming language:
            </p>
            <div className="flex space-x-4">
                {drivers.map(driver => (
                    <button
                        key={driver.name}
                        className="px-4 py-2 border rounded-md bg-white text-sm flex items-center gap-2 hover:bg-gray-50"
                    >
                        <img
                            src={driver.logo}
                            alt={`${driver.name} logo`}
                            className="w-5 h-5 object-contain"
                        />
                        <span>{driver.name}</span>
                    </button>
                ))}
            </div>
            <button className="flex items-center text-blue-600 text-sm mt-4">
                <span>Show all</span>
                <ChevronDown className="h-4 w-4 ml-1" />
            </button>
        </div>
    );
};

export default DriversSection;