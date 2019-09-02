






d3.json("https://raw.githubusercontent.com/whatevercamps/graph_jsons_tw_unfpa/master/sunburst.json").then(response => {


    dibujar_sunburst(response)

})



function dibujar_sunburst(data) {

    grupito = d3.select('#grupo_sunburst');
    console.log(grupito);
    grupito.transition().duration(1000).style("opacity");

    var sunburst_col = d3.select("#sunburst_col");
    var sunburst_row = d3.select("#sect0");

    var bounds_sunburst_col = sunburst_col.node().getBoundingClientRect();
    var bounds_sunburst_row = sunburst_row.node().getBoundingClientRect();

    margin_sunburst = { top: 30, right: 0, bottom: 30, left: 70 }

    var width_sunburst_col = bounds_sunburst_col.width ;
    var height_sunburst_col = bounds_sunburst_row.height ;



    width_sunburst = width_sunburst_col
    radius_sunburst = Math.min(height_sunburst_col, width_sunburst_col)  / 3

    format = d3.format(",d")


    arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius_sunburst * 1.5)
        .innerRadius(d => d.y0 * radius_sunburst)
        .outerRadius(d => Math.max(d.y0 * radius_sunburst, d.y1 * radius_sunburst - 1))

    partition = data => {
        const root = d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value);
        return d3.partition()
            .size([2 * Math.PI, root.height + 1])
            (root);
    }

    color_sunburst = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1))
    const root = partition(data);

    root.each(d => d.current = d);

    const svg = d3.select('#svg_sunburst')
        .attr("width", width_sunburst)
        .attr("height", height_sunburst_col)
        .attr("viewBox", [0, 0, width_sunburst, width_sunburst])
        .style("font", "10px sans-serif");

    

    const g = svg.append("g")
        .attr("transform", `translate(${width_sunburst / 2},${width_sunburst / 2})`).attr("id", "grupo_sunburst");

    const path = g.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("fill", d => { return ods[d.data.name] != undefined ? ods[d.data.name].color : ods[d.parent.data.name] != undefined ? ods[d.parent.data.name].color : "#ff"})
        .attr("fill-opacity", d => arcVisible(d.current) ? 1 : 0)
        .attr("d", d => arc(d.current));

    path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

    path.append("title")
        .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

    const label = g.append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .join("text")
        .attr("dy", "0.35em")
        .attr('font-size', '1.5vw')
        .style("fill", "rgb(255,255,255)")
        .attr("fill-opacity", d => d.children? 0:+labelVisible(d.current))
        .attr("transform", d => labelTransform(d.current))
        .text(d => d.data.name);

    const parent = g.append("circle")
        .datum(root)
        .attr("r", radius_sunburst)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);

    function clicked(p) {
        parent.datum(p.parent || root);

        root.each(d => d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth)
        });

        const t = g.transition().duration(750);

        // Transition the data on all arcs, even the ones that aren’t visible,
        // so that if this transition is interrupted, entering arcs will start
        // the next transition from the desired position.
        path.transition(t)
            .tween("data", d => {
                const i = d3.interpolate(d.current, d.target);
                return t => d.current = i(t);
            })
            .filter(function (d) {
                return +this.getAttribute("fill-opacity") || arcVisible(d.target);
            })
            .attr("fill-opacity", d => arcVisible(d.target) ?1 : 0)
            .attrTween("d", d => () => arc(d.current));

        label.filter(function (d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
            .attr("fill-opacity", d => d.children ? 0 : +labelVisible(d.target))
            .attrTween("transform", d => () => labelTransform(d.current));
    }

    function arcVisible(d) {
        return d.y1 <= 2 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
        return d.y1 <= 2 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius_sunburst;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }
}
