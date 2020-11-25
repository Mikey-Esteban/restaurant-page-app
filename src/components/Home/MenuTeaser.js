import Hero from '../Hero'
import FoodTeaser from './FoodTeaser'
import { heroData, drinksData } from './data'

const MenuTeaser = () => {

  console.log('Menu Teaser ran');

  const menuTeaserDIV = document.createElement('DIV');
  menuTeaserDIV.classList.add('box', 'menu-teaser-container');
  const HERO = Hero(heroData);

  const foodSECTION = document.createElement('SECTION');
  const drinksDIV = FoodTeaser(drinksData);

  const foodsDIV = document.createElement('DIV');
  foodsDIV.classList.add('columns');

  foodSECTION.append(drinksDIV, foodsDIV);
  menuTeaserDIV.append(HERO, foodSECTION);

  return menuTeaserDIV
}

export default MenuTeaser
