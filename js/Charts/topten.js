var MeSeContext = document.getElementById("MeSeStatusCanvas1").getContext("2d");
    var MeSeData = {
        labels: [
            "Dakshin Dinajpur",
            "Haora",
            "Hugli",
            "Kolkata",
            "Maldah",
            "Murshidabad",
            "Nadia",
            "North Twenty Four Parganas",
            "South Twenty Four Parganas",
            "Uttar Dinajpur"
        ],
        datasets: [
            {
                label: "Arsenic Level (ppb): ",
                data: [2.37, 3.44, 3.43, 2.07 ,22.54 ,40.26 ,28.96 ,25.85 ,6.83 ,2.95],
                backgroundColor: ["#E5FCC2", "#9DE0AD", "#45ADA8", "#547980", "#594F4F", "#45ADA8", "#547980","#E5FCC2", "#9DE0AD", "#594F4F", "#45ADA8"],
                hoverBackgroundColor: ["#66A2EB", "#FCCE56"]
            }]
    };

var MeSeChart = new Chart(MeSeContext, {
    type: 'horizontalBar',
    data: MeSeData,
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }

    }
});