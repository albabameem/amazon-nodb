import { Link } from 'react-router-dom';
const Registration = () => {
    const validateForm = (e) => {

        e.stopPropagation();
        e.preventDefault();

        let fields = document.querySelectorAll('.validate-me');
        fields.forEach((field, index) => {
            let errorElem;
            if(e.type=='keyup'){
                field = e.target;
                errorElem = e.target.parentNode.querySelector('.invalid-feedback');
            }else{
                errorElem = field.parentNode.querySelector('.invalid-feedback');
            }

            let fieldMsg = field.getAttribute('data-msg');
            let fieldType = field.getAttribute('type');
            let fieldValue = field.value;
            

            if(fieldValue){
                if(fieldType == 'password'){
                    if(!fieldValue.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
                        errorElem.innerText = "Please make sure you have minimum 6 characters, one letter, one number, and one special character in your password";
                        field.classList.add('is-invalid');
                        errorElem.classList.add('d-block');
                    }else{
                        errorElem.classList.remove('d-block');
                        field.classList.remove('is-invalid');
                        field.classList.add('is-valid');
                    }
                }else if(fieldType == 'email'){
                    if(!fieldValue.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                        errorElem.innerText = "Please enter a valid email address.";
                        field.classList.add('is-invalid');
                        errorElem.classList.add('d-block');
                    }else{
                        errorElem.classList.remove('d-block');
                        field.classList.remove('is-invalid');
                        field.classList.add('is-valid');
                    }
                }else{
                    errorElem.classList.remove('d-block');
                    field.classList.remove('is-invalid');
                    field.classList.add('is-valid');
                }
            }else{
                errorElem.innerText = "Please enter the "+fieldMsg+" field";
                field.classList.add('is-invalid');
                errorElem.classList.add('d-block');
            }
        })
        
    }

    return (
        <div className="container space-top-1 space-top-md-2 space-bottom-2 space-bottom-lg-3">
            <form className="js-validate w-md-75 w-lg-50 mx-md-auto" noValidate="novalidate">
                <div className="mb-5 mb-md-7">
                    <h1 className="h2 mb-0">Welcome to AShop</h1>
                    <p>Fill out the form to get started.</p>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signupNamme">Your name</label>
                    <input type="text" className="form-control validate-me" name="name" id="signupNamme" placeholder="Your full name" aria-label="Your full name" required="" data-msg="name"  onKeyUp={validateForm} />
                    <div class="invalid-feedback"></div>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrEmail">Email address</label>
                    <input type="email" className="form-control validate-me" name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required="" data-msg="email"  onKeyUp={validateForm} />
                    <div class="invalid-feedback"></div>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrPassword">Password</label>
                    <input type="password" className="form-control validate-me" name="password" id="signinSrPassword" placeholder="********" aria-label="********" required="" data-msg="password"  onKeyUp={validateForm} />
                    <div class="invalid-feedback"></div>
                </div>

                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrConfirmPassword">Confirm password</label>
                    <input type="password" className="form-control validate-me" name="confirmPassword" id="signinSrConfirmPassword" placeholder="********" aria-label="********" required="" data-msg="confirm password"  onKeyUp={validateForm} />
                    <div class="invalid-feedback"></div>
                </div>


                <div className="row align-items-center mb-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <span className="font-size-1 text-muted">Already have an account?</span>
                        <Link to="/login" className="font-size-1 font-weight-bold ml-2" href="#!">Login</Link>
                    </div>

                    <div className="col-sm-6 text-sm-right">
                        <button type="submit" className="btn btn-primary transition-3d-hover" onClick={validateForm}>Get Started</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration;