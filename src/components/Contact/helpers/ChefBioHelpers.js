export const createColumns = (column1, column2) => {
  const COLUMNS = document.createElement('DIV');
  COLUMNS.classList.add('columns', 'level', 'chef-bio');
  COLUMNS.append(column1, column2);
  return COLUMNS
}

export const createColumn = (classes) => {
  const COLUMN = document.createElement('DIV');
  COLUMN.classList.add(...classes);
  return COLUMN
}

export const createFigure = (size, src) => {
  const FIGURE = document.createElement('FIGURE');
  FIGURE.classList.add('image', size);
  const IMG = document.createElement('IMG');
  IMG.classList.add('is-rounded');
  IMG.src = src;
  FIGURE.append(IMG);
  return FIGURE
}

export const createInfo = (color, text) => {
  const NOTIFICATION = document.createElement('DIV');
  NOTIFICATION.classList.add('notification', color);
  NOTIFICATION.innerHTML = text;
  return NOTIFICATION
}


export default { createColumns, createColumn, createFigure, createInfo }
