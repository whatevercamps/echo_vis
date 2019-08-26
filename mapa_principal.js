contenedor_mapa_merge = d3.select("#contenedor_mapa_merge")


bounds_contenedor_mapa_merge = contenedor_mapa_merge.node().getBoundingClientRect();
height_mapa_merge = bounds_contenedor_mapa_merge.height - bounds_contenedor_mapa_merge.height * 10 / 100 - 60;
scale_mapa_merge = height_mapa_merge / 948.44;
width_mapa_merge = 1111.66 * scale_mapa_merge;
translate_y_mapa_merge = (bounds_contenedor_mapa_merge.height - height_mapa_merge)/2 + 30;
translate_x_mapa_merge = (bounds_contenedor_mapa_merge.width - width_mapa_merge)/2 - (bounds_contenedor_mapa_merge.width - width_mapa_merge)*30/100;
svg_mapa_merge = d3.select("#mapa_merge")
    .attr("width", width_mapa_merge).attr("height", height_mapa_merge).attr("transform", "translate(" + translate_x_mapa_merge + ", " + translate_y_mapa_merge
     + ")");

svg_mapa_merge.selectAll("path").style("fill", "rgb(244, 157, 63)").style("stroke", "#dedede");