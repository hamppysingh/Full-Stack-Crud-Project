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
        <div>
            <h1>Update Details</h1>
               <form onSubmit={handleUpdate}>
                <label htmlFor="carname">
                Update Name Here : </label>
                <input type="text" name="carname" onChange={e=>setData({...data,name:e.target.value})} placeholder={data1.name}/>

                <label htmlFor="carcolor">Update Color Here:</label>
                <input type="text" name="carcolor" onChange={e=>setData({...data,color:e.target.value})} placeholder={data1.color}/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default Update;