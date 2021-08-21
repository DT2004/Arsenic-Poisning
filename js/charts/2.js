Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart1");
var neighborhoods = ["Jalpaiguri", "Medinipur", "Alipurduar", "Kolkata", "Darjeeling", "Dakshin Dinajpur", "Birbhum", "Kochbihar", "Barddhaman", "Bankura", "Howrah", "Hugli"];
var colors = ['red', 'red', 'red', 'red','red', 'red', 'red', 'red', 'red'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 28.96, y: 71.3, 
 
          }, {
            x: 40.26, y: 57.4,
          }, {
            x: 25.85 , y: 42.4,
          }, {
            x: 22.54, y: 20.2,
          }, {
            x: 1.71, y: 5.5,
          }, {
            x: 6.83, y: 3.4,
          }, {
            x: 3.43, y: 2.5,
          }, {
            x: 1.54, y: 0.1,
          }, {
            x:  3.44, y: 0.1,
          }
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
               labelString: "Population affected"
           }
       }]
    }
    }
 });