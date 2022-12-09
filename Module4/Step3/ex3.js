'use strict';

fetch('https://api.tvmaze.com/search/shows?q=supernatural').
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
        // genra as h5 element
        const h5 = document.createElement('h6');
        h5.innerHTML = 'Genres: ';
        // seperator between genras
        const span = document.createElement('span');
        const genres = data[dat]['show']['genres'];
        const separetor = genres.join(' | ');
        span.textContent = separetor;
        h5.appendChild(span);
        article.appendChild(h5);
        // show's link
        const k = document.createElement('a');
        article.appendChild(k);
        const attr = document.createAttribute('href');
        attr.value = data[dat]['show']['url'];
        k.setAttributeNode(attr);
        const kim = document.createAttribute('hadaf');
        kim.value = '_blank';
        k.setAttributeNode(kim);
        k.innerHTML = data[dat]['show']['url'];
        // poster
        const img = document.createElement('img');
        img.src = data[dat]['show']['image']['medium'];
        // text were the img doesn't show
        img.alt = `Showe's poster`;
        // when there is no poster pic
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