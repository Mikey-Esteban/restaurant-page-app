const Observer = () => {

  const mainDIV = document.querySelector('#content');
  const PIXEL = document.createElement('DIV');
  PIXEL.id = 'pixel-to-watch';
  console.log(PIXEL);
  mainDIV.append(PIXEL);

  let observer = new IntersectionObserver(entries => {
    const heroNAV = document.querySelector('#hero-navbar');
    const breadcrumbNAV = document.querySelector('#breadcrumb-navbar');
    if (entries[0].boundingClientRect.y < 0) {
      heroNAV.classList.add('fadeaway-quick');
      heroNAV.classList.remove('fadein');
      heroNAV.style.visibility = 'hidden';
      breadcrumbNAV.classList.remove('is-hidden');
      breadcrumbNAV.classList.add('fadein');
    } else {
      heroNAV.style.visibility = 'visible';
      heroNAV.classList.remove('fadeaway-quick');
      heroNAV.classList.add('fadein');
      breadcrumbNAV.classList.add('is-hidden');
      breadcrumbNAV.classList.remove('fadein');
    }
  });
  observer.observe(document.querySelector("#pixel-to-watch"));

}

export default Observer
