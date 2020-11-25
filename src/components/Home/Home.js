// import MainImage from './components/MainImage'
import Hero from '../Hero'
import ChefBio from '../Contact/components/ChefBio'
import MenuTeaser from './MenuTeaser'

const Home = () => {

  console.log('Home ran');

  const mainDIV = document.querySelector('#content');

  // const imageDIV = MainImage();
  //
  // const PIXEL = document.createElement('DIV');
  // PIXEL.id = 'pixel-to-watch';
  // console.log(PIXEL);
  //
  // mainDIV.append(HERO, imageDIV, PIXEL);
  //
  // const card = document.querySelector('.card');
  //
  // const twitterPLACER = document.querySelector('.tagging');
  // console.log(twitterPLACER.getBoundingClientRect());
  //
  // let observer = new IntersectionObserver(entries => {
  //   console.log(entries);
  //   if (entries[0].boundingClientRect.y < 0) {
  //     console.log("Past 200px!");
  //     card.classList.add('show-card');
  //   } else {
  //     console.log("Not past 200px");
  //   }
  // });
  // observer.observe(document.querySelector("#pixel-to-watch"));

  const heroData = {
    head: true,
    class: ['is-primary', 'main-hero', 'is-info'],
    size: 'is-large',
    titleClass: ['has-text-info', 'has-text-weight-light', 'is-1', 'slow-show-start'],
    titleText: 'Welcome to Veganic Corner',
    subtitleClass: ["has-text-link", "slow-show-start"],
    subtitleText: `come work, talk, commune.. but most importantly be hungry for delicious healthy eats.`
  }

  const HERO = Hero(heroData);
  const CHEFBIO = ChefBio();
  const menuTeaserDIV = MenuTeaser();

  mainDIV.append(HERO, CHEFBIO, menuTeaserDIV);

}

export default Home
