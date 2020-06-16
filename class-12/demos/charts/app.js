var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bubble',

  // The data for our dataset
  data: {
    labels: ['Endgame', 'Black Panther', 'Iron Man', 'Captain America', 'Guardians of the Galaxy', 'Dr. Strange', 'Civil War', 'Logan'],
    datasets: [{
      label: 'Awesomeness of Marvel Movies',
      backgroundColor: '#201d6440',
      borderColor: 'orange',
      data: [{y: 0, x: 9, r:300}, {y: 10, x:20, r:300}, {y:5, x:20, r:300}, {y:2, x: 30, r:300}, {y: 20, x: 5, r:300}, {y:30, x:30, r:300}, {y: 45, x: 45, r:300}, {y:50, x:20, r:600}]
    }]
  },
  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Custom Chart Title',
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  }
});
