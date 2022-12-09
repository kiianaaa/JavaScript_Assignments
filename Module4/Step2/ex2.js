'use strict';



fetch('https://api.tvmaze.com/search/shows?q=semantic').
    then(response => response.json()).
    then(data => info(data));
const p = document.getElementById('hadaf1');

function info(data) {
    console.log(data);
    document.getElementById('hadaf').innerHTML = data[0]['show']['name'];
    const ab = document.createElement('a');
    p.appendChild(ab);
    const attr = document.createAttribute('href');
    attr.value = data[0]['show']['url'];
    document.querySelector('a').setAttributeNode(attr);
    const bal = document.createAttribute('hadaf')
    bal.value = '_blank'
    document.querySelector('a').setAttributeNode(bal)
    document.querySelector('a').innerHTML = data[0]['show']['url'];
    const img = document.createElement('img');
    img.src = data[0]['show']['image']['medium'];
    img.alt = `Show's poster`
    document.getElementById('hadaf2').appendChild(img)
    document.getElementById('hadaf3').innerHTML = data[0]['show']['summary'];
}
