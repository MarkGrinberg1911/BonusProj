import './App.css';
import { useContext, useEffect } from 'react';
import { DataContext } from './Context';
import Resorts from './Pages/Resorts';
function App() {

  return (
    <div className="App">

      <Resorts />
    </div>
  );
}

export default App;
