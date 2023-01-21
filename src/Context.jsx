import { createContext, useState } from "react";
import { db } from "./FirebaseConfig";
import { collection, query, getDocs} from "firebase/firestore";

export const DataContext = createContext();
function Context(props) {
    const [resorts, setResorts] = useState([]);

    const quad = async () => {
        const q = query(collection(db, "Resorts"));
        // , where("Resort", "==", true));
        
        const querySnapshot = await getDocs(q);
        const temp = []
        querySnapshot.forEach((doc) => {
            
            temp.push({id:doc.id,
                data: doc.data()})
        });
        setResorts([...resorts, ...temp])
    }
    // console.log(resorts[0]) 
    // console.log(resorts[1]) 


    return (

        <DataContext.Provider value={{ resorts, quad }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default Context;