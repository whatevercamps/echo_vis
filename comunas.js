
(function () {
	var comunitas = [
		{ id: "C8", n: "Villa Hermosa" },
		{ id: "C9", n: "Buenos Aires" },
		{ id: "C10", n: "La Candelaria" },
		{ id: "C4", n: "Aranjuez" },
		{ id: "C2", n: "Santa Cruz" },
		{ id: "C3", n: "Manrique" },
		{ id: "C1", n: "Popular" },
		{ id: "C14", n: "El Poblado" },
		{ id: "C11", n: "Laureles-Estadio" },
		{ id: "C12", n: "La América" },
		{ id: "C13", n: "San Javier" },
		{ id: "C15", n: "Guayabal" },
		{ id: "C16", n: "Belén" },
		{ id: "C7", n: "Robledo" },
		{ id: "C5", n: "Castilla" },
		{ id: "C6", n: "Doce de Octubre" },
		{ id: "CO1", n: "Altavista" },
		{ id: "CO2", n: "San Antonio de Prado" },
		{ id: "CO3", n: "San Sebastián de Palmitas" },
		{ id: "CO4", n: "San Cristóbal" },
		{ id: "CO5", n: "Santa Elena" }
	];
	var uStates = {};
	var random_value = false;
	uStates.draw = function (id, data, toolTip) {
		//console.log(data);
		function mouseOver(dt) {
			console.log(dt)
		}

		function mouseOut() {
			console.log("bai")
		}
		col = d3.select("#mapa");
		bounds_div = col.node().getBoundingClientRect();
		height_svg = bounds_div.height + bounds_div.height * 10 / 100;
		scale = height_svg / 942.52;
		svg = d3.select("#mapa_svg")
			.attr("width", 1106.55 * scale)
			.attr("height", height_svg).attr("transform", "translate(" + 0 + ", " + ((bounds_div.height * 10 / 100)+60)*(-1) + ")");

		comunas_svg = svg.select('#Layer_2').select('#Layer_1-2');
		data.forEach(element => {
			comunas_svg.select('#' + element.id).style("fill", d => {
				if(element != undefined){
					return ods[element["first"]] != undefined ? ods[element.first].color : "rgb(255,255,255)"
				}
				return "rgb(255,255,255)";
			}).on("mouseover", dy => console.log(dy)).on("mouseout", mouseOut);

		});

		/*.selectAll("path").data(data, function(u,j) {return u != undefined? u.id : u}).enter().append("path");
		//console.log(comunas_svg);
		comunas_svg.style("fill", d=> {
				console.log(d);
				return ods[d.first] != undefined? ods[d.first].color : "rgb(255,255,255)"
			})
			.on("mouseover", mouseOver).on("mouseout", mouseOut);
*/
		svg.attr("visibility", "visible");

	}
	//d3.selectAll("#mapa_svg").attr("transform", d3.transform().scale(d => height_svg/900)); 
	this.uStates = uStates;
})();

