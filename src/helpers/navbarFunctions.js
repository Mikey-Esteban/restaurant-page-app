const findTabs = () => {
  const homeTAB = document.querySelector('#homeTAB');
  const menuTAB = document.querySelector('#menuTAB');
  const contactTAB = document.querySelector('#contactTAB');
  const tabs = [ homeTAB, menuTAB, contactTAB ]
  return tabs
}

const toggleActive = (tabs) => {
  for (let tab of tabs) {
    tab.id == event.target.id ? tab.classList.add('is-active') : tab.classList.remove('is-active');
  }
}

const addTabListeners = (func) => {
  homeTAB.addEventListener('click', func);
  menuTAB.addEventListener('click', func);
  contactTAB.addEventListener('click', func);
  homeTab.addEventListener('click', func);
  menuTab.addEventListener('click', func);
  contactTab.addEventListener('click', func);
}

const activateBurgerDropdown = () => {
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
}


export { findTabs, toggleActive, activateBurgerDropdown, addTabListeners }
