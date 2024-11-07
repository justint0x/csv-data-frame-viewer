import { useState } from 'react';
import './App.css';

import DataFrameTable from './components/DataFrameTable';
import FileUpload from './components/FileUpload';


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
