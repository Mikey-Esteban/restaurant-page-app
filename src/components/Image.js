const Image = (data) => {
  const { size, src } = data

  const FIGURE = document.createElement('FIGURE');
  FIGURE.classList.add('image', size);
  if (data['classes']) FIGURE.classList.add(...data['classes']);
  if (data['id']) FIGURE.id = data['id'];
  const IMG = document.createElement('IMG');
  IMG.src = src;
  FIGURE.append(IMG);

  return FIGURE

}

export default Image
