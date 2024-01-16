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
        <div className="d-flex vh-100 p-3 mb-2 bg-success text-white justify-content-center align-items-center">
            <div className="w-50 bg-dark rounded p-3" >
            <h1 align="center">Car Details</h1>
            <div align="right">
                <Link to="/Create" className="btn btn-success">Create +</Link>
            </div>
            <hr/>
            <div style={{ maxHeight: "350px", 
        overflowY: "auto" }}>
            <table width='100%' className="table table-hover text-center" style={{borderRadius: '5px',overflow: 'scroll'}}>
                <thead className="h3" style={{ position: "sticky", 
        top: "0" }}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody >
                    {data.map((car)=>(
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.name}</td>
                            <td>{car.color}</td>
                            <td className="d-flex justify-content-around">
                                <Link to={`/update/${car.id}`} className="btn btn-primary">Update</Link>
                                <button className="btn btn-danger"onClick={()=>handleDelete(car.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </div>
            </div>
        </div>
    )
}
export default Home;