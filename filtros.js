var male = true;
var female = true;
var edge = true; //15 a 29
var vibe = true; //30 a 
var one = true;
var sexos = [];

//nuevas variables

var parametros = {
    "adulto_mayor_hombre": true,
    "adulto_mayor_mujer": true,
    "adulto_hombre": true,
    "adulto_mujer": true,
    "joven_hombre": true,
    "joven_mujer": true,
}
//fin nuevas variables



male ? sexos.push("Hombre") : "";
female ? sexos.push("Mujer") : "";

var edades = [];

edge ? edades.push('jovenes') : '';
vibe ? edades.push('adultos') : '';
one ? edades.push('mayores') : '';

var respuesta = [1];
var numero = 40;
var req = { sexos: sexos, edades: edades, respuesta: respuesta, numero: numero };

function click_filtro() {
    var sexos = [];
    var edades = [];
    var params = { ...parametros };

    if (this.id == "todo_hombres") {

        params["adulto_mayor_hombre"] = true,
            params["adulto_hombre"] = true,
            params["joven_hombre"] = true;

        d3.select("#adulto_mayor_hombre").style("fill-opacity", 1)
        d3.select("#adulto_hombre").style("fill-opacity", 1)
        d3.select("#joven_hombre").style("fill-opacity", 1)

        sexos.push("Hombre");
        edades.push("jovenes", "adultos", "mayores");

    } else if (this.id == "todo_mujeres") {
        params["adulto_mayor_mujer"] = true,
            params["adulto_mujer"] = true,
            params["joven_mujer"] = true;

        d3.select("#adulto_mayor_mujer").style("fill-opacity", 1)
        d3.select("#adulto_mujer").style("fill-opacity", 1)
        d3.select("#joven_mujer").style("fill-opacity", 1)

        sexos.push("Mujer");
        edades.push("jovenes", "adultos", "mayores");

    } else if (this.id == "todo_jovenes") {
        params["joven_hombre"] = true,
            params["joven_mujer"] = true;

        d3.select("#joven_hombre").style("fill-opacity", 1)
        d3.select("#joven_mujer").style("fill-opacity", 1)

        sexos.push("Hombre", "Mujer");
        edades.push("jovenes");

    } else if (this.id == "todo_adultos") {
        params["adulto_hombre"] = true,
            params["adulto_hombre"] = true;

        d3.select("#adulto_hombre").style("fill-opacity", 1)
        d3.select("#adulto_hombre").style("fill-opacity", 1)

        sexos.push("Hombre", "Mujer");
        edades.push("adultos");

    } else if (this.id == "todo_mayores") {
        params["adulto_mayor_hombre"] = true,
            params["adulto_mayor_mujer"] = true;

        d3.select("#adulto_mayor_hombre").style("fill-opacity", 1)
        d3.select("#adulto_mayor_mujer").style("fill-opacity", 1)

        sexos.push("Hombre", "Mujer");
        edades.push("mayores");

    } else {
        params[this.id] = !params[this.id];
        d3.select("#" + this.id).style("fill-opacity", params[this.id] ? 1 : 0.7)

        if(params["adulto_hombre"]){
            sexos.push("Hombre");
            edades.push("adultos");
        } else if(params[this.id] == "adulto_mujer"){
            sexos.push("Mujer");
            edades.push("adultos");
        } else if(params[this.id] == "joven_hombre"){
            sexos.push("Hombre");
            edades.push("jovenes");
        } else if(params[this.id] == "joven_mujer"){
            sexos.push("Mujer");
            edades.push("jovenes");
        } else if(params[this.id] == "adulto_mayor_hombre"){
            sexos.push("Hombre");
            edades.push("mayores");
        } else if(params[this.id] == "adulto_mayor_mujer"){
            sexos.push("Mujer");
            edades.push("mayores");
        }

    }

    if (params != parametros) {

        let x = (arr) => arr.filter((v, i) => arr.indexOf(v) === i)
        sexos = x(sexos);
        edades = x(edades);

        req = { sexos: sexos, edades: edades, respuesta: respuesta, numero: numero };

        //respuesta = [0];
        numero = 40;
        corregimientos = ["Corregimientos", "4) Aranjuez", "16) Belén", "15) Guayabal", "NaN", "11) Laureles-Estadio", "12) La América", "5) Castilla", "7) Robledo", "6) Doce de Octubre", "13) San Javier", "1) Popular", "9) Buenos Aires", "3) Manrique", "2) Santa Cruz", "8) Villa Hermosa", "10) La Candelaria", "14) El Poblado", "otros"];
        req = { sexos: sexos, edades: edades, respuesta: respuesta, numero: numero };

        // postData('https://echoun.herokuapp.com/histograma_ods', req).then(data => {

        //     dibujar_burbujas(data, odss_res);
        // });


        postData('https://echoun.herokuapp.com/sunburst', req).then(data => {
            data.name = "ODS";
            dibujar_sunburst(data);
            cambiar_de_comuna(comuna_act);
        });
        req2 = req;
        req2.numero = 3;
        postData('https://echoun.herokuapp.com/odsComuna', req2).then(data => {
            dibujar_mapita(data);
        });
    }
}

d3.select("#adulto_mayor_hombre").on("click", click_filtro)
d3.select("#adulto_mayor_mujer").on("click", click_filtro)
d3.select("#adulto_hombre").on("click", click_filtro)
d3.select("#adulto_mujer").on("click", click_filtro)
d3.select("#joven_hombre").on("click", click_filtro)
d3.select("#joven_mujer").on("click", click_filtro)
d3.select("#todo_hombres").on("click", click_filtro)
d3.select("#todo_mujeres").on("click", click_filtro)
d3.select("#todo_adultos").on("click", click_filtro)
d3.select("#todo_mayores").on("click", click_filtro)
d3.select("#todo_jovenes").on("click", click_filtro)

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


// $("#apply").click(filtrar)


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

$("#filtra").click(function () {

    var sexos = $('#pickerSexo').val()
    var edades = $('#pickerEdad').val()

    req = { sexos: sexos, edades: edades, respuesta: respuesta, numero: numero };

    //respuesta = [0];
    numero = 40;
    corregimientos = ["Corregimientos", "4) Aranjuez", "16) Belén", "15) Guayabal", "NaN", "11) Laureles-Estadio", "12) La América", "5) Castilla", "7) Robledo", "6) Doce de Octubre", "13) San Javier", "1) Popular", "9) Buenos Aires", "3) Manrique", "2) Santa Cruz", "8) Villa Hermosa", "10) La Candelaria", "14) El Poblado", "otros"];
    req = { sexos: sexos, edades: edades, respuesta: respuesta, numero: numero };

    // postData('https://echoun.herokuapp.com/histograma_ods', req).then(data => {

    //     dibujar_burbujas(data, odss_res);
    // });


    postData('https://echoun.herokuapp.com/sunburst', req).then(data => {
        data.name = "ODS";
        dibujar_sunburst(data);
        cambiar_de_comuna(comuna_act);
    });
    req2 = req;
    req2.numero = 3;
    postData('https://echoun.herokuapp.com/odsComuna', req2).then(data => {
        dibujar_mapita(data);
    });



})

