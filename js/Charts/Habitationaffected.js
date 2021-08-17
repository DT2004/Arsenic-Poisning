// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barColor2");
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Bankura", "Bardhaman", "Hooghly", "Howrah", "Maldah", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas"],
    datasets: [{
      label: "Affected Habitations",
      backgroundColor: "#594F4F",
      borderColor: "rgba(100,100,100,1)",
      data: [1, 142, 178, 1, 836, 1439, 2448, 2699, 322],
    },


    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 3000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
})
