
const API_KEY = '46087000-8dffe905d5bdd270a8d626623';
const BASE_URL = 'https://pixabay.com/api/';

export function searchElement(element) {

    const url = `${BASE_URL}?key=${API_KEY}&q=${element}&image_type=photo&orientation=horizontal&safesearch=true`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}