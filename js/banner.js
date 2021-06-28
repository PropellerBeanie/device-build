let banners = document.querySelectorAll('.banner');
let bannerButtons = document.querySelectorAll('.banner__slider-controls-button');

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('banner__slider-controls-button')) {
    bannerClickHandler(evt.target);
  } else if (evt.target.classList.contains('names-list__item-link')) {
    serviceClickHandler(evt.target);
  }
})

function bannerClickHandler(evtTarget) {
  for (let banner of banners) {
    if (banner.dataset.id === evtTarget.dataset.for && !banner.classList.contains('banner--current')) {
      for (let banner of banners) {
        banner.classList.remove('banner--current');
      };
      for (button of bannerButtons) {
        button.classList.remove('banner__slider-controls-button--current');
      };
      banner.classList.add('banner--current');
      evtTarget.classList.add('banner__slider-controls-button--current');
    }
  }
}

let serviceItems = document.querySelectorAll('.names-list__item');
let infoTabs = document.querySelectorAll('.info-tab');

function serviceClickHandler(evtTarget) {
  for (infoTab of infoTabs) {
    if (infoTab.dataset.id === evtTarget.dataset.for && !infoTab.classList.contains('info-tab--current')) {
      for (let infoTab of infoTabs) {
        infoTab.classList.remove('info-tab--current');
      };
      for (serviceItem of serviceItems) {
        serviceItem.classList.remove('names-list__item--active');
        serviceItem.querySelector('.names-list__item-link').classList.remove('names-list__item-link--active')
      };
      infoTab.classList.add('info-tab--current');
      evtTarget.classList.add('names-list__item-link--active');
      evtTarget.closest('.names-list__item').classList.add('names-list__item--active')
    }
  }
}
