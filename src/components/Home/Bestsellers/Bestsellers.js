import Slider from "react-slick";
import '../../../assets/vendor/slick-carousel/slick/slick.css';
import sliderImg1 from '../../../assets/img/mockups/img1.png';
import sliderImg2 from '../../../assets/img/mockups/img5.png';
import sliderImg3 from '../../../assets/img/mockups/img6.png';
import sliderImg4 from '../../../assets/img/mockups/img1.png';
import sliderImg5 from '../../../assets/img/mockups/img5.png';
import sliderImg6 from '../../../assets/img/mockups/img6.png';
import { Link } from 'react-router-dom';

const CustomPrev = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' fas fa-arrow-left slick-arrow slick-arrow-left slick-arrow-centered-y d-sm-inline-flex shadow-soft rounded-circle ml-sm-2 ml-xl-4'}
            style={{ ...style }}
            onClick={onClick}
        />
    );

}

const CustomNext = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' fas fa-arrow-right slick-arrow slick-arrow-right slick-arrow-centered-y d-sm-inline-flex shadow-soft rounded-circle mr-sm-2 mr-xl-4'}
            style={{ ...style }}
            onClick={onClick}
        />
    );

}

const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrev />,
    nextArrow: <CustomNext />,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1398,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

const Bestsellers = (props) => {
    const products = props.products.filter(obj => {return obj.bestseller == 1});
    return (

        <div className="mt-0 py-1 mt-md-5 py-md-5 position-relative bg-light">
            <h2 className="display-5 text-center mb-5 mt-5 mt-md-0">Our Bestsellers</h2>
            <Slider id="bestSellerSlider" className="mt-0 py-0 mt-md-5 py-md-5" {...sliderSettings}>
                {products.map((product, index) => {
                    return (
                    <div className="js-slide bg-img-hero-center px-2 px-sm-3 mb-3 mb-sm-5">
                        <div className="card card-bordered shadow-none text-center h-100">
                            <div className="position-relative">
                                <img className="card-img-top" height="250" style={{objectFit: 'contain'}} src={product.image} alt={product.title} />

                                <div className="position-absolute top-0 left-0 pt-3 pl-3">
                                    <span className="badge badge-danger badge-pill">Bestseller</span>
                                </div>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-xs btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body pt-4 px-4 pb-0">
                                <div className="mb-2">
                                    <a className="d-inline-block text-body small font-weight-bold mb-1" href="#">{props.categories.filter(obj => {return obj.id == product.category})[0].name}</a>
                                    <span className="d-block font-size-1">
                                        <Link to={"/product?id="+product.id} className="text-inherit" href="#!">{product.title}</Link>
                                    </span>
                                    <div className="d-block">
                                        <span className="text-dark font-weight-bold">${product.price}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer border-0 pt-0 pb-4 px-4">
                                <Link to={"/product?id="+product.id} type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
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

export default Bestsellers;