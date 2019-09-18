var male = true;
var female = true;
var edge = true; //15 a 29
var vibe = true; //30 a 
var one = true;
var sexos = [];

//nuevas variables

var params = {
    "adulto_mayor_hombre": false,
    "adulto_mayor_mujer": false,
    "adulto_hombre": false,
    "adulto_mujer": false,
    "joven_hombre": false,
    "joven_mujer": false,
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


    var sexos = ["Hombre", "Mujer"];
    var edades = ["jovenes", "adultos", "mayores"];

    if (this.id == "todo_hombres") {
        if (params["adulto_mayor_hombre"] && params["adulto_hombre"] && params["joven_hombre"]) {
            params["adulto_mayor_hombre"] = false,
                params["adulto_hombre"] = false,
                params["joven_hombre"] = false;

            d3.select("#adulto_mayor_hombre").style("fill-opacity", 0.7)
            d3.select("#adulto_hombre").style("fill-opacity", 0.7)
            d3.select("#joven_hombre").style("fill-opacity", 0.7)
        } else {
            params["adulto_mayor_hombre"] = true,
                params["adulto_hombre"] = true,
                params["joven_hombre"] = true;

            d3.select("#adulto_mayor_hombre").style("fill-opacity", 1)
            d3.select("#adulto_hombre").style("fill-opacity", 1)
            d3.select("#joven_hombre").style("fill-opacity", 1)
        }

    } else if (this.id == "todo_mujeres") {
        if (params["adulto_mayor_mujer"] && params["adulto_mujer"] && params["joven_mujer"]) {
            params["adulto_mayor_mujer"] = false,
                params["adulto_mujer"] = false,
                params["joven_mujer"] = false;

            d3.select("#adulto_mayor_mujer").style("fill-opacity", 0.7)
            d3.select("#adulto_mujer").style("fill-opacity", 0.7)
            d3.select("#joven_mujer").style("fill-opacity", 0.7)
        } else {
            params["adulto_mayor_mujer"] = true,
                params["adulto_mujer"] = true,
                params["joven_mujer"] = true;

            d3.select("#adulto_mayor_mujer").style("fill-opacity", 1)
            d3.select("#adulto_mujer").style("fill-opacity", 1)
            d3.select("#joven_mujer").style("fill-opacity", 1)
        }
    } else if (this.id == "todo_jovenes") {
        if (params["joven_hombre"] && params["joven_mujer"]) {
            params["joven_hombre"] = false,
                params["joven_mujer"] = false;

            d3.select("#joven_hombre").style("fill-opacity", 0.7)
            d3.select("#joven_mujer").style("fill-opacity", 0.7)
        } else {
            params["joven_hombre"] = true,
                params["joven_mujer"] = true;

            d3.select("#joven_hombre").style("fill-opacity", 1)
            d3.select("#joven_mujer").style("fill-opacity", 1)
        }
        //volver para abajo
    } else if (this.id == "todo_adultos") {
        if (params["adulto_hombre"] && params["adulto_mujer"]) {
            params["adulto_hombre"] = false,
                params["adulto_mujer"] = false;

            d3.select("#adulto_hombre").style("fill-opacity", 0.7)
            d3.select("#adulto_mujer").style("fill-opacity", 0.7)
        } else {
            params["adulto_hombre"] = true,
                params["adulto_mujer"] = true;

            d3.select("#adulto_hombre").style("fill-opacity", 1)
            d3.select("#adulto_mujer").style("fill-opacity", 1)
        }

    } else if (this.id == "todo_mayores") {
        if (params["adulto_mayor_hombre"] && params["adulto_mayor_mujer"]) {
            params["adulto_mayor_hombre"] = false,
                params["adulto_mayor_mujer"] = false;

            d3.select("#adulto_mayor_hombre").style("fill-opacity", 0.7)
            d3.select("#adulto_mayor_mujer").style("fill-opacity", 0.7)
        } else {
            params["adulto_mayor_hombre"] = true,
                params["adulto_mayor_mujer"] = true;

            d3.select("#adulto_mayor_hombre").style("fill-opacity", 1)
            d3.select("#adulto_mayor_mujer").style("fill-opacity", 1)
        }
    } else {
        params[this.id] = !params[this.id];
        d3.select("#" + this.id).style("fill-opacity", params[this.id] ? 1 : 0.7)
    }

    //todito_hide
    document.getElementById('loading_filter').style.visibility = "visible";
    document.getElementById('todito_para_hide').style.opacity = 0.1;

    sexos = [];
    edades = [];
    if (params["adulto_hombre"] || params["joven_hombre"] || params["adulto_mayor_hombre"]) {
        log("es hombre")
        sexos.push("Hombre");
    }

    if (params["joven_mujer"] || params["adulto_mujer"] || params["adulto_mayor_mujer"]) {
        log("es mujer")
        sexos.push("Mujer");
    }

    if (params["joven_hombre"] || params["joven_mujer"]) {
        log("es joven")
        edades.push("jovenes");
    }

    if (params["adulto_hombre"] || params["adulto_mujer"]) {
        log("es adulto")
        edades.push("adultos");
    }

    if (params["adulto_mayor_hombre"] || params["adulto_mayor_mujer"]) {
        log("es adulto mayor")
        edades.push("mayores");
    }

    if (!params["adulto_mayor_hombre"] && !params["adulto_mayor_mujer"] && !params["adulto_hombre"] && !params["adulto_mujer"] && !params["joven_hombre"] && !params["joven_mujer"]) {
        edades.push("adultos");
        edades.push("mayores");
        edades.push("jovenes");
        sexos.push("Mujer");
        sexos.push("Hombre");
    }


    let x = (arr) => arr.filter((v, i) => arr.indexOf(v) === i)
    console.log(sexos);
    console.log(edades);
    req = { sexos: sexos, edades: edades, respuesta: respuesta, numero: numero };

    //respuesta = [0];
    numero = 40;
    corregimientos = ["Corregimientos", "4) Aranjuez", "16) Belén", "15) Guayabal", "NaN", "11) Laureles-Estadio", "12) La América", "5) Castilla", "7) Robledo", "6) Doce de Octubre", "13) San Javier", "1) Popular", "9) Buenos Aires", "3) Manrique", "2) Santa Cruz", "8) Villa Hermosa", "10) La Candelaria", "14) El Poblado", "otros"];

    var terminadas = 0;

    // postData('https://echoun.herokuapp.com/histograma_ods', req).then(data => {

    //     dibujar_burbujas(data, odss_res);
    //     terminadas ++; 
    //     if(terminadas == 3){
    //         document.getElementById('loading_filter').style.visibility = "hidden";
    //         d3.select("#todito_para_hide").style("fill-opacity", 1).style("cursor", "pointer");
    //     }
    // });


    postData('https://echoun.herokuapp.com/sunburst', req).then(data => {
        data.name = "ODS";
        dibujar_sunburst(data);
        cambiar_de_comuna(comuna_act);
        terminadas++;
        if (terminadas == 2) {
            document.getElementById('loading_filter').style.visibility = "hidden";
            document.getElementById('todito_para_hide').style.opacity = 1;
        }
    });
    req2 = req;
    req2.numero = 3;
    postData('https://echoun.herokuapp.com/odsComuna', req2).then(data => {
        dibujar_mapita(data);
        terminadas++;
        if (terminadas == 2) {
            document.getElementById('loading_filter').style.visibility = "hidden";
            document.getElementById('todito_para_hide').style.opacity = 1;
        }
    });

}



d3.select("#adulto_mayor_hombre").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#adulto_mayor_mujer").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#adulto_hombre").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#adulto_mujer").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#joven_hombre").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#joven_mujer").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#todo_hombres").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#todo_mujeres").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#todo_adultos").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#todo_mayores").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)
d3.select("#todo_jovenes").on("click", click_filtro).style("cursor", "pointer").style("fill-opacity", 0.7)


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
        .then(response => response.json()
        );

}

