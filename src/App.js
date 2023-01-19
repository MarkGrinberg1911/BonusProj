import './App.css';
import { useContext, useEffect } from 'react';
import { DataContext } from './Context';
function App() {
  const { resorts, quad } = useContext(DataContext)

  useEffect(() => {
    quad()
  }, [])
  return (
    <div className="App">
      {/* {resorts[0]?.Country} */}
      {resorts?.map((item, index) => {
        return(
        <ul>
          <li key={index}>{item.Country}</li>
        </ul>)
      })}
    </div>
  );
}

export default App;
