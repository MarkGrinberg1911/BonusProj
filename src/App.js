import './App.css';
import { useContext, useEffect } from 'react';
import { DataContext } from './Context';
import Resorts from './Pages/Resorts';
import Admin from './Components/Admin';
function App() {

  return (
    <div className="App">
<Admin/>
      <Resorts />
    </div>
  );
}

export default App;
