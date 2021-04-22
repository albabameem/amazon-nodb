import { event } from 'jquery';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const validateForm = () => {

        let isValidated = true;

        if (email === "") {
            setErrorEmail("Please Enter Your Email");
            isValidated = false;
        }else {
            setErrorEmail("")
        }

        if (password === "") {
            setErrorPassword("Please Enter Your Password");
            isValidated = false;
        }else {
            setErrorPassword("")
        }

        return isValidated;

        
    }

    const submitForm = (event) => {
        event.preventDefault();
        validateForm();
    }
    return (
        <div className="container space-top-1 space-top-md-2 space-bottom-2 space-bottom-lg-3">
            <form className="w-md-75 w-lg-50 mx-md-auto" onSubmit={submitForm}>
                <div className="mb-5 mb-md-7">
                    <h1 className="h2 mb-0">Welcome back</h1>
                    <p>Login to manage your account.</p>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrEmail">Email address</label>
                    <input type="email" className={"form-control validate-me "+(errorPassword ? 'is-invalid' : 'is-valid')} name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required=""  onKeyUp={(event)=>{
                        setEmail(event.target.value);
                    }} />
                    <div className={"invalid-feedback "+(errorEmail ? 'd-block' : 'd-none')}>{errorEmail}</div>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrPassword">
                        <span className="d-flex justify-content-between align-items-center">
                            Password
                        </span>
                    </label>
                    <input type="password" className={"form-control validate-me "+(errorPassword ? 'is-invalid' : 'is-valid')} name="password" id="signinSrPassword" placeholder="********" aria-label="********" required="" onKeyUp={(event)=>{
                        setPassword(event.target.value);
                    }} />
                    <div className={"invalid-feedback "+(errorPassword ? 'd-block' : 'd-none')}>{errorPassword}</div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <span className="font-size-1 text-muted">Don't have an account? </span>
                        <Link to="/registration" className="font-size-1 font-weight-bold ml-2" href="#!">Signup</Link>
                    </div>

                    <div className="col-sm-6 text-sm-right">
                        <button type="submit" className="btn btn-primary transition-3d-hover">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;