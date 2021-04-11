
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Single = (props) => {
    const products = props.products;

    const query = useQuery();

    
    const product = products.filter(obj => {return obj.id == query.get('id')});
    const productData = (product.length ? product[0] : []);
    
    const addItem = (e) =>{
        let input = document.getElementById('qty');
        if(input.value <= 0){
            alert('Please enter 1 or more quantity');
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        if(input.value > productData.inventory){
            alert("Sorry, we don't have that much stock.");
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        productData.qty = input.value;
        let newPrice = parseInt(props.cartTotal) + (parseInt(productData.price) * parseInt(productData.qty));

        props.setCartItems(productData);
        props.setCartTotal(newPrice);
    }

    const increaseQty = () => {
        let input = document.getElementById('qty');
        if(input.value >= productData.inventory){
            alert("Sorry, we don't have that much stock.");
            input.value = productData.inventory;
        }else{
        input.value = parseInt(input.value) + 1;}
    }

    const decreaseQty = () => {
        let input = document.getElementById('qty');
        if(input.value <= 1){
            input.value = 1;
        }else{
        input.value = parseInt(input.value) - 1;}
    }
    return (
        <div className="container space-top-1 space-top-md-2 space-bottom-2 space-bottom-lg-3">
            <div className="row">
                <div className="col-lg-7 mb-7 mb-lg-0">
                    <div className="pr-lg-4">
                        <div className="position-relative">
                            <div  className=" border rounded-lg">
                                <div className="js-slide">
                                    <img style={{height: "40vh", objectFit: "contain"}} className="img-fluid w-100 rounded-lg" src={productData.image} alt="Image Description" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="col-lg-5">

                    <div className="mb-5">
                        <h1 className="h2">{productData.title}</h1>
                        <p>{productData.description}</p>
                    </div>

                    <div className="mb-5">
                        <h2 className="font-size-1 text-body mb-0">Total price:</h2>
                        <span className="text-dark font-size-2 font-weight-bold">${productData.price}</span>

                    </div>

                    <div className="border rounded-lg py-2 px-3 mb-3">
                        <div className="js-quantity-counter row align-items-center">
                            <div className="col-7">
                                <small className="d-block text-body font-weight-bold">Select quantity</small>
                                <input className="js-result form-control h-auto border-0 rounded-lg p-0" id="qty" type="text" value="1" />
                            </div>
                            <div className="col-5 text-right">
                                <a className="js-minus btn btn-xs btn-icon btn-outline-secondary rounded-circle" onClick={decreaseQty} >
                                    <i className="fas fa-minus"></i>
                                </a>
                                <a className="js-plus btn btn-xs btn-icon btn-outline-secondary rounded-circle" onClick={increaseQty} >
                                    <i className="fas fa-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <Link to="/cart" type="button" onClick={addItem} className="btn btn-block btn-primary btn-pill transition-3d-hover"><i className="fas fa-plus"></i> Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single;