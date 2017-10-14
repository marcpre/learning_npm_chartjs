const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "Price",
    borderColor: window.chartColors.red,
    backgroundColor: window.chartColors.red,
    fill: false,
    data: [
      randomScalingFactor(),
      randomScalingFactor()
    ],
    yAxisID: "y-axis-1",
  }, {
    label: "MarketCap",
    borderColor: window.chartColors.blue,
    backgroundColor: window.chartColors.blue,
    fill: false,
    data: [
      randomScalingFactor(),
      randomScalingFactor()
    ],
    yAxisID: "y-axis-2"
  }]
};
window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = Chart.Line(ctx, {
    data: lineChartData,
    options: {
      responsive: true,
      hoverMode: 'index',
      stacked: false,
      title: {
        display: true,
        text: 'Bitcoin Price and MarketCap'
      },
      scales: {
        yAxes: [{
          type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: "left",
          id: "y-axis-1",
        }, {
          type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: "right",
          id: "y-axis-2",
          // grid line settings
          gridLines: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        }],
      }
    }
  });
};
