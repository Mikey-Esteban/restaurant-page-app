const HeroHead = () => {

  const HEAD = document.createElement('DIV');
  HEAD.classList.add('hero-head');

  const NAVBAR = document.createElement('NAV');
  NAVBAR.classList.add('navbar', 'is-fixed-top');
  NAVBAR.id = 'hero-navbar';

  const navbarBRAND = document.createElement('DIV');
  navbarBRAND.classList.add('navbar-brand');

  const LOGO = document.createElement('A');
  LOGO.classList.add('navbar-item');
  const logoIMG = document.createElement('img');
  logoIMG.src = 'https://bulma.io/images/bulma-type-white.png';
  logoIMG.alt = 'Logo';
  LOGO.append(logoIMG);

  const BURGER = document.createElement('SPAN');
  BURGER.classList.add('navbar-burger', 'burger', 'has-text-white');
  BURGER.dataset.target = 'navbarMenuHeroA';
  for (let i=0; i<3; i++) {
    const SPAN = document.createElement('SPAN');
    BURGER.append(SPAN);
  }
  // LOGO and BURGER finished.. append to navbarBRAND
  navbarBRAND.append(LOGO, BURGER);

  const navbarMENU = document.createElement('DIV');
  navbarMENU.classList.add('navbar-menu');
  navbarMENU.id = 'navbarMenuHeroA';
  const navbarEND = document.createElement('DIV');
  navbarEND.classList.add('navbar-end');
  const homeTAB = document.createElement('A');
  homeTAB.classList.add('navbar-item', 'has-text-white', 'has-text-weight-bold', 'is-active', 'mx-4');
  homeTAB.id = 'homeTAB';
  homeTAB.textContent = 'Home';
  const menuTAB = document.createElement('A');
  menuTAB.classList.add('navbar-item', 'link-invert', 'has-text-white', 'has-text-weight-bold', 'is-outlined', 'mx-4');
  menuTAB.textContent = 'Menu';
  menuTAB.id= 'menuTAB';
  const contactTAB = document.createElement('A');
  contactTAB.classList.add('navbar-item', 'has-text-white', 'has-text-weight-bold', 'is-outlined', 'mx-4');
  contactTAB.id = 'contactTAB';
  contactTAB.textContent = 'Contact';
  // TABS done, append to navbarEND
  navbarEND.append(homeTAB, menuTAB, contactTAB);
  navbarMENU.append(navbarEND);

  // navbarMENU and navbarBRAND done, append
  NAVBAR.append(navbarBRAND, navbarMENU);

  // NAVBAR done, append
  HEAD.append(NAVBAR);

  return HEAD

}

export default HeroHead
