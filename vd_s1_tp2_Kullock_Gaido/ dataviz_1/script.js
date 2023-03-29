d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let datafilter = data.filter(d => d.edad_mision >= 55)
  console.log(datafilter)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks:[
        Plot.line(
          data,
          Plot.groupX({ 
            y: "mean" }, 
          { x: "edad_mision", 
            y: "mision_hs", 
          }) ),
          Plot.line(
            datafilter,
            Plot.groupX({ 
              y: "mean" }, 
            { x: "edad_mision", 
              y: "mision_hs",
              stroke: "red", 
              
            }) ),
          Plot.dot(data, 
            Plot.groupX({ 
            y: "mean" }, 
          { x: "edad_mision", 
            y: "mision_hs", 
            fill: "black"      
          }) 
          ),
          Plot.dot(datafilter, 
            Plot.groupX({ 
            y: "mean" }, 
          { x: "edad_mision", 
            y: "mision_hs", 
            fill: "red",   
          }) 
          ),
          Plot.rect({
            x: "edad_mision",
            y: "mision_hs",
            width: 5,
            height: 100,
            fill: 'red',
            fillOpacity: 0.6,
          }),
          Plot.text({
            x: "edad_mision",
            y: "mision_hs",
            text: 'Mejor edad promedio',
            color: 'white',
            textAlign: 'center',
            textBaseline: 'middle',
          }),
        ],
    style: {
      color: "black",
      fontFamily: "Helvetica",
      fontSize: "12px",
      overflow: "visible"
    },
    grid: true,
    line: true,
    nice: true,
    label: 'Edad optima',
    height: 500,
    width: 700,
    marginLeft: 100,
    marginTop: 60,
    marginBottom: 60,
    x: {
      label:"Edades",
      ticks: 4,
     },
     y: {
        label: "Horas de misión"
     },
  
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
  
})
