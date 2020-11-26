import Hero from '../components/Hero'
import MenuSection from './MenuSection'
import MenuAside from './MenuAside'
import MenuImage from './MenuImage'

import { foodInfo, mainHeroData } from './helpers/menuData'

const Menu = () => {

  const mainDIV = document.querySelector('#content');

  const HERO = Hero(mainHeroData);
  const SECTION = MenuSection();
  const menuASIDE = MenuAside();
  const menuIMAGE = MenuImage();

  const menuCOLUMN = SECTION.querySelector('.menu-food-column');
  const imgCOLUMN = SECTION.querySelector('.img-food-column');

  menuCOLUMN.append(menuASIDE);

  const menuINFO = document.createElement('DIV');
  const H1 = document.createElement('H1');
  H1.classList.add('title', 'has-text-link');
  H1.textContent = foodInfo['Vegan French Toast']['description'];
  const H2 = document.createElement('H2');
  H2.classList.add('subtitle', 'has-text-link');
  H2.textContent = foodInfo['Vegan French Toast']['price'];
  menuINFO.append(H1, H2);

  imgCOLUMN.append(menuIMAGE, menuINFO);

  mainDIV.append(HERO, SECTION);

}

export default Menu
