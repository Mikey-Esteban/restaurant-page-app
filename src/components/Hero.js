const Hero = () => {

  const mainDiv = document.querySelector('#content');

  // Create hero section, hero body, container, h1 & h1
  const heroSECTION = document.createElement('SECTION');
  heroSECTION.classList.add('hero', 'is-primary', 'is-medium');
  const heroBODY = document.createElement('DIV');
  heroBODY.classList.add('hero-body');
  const heroCONTAINER = document.createElement('DIV');
  heroCONTAINER.classList.add('container');
  const heroTITLE = document.createElement('H1');
  heroTITLE.classList.add('title');
  heroTITLE.innerText = 'Welcome to Veganic Corner';
  const heroSUBTITLE = document.createElement('H2');
  heroSUBTITLE.classList.add('subtitle');
  heroSUBTITLE.innerText = 'come work, talk, commune.. but most importantly be hungry for delicious healthy eats.';

  // append h1 & h2 to container
  heroCONTAINER.append(heroTITLE, heroSUBTITLE);
  // append container to body -> body to section
  heroBODY.append(heroCONTAINER);
  heroSECTION.append(heroBODY);
  // append to main DIV
  mainDiv.append(heroSECTION);

}

export default Hero
