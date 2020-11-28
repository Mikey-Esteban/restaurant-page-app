import Home from './Home/Home'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { findTabs, toggleActive } from './helpers/navbarFunctions'

document.addEventListener('DOMContentLoaded', () => {


  const handleTabChange = (event) => {

    const mainDIV = document.querySelector('#content');
    mainDIV.innerHTML = '';

    if ( event.target.id == 'homeTAB' || event.target.id == 'homeTab' ) {
      Home();
      const tabs = findTabs();
      toggleActive(tabs);
      addTabListeners();
    }
    else if (event.target.id == 'menuTAB' || event.target.id == 'menuTab' ){
      Menu();
      const tabs = findTabs();
      toggleActive(tabs);
      addTabListeners();
    }
    else if (event.target.id == 'contactTAB' || event.target.id == 'contactTab' ) {
      Contact();
      const tabs = findTabs();
      toggleActive(tabs);
      addTabListeners();
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


  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Add Footer
  const BODY = document.querySelector('BODY');
  const HERO = Hero({});
  const FOOTER = Footer();

  BODY.append(HERO, FOOTER);

  // Home Page as default
  Home();
  findTabs();
  addTabListeners();


})
