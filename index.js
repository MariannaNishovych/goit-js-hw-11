import{S as f,i as o}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="46087000-8dffe905d5bdd270a8d626623",h="https://pixabay.com/api/";function g(s){const a=`${h}?key=${y}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function L(s,a){const r=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:l,views:d,comments:m,downloads:p})=>`<li class="gallery-list">
                    <a class="gallery-link" href="${e}">
                        <img class="img" src="${i}" 
                        alt="${t}" 
                        title="${t}" />
                    </a>
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-name">Likes</p>
                            <p class="data-result">${l}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-name">Views</p>
                            <p class="data-result">${d}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-name">Comments</p>
                            <p class="data-result">${m}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-name">Downloads</p>
                            <p class="data-result">${p}</p>
                        </li>
                    </ul> 
        </li>`).join();a.insertAdjacentHTML("beforeend",r)}const n=document.querySelector(".gallery"),c=document.querySelector("form"),u=document.querySelector(".loading");let $=new f(".gallery a",{caption:!0,captionDelay:250,captionsData:"alt"});function b(){c.addEventListener("submit",s=>{s.preventDefault(),n.innerHTML="";const a=s.target.elements.search.value.toLowerCase().trim();if(!a){o.error({message:"Please enter a search request."});return}u.style.display="block",g(a).then(r=>{r.hits.length===0?o.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(L(r.hits,n),$.refresh())}).catch(r=>{o.error({message:r.message})}).finally(()=>{u.style.display="none",c.reset()})})}b();
//# sourceMappingURL=index.js.map
