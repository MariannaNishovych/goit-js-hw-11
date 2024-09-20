'use strict'

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchElement } from './js/pixabay-api';
import { createMarkup } from './js/render-function';

const refs = {
    gallaryEl: document.querySelector('.gallery'),
    formEl: document.querySelector('form'),
    loaderEl: document.querySelector('.loading'),
}

let galleryBox = new SimpleLightbox('.galleryEl a', {
                    caption: true,
                    captionDelay: 250,
                    captionsData: 'alt',
});
                    


