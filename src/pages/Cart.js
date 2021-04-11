
import CartItems from '../components/Cart/CartItems';
import CartSummary from '../components/Cart/CartSummary';
import CartEmpty from '../components/Cart/CartEmpty';

const Cart = (props) => {

    const cartItems = props.cartItems;

    return (
        <div id="home-container">

            <div className="container ">
            {cartItems.length > 0 ? (
                <div className="row">
                    
                    <div className="col-lg-8 mb-7 mb-lg-0">
                        <CartItems  setCartTotal={props.setCartTotal} setCartItems={props.setCartItems} products={props.products} removeCartItem={props.removeCartItem} cartTotal={props.cartTotal} cartItems={cartItems} />
                    </div>
                    <div className="col-lg-4">
                        <CartSummary clearCart={props.clearCart} totalItems={cartItems.length} cartTotal={props.cartTotal} tax={props.tax} />
                    </div>
                    
                    
                </div>
            ) : (
                <div className="row">
                    <CartEmpty />
                </div>
            )
            }
            </div>
        </div>
    )
}

export default Cart;