import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Editnow() {
    const { id } = useParams();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const[message,setMessage]=useState("");
    
    const getEmpinfo=() => {
        const url= "http://localhost:3001/notes/"+id;
        axios.get(url).then(response=>{
            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.phone)
        })
    }

    useEffect(()=>{
        getEmpinfo();
    })

    const updateEmp = () =>{
        var info={
            "name":name,
            "email":email,
            "phone":phone
        };
        
        axios.put("/notes/update/"+id,info).then(response =>{
            setMessage(name +"updated successfully")
        })
      
    }
    
    return (
        <div>
            <h1>{message}</h1>
            <form>
                <div className="form-group" >
                    <input onChange={obj=>setName(obj.target.value)} name="name" value={name} className="form-control"></input>
                </div>
                <div className="form-group">
                    <input  onChange={obj=>setEmail(obj.target.value)}name="email"value={email} className="form-control"></input>
                </div>
                <div className="form-group">
                    <input  onChange={obj=>setPhone(obj.target.value)}name="phone"value={phone} className="form-control"></input>
                </div>
                <button onClick={updateEmp} className="btn btn-lg btn-info">Updatae Note</button>
                
            </form>
        </div>
    )

        



    
}

export default Editnow;
