import EditHero from '../components/EditHero'
import Observer from '../components/Observer'
import MenuSection from './MenuSection'
import MenuAside from './MenuAside'
import MenuImage from './MenuImage'
import MenuDescription from './MenuDescription'

import { mainHeroData } from './helpers/menuData'

const Menu = () => {

  const mainDiv = document.querySelector('#content');
  Observer();
  EditHero(mainHeroData);
  const SECTION = MenuSection();
  const menuASIDE = MenuAside();
  const menuIMAGE = MenuImage();
  const menuINFO = MenuDescription();

  const menuColumn = SECTION.querySelector('.menu-food-column');
  const imgColumn = SECTION.querySelector('.img-food-column');

  menuColumn.append(menuASIDE);
  imgColumn.append(menuIMAGE, menuINFO);
  mainDiv.append(SECTION);

}

export default Menu
