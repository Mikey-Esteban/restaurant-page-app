import SloganCta from './SloganCta'

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
    TITLE.classList.add('title', ...data['titleClass']);
    TITLE.innerText = data['titleText'];
    CONTAINER.append(TITLE);
  }

  if (data['subtitleClass']) {
    const SUBTITLE = document.createElement('H2');
    SUBTITLE.className = '';
    SUBTITLE.classList.add('subtitle', ...data['subtitleClass']);
    SUBTITLE.innerText = data['subtitleText'];
    CONTAINER.append(SUBTITLE);
  }

  if (data['sloganCta']) {
    if (data['first']) {
      const CTADIV = SloganCta(data['sloganData']);
      heroBody.append(CTADIV);
    }
    else {
      setTimeout( () => {
        const heroBody = document.querySelector('.hero-body');
        const div = heroBody.querySelector('.container');
        const h1 = div.querySelector('H1');
        // check to see if page has changed since
        if (h1.textContent == 'Welcome to Veganic Corner') {
          const CTADIV = SloganCta(data['sloganData']);
          heroBody.append(CTADIV);
        }
      }, 13500);
      CONTAINER.className = '';
      CONTAINER.classList.add('container', 'has-text-centered', 'slow-show-start');
      data['slowStart']();
    }
  }

}

export default EditHero
