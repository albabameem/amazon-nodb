import bgImg from '../../assets/svg/components/abstract-shapes-12.svg';



const SubHero = (props) => {
  return (
    <div class="bg-dark bg-img-hero" style={{ backgroundImage: 'url(' + (props.blogImg ? props.blogImg : bgImg) + ')', backgroundSize: (props.blogImg ? 'contain' : 'cover'), backgroundPosition: 'center center' }}>
      <div class="container position-relative z-index-2" className={(props.blogImg ? 'space-4' : 'space-2')}>
        <div class="w-md-80 w-lg-60 text-center mx-md-auto">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default SubHero;