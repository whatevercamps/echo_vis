var data_para_el_cambio;
function cambiar_de_comuna(id_comuna) {
	id_comuna = id_comuna || "C1";
	var svg = d3.select("#mapa_svg_dos");
	var comunas_svg = svg.select('#Layer_2_dos').select('#Layer_1-2_dos');
	comunas_svg.selectAll("path").transition().duration(1000).style("fill", "black");

	comunas_svg.select("#" + id_comuna).transition().duration(1000).style("fill", x => {
		var sel = data_para_el_cambio.filter(d => d.id == id_comuna)[0];

		return sel != undefined ? ods[sel.first] != undefined ? ods[sel.first].color : "rgb(255,255,255)" : "rgb(255,255,255)"
	});
	var comuna_seleccionada = datos_comuna_para_per_comuna.filter(d => d.id == id_comuna)[0];
	var req2 = { ...req };
	req2.comunas = [comuna_seleccionada.comuna];
	req2.numero = 1023;
	log("req_click", req2)
	postData('https://echoun.herokuapp.com/sunburst', req2).then(data => {
		console.log("popular", data)
		data.name = "ODS";
		dibujar_sunburst_comuna(data);
		avisar();
	});
}

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
	const sdg_img_repo = "https://i0.wp.com/www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-";

	uStates.draw = function (id, data, toolTip) {

		var comuna_seleccionada = data[0];

		$("#segunda_pregunta").append(profundidad_1_segunda_pregunta);

		function cambiar_ods_comuna(comuna_seleccionada) {
			comuna_seleccionada = comuna_seleccionada || { id: "C1" };
			if (comuna_seleccionada.id == "CA1")
				return true;


			var ods_principal_de_comuna = datos_comuna_para_per_comuna.filter(d => d.id == comuna_seleccionada.id)[0];
			var id_ods_principal_de_comuna = ods_principal_de_comuna.datos[0].name.split("_")[1];

			if (id_ods_principal_de_comuna.length < 2)
				id_ods_principal_de_comuna = "0" + id_ods_principal_de_comuna;

			console.log(ods_principal_de_comuna)
			d3.select("#segunda_pregunta").select('#imagen_ods_sun').attr('src', sdg_img_repo + id_ods_principal_de_comuna + ".jpg").attr("opacity", 0).transition().delay(1000).duration(1000).attr("opacity", 1);
			d3.select("#segunda_pregunta").select('#nombre_comuna').text(`${ods_principal_de_comuna.comuna.toUpperCase()}`);
			d3.select("#segunda_pregunta").select('#percent_ods').text(`${(ods_principal_de_comuna.datos[0].porcentaje * 100).toFixed(1) || 150}%`);

			var max_meta_de_comuna = ods_principal_de_comuna.datos[0].meta;

			d3.select("#segunda_pregunta").select('#desc_meta_sun').text("\"" + descripciones_metas["meta_" + max_meta_de_comuna.name.split("meta_")[1].toUpperCase()] + "\"")
			d3.select("#segunda_pregunta").select('#imagen_meta_sun').attr('src', "assets/Metas%20ODS/ODS%20" + max_meta_de_comuna.name.split("_")[1] + "/" + max_meta_de_comuna.name.split("meta_")[1].replace("_", ".") + ".png");
			d3.select("#segunda_pregunta").select('#nombre_meta').text(`${max_meta_de_comuna.name}`.replace("_", " ").replace("_", "."));
			d3.select("#segunda_pregunta").select('#percent_meta').text(`${(max_meta_de_comuna.porcentaje * 100).toFixed(2)}%`)

		};

		cambiar_ods_comuna();

		//console.log(data);
		function mouseOver(dt) {
			//console.log(dt)
		}

		function mouseOut() {
			//console.log("bai")
		}
		var col = d3.select("#mapa");
		var bounds_div = col.node().getBoundingClientRect();
		var height_svg = bounds_div.height - bounds_div.height * 15 / 100;
		var scale = height_svg / 942.52;
		var svg = d3.select("#mapa_svg")
			.attr("width", 1106.55 * scale)
			.attr("height", height_svg).attr("transform", "translate(" + 0 + ", " + ((bounds_div.height * 15 / 100) / 2) + ")");

		var comunas_svg = svg.select('#Layer_2').select('#Layer_1-2');
		data.forEach(element => {
			comunas_svg.select('#' + element.id).transition().duration(200).style("fill", d => {
				if (element != undefined) {
					return "rgb(255,255,255)"
				}
				return "rgb(255,255,255)";
			}).transition().delay(500).duration(1000).attr("stroke-width", 1).attr("stroke", "white").style("fill", d => {
				if (element != undefined) {
					return ods[element["first"]] != undefined ? ods[element.first].color : "rgb(255,255,255)"
				}
				return "rgb(255,255,255)";
			});

		});

		function over() {
			svg.selectAll('path').style("opacity", 0.9);
			d3.select(this).style("opacity", 1);
			cambiar_ods_comuna(this);
		}

		function leave() {
			// d3.select(this).style("opacity", 0.7)
		}

		function clickeado() {
			bajar_scroll();
			console.log("comuna_clickeada", this.name);
			cambiar_de_comuna(this.id);
			sel_map(comunas_ordenadas.indexOf(this.id));
		}

		svg.selectAll('path').style("opacity", 0.9).on("mouseover", over).on("mouseout", leave).on("click", clickeado);
		svg.select("#C1").style("opacity", 1)
		/*.selectAll("path").data(data, function(u,j) {return u != undefined? u.id : u}).enter().append("path");
		//console.log(comunas_svg);
		comunas_svg.style("fill", d=> {
				console.log(d);
				return ods[d.first] != undefined? ods[d.first].color : "rgb(255,255,255)"
			})
			.on("mouseover", mouseOver).on("mouseout", mouseOut);
*/
		svg.attr("visibility", "visible");
		//svg.select('#CO1').style("fill", "#dedede")

	}



	// --------- inic draw segundo mapa ------------- //


	uStates.draw_segundo = function (id, data, toolTip) {
		data_para_el_cambio = data;
		var comuna_seleccionada = data[0];

		//$("#segunda_pregunta").append(profundidad_1_segunda_pregunta);
		/* TODO ESTO TOCA CAMBIARLO POR EL REQUEST
		
				function cambiar_ods_comuna(comuna_seleccionada) {
					comuna_seleccionada = comuna_seleccionada || { id: "C1" };
					if (comuna_seleccionada.id == "CA1")
						return true;
		
		
					var ods_principal_de_comuna = datos_comuna_para_per_comuna.filter(d => d.id == comuna_seleccionada.id)[0];
					var id_ods_principal_de_comuna = ods_principal_de_comuna.datos[0].name.split("_")[1];
		
					if (id_ods_principal_de_comuna.length < 2)
						id_ods_principal_de_comuna = "0" + id_ods_principal_de_comuna;
		
					console.log(ods_principal_de_comuna)
					d3.select("#segunda_pregunta").select('#imagen_ods_sun').attr('src', sdg_img_repo + id_ods_principal_de_comuna + ".jpg").attr("opacity", 0).transition().delay(1000).duration(1000).attr("opacity", 1);
					d3.select("#segunda_pregunta").select('#nombre_comuna').text(`${ods_principal_de_comuna.comuna.toUpperCase()}`);
					d3.select("#segunda_pregunta").select('#percent_ods').text(`${(ods_principal_de_comuna.datos[0].porcentaje * 100).toFixed(1) || 150}%`);
		
					var max_meta_de_comuna = ods_principal_de_comuna.datos[0].meta;
		
					d3.select("#segunda_pregunta").select('#desc_meta_sun').text("\"" + descripciones_metas["meta_" + max_meta_de_comuna.name.split("meta_")[1].toUpperCase()] + "\"")
					d3.select("#segunda_pregunta").select('#imagen_meta_sun').attr('src', "assets/Metas%20ODS/ODS%20" + max_meta_de_comuna.name.split("_")[1] + "/" + max_meta_de_comuna.name.split("meta_")[1].replace("_", ".") + ".png");
					d3.select("#segunda_pregunta").select('#nombre_meta').text(`${max_meta_de_comuna.name}`.replace("_", " ").replace("_", "."));
					d3.select("#segunda_pregunta").select('#percent_meta').text(`${(max_meta_de_comuna.porcentaje * 100).toFixed(2)}%`)
		
				};
		
				cambiar_ods_comuna();
		*/
		//console.log(data);
		function mouseOver(dt) {
			//console.log(dt)
		}

		function mouseOut() {
			//console.log("bai")
		}
		var col = d3.select("#mapa_refer_container_row");
		var bounds_div = col.node().getBoundingClientRect();
		var height_svg = bounds_div.height - bounds_div.height * 20 / 100;
		var scale = height_svg / 942.52;
		var svg = d3.select("#mapa_svg_dos")
			.attr("width", 1106.55 * scale)
			.attr("height", height_svg).attr("transform", "translate(" + 1106.55 * scale / 10 + ", " + 0 + ")");

		var comunas_svg = svg.select('#Layer_2_dos').select('#Layer_1-2_dos');

		data.forEach(element => {
			comunas_svg.select('#' + element.id).transition().duration(200).attr("stroke-width", 2).attr("stroke", "white").style("fill", "black");
		});

		function over() {
			svg.selectAll('path').style("opacity", 0.9);
			d3.select(this).style("opacity", 1);
		}

		function leave() {
			// d3.select(this).style("opacity", 0.7)
		}

		function clickeado() {

			console.log(this.id);
			cambiar_de_comuna(this.id);
		}

		svg.selectAll('path').style("opacity", 0.9).on("mouseover", over).on("mouseout", leave).on("click", clickeado);
		svg.select("#C1").style("opacity", 1)
		/*.selectAll("path").data(data, function(u,j) {return u != undefined? u.id : u}).enter().append("path");
		//console.log(comunas_svg);
		comunas_svg.style("fill", d=> {
				console.log(d);
				return ods[d.first] != undefined? ods[d.first].color : "rgb(255,255,255)"
			})
			.on("mouseover", mouseOver).on("mouseout", mouseOut);
*/
		svg.attr("visibility", "visible");
		//svg.select('#CO1').style("fill", "#dedede")
	}


	// --------- final draw segundo mapa ------------- //




	//d3.selectAll("#mapa_svg").attr("transform", d3.transform().scale(d => height_svg/900)); 
	this.uStates = uStates;
})();

