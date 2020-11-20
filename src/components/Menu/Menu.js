const Menu = () => {
  const appsNames = ['Garden Medley Salad', 'Butternut Squash Soup', 'Dumplings'];
  const mainsNames = ['Vegan Bowtie Pesto', 'Not Your Moms Fried Chickn', 'Turky Burgers'];
  const dessertsNames = ['All Vegan Peanut Butter Cups', 'Fruit Donuts Galore', 'Vegan French Toast'];

  const imgSRC = {
    'Garden Medley Salad': 'assets/food/apps/salad.jpg',
    'Butternut Squash Soup': 'assets/food/apps/soup.jpg',
    'Dumplings': 'assets/food/apps/soup.jpg',
    'Vegan Bowtie Pesto': 'assets/food/mains/pasta.jpg',
    'Not Your Moms Fried Chickn': 'assets/food/mains/chickensandwich.jpg',
    'Turky Burgers': 'assets/food/mains/turkeyburger.jpg',
    'All Vegan Peanut Butter Cups': 'assets/food/desserts/peanutbuttercup.jpg',
    'Fruit Donuts Galore': 'assets/food/desserts/donuts.jpg',
    'Vegan French Toast': 'assets/food/desserts/frenchtoast.jpg'
  }

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
  // Helper Function to create each item from (App, Main, Dessert)
  const createMenuLIs = (UL, names) => {
    for (let item of names) {
      const LI = document.createElement('LI');
      const A = document.createElement('A');
      A.innerText = item;
      A.id = item;
      A.addEventListener('click', grabFoodImg);
      LI.append(A);
      UL.append(LI);
    }
  }
  // Help Function for food item to call on correct food img
  const grabFoodImg = (event) => {
    // Grab the IMG
    const IMG = document.querySelector('#food-img');
    // change the src
    IMG.src = imgSRC[event.target.id];
  }

  const mainDIV = document.querySelector('#content');

  // create the split columns
  const SECTION = document.createElement('SECTION');
  SECTION.classList.add('section', 'mt-6');
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
      IMG.id = 'food-img';
      IMG.src = 'assets/food/mains/chickensandwich.jpg';
    imgFIGURE.append(IMG);
  imgCOLUMN.append(imgFIGURE);

  COLUMNS.append(menuCOLUMN, imgCOLUMN);
  SECTION.append(COLUMNS);

  mainDIV.append(SECTION);

}

export default Menu
