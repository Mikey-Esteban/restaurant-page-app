import Home from './Home/Home'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'

document.addEventListener('DOMContentLoaded', () => {

  // Home Page as default
  Home();

  // handleTabChange
  const handleTabChange = (event) => {
    console.log('clicked');
    const mainDIV = document.querySelector('#content');
    mainDIV.innerHTML = '';

    if (event.target.id == 'homeTab' || event.target.id == 'homeTAB') {
      Home();
    }
    else if (event.target.id == 'menuTab' || event.target.id == 'menuTAB'){
      Menu();
    }
    else if (event.target.id == 'contactTab' || event.target.id == 'contactTAB') {
      Contact();
    }
  }

  const homeTab = document.querySelector('#homeTab');
  const menuTab = document.querySelector('#menuTab');
  const contactTab = document.querySelector('#contactTab');
  const homeTAB = document.querySelector('#homeTAB');
  const menuTAB = document.querySelector('#menuTAB');
  const contactTAB = document.querySelector('#contactTAB');

  homeTab.addEventListener('click', handleTabChange);
  menuTab.addEventListener('click', handleTabChange);
  contactTab.addEventListener('click', handleTabChange);
  homeTAB.addEventListener('click', handleTabChange);
  menuTAB.addEventListener('click', handleTabChange);
  contactTAB.addEventListener('click', handleTabChange);

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

})
