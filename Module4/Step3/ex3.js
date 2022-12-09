'use strict';

fetch('https://api.tvmaze.com/search/shows?q=society').
    then(response => response.json()).
    then(data => info(data));


const pic = document.querySelector('#pictures');
const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);
const article = document.createElement('article');
section.appendChild(article);



function info(data) {
    for (const dat in data) {
        // name of show as h1 element
        const h1 = document.createElement('h1');
        h1.innerHTML = data[dat]['show']['name'];
        article.appendChild(h1);
        const h6 = document.createElement('h6');
        h6.innerHTML = 'Genres: ';
        const span = document.createElement('span');
        const genres = data[dat]['show']['genres'];
        const separetor = genres.join(' | ');
        span.textContent = separetor;
        h6.appendChild(span);
        article.appendChild(h6);
        const ab = document.createElement('a');
        article.appendChild(ab);
        const attr = document.createAttribute('href');
        attr.value = data[dat]['show']['url'];
        ab.setAttributeNode(attr);
        const bal = document.createAttribute('target');
        bal.value = '_blank';
        ab.setAttributeNode(bal);
        ab.innerHTML = data[dat]['show']['url'];
        const img = document.createElement('img');
        img.src = data[dat]['show']['image']['medium'];
        img.alt = 'This is a image';
        img.addEventListener('error', function (event) {
            event.pic.src = 'https://via.placeholder.com/100x200?text=text+here';
            event.onerror = null;
        });
        article.appendChild(img);
        const p = document.createElement('p');
        p.innerHTML = data[dat]['show']['summary'];
        article.appendChild(p);

    }
}