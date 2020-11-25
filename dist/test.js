document.addEventListener('DOMContentLoaded', () => {

  console.log('test.js ran');
  const DIV = document.querySelector('.slow-show-start');
  const H1 = DIV.querySelector('H1');
  const H2 = DIV.querySelector('H2');
  console.log(H1);
  console.log(H2);

  setTimeout( () => {
    DIV.classList.add('slow-show-end');
  }, 1000);

  setTimeout( () => {
    H1.classList.add('fadeaway');
    H2.classList.add('fadeaway');
  }, 10000);

})
