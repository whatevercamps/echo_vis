var odss_res;

d3.json("https://raw.githubusercontent.com/whatevercamps/graph_jsons_tw_unfpa/master/histograma_ods.json").then(res_hist => {


    d3.json('https://raw.githubusercontent.com/whatevercamps/graph_jsons_tw_unfpa/master/ods.json').then(res_ods => {

        dibujar_burbujas(res_hist, res_ods);
        odss_res = res_ods;
    });

});

function dibujar_burbujas(res_hist, res_ods) {
    var odss = res_ods;
    var histograma = res_hist.items;
    var pie_st = [false, false];
    const margin = { left: 30, right: 30, top: 30, bottom: 30 };
    const dataset = ({ 'A': 35, 'B': 30, 'C': 25, 'D': 20, 'E': 15, 'F': 10 });
    var div_burb = d3.select("#burbujas");
    const bounds_div_burb = div_burb.node().getBoundingClientRect();
    const width_col_burb = bounds_div_burb.width;
    const height_col_burb = bounds_div_burb.height;
    const radio_calc = d3.scalePow().exponent(0.75).domain([0, d3.max(histograma, d => d.count)]).range([10, height_col_burb / 6]);
    color = d3.scaleOrdinal()
        .domain(dataset)
        .range(['#F1892D', '#0EAC51', '#0077C0', '#7E349D', '#DA3C78', '#E74C3C']);
    iwidth = width_col_burb / 2 - margin.left - margin.right;
    iheight = height_col_burb - margin.top - margin.bottom;
    div_burb.select("svg").remove();
    var xx = div_burb.append("svg").attr("width", width_col_burb).attr("height", height_col_burb).attr("id", "burbujas_svg");
    //xx.attr("transform", "translate(" + (div_width_bar / 2 * (-1)) + ", " + 0 + ")");
    xx.attr("opacity", 0).transition().delay(1000).duration(1000).attr("opacity", 1);;
    var svg = xx
        .attr("width", width_col_burb)
        .attr("height", height_col_burb);

    var data = d3.range(17).map(d => {
        const ods = histograma.find(x => x.text == `ods_${d + 1}`);
        return {
            radius: radio_calc(parseInt(ods['count']) || 0),
            id: `ods_${d + 1}`,
            name: `ods ${d + 1}`,
            marked: false,
            value: parseInt(ods['count']) || 0
        }
    });
    var forceCollide = d3.forceCollide(function (d) {
        return d.radius;
    })
        .strength(0.8);

    var s = 0.02;

    var forceX = d3.forceX(width_col_burb / 2).strength(s);
    var forceY = d3.forceY(height_col_burb / 2).strength(s);

    var force = d3.forceSimulation(data)
        .force('x', forceX)
        .force('y', forceY)
        .force('center', d3.forceCenter(width_col_burb / 2, height_col_burb / 2))
        .force("cluster", forceCluster())
        .force('collide', forceCollide)
        .on('tick', function () {
            svg.selectAll('.node')
                .attr('cx', function (d) {

                    // .attr('transform', _ => `translate(${d.x},${d.y})}`)
                    //                    .attr('cx', _ => d.marked?d.x:990)
                    //                    .attr('x', _ => d.marked?d.x:990)
                    return d.x;
                })
                .attr('cy', function (d) {


                    svg.selectAll('.inside')
                    // .attr('transform', `translate(${d.x},${d.y})}`)
                    //                    .attr('cy', _ => d.marked?d.y:990)
                    //                    .attr('y', _ => d.marked?d.y:990)
                    return d.y;
                })

            svg.selectAll('.text_node')
                .attr('cx', function (d) {
                    return d.x;
                })
                .attr('cy', function (d) {
                    return d.y;
                })
                .attr('x', function (d) {
                    return d.x - d.radius / 5;
                })
                .attr('y', function (d) {
                    return d.y;
                })
        });

    function forceCluster() {
        const strength = 0.2;
        let nodes;

        function force(alpha) {
            const l = alpha * strength;
            for (const d of nodes) {
                const {
                    x: cx,
                    y: cy
                } = {
                    x: iwidth / 2,
                    y: iheight / 2
                };
                d.vx -= (d.x - cx) * l;
                d.vy -= (d.y - cy) * l;
            }
        }

        force.initialize = _ => nodes = _;

        return force;
    }
    const main_g = svg.append("g");
    const node = main_g
        .selectAll(".node")
        .data(data)
        .join("g");

    const circle = node.append('circle')
        .classed('node', true).call(drag(force))
        .on('click', (d, i) => switchRadius(iheight / 4, i)());

    circle.attr('r', function (d) {
        return d.radius;
    })
        .attr("fill", d => odss[d.id].color);

    const circle_is = circle.append('circle').classed('inside', true).attr('r', 5)
        .attr("fill", d => '#ddd');

    node.append("text")
        .attr("class", "text_node")
        .text(function (d, i) {
            return d.value;
        })
        .style('fill', '#000')
        .style('font-size', '12px')

    force.nodes(data)
        .alpha(1)
        .restart();
    // var body_gg = d3.select("body");
    // const bounds_body = body_gg.node().getBoundingClientRect();
    // const width_body = bounds_body.width;
    // const height_body = bounds_body.height;
    // xx.attr("width", width_body).attr("height", height_body);

    function drag(force) {

        function dragstarted(d) {
            if (!d3.event.active) force.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) force.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }



    function switchRadius(newRadius, index) {
        return function () {

            const marked_finder = d3.selectAll('.node')
                .filter(function (d, i) {
                    return d.marked === true;
                });

            if (marked_finder._groups[0].length == 0) {
                pie_st = [true, true];
                d3.selectAll('.node')
                    .transition().duration(1000)
                    .tween('radius', function (d) {
                        var that = d3.select(this);
                        var i = d3.interpolate(d.radius, iheight / 20);
                        return function (t) {
                            d.radius = i(t);
                            that.attr('r', function (d) {
                                return d.radius;
                            });
                            force.nodes(data)
                        }
                    });




                const amigito = d3.selectAll('.node')
                    .filter(function (d, i) {
                        return i === index;
                    });
                amigito.transition().duration(1000)
                    .tween('radius', function (d) {
                        var that = d3.select(this);
                        var i = d3.interpolate(d.radius, newRadius);
                        return function (t) {
                            d.radius = i(t);
                            d.marked = true;
                            that.attr('r', function (d) {
                                mapaCalor(d);
                                var bar_svg = d3.select('#bar_svg');
                                bar_svg.selectAll('.enter')
                                    .selectAll("g")
                                    .filter(w => w.data.name == d.id)
                                    .attr("class", v => { down(bar_svg, v); return v });
                                return d.radius;
                            });
                            force.nodes(data)
                        }
                    });


                /*
                  .transition().delay(1000).duration(100)
                  .attr('transform', d3.transform()
                               .scale(_ => 1));
    */
                force.alpha(1).restart();


                //fin del if
            } else {
                pie_st = [false, true];
                d3.selectAll('.node')
                    .transition().duration(1000)
                    .tween('radius', function (d) {
                        var that = d3.select(this);
                        var i = d3.interpolate(d.radius, radio_calc(d.value || 0));

                        return function (t) {
                            d.radius = i(t);
                            d.marked = false;
                            that.attr('r', function (d) {
                                return d.radius;
                            });
                            force.nodes(data)
                        }
                    });

                // d3.selectAll('.inside').transition().attr('visibility', 'hidden').duration(2500);
                // d3.selectAll('.inside').transition().attr('opacity', 0.5);
            }
        }
    }

}

