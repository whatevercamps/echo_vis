
var comunas_ordenadas = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14", "C15", "C16", "CO1", "CO2", "CO3", "CO4", "CO5"];
var datos_comuna_para_per_comuna;
var ods = {
	"ods_1": { "name": "Fin de la pobreza", "color": "rgb(231, 56, 65)" },
	"ods_2": { "name": "Hambre cero", "color": "rgb(224, 164, 60)" },
	"ods_3": { "name": "Salud y bienestar", "color": "rgb(78, 160, 73)" },
	"ods_4": { "name": "Educación de calidad", "color": "rgb(200, 46, 51)" },
	"ods_5": { "name": "Igualdad de género", "color": "rgb(236, 63, 51)" },
	"ods_6": { "name": "Agua limpia y saneamiento", "color": "rgb(77, 191, 234)" },
	"ods_7": { "name": "Energía asequible y no contaminante", "color": "rgb(248, 195, 70)" },
	"ods_8": { "name": "Trabajo y crecimiento económico", "color": "rgb(167, 40, 70)" },
	"ods_9": { "name": "Industria, innovación e infraestructura", "color": "rgb(239, 105, 55)" },
	"ods_10": { "name": "Reducción de las desigualdades", "color": "rgb(224, 58, 104)" },
	"ods_11": { "name": "Ciudades y comunidades sostenible", "color": "rgb(244, 157, 63)" },
	"ods_12": { "name": "Producción y consumo responsables", "color": "rgb(191, 138, 50)" },
	"ods_13": { "name": "Acción por el clima", "color": "rgb(67, 126, 74)" },
	"ods_14": { "name": "Vida submarina", "color": "rgb(54, 150, 215)" },
	"ods_15": { "name": "Vida de ecosistemas terrestres", "color": "rgb(93, 184, 72)" },
	"ods_16": { "name": "Paz, justicia e instituciones sólidas", "color": "rgb(35, 105, 157)" },
	"ods_17": { "name": "Alianzas para lograr los objetivos", "color": "rgb(21, 71, 108)" }
};

var comunas = {
	"C1": 1,
	"C2": 1,
	"C3": 1,
	"C4": 1,
	"C5": 1,
	"C6": 1,
	"C7": 1,
	"C8": 1,
	"C9": 1,
	"C10": 1,
	"C11": 1,
	"C12": 1,
	"C13": 1,
	"C14": 1,
	"C15": 1,
	"C16": 1
}

this.ods = ods;

this.mapaCalor = function (item) {
	fetch('https://raw.githubusercontent.com/whatevercamps/graph_jsons_tw_unfpa/master/todos_comunas_ods.json')
		.then(function (res) {
			return res.json();
		}).then(function (data) {
			var opcs = [];
			var mayor = 0;
			var opSc = d3.scaleLinear()
				.domain([0, d3.max(data, x => x.datos[item.id])])
				.range([0, 1]);
			d3.select("#mapa_svg").selectAll(".state")
				.style("fill", function (d) {
					random_value = false;
					var valor = data.find(x => x.id == d.id).datos[item.id];
					var opacidad = opSc(valor);
					return opacidad > 0.2 ? ods[item.id].color : "rgb(237,237,237)";
				}).style('opacity', function (dd) {
					var valor = data.find(x => x.id == dd.id).datos[item.id];
					var opacidad = opSc(valor);
					return opacidad > 0.2 ? opacidad : 0.2;
				});

		}).then(function (opacidades) {


		});


};


function tooltipHtml(n) {	/* function to create html content string in tooltip div. */
	console.log("n que llega", n)
	return "<table>" +
		"<tr><td>Comuna " + (comunas_ordenadas.indexOf(n[0].id) + 1)*1+ " : </td></tr>" +
		"<tr><td>" + n[0].n + "</td></tr>" +
		"</table>";
}


req.numero = 3;
postData('https://echoun.herokuapp.com/odsComuna', req)
	.then(function (data) {
		dibujar_mapita(data)
	})



function dibujar_mapita(data){
	console.log("data_deback", data);
	datos_comuna_para_per_comuna = data;
	var sampleData = [];

		comunas_ordenadas.forEach(function (dd) {
			var d = data.find(function (ele) {
				return ele.id == dd;
			});
			if (d != undefined && d.comuna != undefined && d.comuna != null && d.comuna != "") {
				var first = d.datos[0] != undefined ? d.datos[0].name : "",
					second =  d.datos[1] != undefined ? d.datos[1].name: "",
					third = d.datos[2] != undefined ? d.datos[2].name: "",
					id = d.id,
					name = d.comuna;
				sampleData.push( {
					first: first,
					second: second,
					third: third,
					id: id,
					name: name
				});
			} else {
				sampleData.push( {
					first: null,
					second: null,
					third: null,
					id: dd
				});
			}

			comunas_ordenadas
		});
	//console.log(sampleData);
	uStates.draw("#statesvg", sampleData, tooltipHtml);
	uStates.draw_segundo("", sampleData, tooltipHtml);
	// d3.select(self.frameElement).style("height", "600px");
	//mapa.attr('transform', 'rotate(-90 0 0)');


	avisar();
	sel_map(0);
}

