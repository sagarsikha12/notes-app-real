import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Notes() {
    const [notes, setNotes] = useState(
        [{
            name: '',
            email: '',
            phone:'',
            id: ''
        }]
    )


    useEffect(() => {
        fetch("/notes").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })
    const [mes, updateMes] = useState("");
    const deleteEmp = (empid) => {

        axios.delete("/delete/" + empid)
            .then(response => {
                updateMes("employe deleted")
            }).catch(error => {
                updateMes("error! try again later");
            })
    }
    return (

        <div className="app-container">
            <div>
                <p align="center">{mes}</p>

                <table>
                    <thead>
                        <tr>
                            <th>NameE</th>
                            <th>email</th>
                            <th>phone</th>
                            
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {notes.map(note =>
                            <tr >
                                <td >{note.name}</td>
                                <td>{note.email}</td>
                                <td>{note.phone}</td>
                                <td><Link to={`/${note._id}/editnow`}>Edit</Link>

                                    <button className="danger"
                                        onClick={deleteEmp.bind(this, note._id)}
                                    >Delete</button></td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default Notes
