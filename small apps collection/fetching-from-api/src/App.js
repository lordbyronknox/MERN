import { Suspense } from 'react';
import './App.css';
import Axios from './components/Axios';
import Fetch from './components/Fetch';
import Swr from './components/Swr';

function App() {
  return (
    <div className="App">
      <Fetch />
      <Axios />
      <Suspense fallback={<h1> Loading... </h1>}>
      <Swr />
      </Suspense>
    </div>
  );
}

export default App;
