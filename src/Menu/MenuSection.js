const MenuSection = () => {

  const SECTION = document.createElement('SECTION');
  SECTION.classList.add('section');
  const COLUMNS = document.createElement('DIV');
  COLUMNS.classList.add('columns');
  const menuCOLUMN = document.createElement('DIV');
  menuCOLUMN.classList.add('column', 'is-one-quarter', 'is-offset-2', 'menu-food-column');
  const imgCOLUMN = document.createElement('DIV');
  imgCOLUMN.classList.add('column', 'auto', 'img-food-column');

  COLUMNS.append(menuCOLUMN, imgCOLUMN);
  SECTION.append(COLUMNS);

  return SECTION
}

export default MenuSection
