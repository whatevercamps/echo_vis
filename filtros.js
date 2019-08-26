var male = true;
var female = true;
var edge = true; //15 a 29
var vibe = true; //30 a 
var one = true;

$("#male").click(d => {
    male = !male;
    console.log(male);
})

$("#female").click(d => {
    female = !female;
    console.log(female);
});


$("#apply").click(d => {
    sexos = [];
    male ? sexos.push("Hombre") : "";
    female ? sexos.push("Mujer") : "";
    edades = ["60 a 64"];
    respuesta = [0, 1, 2];
    numero = 40;
    corregimientos = ["O5) SANTA ELENA"];
    req = { sexos: sexos, edades: edades, corregimientos: corregimientos, respuesta: respuesta, numero: numero };
    console.log(req);
    postData('http://echoun.herokuapp.com/histograma_ods', req).then( data => {
        console.log(data); 
        dibujar_burbujas(data, odss_res);
    });

    postData('http://157.253.226.45:8000/sunburst', req).then(data => {
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