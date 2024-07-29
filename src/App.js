import React from 'react';
import Dropdown from './Dropdown';
import './tailwind.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option with icon' },
    { value: 'option3', label: 'Long Long Option 3' },
    { value: 'option4', label: 'Long Long Long Option 4' },
    { value: 'option5', label: 'Long Long Long Long Option 5' },
    { value: 'option6', label: 'Long Long Long Long Long Option 6' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/*  */}
      </header>
      <div className='container p-8'>
        <div className="flex flex-row">
          <div className="md:w-1/6 w-1/3">
            <label>Label</label>
          </div>
          <div className="md:w-5/6 w-2/3">
            <Dropdown options={options} />
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </div>
    </div>
  );
}

export default App;
