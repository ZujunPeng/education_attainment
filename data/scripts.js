var svg =d3.select("div#plot")
    .append("svg")
      .attr("width","400")
      .attr("height","400");
svg.append("circle")
  .attr("cx","100")
  .attr("cy","200")
  .attr("r","50")
  .attr("fill","red");