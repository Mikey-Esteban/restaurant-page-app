import Hero from '../Hero'
import FoodTeaser from './FoodTeaser'
import { menuTeaserHeroData, drinksData, foodData } from './data'

const MenuTeaser = () => {

  const menuTeaserDIV = document.createElement('DIV');
  menuTeaserDIV.classList.add('box', 'menu-teaser-container');
  const HERO = Hero(menuTeaserHeroData);

  const foodSECTION = document.createElement('SECTION');
  const drinksDIV = FoodTeaser(drinksData);
  const foodsDIV = FoodTeaser(foodData);

  foodSECTION.append(drinksDIV, foodsDIV);
  menuTeaserDIV.append(HERO, foodSECTION);

  return menuTeaserDIV
}

export default MenuTeaser
