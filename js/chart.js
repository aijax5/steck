var max = 87,
  value = 77;
var red = 'rgba(255,135,135,0.7)';
var green = 'rgba(6,183,100,0.7)';
var blue = 'rgba(135,147,255,0.7)';
var myColor;
if (value <= (max / 3))
  myColor = green;
else if (value > max / 3 && value <= 2 * max / 3)
  myColor = blue;
if (value > 2 * max / 3 && value <= max)
  myColor = red;
else if (value > max)
  myColor = '#888';

myData = [0];
myData.pop();
myData.push(value);
myData.push(max);


var ctx = document.getElementById('module2').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',
  data: {

    datasets: [{
      label: status,
      backgroundColor: myColor,
      data: myData,
      borderColor: myColor,
      borderWidth: 4,
      borderSkipped: 'top'
    }, {

      backgroundColor: '#fff  ',
      data: [max - value],
      borderColor: myColor,
      borderWidth: 4,
      borderSkipped: 'top'
    }]
  },

  // Configuration options go here
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false // hides the legend
    },
    tooltips: {
      enabled: true // hides the tooltip.
    },
    scales: {
      xAxes: [{
        display: false, // hides the horizontal scale
        stacked: true // stacks the bars on the x axis
      }],
      yAxes: [{
        display: false, // hides the vertical scale
        stacked: true // stacks the bars on the y axis
      }]
    }
  }
});