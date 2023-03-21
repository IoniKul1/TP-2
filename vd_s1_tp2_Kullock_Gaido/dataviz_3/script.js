d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'edad_mision',
        
        stroke: 'edad_mision',
      }),
    ],
    color: {
     
    },
    grid: true,
    line: true,
    nice: true,
    symbol: {
      legend: "true",
    },
  });

  d3.select("#chart").append(() => chart);
});

