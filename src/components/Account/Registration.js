import { Link } from 'react-router-dom';
import { useState } from "react";

const Registration = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorName, setErrorName] = useState("");

    const validateForm = () => {

        let isValidated = true;

        if (name === "") {
            setErrorName("! Please enter your name");
            isValidated = false;
        } else {
            setErrorName("")
        }

        if (email === "") {
            setErrorEmail("Please Enter Your Email");
            isValidated = false;
        } else if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setErrorEmail("Please Enter a valid Email");
            isValidated = false;
        } else {
            setErrorEmail("")
        }

        if (password === "") {
            setErrorPassword("Please Enter Your Password");
            isValidated = false;
        } else if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            setErrorPassword("Please make sure you have minimum 6 characters, one letter, one number, and one special character in your password");
            isValidated = false;
        } else {
            setErrorPassword("")
        }

        return isValidated;

    }


    const submitForm = (e) => {

        e.stopPropagation();
        e.preventDefault();

        validateForm();




    }

    return (
        <div className="container space-top-1 space-top-md-2 space-bottom-2 space-bottom-lg-3">
            <form className="js-validate w-md-75 w-lg-50 mx-md-auto" noValidate="novalidate" onSubmit={submitForm}>
                <div className="mb-5 mb-md-7">
                    <h1 className="h2 mb-0">Welcome to AShop</h1>
                    <p>Fill out the form to get started.</p>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signupNamme">Your name</label>
                    <input type="text" className={"form-control validate-me " + (errorName ? 'is-invalid' : 'is-valid')} name="name" id="signupNamme" placeholder="Your full name" aria-label="Your full name" required="" data-msg="name" onKeyUp={(event) => {
                        setName(event.target.value);
                    }} />
                    <div className={"invalid-feedback " + (errorName ? 'd-block' : 'd-none')}>{errorName}</div>

                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrEmail">Email address</label>
                    <input type="email" className={"form-control validate-me " + (errorEmail ? 'is-invalid' : 'is-valid')} name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required="" data-msg="email" onKeyUp={(event) => {
                        setEmail(event.target.value);
                    }} />
                    <div className={"invalid-feedback " + (errorEmail ? 'd-block' : 'd-none')}>{errorEmail}</div>

                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrPassword">Password</label>
                    <input type="password" className={"form-control validate-me " + (errorPassword ? 'is-invalid' : 'is-valid')} name="password" id="signinSrPassword" placeholder="********" aria-label="********" required="" data-msg="password" onKeyUp={(event) => {
                        setPassword(event.target.value);
                    }} />
                    <div className={"invalid-feedback " + (errorPassword ? 'd-block' : 'd-none')}>{errorPassword}</div>

                </div>



                <div className="row align-items-center mb-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <span className="font-size-1 text-muted">Already have an account?</span>
                        <Link to="/login" className="font-size-1 font-weight-bold ml-2" href="#!">Login</Link>
                    </div>

                    <div className="col-sm-6 text-sm-right">
                        <button type="submit" className="btn btn-primary transition-3d-hover">Get Started</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration;