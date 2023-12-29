import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function DashBoard(){
    const {id}=useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{ 
        axios.get(`http://localhost:8080/dashboard/${id}`)
        .then((res)=>{
            console.log(res);
            setName(res.data.name);
            setEmail(res.data.email);
            setPassword(res.data.password);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[id]);
    return(
        <>
            <div className="dashboard container mt-5 p-5 border border-secondary-subtle rounded">
                <h1 className="mb-5 text-redor fw-bold">Dashboard</h1>
                <div className="deetails">
                    <div className="name">
                        <h2>Name : &nbsp;{name}</h2>
                    </div>
                    <div className="email">
                        <h2>Email : &nbsp;{email}</h2>
                    </div>
                    <div className="password">
                        <h2>Password : &nbsp;{password.substring(0,3)+"*****"+password.substring(password.length-3)}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashBoard;