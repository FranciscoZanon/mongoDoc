import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    return (
        <div className="border-b border-gray-200 px-4 py-2">
            <div className="max-w-[800px] mx-auto relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-2 border rounded-md text-sm"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
        </div>
    );
};

export default SearchBar;