d3.csv('astronautass.csv', d3.autoType).then((data) => {
  const filteredData = data.filter(d => d.nacionalidad === 'EE.UU.' || d.nacionalidad === 'U.S.S.R/Rusia'|| d.nacionalidad === 'Francia'|| d.nacionalidad === 'Reino Unido' || d.nacionalidad === 'Emiratos Arabes Unidos' || d.nacionalidad === 'Italia'
  );
  
    
          let chart2 = Plot.plot({
           
            marks: [
              Plot.barY(
                filteredData,
                Plot.groupX({ y: "count" },
                 { x: "ocupacion", 
                 y: "", 
                 fill:"nacionalidad",
                 sort: { x: "y", reverse: true },
                 
                }) ),
          
      ],
      color: {
        legend: true,
        style:{
          color:'white',
        }
      },
    grid:true,
    line:true,
    nice:true,
    width: 780,
    height: 500,
    style: {
      color: "white",
      fontFamily: "helvetica",
      fontSize: "12px",
      background: "transparent",
      
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
      tickRotate: -31,
      tickSize: 10,
     },
     y: {
      label:"CANTIDAD DE OCUPANTES",
     }
    });
  
  d3.select("#chart2").append(() => chart2);

});

