import React, { useState } from 'react'
import data from './data.json';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

function App() {

  const [sidebarSelected, setSidebarSelected] = useState(0);
  const cardTypes = ['work', 'play', 'study', 'exercise', 'social', 'self-care'];
  const timeframes = ['daily', 'weekly', 'monthly'];

  function selectSidebar(option) {    
    setSidebarSelected(option);
  }

  return (
    <main className="main">
      <Sidebar selected={sidebarSelected} selectSidebar={selectSidebar} />
      {data.map((dataEntry, index) => (
        <Card
          key={index}
          type={cardTypes[index]}
          title={dataEntry.title}
          current={dataEntry.timeframes[timeframes[sidebarSelected]].current}
          previous={dataEntry.timeframes[timeframes[sidebarSelected]].previous}
        />
      ))}
    </main>
  );
}

export default App