'use strict'  

import iziToast from 'izitoast';  
import 'izitoast/dist/css/iziToast.min.css';  

import SimpleLightbox from 'simplelightbox';  
import 'simplelightbox/dist/simple-lightbox.min.css';  

import { searchElement } from './js/pixabay-api';  
import { createMarkup } from './js/render-function';  

const galleryEl = document.querySelector('.gallery');  
const form = document.querySelector('form');  
const loader = document.querySelector('.loading');  

let galleryBox = new SimpleLightbox('.gallery a', {  
    caption: true,  
    captionDelay: 250,  
    captionsData: 'alt',  
});  

function findElement() {  
    form.addEventListener('submit', event => {  
        event.preventDefault();  
        
        galleryEl.innerHTML = '';  

        const inputElement = event.target.elements.search.value.toLowerCase().trim();  

        if (!inputElement) {  
            iziToast.error({ message: 'Please enter a search word.' });  
            return;  
        }  

        
        loader.style.display = 'block';  

        
        searchElement(inputElement)  
            .then(element => {  
                
                if (element.hits.length === 0) {  
                    iziToast.info({  
                        message:  
                        'Sorry, there are no images matching your search query. Please try again!',  
                    });  
                } else {  
                    createMarkup(element.hits, galleryEl);  
                    galleryBox.refresh();  
                }  
            })  
            .catch(error => {  
                iziToast.error({ message: error.message });  
            })  
            .finally(() => {  
                loader.style.display = 'none';  
                form.reset();  
            });  
    });  
}  

findElement();  
                    


