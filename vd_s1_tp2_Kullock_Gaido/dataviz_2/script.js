d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(
        data,
        Plot.groupX({ y: "count" },
         { x: "ocupacion", 
         y: "", 
         fill:"black",
         sort: { x: "y", reverse: true },
          })
      )
    ],

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
	 marginBottom: 60,
	 insetTop: 10,
	 insetBottom: 10,
	 insetLeft:10,
	 insetRight: 10,
   x: {
    label:"OCUPACIONES",
   },
   y: {
    label:"CANTIDAD DE OCUPANTES",
   }
  });
  
  d3.select("#chart").append(() => chart);
});



