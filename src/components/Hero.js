import HeroHead from './HeroHead'

const Hero = (data) => {

  // Create hero section, hero body, container, h1 & h1
  const SECTION = document.createElement('SECTION');
  SECTION.classList.add('hero');
  if (data['class']) SECTION.classList.add(...data['class']);
  if (data['size']) SECTION.classList.add(data['size']);

  if (data['heights']) {
    SECTION.style.minHeight = data['heights']['min'];
    SECTION.style.maxHeight = data['heights']['max'];    
  }
  console.log('past the min max height section');

  if (data['head']) {
    const HEAD = HeroHead();
    SECTION.append(HEAD);
  }

  const BODY = document.createElement('DIV');
  BODY.classList.add('hero-body');

  const CONTAINER = document.createElement('DIV');
  CONTAINER.classList.add('container', 'has-text-centered');
  if (data['slowStart']) CONTAINER.classList.add('slow-show-start');

  const TITLE = document.createElement('H1');
  TITLE.classList.add('title');
  if (data['titleClass']) TITLE.classList.add(...data['titleClass']);
  TITLE.innerText = data['titleText'];

  const SUBTITLE = document.createElement('H2');
  SUBTITLE.classList.add('subtitle');
  if (data['subtitleClass']) SUBTITLE.classList.add(...data['subtitleClass']);
  SUBTITLE.innerText = data['subtitleText'];

  CONTAINER.append(TITLE, SUBTITLE);
  BODY.append(CONTAINER);
  SECTION.append(BODY);

  return SECTION

}

export default Hero
