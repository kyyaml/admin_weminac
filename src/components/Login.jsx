import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    //define history
    const navigate = useNavigate();

    useEffect(() => {

        //check token
        if (localStorage.getItem('token')) {

            //redirect page dashboard
            navigate('/dashboard');
        }
    }, []);

    //function "loginHanlder"
    const loginHandler = async (e) => {
        e.preventDefault();

        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append("email", email);
        formData.append("password", password);

        //send data to server
        await axios
            .post("http://localhost:8000/api/login", formData)
            .then((response) => {
                //set token on localStorage
                localStorage.setItem("token", response.data.token);

                //redirect to dashboard
                navigate("/dashboard");
            })
            .catch((error) => {
                //assign error to state "validation"
                setValidation(error.response.data);
            });
    };
    return (
        <>

            <div className="card form-login mb-3">
                <div className="card-body">
                    <div className="d-flex  justify-content-center py-4 pb-0">
                        <a href="index.html" className="logo d-flex align-items-center w-auto">
                            <img src="assets/img/logo.png" alt />
                            <span className="d-none d-lg-block">NiceAdmin</span>
                        </a>
                    </div>
                    <div className="pt-2 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login</h5>
                        <p className="text-center small">Masukkan Email &amp; Password</p>
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={loginHandler}>
                        <div className="col-12">
                            <label htmlFor="yourUsername" className="form-label">Email</label>
                            <div className="input-group has-validation">
                                <input type="email" name="email " value={email}
                                    onChange={(e) => setEmail(e.target.value)} className="form-control" id="yourUsername" required />
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="yourPassword" className="form-label">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"
                                id="yourPassword" required />
                        </div>

                        <div className="col-12 pt-5">
                            <button className="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
