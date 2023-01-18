import { createContext, useState, useContext } from "react";
import { db } from "./FirebaseConfig";

export const DataContext = createContext();
function Context(props) {
    const [infoBase, setInfoBase]=useState(1);
    const rawData=db


    return (

        <DataContext.Provider value={{rawData}}>
            {props.children}
        </DataContext.Provider>
    );
}

export default Context;