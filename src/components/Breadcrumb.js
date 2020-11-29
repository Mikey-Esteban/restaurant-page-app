const Breadcrumb = () => {

  const DIV = document.createElement('DIV');
  DIV.classList.add('block', 'is-hidden');
  DIV.id = 'breadcrumb-navbar';

  const NAV = document.createElement('NAV');
  NAV.classList.add('breadcrumb', 'navbar', 'is-small', 'is-fixed-top', 'is-light', 'pl-5', 'pt-2');
  NAV.setAttribute('aria-label', 'breadcrumbs');

  const UL = document.createElement('UL');
  const links = [
    { id: 'homeTab', text: 'Home' },
    { id: 'menuTab', text: 'Menu' },
    { id: 'contactTab', text: 'Contact' },
  ]
  for (let link of links) {
    const LI = document.createElement('LI');
    const A = document.createElement('A');
    A.setAttribute('href', '#');
    A.id = link.id;
    A.textContent = link.text;
    LI.append(A);
    UL.append(LI);
  }

  NAV.append(UL);
  DIV.append(NAV);

  return DIV
}

export default Breadcrumb
