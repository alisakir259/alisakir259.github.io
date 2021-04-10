$.getJSON('https://covid19.mathdro.id/api', function(data){
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-glo').innerHTML = positif;
    document.getElementById('meninggal-glo').innerHTML = meninggal;
    document.getElementById('sembuh-glo').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Indonesia',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-ind').innerHTML = positif;
    document.getElementById('meninggal-ind').innerHTML = meninggal;
    document.getElementById('sembuh-ind').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Thailand',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-tha').innerHTML = positif;
    document.getElementById('meninggal-tha').innerHTML = meninggal;
    document.getElementById('sembuh-tha').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Malaysia',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-mas').innerHTML = positif;
    document.getElementById('meninggal-mas').innerHTML = meninggal;
    document.getElementById('sembuh-mas').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Laos',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-lao').innerHTML = positif;
    document.getElementById('meninggal-lao').innerHTML = meninggal;
    document.getElementById('sembuh-lao').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Brunei',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-bru').innerHTML = positif;
    document.getElementById('meninggal-bru').innerHTML = meninggal;
    document.getElementById('sembuh-bru').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Singapore',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-sin').innerHTML = positif;
    document.getElementById('meninggal-sin').innerHTML = meninggal;
    document.getElementById('sembuh-sin').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Timor-Leste',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-tls').innerHTML = positif;
    document.getElementById('meninggal-tls').innerHTML = meninggal;
    document.getElementById('sembuh-tls').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Vietnam',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-vie').innerHTML = positif;
    document.getElementById('meninggal-vie').innerHTML = meninggal;
    document.getElementById('sembuh-vie').innerHTML = sembuh;
});

$.getJSON('https://covid19.mathdro.id/api/countries/Philippines',function (data) {
    let positif = data.confirmed.value;
    let meninggal = data.deaths.value;
    let sembuh = data.recovered.value;
    document.getElementById('positif-phi').innerHTML = positif;
    document.getElementById('meninggal-phi').innerHTML = meninggal;
    document.getElementById('sembuh-phi').innerHTML = sembuh;
});


