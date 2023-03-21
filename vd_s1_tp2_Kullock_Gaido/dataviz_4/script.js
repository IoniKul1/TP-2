  d3.csv('as.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks:[
          Plot.dot( data,{
              x: "anio_nacimiento",
              y: "mision_hs",
              fill: "Continente",
              opacity: 1,
            Plot.text(data ,{
              x: "anio_nacimiento",
              y: "mision_hs",
              text: "Continente",
              })
            }),
      ],
      grid: true,
      line: true,
      nice: true,
      label: '-',
      height: 500,
      width: 1000,
      marginLeft: 100,
      marginTop: 40,
      marginBottom: 40,
    
    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
    
  });
  