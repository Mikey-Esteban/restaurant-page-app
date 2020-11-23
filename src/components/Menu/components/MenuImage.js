const MenuImage = () => {

  const imgFigureWRAPPER = document.createElement('DIV');
  imgFigureWRAPPER.classList.add('food-img');
  const imgFIGURE = document.createElement('FIGURE');
  imgFIGURE.classList.add('image', 'is-256x256');
  const IMG = document.createElement('IMG');
  IMG.classList.add('is-rounded', 'is-food');
  IMG.id = 'food-img';
  IMG.src = '';
  imgFIGURE.append(IMG);
  imgFigureWRAPPER.append(imgFIGURE);

  return imgFigureWRAPPER

}

export default MenuImage
