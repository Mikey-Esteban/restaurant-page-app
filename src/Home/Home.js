// import MainImage from './components/MainImage'
import Hero from '../components/Hero'
import Cta from '../components/Cta'
import ChefBio from './ChefBio'
import MenuTeaser from './MenuTeaser'
import { mainHeroData } from './helpers/homeData'

const Home = () => {

  const mainDIV = document.querySelector('#content');

  // const imageDIV = MainImage();
  //
  const PIXEL = document.createElement('DIV');
  PIXEL.id = 'pixel-to-watch';
  console.log(PIXEL);
  //
  mainDIV.append(PIXEL);
  //
  // const card = document.querySelector('.card');
  //
  // const twitterPLACER = document.querySelector('.tagging');
  // console.log(twitterPLACER.getBoundingClientRect());
  //
  let observer = new IntersectionObserver(entries => {
    console.log(entries);
    const heroNAV = document.querySelector('#hero-navbar');
    const breadcrumbNAV = document.querySelector('#breadcrumb-navbar');
    if (entries[0].boundingClientRect.y < 0) {
      heroNAV.classList.add('fadeaway-quick');
      heroNAV.classList.remove('fadein');
      heroNAV.style.visibility = 'hidden';
      breadcrumbNAV.classList.remove('is-hidden');
      breadcrumbNAV.classList.add('fadein');
    } else {
      heroNAV.style.visibility = 'visible';
      heroNAV.classList.remove('fadeaway-quick');
      heroNAV.classList.add('fadein');
      breadcrumbNAV.classList.add('is-hidden');
      breadcrumbNAV.classList.remove('fadein');
    }
  });
  observer.observe(document.querySelector("#pixel-to-watch"));


  const HERO = Hero(mainHeroData);
  const CHEFBIO = ChefBio();
  const menuTeaserDIV = MenuTeaser();
  const CTA = Cta();

  mainDIV.append(HERO, CHEFBIO, menuTeaserDIV, CTA);

}

export default Home
