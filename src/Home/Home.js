import EditHero from '../components/EditHero'
import Observer from '../components/Observer'
import ReserveCta from '../components/ReserveCta'
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
  const ReserveCTA = ReserveCta();

  mainDIV.append(CHEFBIO, menuTeaserDIV, ReserveCTA);

}

export default Home
