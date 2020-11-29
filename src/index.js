import Home from './Home/Home'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'
import MainHero from './components/MainHero'
import Observer from './components/Observer'
import Footer from './components/Footer'
import { findTabs, toggleActive, activateBurgerDropdown } from './helpers/navbarFunctions'

document.addEventListener('DOMContentLoaded', () => {

  let initialLoad = true;

  const handleTabChange = (event) => {

    const mainDIV = document.querySelector('#content');
    mainDIV.innerHTML = '';

    if ( event.target.id == 'homeTAB' || event.target.id == 'homeTab' ) {
      Home(initialLoad);
      // const tabs = findTabs();
      // toggleActive(tabs);
      // addTabListeners();
    }
    else if (event.target.id == 'menuTAB' || event.target.id == 'menuTab' ){
      Menu();
      // const tabs = findTabs();
      // toggleActive(tabs);
      // addTabListeners();
    }
    else if (event.target.id == 'contactTAB' || event.target.id == 'contactTab' ) {
      Contact();
      // const tabs = findTabs();
      // toggleActive(tabs);
      // addTabListeners();
    }
  }

  const addTabListeners = () => {
    homeTAB.addEventListener('click', handleTabChange);
    menuTAB.addEventListener('click', handleTabChange);
    contactTAB.addEventListener('click', handleTabChange);
    homeTab.addEventListener('click', handleTabChange);
    menuTab.addEventListener('click', handleTabChange);
    contactTab.addEventListener('click', handleTabChange);
  }


  // Add Footer
  const BODY = document.querySelector('BODY');

  const MainHERO = MainHero();
  const FOOTER = Footer();
  const mainDIV = document.querySelector('#content');
  BODY.insertBefore(MainHERO, mainDIV);
  BODY.append(FOOTER)

  // Home Page as default
  Home(initialLoad);
  Observer();
  const tabs = findTabs();
  toggleActive(tabs);
  addTabListeners();
  activateBurgerDropdown();


  initialLoad = false;
})
