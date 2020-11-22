const ChefBio = () => {

  // Set up MAIN COLUMN size 10
  const mainDIV = document.querySelector('#content');
  const wrapperCOLUMNS = document.createElement('DIV');
  wrapperCOLUMNS.classList.add('columns');
  const wrapperCOLUMN = document.createElement('DIV');
  wrapperCOLUMN.classList.add('column', 'is-10', 'is-offset-1');
  wrapperCOLUMNS.append(wrapperCOLUMN);
  mainDIV.append(wrapperCOLUMNS);

  const createColumns = (column1, column2) => {
    const COLUMNS = document.createElement('DIV');
    COLUMNS.classList.add('columns', 'level');
    COLUMNS.append(column1, column2);
    return COLUMNS
  }

  const createColumn = (classes) => {
    const COLUMN = document.createElement('DIV');
    COLUMN.classList.add(...classes);
    return COLUMN
  }

  const createFigure = (size, src) => {
    const FIGURE = document.createElement('FIGURE');
    FIGURE.classList.add('image', size);
    const IMG = document.createElement('IMG');
    IMG.classList.add('is-rounded');
    IMG.src = src;
    FIGURE.append(IMG);
    return FIGURE
  }

  const createInfo = (color, text) => {
    const NOTIFICATION = document.createElement('DIV');
    NOTIFICATION.classList.add('notification', color);
    NOTIFICATION.innerHTML = text;
    return NOTIFICATION
  }

  const chefOne = {
    bio: `Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit`,
    figColClasses: ["column", "is-3", "is-offset-2", "level-left"],
    infoColClasses: ["column", "is-6", "level-right", "mr-6"],
    figSrc: 'assets/chef.jpg',
    figRatio: 'is-2by3',
    infoColor: 'is-success'
  }

  const chefTwo = {
    bio: `Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit`,
    figColClasses: ["column", "is-5", "level-right", "mr-6"],
    infoColClasses: ["column", "is-5", "is-offset-1", "level-left"],
    figSrc: 'assets/chef2.jpg',
    figRatio: 'is-3by2',
    infoColor: 'is-link',
    reverse: true
  }

  const chefs = [chefOne, chefTwo];

  for (let chef of chefs) {
    const FIGURE = createFigure(chef.figRatio, chef.figSrc);
    const INFO = createInfo(chef.infoColor, chef.bio);
    const figCOLUMN = createColumn(chef.figColClasses);
    const infoCOLUMN = createColumn(chef.infoColClasses);
    figCOLUMN.append(FIGURE);
    infoCOLUMN.append(INFO);
    if (chef.reverse) {
      const COLUMNS = createColumns(infoCOLUMN, figCOLUMN);
      wrapperCOLUMN.append(COLUMNS);
    } else {
      const COLUMNS = createColumns(figCOLUMN, infoCOLUMN);
      wrapperCOLUMN.append(COLUMNS);
    }
  }

}

export default ChefBio
