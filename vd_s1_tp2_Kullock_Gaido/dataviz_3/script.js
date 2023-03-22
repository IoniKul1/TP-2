d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.line(
        data,
        Plot.groupX({ y: "count" },
         { x: "nacionalidad", 
         y: "mison_hs", 
         
         
          })
      )
    ],
    x: {
      tickRotate: -9,
      ticks: 5,
      tickSize: 1,
      
    },

  grid:true,
  line:true,
  nice:true,
  width: 1800,
  height: 500,
  style: {
    color: "black",
    fontFamily: "monospace",
    fontSize: "10px",
    
   },
   marginLeft: 55,
	 marginRight: 55,
	 marginTop: 50,
	 marginBottom: 60,
	 insetTop: 10,
	 insetBottom: 10,
	 insetLeft:10,
	 insetRight: 10,
   x: {
    label:"Nacionalidades",
   },
   y: {
    label:"Horas de Mison",
   }
  });
  
  d3.select("#chart").append(() => chart);
});



Plot.plot({
  x: {
    tickFormat: d3.utcFormat("%Y"), 
    domain: [d3.utcYear.offset(d3.utcYear(), -12), d3.utcYear()]
  }, 
  width: 714
})
Plot.plot({
  marks: [
    Plot.dot(
      [{ value: 0.1 }, { value: 0.25 }, { value: 0.3 }, { value: 0.42 }],
      { x: "value" }
    )
  ],
  x: {
    tickRotate: -45,
    ticks: 5,
    tickSize: 5,
    line: true,
    tickPadding: 10,
    labelAnchor: "left",
    labelOffset: 0,
    nice: true,
    label: "My label"
  },
  height: 200,
  width: 714,
  marginBottom: 100
})