const contactButton = document.querySelector('.info__button--contact');
const contactPopup = document.querySelector('.write-us-popup');
const contactClose = contactPopup.querySelector('.popup-close');
const contactName = contactPopup.querySelector('#write-us-name');
const contactEmail = contactPopup.querySelector('#write-us-email');
const contactText = contactPopup.querySelector('#write-us-text');
const contactForm = contactPopup.querySelector('.write-us__form-wrapper');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("contactName");
} catch (err) {
  isStorageSupport = false;
};

contactButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  contactPopup.classList.add('popup-show');
  if (storage) {
    contactName.value = storage;
    contactEmail.focus();
  } else {
    contactName.focus();
  }
});


contactClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove('popup-show');
  contactPopup.classList.remove('popup-error');
});

contactForm.addEventListener('submit', function (evt) {
  if (!contactName.value || !contactEmail.value || !contactText.value) {
    console.log("!!!");
    evt.preventDefault();
    contactPopup.classList.remove('popup-error');
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add('popup-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('contactName', contactName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains('popup-show')) {
      evt.preventDefault();
      contactPopup.classList.remove('popup-show');
      contactPopup.classList.remove('popup-error');
    }
  }
});
