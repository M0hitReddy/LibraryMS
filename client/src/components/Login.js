import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../styles/Global.css';
function Login() {
    // console.log("Login");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (event) => {
        event.preventDefault();
        try {
            if (email !== '' && password !== '') {
                await axios.post("http://localhost:8080/login/post", { email: email, password: password })
                    .then((res) => {
                        console.log(res);
                        if (res.data.message !== '') {

                            navigate(`/dashboard/${res.data}`);
                        }

                    });
            }
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <>
            <div className="login p-5 mt-5 m-auto border border-2 rounded-5">
                <h1 className="ms-sm-5 mb-5">Login</h1>
                <form className="mx-sm-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control border-secondary-subtle" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control border-secondary-subtle" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input border-dark-subtle" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primar bg-redor text-white" onClick={login}>Submit</button>
                    <Link to="/signup" className="float-end ms-3">Sign Up?</Link>
                </form>
            </div>
        </>
    );
}

export default Login;