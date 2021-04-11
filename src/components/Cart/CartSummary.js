import { Link } from 'react-router-dom';

const CartSummary = (props) => {
    const taxAmount = (parseInt(props.cartTotal) * parseInt(props.tax)) / 100;
    const clearCartItems = () => {
      props.clearCart();
    }
    return (
              <div class="pl-lg-4 space-2">
                <div class="card shadow-soft p-4 mb-4">
                  <div class="border-bottom pb-4 mb-4">
                    <h2 class="h3 mb-0">Order summary</h2>
                  </div>
        
                  <div class="border-bottom pb-4 mb-4">
                    <div class="media align-items-center mb-3">
                      <span class="d-block font-size-1 mr-3">Item subtotal ({props.totalItems})</span>
                      <div class="media-body text-right">
                        <span class="text-dark font-weight-bold">${props.cartTotal}</span>
                      </div>
                    </div>
        
                    <div class="media align-items-center mb-3">
                      <span class="d-block font-size-1 mr-3">Delivery</span>
                      <div class="media-body text-right">
                        <span class="text-dark font-weight-bold">Free</span>
                      </div>
                    </div>
        
                   
                  </div>
        
                  <div class="media align-items-center mb-3">
                    <span class="d-block font-size-1 mr-3">Estimated tax</span>
                    <div class="media-body text-right">
                      <span class="text-dark font-weight-bold">{props.tax}%</span>
                    </div>
                  </div>
        
                  <div class="media align-items-center mb-3">
                    <span class="d-block font-size-1 mr-3">Total</span>
                    <div class="media-body text-right">
                      <span class="text-dark font-weight-bold">${(parseInt(props.cartTotal) + taxAmount)}</span>
                    </div>
                  </div>
        
                  <div class="row mx-1">
                    <div class="col px-1 my-1">
                      <Link to="/checkout" class="btn btn-primary btn-block btn-pill transition-3d-hover" href="#" onClick={clearCartItems}>Checkout</Link>
                    </div>
                  </div>
                </div>

                

              </div>


)
}
export default CartSummary;