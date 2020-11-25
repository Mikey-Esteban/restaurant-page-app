const MenuSection = () => {

  const SECTION = document.createElement('SECTION');
  SECTION.classList.add('section', 'mt-6');
  const COLUMNS = document.createElement('DIV');
  COLUMNS.classList.add('columns');
  const menuCOLUMN = document.createElement('DIV');
  menuCOLUMN.classList.add('column', 'is-one-quarter', 'is-offset-1', 'menu-food-column');
  const imgCOLUMN = document.createElement('DIV');
  imgCOLUMN.classList.add('column', 'auto', 'img-food-column');

  COLUMNS.append(menuCOLUMN, imgCOLUMN);
  SECTION.append(COLUMNS);

  return SECTION
}

export default MenuSection
