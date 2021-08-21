Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart2");
var neighborhoods = ["Jalpaiguri", "Medinipur", "Alipurduar", "Kolkata", "Darjeeling", "Dakshin Dinajpur", "Birbhum", "Kochbihar", "Barddhaman", "Bankura", "Howrah", "Hugli"];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue','blue'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 1.28, y: 6.28, 
 
          }, {
            x: 2.23, y: 7.12,
          }, {
            x: 2.27 , y: 7.72,
          }, {
            x: 2.61, y: 6.81,
          }, {
            x: 2.62, y: 7.7,
          }, {
            x: 4.83, y: 7.39,
          }, {
            x: 4.91, y: 6.98,
          }, {
            x: 5.53, y: 8.24,
          }, {
            x:  5.54, y: 8.24,
          }, {
            x: 9.20, y:8.5,
          },
          { x: 12.19, y: 7.53}, 
          { x: 19.68, y: 7.85 } 
        ]
       }]
    },
    options: {
       tooltips: {
          callbacks: {
             label: function(tooltipItem, data) {
                var label = data.labels[tooltipItem.index];
                return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
             }
          }
       },
       legend: {
           display: false,
       },
       scales: {
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Arsenic Level'
       }}],
        yAxes: [{
           scaleLabel: {
               display: true,
               labelString: "pH"
           }
       }]
    }
    }
 });