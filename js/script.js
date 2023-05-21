let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
}

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};

sansSerifFontButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
};

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
};


let articleSections = document.querySelectorAll('.blog-article');

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    };
}


let listViewButton = document.querySelector('.card-view-button-list');
let gridViewButton = document.querySelector('.card-view-button-grid');

let cardsList = document.querySelector('.cards');

listViewButton.onclick = function () {
    cardsList.classList.add('list');
    listViewButton.classList.add('active');
    gridViewButton.classList.remove('active');
};

gridViewButton.onclick = function () {
    cardsList.classList.remove('list');
    listViewButton.classList.remove('active');
    gridViewButton.classList.add('active');
};


let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let activeImage of previews) {
activeImage.onclick = function (evt) {
  evt.preventDefault();
  mainImage.src = activeImage.href;

  let currentActive = document.querySelector('.preview-list .active-item');
  currentActive.classList.remove('active-item');
  activeImage.classList.add('active-item');
};
}
