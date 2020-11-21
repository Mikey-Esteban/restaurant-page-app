console.log('i ran');
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'

document.addEventListener('DOMContentLoaded', () => {

  // Home Page as default
  Home();

  // handleTabChange
  const handleTabChange = (event) => {
    const mainDIV = document.querySelector('#content');
    mainDIV.innerHTML = '';

    if (event.target.id == 'homeTab') {
      Home();
    }
    else if (event.target.id == 'menuTab'){
      Menu();
    }
  }

  const homeTab = document.querySelector('#homeTab');
  const menuTab = document.querySelector('#menuTab');
  const contactTab = document.querySelector('#contactTab');

  homeTab.addEventListener('click', handleTabChange);
  menuTab.addEventListener('click', handleTabChange);
  contactTab.addEventListener('click', handleTabChange);


})
