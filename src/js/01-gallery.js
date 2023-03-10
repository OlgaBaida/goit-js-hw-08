// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);


const imgConteiner = document.querySelector (".gallery");
const imgMarkup = createPictureGallery(galleryItems);
imgConteiner.insertAdjacentHTML ("afterbegin", imgMarkup);

function createPictureGallery (galleryItems) {
    return galleryItems.map ( ({preview, original, description})=> {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join ("")
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,});

