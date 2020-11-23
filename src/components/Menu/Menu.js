import MenuHero from './components/MenuHero'
import MenuSection from './components/MenuSection'
import MenuAside from './components/MenuAside'
import MenuImage from './components/MenuImage'

const Menu = () => {

  const mainDIV = document.querySelector('#content');

  const HERO = MenuHero();
  const SECTION = MenuSection();
  const menuASIDE = MenuAside();
  const menuIMAGE = MenuImage();

  const menuCOLUMN = SECTION.querySelector('.menu-food-column');
  const imgCOLUMN = SECTION.querySelector('.img-food-column');

  menuCOLUMN.append(menuASIDE);

  const menuINFO = document.createElement('DIV');
  menuINFO.textContent = ' hi hi hi hi hi hi hi';
  imgCOLUMN.append(menuIMAGE, menuINFO);

  mainDIV.append(HERO, SECTION);

}

export default Menu
