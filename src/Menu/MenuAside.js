import { imgSRC, menuNames, menuObject } from './helpers/menuData'

const MenuAside = () => {
  const handleChangeIMG = (event) => {
    setTimeout( () => {
      const IMG = document.querySelector('#food-img');
      IMG.src = imgSRC[event.target.id];
      IMG.classList.add('transitioning-src');   // CSS property to handle smooth switching
    }, 300);
  }

  const handleTransitionClass = (event) => {
    const IMG = document.querySelector('#food-img');
    IMG.src = '';
    IMG.classList.remove('transitioning-src');
  }

  const createMenuLabels = (menuNames) => {
    const labels = [];
    for (let name of menuNames) {
      const P = document.createElement('P');
      P.classList.add('menu-label');
      P.innerText = name;
      labels.push(P);
    }
    return labels
  }

  const createMenuLIs = (names) => {
    const UL = document.createElement('UL');
    UL.classList.add('menu-list');
    for (let item of names) {
      const LI = document.createElement('LI');
      const A = document.createElement('A');
      A.innerText = item;
      A.id = item;
      A.addEventListener('mouseover',handleChangeIMG);
      A.addEventListener('mouseleave', handleTransitionClass);
      LI.append(A);
      UL.append(LI);
    }
    return UL
  }

  const createMenuASIDE = () => {
    const ASIDE = document.createElement('ASIDE');
    ASIDE.classList.add('menu');
    const labels = createMenuLabels(menuNames);
    for (let P of labels) {
      const UL = createMenuLIs(menuObject[P.textContent]);
      ASIDE.append(P, UL);
    }
    return ASIDE
  }

  return createMenuASIDE();
}

export default MenuAside
