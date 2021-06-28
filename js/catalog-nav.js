const catalogNav = document.querySelector('.catalog-nav');
const catalogNavLink = document.querySelector('.site-nav__link--catalog');

catalogNavLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (catalogNav.classList.contains("catalog-nav--show")) {
    catalogNav.classList.remove("catalog-nav--show");
    catalogNavLink.classList.remove('site-nav__link--catalog-open');
  } else {
    catalogNav.classList.add("catalog-nav--show");
    catalogNavLink.classList.add('site-nav__link--catalog-open');
  }
});

// catalogNavLink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   mapPopup.classList.remove("popup-show");
// });
