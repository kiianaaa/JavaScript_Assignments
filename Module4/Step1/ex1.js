'use strict';


fetch('https://api.tvmaze.com/search/shows?q=eye').

    then(response => response.json()).
    then(data => info(data));

const p = document.getElementById('hadaf');



function info(data) {
    console.log(`Name of the show:`)
    console.log(data[0]['show']['name']);
    console.log(`Link to the show:`)
    console.log(data[0]['show']['url']);
    console.log(`Showes summery:`)
    console.log(data[0]['show']['summary']);
    console.log(`Show's poster:`)
    console.log(data[0]['show']['image']['medium']);
}