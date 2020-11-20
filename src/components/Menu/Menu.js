const Menu = () => {
  const appsNames = ['Garden Medley Salad', 'Butternut Squash Soup', 'Dumplings'];
  const mainsNames = ['Vegan Bowtie Pesto', 'Not Your Moms Fried Chickn', 'Turky Burgers'];
  const dessertsNames = ['All Vegan Peanut Butter Cups', 'Fruit Donuts Galore', 'Vegan French Toast'];

  const createMenuLIs = (UL, names) => {
    console.log('create menu li func ran.');
    for (let item of names) {
      const LI = document.createElement('LI');
      const A = document.createElement('A');
      A.innerText = item;
      LI.append(A);
      UL.append(LI);
    }
  }


  const mainDIV = document.querySelector('#content');

  // create the split columns
  const COLUMNS = document.createElement('DIV');
  COLUMNS.classList.add('columns');
  const menuCOLUMN = document.createElement('DIV');
  menuCOLUMN.classList.add('column', 'is-one-third', 'is-offset-1');
  const imgCOLUMN = document.createElement('DIV');
  imgCOLUMN.classList.add('column', 'is-one-third');

    // Create the Menu html
    const menuASIDE = document.createElement('ASIDE');
    menuASIDE.classList.add('menu');
      // Create Menu Labels for Apps, Mains, Desserts
      const appsP = document.createElement('P');
      appsP.classList.add('menu-label');
      appsP.innerText = 'Light Bites';
      const appsUL = document.createElement('UL');
      appsUL.classList.add('menu-list');
      createMenuLIs(appsUL, appsNames);


      const mainsP = document.createElement('P');
      mainsP.classList.add('menu-label');
      mainsP.innerText = 'Empty Stomach Quenchers';
      const mainsUL = document.createElement('UL');
      mainsUL.classList.add('menu-list');
      createMenuLIs(mainsUL, mainsNames);


      const dessertsP = document.createElement('P');
      dessertsP.classList.add('menu-label');
      dessertsP.innerText = 'Sweet Tooth Much?';
      const dessertsUL = document.createElement('UL');
      dessertsUL.classList.add('menu-list');
      createMenuLIs(dessertsUL, dessertsNames);


    menuASIDE.append(appsP, appsUL, mainsP, mainsUL, dessertsP, dessertsUL);
  menuCOLUMN.append(menuASIDE);

    const imgFIGURE = document.createElement('FIGURE');
    imgFIGURE.classList.add('image', 'is-256x256');
      const IMG = document.createElement('IMG');
      IMG.classList.add('is-rounded', 'is-food');
      IMG.src = 'assets/food/mains/chickensandwich.jpg';
    imgFIGURE.append(IMG);
  imgCOLUMN.append(imgFIGURE);

  COLUMNS.append(menuCOLUMN, imgCOLUMN);

  mainDIV.append(COLUMNS);

}

export default Menu
