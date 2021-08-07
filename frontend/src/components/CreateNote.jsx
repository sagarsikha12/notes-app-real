import React,{useState} from 'react';
import axios from "axios";


function CreateNote() {
const [input, setInput]=useState({
    name: '',
    email: '',
    phone:''
})

    function handleChange(e){
        const {name, value}=e.target;
        setInput(prevInput => {
            return{
                ...prevInput,
                [name]:value
            }
        })
    }
    
    function handleClick(e){
        e.preventDefault();
        const newNote ={
           name: input.name,
           email: input.email,
           phone:input.phone
        }
        axios.post('http://localhost:3001/create', newNote)
        alert("note added")
    }
    return (
        <div>
            <h1>Create Note</h1>
            <form>
                <p>Name :</p>
                <div className="form-group">
                    <textarea onChange={handleChange} name="name"value={input.name} className="form-control"></textarea>
                </div>
                <p>Email :</p>
                <div className="form-group">
                    <textarea onChange={handleChange} name="email"value={input.email} className="form-control"></textarea>
                </div>
                <p>Phone :</p>
                <div className="form-group">
                    <textarea onChange={handleChange} name="phone"value={input.phone} className="form-control"></textarea>
                </div>
                <button onClick={handleClick} className="btn btn-lg btn-info">ADD NOTE</button>
                
            </form>
        </div>
    )
}

export default CreateNote
