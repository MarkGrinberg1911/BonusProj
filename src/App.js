import './App.css';
import { useContext, useState } from 'react';
import { DataContext } from './Context';
function App() {
const {infoBase}=useContext(DataContext)
  return (
    <div className="App">
     {infoBase}
    </div>
  );
}

export default App;
