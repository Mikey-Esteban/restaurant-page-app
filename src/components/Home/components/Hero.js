const Hero = () => {

  // Create hero section, hero body, container, h1 & h1
  const heroSECTION = document.createElement('SECTION');
  heroSECTION.classList.add('hero', 'is-primary', 'is-medium');
  const heroBODY = document.createElement('DIV');
  heroBODY.classList.add('hero-body');
  const heroCONTAINER = document.createElement('DIV');
  heroCONTAINER.classList.add('container');
  const heroTITLE = document.createElement('H1');
  heroTITLE.classList.add('title', 'has-text-grey-darker');
  heroTITLE.innerText = 'Welcome to Veganic Corner';
  const heroSUBTITLE = document.createElement('H2');
  heroSUBTITLE.classList.add('subtitle');
  heroSUBTITLE.innerText = 'come work, talk, commune.. but most importantly be hungry for delicious healthy eats.';

  heroCONTAINER.append(heroTITLE, heroSUBTITLE);
  heroBODY.append(heroCONTAINER);
  heroSECTION.append(heroBODY);

  return heroSECTION

}

export default Hero
