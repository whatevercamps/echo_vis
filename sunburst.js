const sdg_img_repo = "https://i0.wp.com/www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-";
act_sdg = 0;
targest_img_repo = "assets/global-goals-media-cards/MC_Target_";

postData('https://echoun.herokuapp.com/sunburst', req).then(data => {
    data.name = "ODS";
    dibujar_sunburst(data);
});



function dibujar_sunburst(data) {

    grupito = d3.select('#grupo_sunburst');
    grupito.transition().duration(1000).attr("opacity", 0);

    var sunburst_col = d3.select("#sunburst_col");
    var sunburst_row = d3.select("#sect0");

    var bounds_sunburst_col = sunburst_col.node().getBoundingClientRect();
    var bounds_sunburst_row = sunburst_row.node().getBoundingClientRect();

    margin_sunburst = { top: 30, right: 0, bottom: 30, left: 70 }

    var width_sunburst_col = bounds_sunburst_col.width + (bounds_sunburst_col.width / 100) * 10;
    var height_sunburst_col = bounds_sunburst_row.height + (bounds_sunburst_col.height / 100) * 10;



    width_sunburst = width_sunburst_col
    radius_sunburst = Math.min(height_sunburst_col, width_sunburst_col) / 5;

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

    var prev_g = svg.selectAll("#grupo_sunburst");
    if (prev_g._groups[0][0] != undefined) {
        prev_g.transition().duration(1000).attr("opacity", 0).transition().delay(1000).remove();
    }

    const g = svg.append("g")
        .attr("transform", `translate(${width_sunburst / 2},${width_sunburst / 2})`).attr("id", "grupo_sunburst");

    g.attr("opacity", 0).transition().duration(1000).attr("opacity", 1);
    const path = g.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("fill", d => { return ods[d.data.name] != undefined ? ods[d.data.name].color : ods[d.parent.data.name] != undefined ? ods[d.parent.data.name].color : "#ff" })
        .attr("fill-opacity", d => arcVisible(d.current) ? 1 : 0)
        .attr("id", d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}`)
        .attr("d", d => {
            return arc(d.current)
        });

    path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("mouseover", mouseover_sunburst)
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
        .attr("fill-opacity", d => d.children ? 0 : +labelVisible(d.current))
        .attr("transform", d => labelTransform(d.current))
        .text(d => d.data.name);

    const parent = g.append("circle")
        .datum(root)
        .attr("r", radius_sunburst)
        .attr("fill", "none")
        .attr("pointer-events", "all")

        .on("click", clicked);

    (_ => {
        max_ods_sun = root.children[0];
        root.children.forEach(element => {
            if (element.value > max_ods_sun.value)
                max_ods_sun = element
        });

        sdg_bur_id = max_ods_sun.data.name.split("_")[1];
        d3.select('#imagen_ods_sun').attr('src', sdg_img_repo + sdg_bur_id + ".jpg").attr("opacity", 0).transition().delay(1000).duration(1000).attr("opacity", 1);
        per = max_ods_sun.value;
        perc = (100 / root.value) * per;
        val_to_show = perc < 1 ? perc.toPrecision(1) : perc < 10 ? perc.toPrecision(2) : perc.toFixed(0);
        d3.select('#percent_ods').text(`${val_to_show}%`).attr("opacity", 0).transition().delay(1000).duration(1000).attr("opacity", 1);


        max_meta =  max_ods_sun.children[0];
        max_ods_sun.children.forEach(element => {
            if(max_meta.data.value < element.data.value)
                max_meta = element
        });
        
        d3.select('#imagen_meta_sun').attr('src', targest_img_repo + `${max_meta.data.name.split("_")[1]}`.toUpperCase() + "." + `${max_meta.data.name.split("_")[2]}`.toUpperCase() + ".png");
        d3.select('#nombre_meta').text(`${max_meta.data.name}`.replace("_", " ").replace("_", "."));
        per = max_meta.data.value;
        perc = (100 / root.value) * per;
        val_to_show = perc < 1 ? perc.toPrecision(1) : perc < 10 ? perc.toPrecision(2) : perc.toFixed(0);
        d3.select('#percent_meta').text(`${val_to_show}%`)

    })();

    function mouseover_sunburst() {
        sdg_bur_id = `${this.id.toString()}`.split(/\//g)[1].split("_")[1];
        if (sdg_bur_id.length < 2)
            sdg_bur_id = "0" + sdg_bur_id
        if (act_sdg != sdg_bur_id) {
            act_sdg = sdg_bur_id;
            d3.select('#imagen_ods_sun').attr('src', sdg_img_repo + act_sdg + ".jpg");
            per = d3.select(this)._groups[0][0].__data__.value;
            perc = (100 / root.value) * per;
            val_to_show = perc < 1 ? perc.toPrecision(1) : perc < 10 ? perc.toPrecision(2) : perc.toFixed(0);
            d3.select('#percent_ods').text(`${val_to_show}%`)

            

            max_meta =  d3.select(this)._groups[0][0].__data__.children[0];
            d3.select(this)._groups[0][0].__data__.children.forEach(element => {
                if(max_meta.data.value < element.data.value)
                    max_meta = element
            });

            d3.select('#imagen_meta_sun').attr('src', targest_img_repo + `${max_meta.data.name.split("_")[1]}`.toUpperCase() + "." + `${max_meta.data.name.split("_")[2]}`.toUpperCase() + ".png");
            d3.select('#nombre_meta').text(`${max_meta.data.name}`.replace("_", " ").replace("_", "."));
            per = max_meta.data.value;
            perc = (100 / root.value) * per;
            val_to_show = perc < 1 ? perc.toPrecision(1) : perc < 10 ? perc.toPrecision(2) : perc.toFixed(0);
            d3.select('#percent_meta').text(`${val_to_show}%`)
        }
    }

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
            .attr("fill-opacity", d => arcVisible(d.target) ? 1 : 0)
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
