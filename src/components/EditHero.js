import Cta2 from './Cta2'

const EditHero = (data) => {

  const hero = document.querySelector('.main-hero');
  const heroBody = document.querySelector('.hero-body');
  heroBody.innerHTML = '';
  const CONTAINER = document.createElement('DIV');
  CONTAINER.classList.add('container', 'has-text-centered');
  heroBody.append(CONTAINER);

  if (data['heights']) {
    hero.style.minHeight = data['heights']['min'];
    hero.style.maxHeight = data['heights']['max'];
  }

  if (data['titleClass']) {
    const TITLE = document.createElement('H1');
    TITLE.className = '';
    TITLE.classList.add('title');
    TITLE.classList.add(...data['titleClass']);
    TITLE.innerText = data['titleText'];
    CONTAINER.append(TITLE);
  }

  if (data['subtitleClass']) {
    const SUBTITLE = document.createElement('H2');
    SUBTITLE.className = '';
    SUBTITLE.classList.add('subtitle');
    SUBTITLE.classList.add(...data['subtitleClass']);
    SUBTITLE.innerText = data['subtitleText'];
    CONTAINER.append(SUBTITLE);
  }

  if (data['cta2']) {
    if (data['first']) {
      const ctaDIV = Cta2();
      heroBody.append(ctaDIV);
    }
    else {
      setTimeout( () => {
        const ctaDIV = Cta2();
        heroBody.append(ctaDIV);
      }, 13500);
      CONTAINER.className = '';
      CONTAINER.classList.add('container', 'has-text-centered', 'slow-show-start');
      data['slowStart']();
    }
  }

}

export default EditHero
