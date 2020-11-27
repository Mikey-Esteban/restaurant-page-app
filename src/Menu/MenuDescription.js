const MenuDescription = () => {

  const menuINFO = document.createElement('DIV');
  menuINFO.classList.add('column', 'is-4', 'has-text-centered');
  const H1 = document.createElement('H1');
  H1.classList.add('title', 'has-text-link', 'is-size-5');
  H1.id = 'food-description';
  const H2 = document.createElement('H2');
  H2.classList.add('subtitle', 'has-text-link', 'is-size-6');
  H2.id = 'food-price';
  menuINFO.append(H1, H2);

  return menuINFO

}

export default MenuDescription
