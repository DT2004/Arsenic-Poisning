var MeSeContext = document.getElementById("MeSeStatusCanvas").getContext("2d");
    var MeSeData = {
        labels: [
            "Bankura",
            "Barddhaman",
            "Haora",
            "Hugli",
            "Maldah",
            "Murshidabad",
            "Nadia",
            "North Twenty Four Parganas",
            "South Twenty Four Parganas",
        ],
        datasets: [
            {
                label: "% of population affected with Arsenic contamination",
                data: [0.1, 5.5, 0.1, 2.5, 20.2, 57.4, 71.3, 42.4, 3.4],
                backgroundColor: ["#F8B195", "#F67280", "#C06C84", "#6C5B7B", "#355C7D","#F67280", "#F8B195", "#C06C84" ],
                hoverBackgroundColor: ["#66A2EB", "#FCCE56"]
            }]
    };

var MeSeChart = new Chart(MeSeContext, {
    type: 'horizontalBar',
    data: MeSeData,
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    min: 0 // Edit the value according to what you need
                }
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});