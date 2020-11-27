import Hero from '../components/Hero'
import Observer from '../components/Observer'
import MenuSection from './MenuSection'
import MenuAside from './MenuAside'
import MenuImage from './MenuImage'
import MenuDescription from './MenuDescription'

import { mainHeroData } from './helpers/menuData'

const Menu = () => {

  const mainDIV = document.querySelector('#content');
  Observer();

  const HERO = Hero(mainHeroData);
  const SECTION = MenuSection();
  const menuASIDE = MenuAside();
  const menuIMAGE = MenuImage();
  const menuINFO = MenuDescription();

  const menuCOLUMN = SECTION.querySelector('.menu-food-column');
  const imgCOLUMN = SECTION.querySelector('.img-food-column');

  menuCOLUMN.append(menuASIDE);

  imgCOLUMN.append(menuIMAGE, menuINFO);

  mainDIV.append(HERO, SECTION);

}

export default Menu
