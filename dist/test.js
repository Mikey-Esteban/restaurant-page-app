document.addEventListener('DOMContentLoaded', () => {

  console.log('test.js ran');
  const H1 = document.querySelector('.title');
  const H2 = document.querySelector('.subtitle');


  setTimeout( () => {
    H1.classList.add('slow-show-end');
    H2.classList.add('slow-show-end');

  }, 1000);

})
