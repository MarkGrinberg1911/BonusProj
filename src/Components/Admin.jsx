import { useState, } from "react";
import { db } from "../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

function Admin(props) {
const AddDoc= async()=> {
    
}
const [temp, setTemp]=useState()
console.log(temp)
    return (
        <div>
            <input type="text" onChange={(e)=>setTemp(e.target.value)} />
        </div>
    );
}

export default Admin;