import Home from './Home/Home'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'
import Breadcrumb from './components/Breadcrumb'
import MainHero from './components/MainHero'
import Observer from './components/Observer'
import Footer from './components/Footer'
import { findTabs, toggleActive, activateBurgerDropdown, addTabListeners } from './helpers/navbarFunctions'

document.addEventListener('DOMContentLoaded', () => {

  let initialLoad = true;

  const handleTabChange = (event) => {

    const mainDIV = document.querySelector('#content');
    mainDIV.innerHTML = '';

    if ( event.target.id == 'homeTAB' || event.target.id == 'homeTab' ) {
      Home(initialLoad);
      const tabs = findTabs();
      toggleActive(tabs);
    }
    else if (event.target.id == 'menuTAB' || event.target.id == 'menuTab' ){
      Menu();
      const tabs = findTabs();
      toggleActive(tabs);
    }
    else if (event.target.id == 'contactTAB' || event.target.id == 'contactTab' ) {
      Contact();
      const tabs = findTabs();
      toggleActive(tabs);
    }
  }

  const BODY = document.querySelector('BODY');
  const BREADCRUMB = Breadcrumb();
  const MainHERO = MainHero();
  const FOOTER = Footer();
  const mainDIV = document.querySelector('#content');
  BODY.insertBefore(MainHERO, mainDIV);
  BODY.insertBefore(BREADCRUMB, MainHERO);
  BODY.append(FOOTER)

  // Home Page as default
  Home(initialLoad);
  Observer();
  addTabListeners(handleTabChange);
  activateBurgerDropdown();

  initialLoad = false;
})
