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
        <div className="d-flex vh-100 p-3 mb-2 bg-success text-white justify-content-center align-items-center">
        <div className="w-50 bg-dark rounded p-3">
            <h1>Enter Car Details:</h1>
            <hr/>
            <form className="form-inline"onSubmit={handleSubmit}>
            <div class="form-group mb-2">
               <label htmlFor="carname" class="sr-only">
                Enter Name : </label><br/><br/>
                <input type="text" name="carname" class="form-control bg-white " onChange={e=>setData({...data,name:e.target.value})}/>
            </div>
            <div class="form-group mb-2">
                <label htmlFor="carcolor">Enter Color:</label>
                <br/><br/>
                <input type="text" name="carcolor" class="form-control bg-white " onChange={e=>setData({...data,color:e.target.value})}/>
            </div>
            <br/>
                <button type="submit" className="btn btn-primary">Insert</button>
            </form>
            </div>
        </div>
    )
}
export default Create;