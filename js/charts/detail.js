// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barColor");
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Bankura", "Bardhaman", "Hooghly", "Howrah", "Maldah", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas"],
    datasets: [{
      label: "% of population affected",
      backgroundColor: "#45ADA8",
      borderColor: "rgba(100,100,100,1)",
      data: [0.1, 5.5, 2.5, 0.1, 20.2, 57.4, 71.3, 42.4, 3.4],
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
          max: 100,
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

