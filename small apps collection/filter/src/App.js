import './App.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

function App() {
const [searchTerm, setsearchTerm] = useState('');

  return (
    <div className="App">
      <input 
      type="text" 
      placeholder="Search..." 
      onChange={(event) => {
        setsearchTerm(event.target.value);
      }} 
      />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
       return (
       <div className='user' key={key}> 
        <p>{val.id} - {val.first_name} {val.last_name} </p>
        </div>
       );
      })}
    </div>
  );
}

export default App;
