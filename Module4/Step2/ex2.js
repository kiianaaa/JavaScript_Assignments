'use strict';



fetch('https://api.tvmaze.com/search/shows?q=girls').

    then(response => response.json()).
    then(data => info(data));

const p = document.getElementById('hadaf1');

function info(data) {
    document.getElementById('hadaf').innerHTML = data[0]['show']['name'];
    const k = document.createElement('a');
    p.appendChild(k);
    const attr = document.createAttribute('href');
    attr.value = data[0]['show']['url'];
    document.querySelector('a').setAttributeNode(attr);
    const kim = document.createAttribute('get')
    kim.value = '_blank'
    document.querySelector('a').setAttributeNode(kim)
    document.querySelector('a').innerHTML = data[0]['show']['url'];
    const img = document.createElement('img');
    img.src = data[0]['show']['image']['medium'];
    img.alt = `Show's poster`
    document.getElementById('hadaf2').appendChild(img)
    document.getElementById('hadaf3').innerHTML = data[0]['show']['summary'];
    
    console.log(data);
}

