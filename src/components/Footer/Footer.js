import logo from '../../assets/svg/logos/logo_transparent.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="footer-container">
            <div className="bg-dark">
                <div className="container space-top-2">
                    <div className="row justify-content-md-between mb-6">
                        <div className="col-md-6 col-lg-5 mb-3 mb-md-0">
                            <h2 className="text-white font-weight-normal">Subscribe to get the latest from AShop</h2>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-2">
                                <label className="sr-only" htmlFor="signupSrEmail">Email</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" name="email" id="signupSrEmail" placeholder="Your email address" aria-label="Your email address" required />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-block btn-primary">Subscribe</button>
                                    </div>
                                </div>
                            </div>

                            <p className="small text-white-70">You can unsubscribe at any time.</p>
                        </div>
                    </div>

                    <hr className="opacity-xs my-0" />
                </div>
            </div>

            <footer className="bg-dark">
                <div className="container">
                    <div className="space-top-2 space-bottom-1 space-bottom-lg-2">
                        <div className="row justify-content-lg-between">
                            <div className="col-12 col-md-4 col-lg-4 ml-lg-auto mb-5 mb-lg-0">
                                <div className="mb-4">
                                    <a href="#" aria-label="Front">
                                        <img className="brand" src={logo} alt="Logo" />
                                    </a>
                                </div>

                                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link media" href="#!">
                                            <span className="media">
                                                <span className="fas fa-location-arrow mt-1 mr-2"></span>
                                                <span className="media-body">
                                                    1800 Baseline Rd, Ottawa
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link media" href="tel:1-062-109-9222">
                                            <span className="media">
                                                <span className="fas fa-phone-alt mt-1 mr-2"></span>
                                                <span className="media-body">
                                                    +1 (613) 875-0000
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4 col-lg-4 mb-5 mb-lg-0">
                                <h5 className="text-white">Company</h5>

                                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                                    <li className="nav-item"><Link to="/about" className="nav-link" href="#">About</Link></li>
                                    <li className="nav-item"><Link to="/blogs" className="nav-link" href="#!">Blog</Link></li>
                                    <li className="nav-item"><Link to="/contact" className="nav-link" href="#">Contact Us</Link></li>
                                </ul>
                            </div>


                        

                            <div className="col-6 col-md-4 col-lg-4">
                                <h5 className="text-white">Resources</h5>

                                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                                    <li className="nav-item">
                                        <Link to="/listings" className="nav-link" href="#">
                                            <span className="media align-items-center">
                                                <i className="fa fa-shopping-cart mr-2"></i>
                                                <span className="media-body">All Products</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/categories" className="nav-link" href="#">
                                            <span className="media align-items-center">
                                                <i className="fa fa-list mr-2"></i>
                                                <span className="media-body">All Categories</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link" href="#!">
                                            <span className="media align-items-center">
                                                <i className="fa fa-user-circle mr-2"></i>
                                                <span className="media-body">Login</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="opacity-xs my-0" />

                    <div className="space-1">
                        <div className="row align-items-md-center mb-7">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <ul className="nav nav-sm nav-white nav-x-sm align-items-center">
                                    <li className="nav-item">
                                        <Link to="/privacy" className="nav-link" href="#!">Privacy & Policy</Link>
                                    </li>
                                    <li className="nav-item opacity mx-3">/</li>
                                    <li className="nav-item">
                                        <Link to="/terms" className="nav-link" href="#!">Terms</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6 text-md-right">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                                            <i className="fab fa-google"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>

                                    
                                </ul>
                            </div>
                        </div>

                        <div className="w-md-100 mx-lg-auto">
                            <p className="text-white opacity-sm small">© AShop. 2020. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Header;