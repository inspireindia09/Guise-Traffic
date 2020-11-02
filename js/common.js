$(document).ready(function () {
    $(function () {

        'use strict';

        var aside = $('.side-nav'),
            showAsideBtn = $('.show-side-btn'),
            contents = $('#contents'),
            _window = $(window)

        showAsideBtn.on("click", function () {
            $("#" + $(this).data('show')).toggleClass('show-side-nav');
            contents.toggleClass('margin');
        });

        if (_window.width() <= 767) {
            aside.addClass('show-side-nav');
        }

        _window.on('resize', function () {
            if ($(window).width() > 767) {
                aside.removeClass('show-side-nav');
            }
        });

        // dropdown menu in the side nav
        var slideNavDropdown = $('.side-nav-dropdown');

        $('.side-nav .categories li').on('click', function () {

            var $this = $(this)

            $this.toggleClass('opend').siblings().removeClass('opend');

            if ($this.hasClass('opend')) {
                $this.find('.side-nav-dropdown').slideToggle('fast');
                $this.siblings().find('.side-nav-dropdown').slideUp('fast');
            } else {
                $this.find('.side-nav-dropdown').slideUp('fast');
            }
        });

        $('.side-nav .close-aside').on('click', function () {
            $('#' + $(this).data('close')).addClass('show-side-nav');
            contents.removeClass('margin');
        });


        // Start chart
        var chart = document.getElementById('myChart');
        Chart.defaults.global.animation.duration = 2000; // Animation duration
        Chart.defaults.global.title.display = false; // Remove title
        Chart.defaults.global.title.text = "Chart"; // Title
        Chart.defaults.global.title.position = 'bottom'; // Title position
        Chart.defaults.global.defaultFontColor = '#999'; // Font color
        Chart.defaults.global.defaultFontSize = 10; // Font size for every label

        // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
        Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
        Chart.defaults.global.legend.labels.padding = 0;
        Chart.defaults.scale.ticks.beginAtZero = true;
        Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
        Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
        Chart.defaults.global.legend.display = false;

        var myChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", 'Jul'],
                datasets: [{
                    label: "Lost",
                    fill: false,
                    lineTension: 0,
                    data: [45, 25, 40, 20, 45, 20],
                    pointBorderColor: "#4bc0c0",
                    borderColor: '#4bc0c0',
                    borderWidth: 2,
                    showLine: true,
                }, {
                    label: "Succes",
                    fill: false,
                    lineTension: 0,
                    startAngle: 2,
                    data: [20, 40, 20, 45, 25, 60],
                    // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
                    backgroundColor: "transparent",
                    pointBorderColor: "#ff6384",
                    borderColor: '#ff6384',
                    borderWidth: 2,
                    showLine: true,
                }]
            },
        });
 
       // get pie chart canvas
 
       var vehicleCanvas = document.getElementById("vehicleChart");
       Chart.defaults.global.defaultFontSize = 10;
   
       var vechileData = {
        borderWidth: 0,
         labels: [
           "Car",
           "Two Wheelers",
           "Bus", 
           "Truck",
           "Bike"
         ],
         datasets: [
           {
             data: [133.3, 86.2, 52.2, 51.2, 50.2],
             borderWidth: 1 ,
             backgroundColor: [
               "#273c75",
               "#9c88ff",
               "#7f8fa6",
               "#c23616",
               "#0097e6"
             ]
           }]
       };
   
       var pieChart = new Chart(vehicleCanvas, {
         type: 'pie',
         data: vechileData
       });
        
    //    Get line chart 

    var ctx = document.getElementById("lineChart").getContext('2d');


var lineChart = new Chart(ctx, {
    type: 'line',
    data: { 
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1, // Specify bar border width 
        }]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});



var barctx = document.getElementById("barChart");


var barChart = new Chart(barctx, {
    type: 'bar',
    data: {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});
 


    });
    //navbar dashboard js end
    //dropdown js start
    $(function() {

        var start = moment().subtract(29, 'days');
        var end = moment();
    
        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    
        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
    
        cb(start, end);
    
    });


    //dropdown js end
    //data table js
    $('#report_table').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
    // datatable js end
    

});