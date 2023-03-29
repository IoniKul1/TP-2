d3.csv('as.csv', d3.autoType).then(data => {
    console.log(data)

    let Europa = data.filter(d => d.Continente == "Europa")
    console.log(Europa)
    // Guardamos el svg generado en la variable chart
    let chart2 =   Plot.plot({
      grid: true,
      nice: true,
      color: {
        legend: true,
        scheme:"blues",
      },
      

      marks: [
        Plot.barY(Europa, Plot.groupX(
          {
            y:"count"
          },
          {
          x: "nacionalidad",
          fill: "Continente",
          fillOpacity: 1,
          sort: {y: "x", reverse: true}
        })),
      ],
      height: 500,
      width: 600,
      marginLeft: 150,
      marginTop: 40,
      marginBottom: 40,
      x: {
        label:"Cantidad de personas por pais",
       },
       y: {
       label: "Paises"
       },
    });
    // Agregamos chart al div#chart de index.html
    d3.select('#chart2').append(() => chart2)
    
  });
