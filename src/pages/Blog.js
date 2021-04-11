import { Link } from 'react-router-dom';
import SubHero from '../components/SubHero/SubHero';
import AvatarImg from '../assets/img/100x100/img11.jpg';
import BlogImg1 from '../assets/img/500x280/img3.jpg';

const Blog = () => {
  return (
    <div>
      <SubHero blogImg={BlogImg1} />
      <div class="container space-top-3 space-bottom-2">
      <div class="w-lg-60 mx-lg-auto">
        <div class="mb-4">
          <h1 class="h2">Announcing a free plan for small teams</h1>
        </div>

        <div class="border-top border-bottom py-4 mb-5">
          <div class="row align-items-md-center">
            <div class="col-md-7 mb-5 mb-md-0">
              <div class="media align-items-center">
                <div class="avatar avatar-circle">
                  <img class="avatar-img" src={AvatarImg} alt="Image Description" />
                </div>
                <div class="media-body font-size-1 ml-3">
                  <span class="h6"><a href="blog-profile.html">Hanna Wolfe</a> <button type="button" class="btn btn-xs btn-soft-primary font-weight-bold transition-3d-hover py-1 px-2 ml-1">Follow</button></span>
                  <span class="d-block text-muted">July 15, 2018</span>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="d-flex justify-content-md-end align-items-center">
                <span class="d-block small font-weight-bold text-cap mr-2">Share:</span>

                <a class="btn btn-xs btn-icon btn-soft-secondary rounded-circle ml-2" href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-xs btn-icon btn-soft-secondary rounded-circle ml-2" href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-xs btn-icon btn-soft-secondary rounded-circle ml-2" href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="btn btn-xs btn-icon btn-soft-secondary rounded-circle ml-2" href="#">
                  <i class="fab fa-telegram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p>At Front, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>
      </div>

      

      <div class="w-lg-60 mx-lg-auto">
        <p>As we've grown, we've seen how Front has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>

        <p>That's why we are excited to share that we now have a <a href="#">free version of Front</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>

        <blockquote class="bg-soft-primary border-0 rounded-lg text-center text-dark font-size-2 font-weight-bold text-lh-lg p-5 my-5">
          "I love Front! I love the ease of use, I love the fact that I have total creative freedom..."
          <span class="d-block text-muted font-size-1 mt-2">- Adrian Teh</span>
        </blockquote>

        <h3>Bringing the culture of sharing to everyone</h3>

        <p>We know the power of sharing is real, and we want to create an opportunity for everyone to try Front and explore how transformative open communication can be. Now you can have a team of one or two designers and unlimited spectators (think PMs, management, marketing, etc.) share work and explore the design process earlier.</p>

        <ul class="list-article">
          <li>Front allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on," <a href="#">said</a> Stewart Scott-Curran, Intercom's Director of Brand Design.</li>
          <li>Front opened a new way of sharing. It's a persistent way for everyone to see and absorb each other's work," said David Scott, Creative Director at <a href="#">Eventbrite</a>.</li>
        </ul>
      </div>

      

      
    </div>
    </div>  
    )
}

export default Blog;