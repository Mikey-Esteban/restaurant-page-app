import HeroHead from './HeroHead'

const newHero = () => {

  const SECTION = document.createElement('SECTION');
  SECTION.classList.add('hero', 'is-primary', 'main-hero', 'is-info', 'is-fullheight');

  const HEAD = HeroHead();
  SECTION.append(HEAD);

  const BODY = document.createElement('DIV');
  BODY.classList.add('hero-body');

  SECTION.append(BODY);

  return SECTION

}

export default newHero
