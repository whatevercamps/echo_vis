
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

function tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
	return "<h4>" + 'Comuna ' + n.split(')')[0] + ': ' + n.split(')')[1] + "</h4><table>" +
		"<tr><td>1. </td><td>" + (ods[d.first].name) + "</td></tr>" +
		"<tr><td>2. </td><td>" + (ods[d.second].name) + "</td></tr>" +
		"<tr><td>3. </td><td>" + (ods[d.third].name) + "</td></tr>" +
		"</table>";
}



fetch('https://raw.githubusercontent.com/whatevercamps/graph_jsons_tw_unfpa/master/comuna_vs_ods.json')
	.then(function (res) {
		return res.json();
	}).then(function (data) {



		var sampleData = [];	/* Sample random data. */
		["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14", "C15", "C16", "CO1", "CO2", "CO3", "CO4", "CO5"]
			.forEach(function (dd) {
				var d = data.find(function (ele) {
					return ele.id == dd;
				});
				if (d != undefined && d.comuna != undefined && d.comuna != null && d.comuna != "") {
					var first = d.datos[0].name,
						second = d.datos[1].name,
						third = d.datos[2].name,
						id = d.id;
					sampleData.push( {
						first: first,
						second: second,
						third: third,
						id: id
					});
				} else {
					sampleData.push( {
						first: null,
						second: null,
						third: null,
						id: dd
					});
				}
			});
		//console.log(sampleData);
		uStates.draw("#statesvg", sampleData, tooltipHtml);
		// d3.select(self.frameElement).style("height", "600px");
		//mapa.attr('transform', 'rotate(-90 0 0)');


		setTimeout(function () {

			//historias

			/* 

	<h1>John Doe</h1>
                                        <h3>Swift developer</h3>
                                        <p class="bio">Lived all my life on the top of mount Fuji, learning the way to
											be a Ninja Dev.</p>
											
											*/

			fetch('https://echoun.herokuapp.com/historias/4').then(data => data.json())
				.then(res => {
					var div = document.getElementById('historiajeje');

				})

			//fin historias


			//document.getElementById('nav').style.visibility = "visible";
			//document.getElementById('loading').style.visibility = "hidden";
		}, 0);
	})


