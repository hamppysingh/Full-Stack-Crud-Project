import React ,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Create(){

    const redirect=useNavigate();

    const [data,setData] = useState({
        name :'',
        color :''
    });
    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:9000/carinsert",data)
        .then((data)=>{console.log(data)})
        .catch(err=>console.log(err));
        redirect('/');
        redirect('/');
    }
    return(
        <div>
            <h1>Enter Car Details:</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="carname">
                Enter Name : </label>
                <input type="text" name="carname" onChange={e=>setData({...data,name:e.target.value})}/>

                <label htmlFor="carcolor">Enter Color:</label>
                <input type="text" name="carcolor" onChange={e=>setData({...data,color:e.target.value})}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default Create;