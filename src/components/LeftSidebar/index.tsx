import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const LeftSidebar: React.FC<{
    methods: Record<string, any>;
    selectedMethod: string;
    onMethodSelect: (method: string) => void;
}> = ({ methods, selectedMethod, onMethodSelect }) => {
    const [isCollectionsOpen, setIsCollectionsOpen] = useState(true);

    return (
        <div className="w-64 border-r border-gray-200 flex-shrink-0 bg-gray-50">
            <div className="py-2">
                <button
                    onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                    className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                >
                    <ChevronDown
                        size={16}
                        className={`mr-2 transition-transform ${isCollectionsOpen ? '' : '-rotate-90'
                            }`}
                    />
                    <span className="font-medium">Collections</span>
                </button>

                {isCollectionsOpen && (
                    <div className="mt-1">
                        {/* Mantener los 5 métodos originales primero */}
                        {Object.entries(methods).map(([key]) => (
                            <button
                                key={key}
                                onClick={() => onMethodSelect(key)}
                                className={`w-full text-left px-8 py-1 text-sm font-mono ${selectedMethod === key
                                    ? 'text-green-700 bg-green-50'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                db.collection.{key}
                            </button>
                        ))}

                        {/* Agregar los métodos adicionales */}
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.aggregate
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.analyzeShard
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.bulkWrite
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.compactStruct
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.configureQuery
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.count
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.countDocuments
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.createIndex
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.createIndexes
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.dataSize
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.distinct
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.drop
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.dropIndex
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.dropIndexes
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.ensureIndex
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.estimatedDoc
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.explain
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.findAndModify
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.findOne
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.getIndexes
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.hideIndex
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.mapReduce
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.reIndex
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.replaceOne
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.stats
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.storageSize
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.totalSize
                        </button>
                        <button className="w-full text-left px-8 py-1 text-sm font-mono text-gray-700 hover:bg-gray-100">
                            db.collection.validate
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeftSidebar;