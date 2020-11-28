// import Hero from '../components/Hero'
import Cta from '../components/Cta'
import Observer from '../components/Observer'
import ChefBio from './ChefBio'
import MenuTeaser from './MenuTeaser'
import { mainHeroData } from './helpers/homeData'

const Home = () => {

  console.log('in Home');
  const mainDIV = document.querySelector('#content');
  Observer();
  // const HERO = Hero(mainHeroData);
  const CHEFBIO = ChefBio();
  const menuTeaserDIV = MenuTeaser();
  const CTA = Cta();

  mainDIV.append(CHEFBIO, menuTeaserDIV, CTA);

}

export default Home
