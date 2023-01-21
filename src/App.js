import './App.css';
import { useContext, useEffect } from 'react';
import { DataContext } from './Context';
import Resorts from './Pages/Resorts';
import ResortForm from './Components/ResortForm';
function App() {

  return (
    <div className="App">
<ResortForm/>
      <Resorts />
    </div>
  );
}

export default App;
