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

export const createInfo = (color, title, name, bio) => {
  const NOTIFICATION = document.createElement('DIV');
  NOTIFICATION.classList.add('notification', color);
  const H2 = document.createElement('H2');
  H2.classList.add('subtitle', 'is-capitalized');
  H2.textContent = title;
  const H1 = document.createElement('H1');
  H1.classList.add('title', 'is-uppercase', 'is-4');
  H1.textContent = name
  const SPAN = document.createElement('SPAN');
  SPAN.textContent = bio;
  NOTIFICATION.append(H2, H1, SPAN);
  return NOTIFICATION
}


export default { createColumns, createColumn, createFigure, createInfo }
