var male = true;
var female = true;
var edge = true; //15 a 29
var vibe = true; //30 a 
var one = true;

$("#male").click(d => {
    male = !male;
    if (male) $("#male").addClass('btn-hot')
    else $("#male").removeClass('btn-hot')
})

$("#female").click(d => {
    female = !female;
    if (female) $("#female").addClass('btn-hot')
    else $("#female").removeClass('btn-hot')
});
$("#edge").click(d => {
    edge = !edge;
    if (edge) $("#edge").addClass('btn-hot')
    else $("#edge").removeClass('btn-hot')
})

$("#vibe").click(d => {
    vibe = !vibe;
    if (vibe) $("#vibe").addClass('btn-hot')
    else $("#vibe").removeClass('btn-hot')
});
$("#one").click(d => {
    one = !one;
    if (one) $("#one").addClass('btn-hot')
    else $("#one").removeClass('btn-hot')
})


$("#apply").click(d => {
    console.log([male, female, edge, vibe, one])
    sexos = [];
    male ? sexos.push("Hombre") : "";
    female ? sexos.push("Mujer") : "";

    edades = [];

    edge ? edades.push('jovenes') : ''
    vibe ? edades.push('adultos') : ''
    one ? edades.push('mayores') : ''

    respuesta = [0];
    numero = 40;
    corregimientos = ["Corregimientos", "4) Aranjuez", "16) Belén", "15) Guayabal", "NaN", "11) Laureles-Estadio", "12) La América", "5) Castilla", "7) Robledo", "6) Doce de Octubre", "13) San Javier", "1) Popular", "9) Buenos Aires", "3) Manrique", "2) Santa Cruz", "8) Villa Hermosa", "10) La Candelaria", "14) El Poblado", "otros"];
    req = { sexos: sexos, edades: edades, corregimientos: corregimientos, respuesta: respuesta, numero: numero };
    console.log(req);
    postData('http://echoun.herokuapp.com/histograma_ods', req).then(data => {
        console.log(data);
        dibujar_burbujas(data, odss_res);
    });

    postData('http://echoun.herokuapp.com/sunburst', req).then(data => {
        dibujar_barritas(data);
    });
})


function postData(url = '', data) {
    // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json());

}