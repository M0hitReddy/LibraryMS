import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp() {
const navigate=useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signUp = async (event) => {
        event.preventDefault();

        try {
            // const data = {
            //     name: name,
            //     email: email,
            //     password: password
            // }
            // console.log(data);
            axios.post("http://localhost:8080/signup/post", {
                name: name,
                email: email,
                password: password
            })
                .then((res) => {
                    console.log(res);
                })
                .then(
                    navigate('/login')
                );
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="signup container p-5 mt-5">
                <h1 className="ms-5 mb-5">Sign Up</h1>
                <form className="mx-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                        <input type="email" className="form-control border-dark-subtle" id="exampleInputName1" aria-describedby="nameHelp" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <div id="nameHelp" className="form-text">Enter full name here.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control border-dark-subtle" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control border-dark-subtle" id="exampleInputPassword1" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input border-dark-subtle" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn bg-redor text-white" onClick={signUp}>Submit</button>
                    <Link to="/" className="float-end ms-3">Login?</Link>
                </form>
            </div>
        </>
    );
}

export default SignUp;