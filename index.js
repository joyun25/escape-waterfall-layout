// You have to create a `Bricklayer` instance for every Bricklayer container you have.
const bricklayer = new Bricklayer(document.getElementById('my-bricklayer'));

// menu link
const menuLinks = document.querySelectorAll('.menu_link');
menuLinks.forEach(menuLink => {
  menuLink.addEventListener ('click', e => {
    e.preventDefault();
    menuLinks.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    menuLink.classList.add('active');
  })
});

// image animation
const boxes = document.querySelectorAll('.box');
let i = 1;
function animationLoop() {
  setTimeout(function() {
    boxes[i].classList.add('bounce-in');
    i++;
    if (i < 10) {
      animationLoop();
    }
  }, 500)
}
animationLoop();