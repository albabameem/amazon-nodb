import ListingSidebar from './Sidebar';
import { useEffect, useState, useContext } from "react";
import aShopContext from "../Context/ContextProvider";
import {
    BrowserRouter as Router,
    Link,
    useParams,
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Listings = () => {
    const perPage = 2;
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const { id } = useParams();
    const context = useContext(aShopContext);

    const categories = context.categories;
    const products = context.products;


    const query = useQuery();

    let filterProducts;
    if (id == 'bestsellers') {
        filterProducts = products.filter(obj => { return obj.bestseller == 1 });
    } else if (id == 'all') {
        
        if (query.get('cat')) {
            filterProducts = products.filter(obj => { return obj.category == query.get('cat') });
        } else {
            filterProducts = products;
        }

    } else {
        filterProducts = products.filter(obj => { return obj.category == id });
    }

    if (query.get('query')) {
        filterProducts = filterProducts.filter(item => item.title.toLowerCase().indexOf(query.get('query')) > -1);
    }

    return (
        <div className="container space-top-1 space-top-md-2 space-bottom-2 space-bottom-lg-3">
            <div className="row">
                <div className="col-lg-3 mb-5 mb-lg-0">
                    
                    <ListingSidebar products={products} categories={categories} />
                </div>
                <div className="col-lg-9 mb-5 mb-lg-0">
                    <div className="row">
                        {filterProducts && filterProducts.map((product, index) => {
                            return (
                                <div className="col-12 col-md-4 px-2 px-sm-3 mb-3 mb-sm-5">
                                    <div className="card card-bordered shadow-none text-center h-100">
                                        <div className="position-relative">
                                            <img height="350" style={{ objectFit: 'contain' }} className="card-img-top" src={product.image} alt={product.title} />

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
                                                <a className="d-inline-block text-body small font-weight-bold mb-1" href="#">{categories && categories.filter(obj => { return obj.id === product.category })[0].name}</a>
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
                                            <Link to={"/product?id=" + product.id} type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                        )}
                        
                    </div>
                    <nav aria-label="...">
                            <ul class="pagination">

                            </ul>
                        </nav>
                </div>
            </div>
        </div>
    )
}

export default Listings;