document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');

    burger.addEventListener('click', function() {
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        burger.classList.add('clicked');
      } else {
        menu.style.display = 'none';
        burger.classList.remove('clicked');
      }
    });
  });