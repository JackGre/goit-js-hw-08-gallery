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
/**

createGallery(images);
//galleryEl.addEventListener('click', onClickImage);

function createGallery(images) {
    const imageGallery = images.map((image, i) => {
        
        return `<li class="gallery_items">
        <a class="gallery__link" 
        href="${image.original}">
        <img 
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            data-namber="${i}"
            alt="${image.description}"
        />
        </a>
        </li>`;
    }).join(''); 

    galleryEl.insertAdjacentHTML('afterbegin', imageGallery);
} */