  d3.csv('as.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart =   Plot.plot({
      grid: true,
      nice: true,
      color: {
        legend: true,
      },

      marks: [
        Plot.barX(data, {
          x: 1,
          y: "nacionalidad",
          fill: "Continente",
          fillOpacity: 1,
          r: 20
        }),
      ],
      height: 500,
      width: 1000,
      marginLeft: 150,
      marginTop: 40,
      marginBottom: 40,
      x: {
        label:"Cantidad de personas por pais",
       },
       label: "Paises"
    
    });
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
    
  });

