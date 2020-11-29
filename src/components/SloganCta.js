const SloganCta = (data) => {

  const DIV = document.createElement('DIV');
  DIV.classList.add('column', 'is-6', 'is-offset-3');

  const H1 = document.createElement('DIV');
  H1.classList.add(...data['titleClass']);
  H1.textContent = 'add your slogan here!'
  const bookBUTTON = document.createElement('BUTTON');
  bookBUTTON.classList.add(...data['bookBtnClass']);
  bookBUTTON.textContent = 'Book a table';
  const takeoutBUTTON = document.createElement('BUTTON');
  takeoutBUTTON.classList.add(...data['takeoutBtnClass']);
  takeoutBUTTON.textContent = 'Order out!'

  DIV.append(H1, bookBUTTON, takeoutBUTTON);

  return DIV

}

export default SloganCta
