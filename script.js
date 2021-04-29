import images from "./gallery-items.js";

const body = document.querySelector('body');
//console.log(body);
const galleryEl = document.querySelector('.js-gallery');
//console.log(galleryEl);
const modalWindowImage = document.querySelector('.js-lightbox');
//console.log(modalWindowImage);
const imageZoom = document.querySelector('.lightbox__image')
//console.log(imageZoom);



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
            data-number=${index}
            alt="${image.description}"
        />
        </a>
        </li>`;
        
    }).join('');
    galleryEl.insertAdjacentHTML('afterbegin', imageGallery);
}

galleryEl.addEventListener('click', onClickImage);
//console.log(galleryEl)

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

    window.addEventListener('keydown', modalClosePush);
    window.addEventListener('keydown', modalPreviousImgPush);
    window.addEventListener('keydown', modalNextImgPush);
    
};




modalWindowImage.addEventListener('click', modalCloseBtn)
function modalCloseBtn(event) {
    //console.log(event.target)

    if(!event.target.classList.contains('lightbox__button')
     && 
     !event.target.classList.contains('lightbox__overlay')) {
        return;
    }

    closeModal();
};



function modalClosePush (event) {
    if (event.key !== 'Escape') {
            return;
        }    
        closeModal();
    };

function modalPreviousImgPush(event) {
    const indexImage = imageZoom.dataset.number;
  
    const previousImg = document.querySelector(`img[data-number='${indexImage - 1}']`);
    
    if (event.key !== 'ArrowLeft' || previousImg === null) {
            return;
    }
     
    imageZoom.src = previousImg.dataset.source;
    imageZoom.alt = previousImg.dataset.source;
    imageZoom.dataset.number = previousImg.dataset.number;    
    
    
}



function modalNextImgPush(event) {
    const indexImage = imageZoom.dataset.number;
    const nextImg = document.querySelector(`img[data-number='${Number(indexImage) + 1}']`);

   if (event.key !== 'ArrowRight' || nextImg === null) {
        return;
    }

    imageZoom.src = nextImg.dataset.source;
    imageZoom.alt = nextImg.dataset.source;
    imageZoom.dataset.number = nextImg.dataset.number;
} 

function closeModal() {
    modalWindowImage.classList.toggle('is-open');
    body.classList.toggle('is-fixed');
    imageZoom.src = '';
    imageZoom.alt = '';

    window.removeEventListener('keydown', modalClosePush);
    window.removeEventListener('keydown', modalPreviousImgPush);
    window.removeEventListener('keydown', modalNextImgPush);
};

