import illustration1 from '../assets/svg/illustrations/flowers.svg';
import illustration2 from '../assets/svg/illustrations/chatting-man.svg';



const Contact = () => {
  return (
    <div>


<div class="bg-light position-relative">
  <div class="container space-top-3 space-bottom-2 space-bottom-lg-3">
    <div class="row justify-content-center mb-5">
      <div class="col-md-1 d-none d-md-inline-block">
        <figure class="position-absolute bottom-0 left-0 w-100">
          <img class="img-fluid" src={illustration1} alt="Image Description" />
        </figure>
      </div>

      <div class="col-md-10 col-lg-7 mt-n11">
        <form class="js-validate card p-4 p-md-5">
          <div class="text-center mb-4">
            <h2>Drop us a message</h2>
            <p>Find the right solution.</p>
          </div>

          <div class="row mx-n2">
            <div class="col-md-6 px-2 mb-4">
              <label class="input-label">First name</label>
              <div class="js-form-message">
                <div class="input-group">
                  <input type="text" class="form-control" name="firstName" placeholder="First name" aria-label="First name" required
                         data-msg="Please enter your first name." />
                </div>
              </div>
            </div>

            <div class="col-md-6 px-2 mb-4">
              <label class="input-label">Last name</label>
              <div class="js-form-message">
                <div class="input-group">
                  <input type="text" class="form-control" name="lasstName" placeholder="Last name" aria-label="Last name" required
                         data-msg="Please enter your last name." /> 
                </div>
              </div>
            </div>

            <div class="w-100"></div>

            <div class="col-md-6 px-2 mb-4">
              <label class="input-label">Country</label>
              <div class="js-form-message">
                <div class="input-group">
                  <select class="form-control custom-select text-muted" required
                          data-msg="Please select country.">
                    <option value="">Select country</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-md-6 px-2 mb-4">
              <label class="input-label">Email address</label>
              <div class="js-form-message">
                <div class="input-group">
                  <input type="text" class="form-control" name="email" placeholder="Email address" aria-label="Email address" required
                         data-msg="Please enter a valid email address." />
                </div>
              </div>
            </div>

            <div class="w-100"></div>

            <div class="col-md-6 px-2 mb-4">
              <label class="input-label">Company <span class="text-muted font-weight-normal ml-1">(optional)</span></label>
              <div class="js-form-message">
                <div class="input-group">
                  <input type="text" class="form-control" name="company" placeholder="Company" aria-label="Company"
                         data-msg="Please enter company name." />
                </div>
              </div>
            </div>

            <div class="col-md-6 px-2 mb-4">
              <label class="input-label">Job title</label>
              <div class="js-form-message">
                <div class="input-group">
                  <input type="text" class="form-control" name="jobTitle" placeholder="Job title" aria-label="Job title" required
                         data-msg="Please enter a job title." />
                </div>
              </div>
            </div>
          </div>

          <div class="mb-5">
            <label class="input-label">How can we help you?</label>
            <div class="js-form-message input-group">
              <textarea class="form-control" rows="4" name="description" placeholder="Hi there, I would like to ..." aria-label="Hi there, I would like to ..." required
                        data-msg="Please enter a reason."></textarea>
            </div>
          </div>

          <div class="js-form-message mb-3">
            <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
              <input type="checkbox" class="custom-control-input" id="termsCheckboxExample1" name="termsCheckboxExample1" required
                     data-msg="Please accept our Terms and Conditions." />
              <label class="custom-control-label" for="termsCheckboxExample1">
                <small>
                  I agree to the
                  <a class="link-underline" href="../page-terms.html">Terms and Conditions</a>
                </small>
              </label>
            </div>
          </div>

          <div class="js-form-message mb-5">
            <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
              <input type="checkbox" class="custom-control-input" id="newsletterCheckbox" name="newsletterCheckbox" required
                     data-msg="Please accept our Terms and Conditions." />
              <label class="custom-control-label" for="newsletterCheckbox">
                <small>I want to receive AShop's Newsletters</small>
              </label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary transition-3d-hover">Submit</button>
        </form>
      </div>

      <div class="col-md-1 d-none d-md-inline-block">
        <figure class="position-absolute bottom-0 left-0 w-100">
          <img class="img-fluid" src={illustration2} alt="Image Description" />
        </figure>
      </div>
    </div>

    <div class="text-center">
      <p class="small">You'll hear from us within 1-2 business days.</p>
    </div>
  </div>
</div>
    </div>  
    )
}

export default Contact;