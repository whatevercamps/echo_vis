var row_comunas_ind = d3.select("#comunas_ind_row");
var col_comunas_ind = d3.select("#comunas_ind_col");
const bounds_row_comunas_ind = row_comunas_ind.node().getBoundingClientRect();
const bounds_col_comunas_ind = col_comunas_ind.node().getBoundingClientRect();
console.log(bounds_col_comunas_ind)
const width_col_comunas_ind = bounds_col_comunas_ind.width;
const height_row_comunas_ind = bounds_row_comunas_ind.height;

const iheight_comunas_ind = bounds_row_comunas_ind.height;
var scale_comunas_ind = height_row_comunas_ind/88.46;
const iwidth_comunas_ind = 225.75 * scale_comunas_ind;


svg_comunas_ind = d3.select('#comunas_ind');
svg_comunas_ind.attr('height', iheight_comunas_ind).attr('width', iwidth_comunas_ind);
itrans_comunas_ind = -Math.abs(iwidth_comunas_ind - width_col_comunas_ind)/2

svg_comunas_ind.attr("transform", "translate(" + itrans_comunas_ind + ", " + 0 + ")")
grupo_comunas_ind = svg_comunas_ind.select('#todo_comunas_ind').select('#mapa_comunas_ind');
comunas_paths = grupo_comunas_ind.selectAll('path');
comunas_paths.attr('height', iheight_comunas_ind).style('opacity', 0);

grupo_comunas_ind.attr("transform", "translate(" + 70 + ", " + 0 + ")");




function arrow_mouse_over() {
    console.log("gege")
    d3.select(this).transition().duration(200).style("fill", "#b1b1b1")
}
function arrow_mouse_leave() {
    console.log("gege")
    d3.select(this).transition().duration(200).style("fill", "#fcfcfc")
}

var arrows = svg_comunas_ind.select('#arrows_comunas_ind').select("#next_arrow_group");
console.log(arrows)
arrows.append("rect")
.attr("class", "background_arrows")
.attr("fill", "none")
.attr("pointer-events", "all")
.attr("width", iwidth_comunas_ind/10)
.attr("height", iheight_comunas_ind)
.attr("transform", "translate(" + arrows.x + ", " + 0 + ")")
.attr("cursor", "pointer");

function sel_map(n){
    grupo_comunas_ind.select('#' + comunas_ordenadas[n]).transition().duration(1000).style("opacity", 1)
}

sel_map(0);