const Cta = () => {

  const DIV = document.createElement('DIV');
  DIV.classList.add('box', 'cta', 'level');
  const COLUMNS = document.createElement('DIV');
  COLUMNS.classList.add('level-left');
  const WRAPPER = document.createElement('DIV');
  WRAPPER.classList.add('column', 'is-10', 'is-offset-2');
  COLUMNS.append(WRAPPER);
  DIV.append(COLUMNS);

  const P = document.createElement('P');
  P.classList.add('is-size-6', 'has-text-weight-bold', 'is-uppercase', 'mb-3', 'has-text-shadow');
  P.textContent = 'Reserve';

  const HEADER = document.createElement('P');
  HEADER.classList.add('is-size-5', 'has-text-weight-bold', 'is-uppercase', 'has-text-link', 'has-text-shadow');
  HEADER.textContent = 'Skip the line';

  const DESCRIPTION = document.createElement('P');
  DESCRIPTION.classList.add('is-size-6', 'has-text-link', 'mb-5', 'has-text-shadow');
  DESCRIPTION.textContent = "Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.";

  const BUTTON = document.createElement('BUTTON');
  BUTTON.classList.add('button', 'is-link', 'is-inverted', 'is-outlined', 'is-uppercase');
  BUTTON.textContent = 'Reserve Table';

  const btnDESCRIPTION = document.createElement('P');
  btnDESCRIPTION.classList.add('is-size-6', 'is-italic', 'has-text-info', 'has-text-shadow');
  btnDESCRIPTION.textContent = 'You will be redirected to opentable.com to reserve table.'

  WRAPPER.append(P, HEADER, DESCRIPTION, BUTTON, btnDESCRIPTION);

  return DIV

}

export default Cta
