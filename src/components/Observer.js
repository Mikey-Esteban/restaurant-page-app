const Observer = () => {

  const mainDiv = document.querySelector('#content');
  const PIXEL = document.createElement('DIV');
  PIXEL.id = 'pixel-to-watch';
  mainDiv.append(PIXEL);

  let observer = new IntersectionObserver(entries => {
    const heroNav = document.querySelector('#hero-navbar');
    const breadcrumbNav = document.querySelector('#breadcrumb-navbar');
    if (entries[0].boundingClientRect.y < 0) {
      heroNav.classList.add('fadeaway-quick');
      heroNav.classList.remove('fadein');
      heroNav.style.visibility = 'hidden';
      breadcrumbNav.classList.remove('is-hidden');
      breadcrumbNav.classList.add('fadein');
    } else {
      heroNav.style.visibility = 'visible';
      heroNav.classList.remove('fadeaway-quick');
      heroNav.classList.add('fadein');
      breadcrumbNav.classList.add('is-hidden');
      breadcrumbNav.classList.remove('fadein');
    }
  });
  observer.observe(document.querySelector("#pixel-to-watch"));

}

export default Observer
