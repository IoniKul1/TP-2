d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(
        data,
        Plot.groupX({ y: "count" },
         { x: "ocupacion", 
         y: "", 
         fill:"genero",
        
         
         sort: { x: "y", reverse: true },
          })
      )
    ],
    color: {
      legend: true,
      scheme: 'blues',
      
    
    },
  grid:true,
  line:true,
  nice:true,
  width: 780,
  height: 500,
  style: {
    color: "black",
    fontFamily: "helvetica",
    fontSize: "12px",
    
   },
   marginLeft: 55,
	 marginRight: 55,
	 marginTop: 50,
	 marginBottom: 130,
	 insetTop: 10,
	 insetBottom: 10,
	 insetLeft:10,
	 insetRight: 10,
   x: {
    label:"OCUPACIONES",
    tickRotate: -30,
    tickSize: 10,
   },
   y: {
    label:"CANTIDAD DE OCUPANTES",
   }
  });
  
  d3.select("#chart").append(() => chart);
});

Plot.plot({
  marks: [
    Plot.rectX(
      data,
      Plot.binY(
        { x: "count" },
        {
          x: "price_in_usd",
          y: "date",
          fill: "brand",
          fillOpacity: 0.5,
          thresholds: d3.utcWeek
        }
      )
    )
  ],
  marginLeft: 100,
  width: 714,
  y: { reverse: true }, 
  color: {
    legend: true
  }
})