const Footer = () => {

  const FOOTER = document.createElement('FOOTER');
  FOOTER.classList.add('footer');

  const DIV = document.createElement('DIV');
  DIV.classList.add('content', 'has-text-centered');
  const P = document.createElement('P');
  const text = [
    '<strong>Site</strong> by <a href="#">Mikey Esteban</a>.',
    'The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.',
    'The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.'
  ]
  P.innerHTML = text.join(' ');

  DIV.append(P);
  FOOTER.append(DIV);

  return FOOTER

}

export default Footer
