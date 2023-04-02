d3.csv('astronautass.csv', d3.autoType).then(data => {
  console.log(data)
  let america = data.filter(d => d.Continente == "America")
  console.log(america)
  let asia = data.filter(d => d.Continente == "Asia")
  console.log(asia)
  let Europa = data.filter(d => d.Continente == "Europa")
  console.log(Europa)
  // Guardamos el svg generado en la variable chart
  let chart4 =   Plot.plot({
    grid: true,
    nice: true,
    color: {
      legend: true,
      scheme:"blues",
    },
    facet: {
      data: data, 
      x: "Continente", 
      marginRight: 50, 
      marginLeft: 50,
     
    }, 
    fx: {
      insetLeft: 10,
      insetRight: 10,
      padding: 0.1,
    },
    fy: {
      insetTop: 10,
      insetBottom: 10,
      padding: 0
    }, 
    width: 666,

    marks: [
      Plot.barY(data, Plot.groupX(
        {
          y:"count"
        },
        {
        x: "nacionalidad",
        fill: "Continente",
        fillOpacity: 1,
        sort: {y: "x", reverse: true},
        
      })),
      Plot.barY(data, Plot.groupX(
        {
          y:"count"
        },
        {
        x: "nacionalidad",
        fillOpacity: 0.1,
        sort: {y: "x", reverse: true},
        facet:"exclude",
      })),
    ],
    height: 500,
    width: 1500,
    marginLeft: 150,
    marginTop: 40,
    marginBottom: 150,
    x: {
      label:"Cantidad de personas por pais",
      tickRotate:-75,
     },
     y: {
     label: "Paises"
     },
  });
  // Agregamos chart al div#chart de index.html
  d3.select('#chart4').append(() => chart4)
});