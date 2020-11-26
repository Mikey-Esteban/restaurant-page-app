const findTabs = () => {
  const homeTAB = document.querySelector('#homeTAB');
  const menuTAB = document.querySelector('#menuTAB');
  const contactTAB = document.querySelector('#contactTAB');
  // const homeTab = document.querySelector('#homeTab');
  // const menuTab = document.querySelector('#menuTab');
  // const contactTab = document.querySelector('#contactTab');
  const tabs = [ homeTAB, menuTAB, contactTAB ]
  return tabs
}

const toggleActive = (tabs) => {
  for (let tab of tabs) {
    tab.id == event.target.id ? tab.classList.add('is-active') : tab.classList.remove('is-active');
  }
}

export { findTabs, toggleActive }
