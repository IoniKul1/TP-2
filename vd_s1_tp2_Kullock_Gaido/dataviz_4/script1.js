d3.csv('as.csv', d3.autoType).then(data => {
    console.log(data)
    let asia = data.filter(d => d.Continente == "Asia")
    console.log(asia)
    // Guardamos el svg generado en la variable chart
    let chart1 =   Plot.plot({
      grid: true,
      nice: true,
      color: {
        legend: true,
        scheme:"blues",
      },
      

      marks: [
        Plot.barY(asia, Plot.groupX(
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
    d3.select('#chart1').append(() => chart1)
    
  });
