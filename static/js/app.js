// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
var Data = " "
d3.json("data/samples.json").then((importedData) => {
  Data = importedData;
  init();
});


function init() {
  // Add dropdown menu options from imported data
  var names = Data["names"].map(row => row);
  names.forEach((data) => {
    var drop = d3.select("#selDataset").append("option");
    // Append text and value
    drop.text(data);
    drop.property("value", data);
  });

  var unique_id = Data.samples.map(row => row[0]);
  console.log(unique_id);

  // unique_id.sample_values.sort(function (a, b) {
  //   return parseFloat(b) - parseFloat(a);
  // });

  console.log(unique_id.sample_values);





};


// var dropdownMenu = d3.select("#selDataset");
// // Assign the value of the dropdown menu option to a variable
// var dataset = dropdownMenu.property("value");

// // Initialize x and y arrays
// var x = [];
// var y = [];

// if (dataset === 'dataset1') {
//   x = [1, 2, 3, 4, 5];
//   y = [1, 2, 4, 8, 16];
// }

// if (dataset === 'dataset2') {
//   x = [10, 20, 30, 40, 50];
//   y = [1, 10, 100, 1000, 10000];
// }



// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.node().value;

//   var CHART = d3.selectAll("#plot").node();

//   // Initialize x and y arrays
//   var x = [];
//   var y = [];

//   switch (dataset) {
//     case "dataset1":
//       x = [1, 2, 3, 4, 5];
//       y = [1, 2, 4, 8, 16];
//       break;

//     case "dataset2":
//       x = [10, 20, 30, 40, 50];
//       y = [1, 10, 100, 1000, 10000];
//       break;

//     case "dataset3":
//       x = [100, 200, 300, 400, 500];
//       y = [10, 100, 50, 10, 0];
//       break;

//     default:
//       x = [1, 2, 3, 4, 5];
//       y = [1, 2, 3, 4, 5];
//       break;
//   }
