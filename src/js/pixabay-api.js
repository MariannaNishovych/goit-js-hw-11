
const API_KEY = '46087000-8dffe905d5bdd270a8d626623';
const BASE_URL = `https://${API_KEY}.pixabay.com/api/`;

export function searchElement(element) {

    const url = `${BASE_URL}?q=${element}&image_type=photo&orientation=horizontal&safesearch=true`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}