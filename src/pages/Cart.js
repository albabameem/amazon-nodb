
import CartItems from '../components/Cart/CartItems';
import CartSummary from '../components/Cart/CartSummary';
import CartEmpty from '../components/Cart/CartEmpty';

import { useContext } from "react";
import aShopContext from "../components/Context/ContextProvider";

const Cart = () => {
    const context = useContext(aShopContext);
    const cartItems = context.cartItems;

    return (
        <div id="home-container">

            <div className="container ">
                {cartItems.length > 0 ? (
                    <div className="row">

                        <div className="col-lg-8 mb-7 mb-lg-0">
                            <CartItems setCartTotal={context.setCartTotal} setCartItems={context.setCartItems} products={context.products} removeCartItem={context.removeCartItem} cartTotal={context.cartTotal} cartItems={cartItems} />
                        </div>
                        <div className="col-lg-4">
                            <CartSummary clearCart={context.clearCart} totalItems={cartItems.length} cartTotal={context.cartTotal} tax={context.tax} />
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