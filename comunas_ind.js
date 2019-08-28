var row_comunas_ind = d3.select("#comunas_ind_row");
var col_comunas_ind = d3.select("#comunas_ind_col");
const bounds_row_comunas_ind = row_comunas_ind.node().getBoundingClientRect();
const bounds_col_comunas_ind = col_comunas_ind.node().getBoundingClientRect();
console.log(bounds_col_comunas_ind)
const width_col_comunas_ind = bounds_col_comunas_ind.width;
const height_row_comunas_ind = bounds_row_comunas_ind.height;

const iheight_comunas_ind = bounds_row_comunas_ind.height;
var scale_comunas_ind = height_row_comunas_ind / 88.46;
const iwidth_comunas_ind = 225.75 * scale_comunas_ind;

var sel_map_index = 0;

svg_comunas_ind = d3.select('#comunas_ind');
svg_comunas_ind.attr('height', iheight_comunas_ind).attr('width', iwidth_comunas_ind);
itrans_comunas_ind = -Math.abs(iwidth_comunas_ind - width_col_comunas_ind) / 2

svg_comunas_ind.attr("transform", "translate(" + itrans_comunas_ind + ", " + 0 + ")")
grupo_comunas_ind = svg_comunas_ind.select('#todo_comunas_ind').select('#mapa_comunas_ind');
comunas_paths = grupo_comunas_ind.selectAll('path');
comunas_paths.attr('height', iheight_comunas_ind).style('opacity', 0);

grupo_comunas_ind.attr("transform", "translate(" + 70 + ", " + 0 + ")");


function arrow_mouse_over() {

    d3.select(this).transition().duration(200).style("fill", "#b1b1b1")
}
function arrow_mouse_leave() {
    d3.select(this).transition().duration(200).style("fill", "#fcfcfc")
}

function click_arrow() {
    console.log(this.id)
    if (this.id == "prev_comunas_ind" && sel_map_index > 0) {
        sel_map(sel_map_index - 1);
    } else if (this.id == "next_comunas_ind" && sel_map_index < comunas_ordenadas.length) {
        console.log('next');
        sel_map(sel_map_index + 1);
    }
}

var arrows = svg_comunas_ind.select('#arrows_comunas_ind').selectAll("path").on('mouseover', arrow_mouse_over).on("mouseout", arrow_mouse_leave).on("click", click_arrow)


function sel_map(nn) {
    grupo_comunas_ind.select('#' + comunas_ordenadas[sel_map_index]).transition().duration(1000).style("opacity", 0)
    grupo_comunas_ind.select('#' + comunas_ordenadas[nn]).style("fill", d => {
        console.log("asdad", datos_comuna_para_per_comuna);
        console.log(datos_comuna_para_per_comuna.find(x => x.id == comunas_ordenadas[nn]).datos[0].name)
        return ods[datos_comuna_para_per_comuna.find(x => x.id == comunas_ordenadas[nn]).datos[0].name] != undefined ? ods[datos_comuna_para_per_comuna.find(x => x.id == comunas_ordenadas[nn]).datos[0].name].color : "rgb(255,255,255)"
    }).transition().duration(1000).style("opacity", 1)
    sel_map_index = nn
}

