d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(
        data,
        Plot.groupX({ y: "count" },
         { x: "ocupacion", 
         y: "price_in_usd", 
         fill:"red",
         sort: { x: "y", reverse: true },
          })
      )
    ],
  grid:true,
  line:true,
  nice:true,
  width: 1000,
  height: 500,
  style: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "monospace",
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
  });
  
  d3.select("#chart").append(() => chart);
});



