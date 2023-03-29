d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks:[
        Plot.barY(
          data,
          Plot.groupX({ 
            y: "mean" }, 
          { x: "nacionalidad", 
            y: "mision_hs", 
            sort: { x: "y", reverse: true },
            
          })
  )],
 
  
  grid:true,
  line:true,
  nice:true,
  width: 600,
  height: 500,
  style: {
    color: "black",
    fontFamily: "monospace",
    fontSize: "10px",
    
   },
   marginLeft: 55,
	 marginRight: 55,
	 marginTop: 50,
	 marginBottom: 200,
	 insetTop: 10,
	 insetBottom: 10,
	 insetLeft:10,
	 insetRight: 10,
   x: {
    label:"Nacionalidades",
    tickRotate: -70,
    round : true, 
    
   },
   y: {
    label:"Horas de Mison",
   }
  });
  
  d3.select("#chart").append(() => chart);
});



Plot.plot({
  marks: [
    Plot.dot(
      [{ value: 0.1 }, { value: 0.25 }, { value: 0.3 }, { value: 0.42 }],
      { x: "value" }
    )
  ],
  x: {
    tickRotate: -39,
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