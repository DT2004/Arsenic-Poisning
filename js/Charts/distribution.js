Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("pieColor").getContext('2d');
var pieColor = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Barddhaman","Hugli","Maldah", "Murshidabad", "Nadia", "North Twenty Four Parganas", "South Twenty Four Parganas", "others"],
    datasets: [{
      backgroundColor: ["#F8B195", 
      "#F67280", 
      "#C06C84", 
      "#6C5B7B", 
      "#355C7D",
      "#F67280", 
      "#F8B195",

      
      ],
      data: [2.7,1.23,9.95,28.2,35.14,20.8,1.67, 0.9]
    }]
  }
});