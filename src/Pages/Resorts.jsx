import { useContext, useEffect } from 'react';
import { DataContext } from '../Context';

function Resorts() {
    const { resorts, quad } = useContext(DataContext)
  
    useEffect(() => {
      quad()
    }, [])
    console.log(resorts)
    return (
      <div className="App">
        {/* {resorts[0]?.Country}{resorts[0]?.Price} */}
        {resorts?.map((item, index) => {
          return(
          <ul>
            <li key={index}> {resorts.id}  {item.Country}</li>
          </ul>)
        })}
        
      </div>
    );
  }
  
  export default Resorts;
  