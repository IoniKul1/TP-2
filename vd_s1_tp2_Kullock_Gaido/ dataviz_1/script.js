d3.csv('astronautass.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks:[
        Plot.dot(
          data,
          Plot.groupX({ y: "mean" }, { x: "edad_mision", y: "mision_hs", fill: 'red'}) )],
    style: {
      backgroundColor: "black",
      color: "white",
      fontFamily: "monospace",
      fontSize: "12px",
      overflow: "visible"
    },
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
  
})
