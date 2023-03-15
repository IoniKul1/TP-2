d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks:[
        Plot.barY(
          data,
          Plot.groupX({ y: "mean" }, { x: "edad_mision", y: "mision_hs", fill: 'red'}) )],
    grid: true,
    line: true,
    nice: true,
    label: '                                                                                           Edad optima para tu proxima misión',
    height: 500,
    marginLeft: 100,
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
  
})
