import Hero from './components/Hero'
import MainImage from './components/MainImage'

const Home = () => {

  const mainDIV = document.querySelector('#content');
  const HERO = Hero();
  const imageDIV = MainImage();

  const PIXEL = document.createElement('DIV');
  PIXEL.id = 'pixel-to-watch';
  console.log(PIXEL);

  mainDIV.append(HERO, imageDIV, PIXEL);

  const card = document.querySelector('.card');

  const twitterPLACER = document.querySelector('.tagging');
  console.log(twitterPLACER.getBoundingClientRect());

  let observer = new IntersectionObserver(entries => {
    console.log(entries);
    if (entries[0].boundingClientRect.y < 0) {
      console.log("Past 200px!");
      card.classList.add('show-card');
    } else {
      console.log("Not past 200px");
    }
  });
  observer.observe(document.querySelector("#pixel-to-watch"));

  // window.addEventListener('scroll', event => {
  //   const twitterPLACER = document.querySelector('.tagging');
  //   console.log(window.innerHeight);
  //   console.log(twitterPLACER.offsetTop);
  //   console.log(document.scrollTop);
  //   if (window.scrollY > (twitterPLACER.offsetTop)) {
  //     // card.classList.add('show-card');
  //   }
  // });

}

export default Home
