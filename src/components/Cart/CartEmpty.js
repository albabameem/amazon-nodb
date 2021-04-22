import { Link } from 'react-router-dom';
import illustration from '../../assets/svg/illustrations/empty-cart.svg';

const CartEmpty = () => {
    return (
      <div class="container space-2">
        <div class="w-md-80 w-lg-50 text-center mx-md-auto">
          <figure class="max-w-10rem max-w-sm-15rem mx-auto mb-3">
            <img class="img-fluid" src={illustration} alt="SVG" />
          </figure>
          <div class="mb-5">
            <h1 class="h2">Your cart is currently empty</h1>
            <p>Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.</p>
          </div>
          <Link to="/listings/all" class="btn btn-primary btn-pill transition-3d-hover px-5" href="#">Start Shopping</Link>
        </div>
      </div>

)
}
export default CartEmpty;