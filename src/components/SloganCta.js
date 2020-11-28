const SloganCta = () => {

  const DIV = document.createElement('DIV');
  DIV.classList.add('column', 'is-6', 'is-offset-3');

  const H1 = document.createElement('DIV');
  H1.classList.add('subtitle', 'is-size-3','has-text-white', 'is-uppercase', 'slide-left');
  H1.textContent = 'add your slogan here!'
  const bookBUTTON = document.createElement('BUTTON');
  bookBUTTON.classList.add('button', 'is-info', 'is-outlined', 'is-capitalize', 'is-large', 'mr-4', 'slide-right');
  bookBUTTON.textContent = 'Book a table';
  const takeoutBUTTON = document.createElement('BUTTON');
  takeoutBUTTON.classList.add('button', 'is-link', 'is-outlined', 'is-capitalize', 'has-text-white','is-large', 'slide-right');
  takeoutBUTTON.textContent = 'Order out!'

  DIV.append(H1, bookBUTTON, takeoutBUTTON);

  return DIV

}

export default SloganCta
