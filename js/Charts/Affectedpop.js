// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barColor1");
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Bankura", "Bardhaman", "Hooghly", "Howrah", "Maldah", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas"],
    datasets: [{
      label: "Affected Population at risk in thousands (k)",
      backgroundColor: "#9DE0AD",
      borderColor: "rgba(100,100,100,1)",
      data: [3.1, 291.2, 98, 2.8, 1156, 3895, 3030, 2196, 252], 
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
          max: 4000,
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
