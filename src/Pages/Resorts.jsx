import { useContext, useEffect } from 'react';
import { DataContext } from '../Context';

function Resorts() {
    const { resorts, quad } = useContext(DataContext)
  
    useEffect(() => {
      quad()
    }, [])
    // console.log(resorts.doc.id)
    return (
      <div className="App">
        <ul>
        {/* {resorts[0]?.Country}{resorts[0]?.Price} */}
        {resorts?.map((item, index) => {
          return(
            <li key={index}> {item.id} located at   {item.data.Country}</li>
          )})}
          
          </ul>
      </div>
    );
  }
  
  export default Resorts;
  