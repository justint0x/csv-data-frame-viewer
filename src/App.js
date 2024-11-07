import { useState } from 'react';
import './App.css';

import DataFrameTable from './components/DataFrameTable';
import FileUpload from './components/FileUpload';

const pandasData = {
  "result": {
    "columns": ["Name", "Birthdate", "Score", "Grade"],
    "data": [
      ["Alice", 631152000000000000, 90, "A"],
      ["Bob", 665452800000000000, 75, "B"],
      ["Charlie", 699580800000000000, 85, "A"],
      ["David", 733881600000000000, 70, "B"],
      ["Eve", 768096000000000000, null, "A"]
    ],
    "data_types": ["object", "int64", "object", "category"]
  }
};

function App() {
  const [data, setData] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          SpreadSheet Converter
        </p>
      </header>
      <main className='main'>
        <FileUpload setData={setData}/>
        <DataFrameTable jsonData={data} />
      </main>
    </div>
  );
}

export default App;
