d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks:[
        Plot.barY(
          data,
          Plot.groupX({ 
            y: "mean" }, 
          { x: "nacionalidad", 
            y: "mision_hs", 
            fill:'genero',
            sort: { x: "y", reverse: true },
            
          })
  )],
  color: {
    legend: true,
    scheme: 'blues',
  
  },
  
  grid:true,
  line:true,
  nice:true,
  width: 600,
  height: 500,
  style: {
    color: "black",
    fontFamily: "helvetica",
    fontSize: "10px",
    
   },
   marginLeft: 55,
	 marginRight: 55,
	 marginTop: 50,
<<<<<<< Updated upstream
	 marginBottom: 100,
=======
	 marginBottom: 112,
>>>>>>> Stashed changes
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



