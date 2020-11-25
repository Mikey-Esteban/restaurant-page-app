import Hero from '../Hero'

const MenuTeaser = () => {

  console.log('Menu Teaser ran');

  const heroData = {
    head: false,
    class: ['has-text-centered'],
    size: 'is-medium',
    titleClass: ['has-text-link', 'is-4'],
    titleText: 'A Brilliant Menu',
    subtitleClass: ['has-text-link', 'is-6'],
    subtitleText: 'Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
  }

  const menuTeaserDIV = document.createElement('DIV');
  menuTeaserDIV.classList.add('box', 'menu-teaser-container');
  const HERO = Hero(heroData);
  menuTeaserDIV.append(HERO);

  return menuTeaserDIV
}

export default MenuTeaser
