import { db } from "../FirebaseConfig";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Resorts from '../Pages/Resorts';

function ResortForm(props) {
    const {register,handleSubmit, formState: { errors },} = useForm();
    const [temp, setTemp]=useState("")
    const AddDoc = async (data) => {
        await setDoc(doc(db, "Resorts", data.resortName), data);
        window.location.reload(true)
    }
    const Delete=async()=>{
        await deleteDoc(doc(db, "Resorts", temp));
        window.location.reload(true)
    }
    
    return (
        <div>
            
            <p>Warning! Submiting a Resort that already exists in the data base will rewrite it!</p>

            <form onSubmit={handleSubmit((data) => AddDoc(data))}>
                <input placeholder="Resort Name" {...register('resortName', { required: true })} />
                {errors.resortName && <p>Please insert Resort Name</p>}
                <input placeholder="Country" {...register('Country', { required: true })} />
                {errors.country && <p>Please insert Country</p>}
                <input placeholder="About" {...register('About', { required: true })} />
                {errors.about && <p>Please insert description</p>}
                <input type="submit" />
            </form>
            <Resorts />
            <br/>
            <br/>
            <br/>
<p>Delete Resort !!!!</p>
<input onChange={((e)=>setTemp(e.target.value))} type="text" />
<button onClick={Delete}>Delete Resort</button>

        </div>
    );
}


export default ResortForm;