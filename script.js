import images from "./gallery-items.js";

const body = document.querySelector('body');
console.log(body);
const galleryEl = document.querySelector('.js-gallery');
console.log(galleryEl);
const modalWindowImage = document.querySelector('.js-lightbox');
console.log(modalWindowImage);
const imageZoom = document.querySelector('.lightbox__image')
console.log(imageZoom);



addGalleryImage(images);


function addGalleryImage(images) {
    const imageGallery = images.map((image, index) => {
        return `<li class="gallery_items">
        <a class="gallery__link" 
        href="${image.original}">
        <img 
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            data-namber="${index}"
            alt="${image.description}"
        />
        </a>
        </li>`;
        
    }).join('');
    galleryEl.insertAdjacentHTML('afterbegin', imageGallery);
}

galleryEl.addEventListener('click', onClickImage);
console.log(galleryEl)

function onClickImage(event) {
    event.preventDefault();
    const eventClick = event.target;
   if(eventClick.nodeName !=='IMG') {
        return;
    }
    modalWindowImage.classList.toggle('is-open');
    body.classList.toggle('is-fixed');
    imageZoom.src = eventClick.dataset.source;
    imageZoom.alt = eventClick.dataset.source;
    imageZoom.dataset.number = eventClick.dataset.number;

    /*window.addEventListener('keydown', onModalClosePush);
    window.addEventListener('keydown', onModalPrevImgPush);
    window.addEventListener('keydown', onModalNextImgPush);*/
};



/*const refs = {
body: document.querySelector('body'),
galleryList: document.querySelector('.js-gallery'),
modalWindow: document.querySelector('.js-lightbox'),
zoomedImage: document.querySelector('.lightbox__image'),
};
const { body, galleryList, modalWindow, zoomedImage } = refs;

createImagesMarkup(images);
galleryList.addEventListener('click', onImageClick);
//modalWindow.addEventListener('click', onModalCloseClick);


function createImagesMarkup(images) {
    const imagesMarkup = images.map((image, i) => {
        return `<li class="gallery_item">
    <a class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      data-number = ${i}
      alt="${image.description}"
    />
  </a>
  </li>`;
    }).join('');
    
    galleryList.insertAdjacentHTML('afterbegin', imagesMarkup);
}



function onImageClick(evt) {
   evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    modalWindow.classList.toggle('is-open');
    body.classList.toggle('is-fixed');
    zoomedImage.src = evt.target.dataset.source;
    zoomedImage.alt = evt.target.dataset.source;
    zoomedImage.dataset.number = evt.target.dataset.number;

/*window.addEventListener('keydown', onModalClosePush);
window.addEventListener('keydown', onModalPrevImgPush);
window.addEventListener('keydown', onModalNextImgPush);
    
}*/

