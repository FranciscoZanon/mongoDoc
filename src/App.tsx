// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Breadcrumb from './components/Breadcrumb';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MethodContent from './components/MethodContent';
import { methodsData } from './data/methodsData';

const App: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('find');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <SearchBar placeholder="Search MongoDB Docs or Ask MongoDB AI" />

      <div className="flex flex-1 w-full">
        <LeftSidebar
          methods={methodsData}
          selectedMethod={selectedMethod}
          onMethodSelect={setSelectedMethod}
        />

        <main className="flex-1 min-w-0"> {/* Agregamos min-w-0 para evitar que el contenido se desborde */}
          <div className="max-w-[1600px] mx-auto w-full px-4">
            <Breadcrumb />
            <div className="flex">
              <MethodContent method={methodsData[selectedMethod]} />
              <RightSidebar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;