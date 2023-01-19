import './App.css';
import {useContext, useEffect} from 'react';
import { DataContext } from './Context';
function App() {
const {infoBase, quad}=useContext(DataContext)

useEffect(()=>{
  quad()
},[])
  return (
    <div className="App">
     {infoBase[0]?.Country}
    </div>
  );
}

export default App;
