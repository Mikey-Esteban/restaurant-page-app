import EditHero from '../components/EditHero'
import Observer from '../components/Observer'
import Cta from '../components/Cta'
import ChefBio from './ChefBio'
import MenuTeaser from './MenuTeaser'
import { mainHeroData1, mainHeroData2 } from './helpers/homeData'

const Home = (initialLoad) => {

  const mainDIV = document.querySelector('#content');
  Observer();
  if (initialLoad) {
    EditHero(mainHeroData1);
  } else {
    EditHero(mainHeroData2);
  }
  const CHEFBIO = ChefBio();
  const menuTeaserDIV = MenuTeaser();
  const CTA = Cta();

  mainDIV.append(CHEFBIO, menuTeaserDIV, CTA);

}

export default Home
