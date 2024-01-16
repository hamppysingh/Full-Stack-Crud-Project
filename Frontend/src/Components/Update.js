import { useParams } from "react-router-dom";
import React ,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Update(){
    const redirect=useNavigate();
    const {Id} = useParams();
    const [data,setData] = useState({
        name :'',
        color :''
    });
    const [data1,setDataone]=useState([]);
    useEffect(
        ()=>{
            axios.get("http://localhost:9000/update/"+Id)
            .then((res)=>{setDataone(res.data[0])})
            .catch(err=>console.log(err));
        },[]);
    function handleUpdate(e){
        e.preventDefault();
        axios.put("http://localhost:9000/update/doit/"+Id,data)
        .then((data)=>{console.log(data);})
        .catch(err=>console.log(err));
        redirect('/');
        redirect('/');
    }
    return (
        <div className="d-flex vh-100 p-3 mb-2 bg-success text-white justify-content-center align-items-center">
        <div className="w-50 bg-dark rounded p-3">
            <h1>Update Car Details</h1>
            <hr/>
               <form onSubmit={handleUpdate}>
                <div class="form-group mb-2">
                    <label htmlFor="carname" class="sr-only">
                    Update Name Here : </label>
                    <br/><br/>
                    <input type="text" name="carname" class="form-control bg-white " onChange={e=>setData({...data,name:e.target.value})} placeholder={data1.name}/>
                </div>
                <div class="form-group mb-2">
                    <label htmlFor="carcolor" class="sr-only">Update Color Here:</label>
                    <br/><br/>
                    <input type="text" name="carcolor" class="form-control bg-white " onChange={e=>setData({...data,color:e.target.value})} placeholder={data1.color}/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Insert</button>
            </form>
        </div>
        </div>
    )
}
export default Update;