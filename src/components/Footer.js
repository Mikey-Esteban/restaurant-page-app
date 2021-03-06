const Footer = () => {

  const FOOTER = document.createElement('FOOTER');
  FOOTER.classList.add('footer');

  const DIV = document.createElement('DIV');
  DIV.classList.add('content', 'has-text-centered');
  const P = document.createElement('P');
  const text = [
    '<strong>Site</strong> by <a href="#">Mikey Esteban</a>.',
  ]
  P.innerHTML = text.join(' ');

  DIV.append(P);
  FOOTER.append(DIV);

  return FOOTER

}

export default Footer
