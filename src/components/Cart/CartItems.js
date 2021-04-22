import { Link } from 'react-router-dom';
import productImage from '../../assets/img/320x320/img2.jpg';

const CartItems = (props) => {
  const cartItems = props.cartItems;



  return (
    <div class="container space-2">
      <div class="d-flex justify-content-between align-items-end border-bottom pb-3 mb-7">
        <h1 class="h3 mb-0">Shopping cart</h1>
        <span>{cartItems.length} items</span>
      </div>

      <form>
        {cartItems.map((cartItem, index) => {
          return (
            <div class="border-bottom pb-5 mb-5">
              <div class="media">
                <div class="max-w-15rem w-100 mr-3">
                  <img class="img-fluid" src={cartItem.image} alt="Image Description" />
                </div>
                <div class="media-body">
                  <div class="row">
                    <div class="col-md-7 mb-3 mb-md-0">
                      <Link class="h5 d-block" href="#!" to={"/product?id=" + cartItem.id}>{cartItem.title}</Link>

                      <div class="d-block d-md-none">
                        <span class="h5 d-block mb-1">${cartItem.price}</span>
                      </div>

                      <div class="text-body font-size-1 mb-1">
                        <span>Quantity:</span>
                        <span>{cartItem.qty}</span>
                      </div>


                    </div>

                    <div class="col-md-3">
                      <div class="row">


                        <div class="col-auto">

                          <a class="d-block text-body font-size-1 mb-1" role="button" onClick={() => props.removeCartItem(cartItem.id)}>
                            <i class="far fa-trash-alt text-hover-primary mr-1"></i>
                            <span class="font-size-1 text-hover-primary">Remove</span>
                          </a>

                        </div>
                      </div>
                    </div>

                    <div class="col-4 col-md-2 d-none d-md-inline-block text-right">
                      <span class="h5 d-block mb-1">${cartItem.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )
        }
        )}

        <div class="d-sm-flex justify-content-start">
          <Link to="/listings/all" class="font-weight-bold" href="#">
            <i class="fas fa-angle-left fa-xs mr-1"></i>
        Continue shopping
      </Link>
        </div>
      </form>
    </div>

  )
}
export default CartItems;