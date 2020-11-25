document.addEventListener('DOMContentLoaded', () => {

  console.log('test.js ran');
  const DIV = document.querySelector('.slow-show-start');

  setTimeout( () => {
    DIV.classList.add('slow-show-end');
  }, 1000);

})
