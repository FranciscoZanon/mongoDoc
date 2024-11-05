import React from 'react';
import DriversSection from './DriversSection';
import { Method } from '../../types';

interface MethodContentProps {
    method: Method;
}

const MethodContent: React.FC<MethodContentProps> = ({ method }) => {
    return (
        <div className="flex-1 pr-8 min-w-0">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-normal text-green-700">{method.title}</h1>
                <button className="px-4 py-2 border rounded-md text-sm flex items-center space-x-2">
                    <span className="text-gray-600">Open Interactive Tutorial</span>
                </button>
            </div>

            <DriversSection />

            <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Definition</h2>
                {method.syntax && (
                    <div className="font-mono bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                        {method.syntax}
                    </div>
                )}

                <p className="mb-6">{method.description}</p>

                {method.returns && (
                    <div className="mb-6">
                        <h3 className="font-bold mb-2">{method.returns.title}</h3>
                        <p>{method.returns.content}</p>
                    </div>
                )}

                {method.compatibility && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">{method.compatibility.title}</h2>
                        <p className="mb-4">{method.compatibility.content}</p>
                        <ul className="list-disc pl-6 mb-8">
                            {method.compatibility.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}

                {/* Syntax Section */}
                <h2 className="text-2xl font-bold mb-4">Syntax</h2>
                {method.syntax && (
                    <div className="font-mono bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
                        {method.syntax}
                    </div>
                )}

                {/* Example Section */}
                <h2 className="text-2xl font-bold mb-4">Example</h2>
                {method.example && (
                    <div className="font-mono bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8 whitespace-pre">
                        {method.example}
                    </div>
                )}

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Note</h3>
                    <p className="text-blue-700">
                        This example uses the MongoDB Java driver. Make sure you have the proper dependencies
                        included in your project and the MongoDB server running at localhost:27017.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MethodContent;