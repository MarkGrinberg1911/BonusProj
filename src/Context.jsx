import { createContext, useState} from "react";
import { db } from "./FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export const DataContext = createContext();
function Context(props) {
    const [infoBase, setInfoBase] = useState([]);
    
    const quad= async() =>{
    const q = query(collection(db, "Resorts"));
    // , where("Resort", "==", true));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        setInfoBase([...infoBase, doc.data()])
        // console.log(doc.data())   
    });
}
console.log(infoBase)   


    return (

        <DataContext.Provider value={{ infoBase,quad }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default Context;