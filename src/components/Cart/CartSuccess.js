import { Link } from 'react-router-dom';

const CartSuccess = (props) => {
    
    return (
        <div class="container space-2">
          <div class="w-md-80 w-lg-50 text-center mx-md-auto">
            <i class="fas fa-check-circle text-success fa-5x mb-3"></i>
            <div class="mb-5">
              <h1 class="h2">Your order is completed!</h1>
              <p>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
            </div>
            <Link to="/listings/all" class="btn btn-primary btn-pill transition-3d-hover px-5" href="#">Continue Shopping</Link>
          </div>
        </div>

)
}
export default CartSuccess;