'use strict';

const menu = document.querySelector('.btn, btn__off');
const mobileNavigation = document.querySelector('.navigation');
const main = document.querySelector('.main');
const checkbox = document.querySelector('.toggle--checkbox');

menu.addEventListener('click', () => {
  mobileNavigation.classList.toggle('navigation--active');
});

main.addEventListener('click', () => {
  if (mobileNavigation.classList.contains('navigation--active')) {
    mobileNavigation.classList.toggle('navigation--active');
    checkbox.checked = false;
  }
});

const links = document.querySelectorAll('.navigation__link');

links.forEach((item) =>
  item.addEventListener('click', () => {
    if (mobileNavigation.classList.contains('navigation--active')) {
      mobileNavigation.classList.toggle('navigation--active');
      checkbox.checked = false;
    }
  })
);
