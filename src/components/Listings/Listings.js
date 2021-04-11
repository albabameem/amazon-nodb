import ListingSidebar from './Sidebar';
import productImage from '../../assets/img/300x180/img3.jpg';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import SubHero from '../SubHero/SubHero';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Listings = (props) => {
    const query = useQuery();

    let products;


    if(query.get('cat')){
        if(query.get('cat') == 0){
            products = props.products;
        }else if(query.get('cat') == 'bestsellers'){
            products = props.products.filter(obj => {return obj.bestseller == 1});
        }else{
            products = props.products.filter(obj => {return obj.category == query.get('cat')});
        }
        if(query.get('query')){

            products = products.filter(item => item.title.toLowerCase().indexOf(query.get('query')) > -1);
        }
    }else{
        products = props.products;
    }

    
    const categories = props.categories;

    return (
        <div className="container space-top-1 space-top-md-2 space-bottom-2 space-bottom-lg-3">
            <div className="row">
                <div className="col-lg-3 mb-5 mb-lg-0">
                    <ListingSidebar products={props.products} categories={categories}  />
                </div>
                <div className="col-lg-9 mb-5 mb-lg-0">
                    <div className="row">
                    {products.map((product, index) => {
                        return (
                        <div className="col-12 col-md-4 px-2 px-sm-3 mb-3 mb-sm-5">
                            <div className="card card-bordered shadow-none text-center h-100">
                                <div className="position-relative">
                                    <img height="350" style={{objectFit: 'contain'}} className="card-img-top" src={product.image} alt={product.title} />

                                    {product.bestseller == 1 &&
                                        <div className="position-absolute top-0 left-0 pt-3 pl-3">
                                            <span className="badge badge-success badge-pill">Bestseller</span>
                                        </div>
                                    }
                                    <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                        <button type="button" className="btn btn-xs btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="Save for later">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="card-body pt-4 px-4 pb-0">
                                    <div className="mb-2">
                                        <a className="d-inline-block text-body small font-weight-bold mb-1" href="#">{categories.filter(obj => {return obj.id === product.category})[0].name}</a>
                                        <span className="d-block font-size-1">
                                            <a className="text-inherit" href="#!">{product.title}</a>
                                        </span>
                                        <div className="d-block">
                                            <span className="text-dark font-weight-bold">${product.price}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer border-0 pt-0 pb-4 px-4">
                                    <div className="mb-3">
                                        <a className="d-inline-flex align-items-center small" href="#">
                                            <div className="text-warning mr-2">
                                                <i className="far fa-star text-muted"></i>
                                                <i className="far fa-star text-muted"></i>
                                                <i className="far fa-star text-muted"></i>
                                                <i className="far fa-star text-muted"></i>
                                                <i className="far fa-star text-muted"></i>
                                            </div>
                                            <span>0</span>
                                        </a>
                                    </div>
                                    <Link to={"/product?id="+product.id} type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                                </div>
                            </div>
                        </div>

                        )}
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listings;