'use strict';



fetch('https://api.tvmaze.com/search/shows?q=semantic').
    then(response => response.json()).
    then(data => info(data));
const p = document.getElementById('hadaf1');

function info(data) {
    //name
    document.getElementById('hadaf').innerHTML = data[0]['show']['name'];
    //lnk
    const k = document.createElement('a');
    p.appendChild(k);
    const soo = document.createAttribute('href');
    soo.value = data[0]['show']['url'];
    document.querySelector('a').setAttributeNode(soo);
    const kim = document.createAttribute('hadaf')
    // blank opens in new tab
    kim.value = '_blank'
    document.querySelector('a').setAttributeNode(kim)
    document.querySelector('a').innerHTML = data[0]['show']['url'];
    //poster
    const img = document.createElement('img');
    img.src = data[0]['show']['image']['medium'];
    img.alt = `Show's poster`
    document.getElementById('hadaf2').appendChild(img)
    //summery
    document.getElementById('hadaf3').innerHTML = data[0]['show']['summary'];
}
