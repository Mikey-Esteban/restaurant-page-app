const MenuHero = () => {

  // Create hero section, hero body, container, h1 & h1
  const heroSECTION = document.createElement('SECTION');
  heroSECTION.classList.add('hero', 'is-primary' );
  const heroBODY = document.createElement('DIV');
  heroBODY.classList.add('hero-body');
  const heroCONTAINER = document.createElement('DIV');
  heroCONTAINER.classList.add('container');
  const heroTITLE = document.createElement('H1');
  heroTITLE.classList.add('title', 'has-text-grey-darker');
  heroTITLE.innerText = 'Always fresh & local ingredients made everyday';
  const heroSUBTITLE = document.createElement('H2');
  heroSUBTITLE.classList.add('subtitle');
  heroSUBTITLE.innerText = `...and we're sure you've heard about our coffee`;

  heroCONTAINER.append(heroTITLE, heroSUBTITLE);
  heroBODY.append(heroCONTAINER);
  heroSECTION.append(heroBODY);

  return heroSECTION

}

export default MenuHero
