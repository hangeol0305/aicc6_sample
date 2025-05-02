// menu toggle

const menu = document.querySelector('.menu');
const icon = document.querySelector('.menu i');
const nav = document.querySelector('.navi');

menu.addEventListener('click', function () {
  this.classList.toggle('active');
  const navheight = nav.scrollHeight;

 // console.log(navheight);

  if (this.classList.contains('active')) {
    icon.setAttribute('class', 'ri-close-line');
    nav.style.height = navHeight + 'px';
  } else {
    icon.setAttribute('class', 'ri-menu-line');
    nav.style.height = 0;
    }
});


const navs = document.querySelectorAll('.navi li');

navs.forEach((nav, idx) => {
  nav.addEventListener('click', function () {
    navs.forEach((nav) => {
      nav.classList.remove('active');
    });

    this.classList.add('active');
  });
});

// console.log(navs);
