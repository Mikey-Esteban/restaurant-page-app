const Menu = () => {
  const appsNames = ['Garden Medley Salad', 'Butternut Squash Soup', 'Dumplings'];
  const mainsNames = ['Vegan Bowtie Pesto', 'Not Your Moms Fried Chickn', 'Turky Burgers'];
  const dessertsNames = ['All Vegan Peanut Butter Cups', 'Fruit Donuts Galore', 'Vegan French Toast'];

  const menuNames = [
    ['Light Bites', appsNames],
    ['Empty Stomach Quenchers', mainsNames],
    ['Sweet Tooth Much?', dessertsNames]
  ];

  // Helper Function to create App, Main, Dessert labels
  const createMenuLabels = () => {
    for (let name of menuNames) {
      const P = document.createElement('P');
      P.classList.add('menu-label');
      P.innerText = name[0];
      const UL = document.createElement('UL');
      UL.classList.add('menu-list');
      createMenuLIs(UL, name[1]);
      menuASIDE.append(P, UL);
    }
  }
  // Helper Function to create each item of (App, Main, Dessert)
  const createMenuLIs = (UL, names) => {
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
    createMenuLabels();

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
