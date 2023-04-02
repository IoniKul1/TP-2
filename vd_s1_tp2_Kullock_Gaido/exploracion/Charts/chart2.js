d3.csv('astronautass.csv', d3.autoType).then((data) => {
  let chart2 = Plot.plot({
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
  
  d3.select("#chart2").append(() => chart2);

});

