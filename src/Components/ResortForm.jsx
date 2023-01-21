import { db } from "../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";

function ResortForm(props) {
    const {register,handleSubmit, formState: { errors },} = useForm();
    const AddDoc = async (data) => {
        await setDoc(doc(db, "Resorts", data.resortName), data);
        window.location.reload(true)
    }
    
    return (
        <div>
            
            <p>Warning! Submiting a Resort that already exists in the data base will rewrite it!</p>

            <form onSubmit={handleSubmit((data) => AddDoc(data))}>
                <input placeholder="Resort Name" {...register('resortName', { required: true })} />
                {errors.resortName && <p>Please Resort Name</p>}
                <input placeholder="Country" {...register('Country', { required: true })} />
                {errors.country && <p>Please insert Country</p>}
                <input placeholder="About" {...register('About', { required: true })} />
                {errors.about && <p>Please insert description</p>}
                <input type="submit" />
            </form>
        </div>
    );
}


export default ResortForm;