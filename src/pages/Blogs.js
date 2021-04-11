import { Link } from 'react-router-dom';
import SubHero from '../components/SubHero/SubHero';
import AvatarImg from '../assets/img/100x100/img11.jpg';
import BlogImg1 from '../assets/img/500x280/img3.jpg';
import BlogImg2 from '../assets/img/500x280/img4.jpg';
import BlogImg3 from '../assets/img/500x280/img5.jpg';

const Blogs = () => {
  return (
    <div>
      <SubHero title="Blogs" subtitle="Our latest updates and hand-picked resources." />
      <div class="container space-top-md-2 space-bottom-2 space-bottom-lg-3">
        <div class="row mb-3">
          <div class="col-sm-6 col-lg-4 mb-3 mb-sm-8" >
              <article class="card h-100">
              <div class="card-img-top position-relative">
                <img class="card-img-top" src={BlogImg1} alt="Image Description" />
                <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                    <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                  </svg>
                </figure>
              </div>

              <div class="card-body">
                <h3><Link to="/blog" class="text-inherit" href="blog-single-article.html">Should You Buy An Apple Pencil?</Link></h3>
                <p>The Apple Pencil is an expensive device that comes with some interesting features, but not everyone needs them.</p>
              </div>

              <div class="card-footer border-0 pt-0">
                <div class="media align-items-center">
                  <div class="avatar-group">
                    <a class="avatar avatar-xs avatar-circle" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Hanna Wolfe">
                      <img class="avatar-img" src={AvatarImg} alt="Image Description" />
                    </a>

                  </div>
                  <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                    July 15
                </div>
                </div>
              </div>
            </article>

          </div>

          <div class="col-sm-6 col-lg-4 mb-3 mb-sm-8" style={{cursor: 'pointer'}}>

            <article class="card h-100">
              <div class="card-img-top position-relative">
                <img class="card-img-top" src={BlogImg2} alt="Image Description" />
                <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                    <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                  </svg>
                </figure>
              </div>

              <div class="card-body">
                <h3><Link to="/blog" class="text-inherit" href="blog-single-article.html">I don't want to switch from Android to iPhone because Apple's ecosystem is too good</Link></h3>
                <p>Apple's ecosystem is second to none, and it comes with great functionality.</p>
              </div>

              <div class="card-footer border-0 pt-0">
                <div class="media align-items-center">
                  <div class="avatar-group">
                    <a class="avatar avatar-xs avatar-circle" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Hanna Wolfe">
                      <img class="avatar-img" src={AvatarImg} alt="Image Description" />
                    </a>

                  </div>
                  <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                    July 15
                </div>
                </div>
              </div>
            </article>

          </div>

          <div class="col-sm-6 col-lg-4 mb-3 mb-sm-8" style={{cursor: 'pointer'}}>

            <article class="card h-100">
              <div class="card-img-top position-relative">
                <img class="card-img-top" src={BlogImg3} alt="Image Description" />
                <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                    <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                  </svg>
                </figure>
              </div>

              <div class="card-body">
                <h3><Link to="/blog" class="text-inherit" href="blog-single-article.html">This Watch gym partnerships give you perks for working out</Link></h3>
                <p>For a lot of people these days, watch matters.</p>
              </div>

              <div class="card-footer border-0 pt-0">
                <div class="media align-items-center">
                  <div class="avatar-group">
                    <a class="avatar avatar-xs avatar-circle" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Hanna Wolfe">
                      <img class="avatar-img" src={AvatarImg} alt="Image Description" />
                    </a>
                  </div>
                  <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                    July 15
                </div>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </div>  
    )
}

export default Blogs;