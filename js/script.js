// табы
document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs__btn').forEach(function(btn) {
      btn.classList.remove('tabs__btn--active')});

    e.currentTarget.classList.add('tabs__btn--active');

    document.querySelectorAll('.tabs__item').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('tabs__item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');});
});


// аккордеон
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    const accordionHeadersList = accordionHeaders;

    if (header.classList.contains('active')) {
      header.classList.remove('active');
      accordionContent.style.display = 'none';
    } else {
      accordionHeadersList.forEach((h) => {
        h.classList.remove('active');
        h.nextElementSibling.style.display = 'none';
      });
      header.classList.add('active');
      accordionContent.style.display = 'block';
    }
  });
});



// бургер
let burger = document.querySelector (".header__burger");
// let menu = document.querySelector (".btn__item");

const bbtn = document.querySelector('#bbtn');
// const bnav = document.querySelector('#bnav');

bbtn.addEventListener('click', function(e) {
  // bnav.classList.toggle('header__burger_nav--active');
  burger.classList.toggle ("header__burger--active");
})

document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.closest('.header__burger--active')) {
    return;
  }
  document.querySelector('.header__burger--active')?.classList.remove('header__burger--active');
  document.querySelector('.header__burger_nav')?.classList.remove('header__burger--active');
  document.querySelector('.header')?.classList.remove('header--active');
});
