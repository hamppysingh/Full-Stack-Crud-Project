import React ,{ useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
function Home(){
    const [data,setData]=useState([]);
    useEffect(
        ()=>{
            axios.get("http://localhost:9000/")
            .then((res)=>{setData(res.data)})
            .catch(err=>console.log(err));
        },[]);
    const handleDelete=(Id)=>{
        axios.delete("http://localhost:9000/delete/"+Id)
        .then(res=>{window.location.reload();})
        .catch(err=>console.log(err));
    }
    return(
        <div>
            <h1>Car Links</h1>
            <div>
                <Link to="/Create" >Create +</Link>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((car)=>(
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.name}</td>
                            <td>{car.color}</td>
                            <td><Link to={`/update/${car.id}`}>Edit</Link><button onClick={()=>handleDelete(car.id)}>Delete</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}
export default Home;