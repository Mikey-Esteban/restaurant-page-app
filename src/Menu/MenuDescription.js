const MenuDescription = () => {

  const menuINFO = document.createElement('DIV');
  menuINFO.classList.add('column', 'has-text-centered');
  menuINFO.style.maxWidth = '256px';
  const H1 = document.createElement('H1');
  H1.classList.add('title', 'has-text-link', 'has-text-weight-normal', 'is-size-5');
  H1.id = 'food-description';
  const H2 = document.createElement('H2');
  H2.classList.add('subtitle', 'has-text-link', 'has-text-weight-bold', 'is-size-5', 'is-italic');
  H2.id = 'food-price';
  menuINFO.append(H1, H2);

  return menuINFO

}

export default MenuDescription
