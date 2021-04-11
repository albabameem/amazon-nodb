import Slider from "react-slick";
import '../../../assets/vendor/slick-carousel/slick/slick.css';
import sliderImg1 from '../../../assets/img/mockups/img5.png';
import sliderImg2 from '../../../assets/img/mockups/img6.png';
import { Link } from 'react-router-dom';

const CustomPrev = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
          className={className+' fas fa-arrow-left slick-arrow slick-arrow-left slick-arrow-centered-y d-sm-inline-flex shadow-soft rounded-circle ml-sm-2 ml-xl-4'}
          style={{ ...style}}
          onClick={onClick}
        />
      );

}

const CustomNext = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
          className={className+' fas fa-arrow-right slick-arrow slick-arrow-right slick-arrow-centered-y d-sm-inline-flex shadow-soft rounded-circle mr-sm-2 mr-xl-4'}
          style={{ ...style}}
          onClick={onClick}
        />
      );

}

const sliderSettings = {
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    prevArrow: <CustomPrev />,
    nextArrow: <CustomNext />
};

const Hero = (props) => {
    const products = props.products.filter(obj => {return obj.hero == 1});
    return (
        

        <div className="mt-0 py-0 position-relative">
            
            <Slider id="heroSlider" className=" border-bottom mt-0 py-0 " {...sliderSettings}>
            {products.map((product, index) => {
                    return (
                <div className="js-slide">
                    <div className="container space-top-2 space-bottom-3">
                        <div className="row align-items-lg-center">
                            <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                                <div className="mb-6">
                                    <h1 className="display-4 mb-4">{product.title}</h1>
                                    <p>{product.description}</p>
                                </div>
                                <Link to={"/product?id="+product.id} className="btn btn-primary btn-pill transition-3d-hover px-5 mr-2" href="#">${product.price} - View Product</Link>
                                <a className="btn btn-icon btn-outline-primary rounded-circle" href="#" data-toggle="tooltip" data-placement="top" title="Save for later">
                                    <i className="fas fa-heart"></i>
                                </a>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="w-85 mx-auto">
                                    <img height="450" style={{objectFit: 'contain'}}  src={product.image} alt={product.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            )}

                
            </Slider>

            
        </div>
    );
}

export default Hero;