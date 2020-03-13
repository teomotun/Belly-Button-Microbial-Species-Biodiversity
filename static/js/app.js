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

  var samples = Data.samples.map(row => row)[0];

  // Sorting algorithm, data is already sorted so not needed
  // samples.sample_values.sort(function (a, b) {
  //   return parseFloat(b) - parseFloat(a);
  // });
  // var sample = Data.samples.map(row => row)[0];
  // var sampless = [];
  // for (var i = 0; i < sample_values.length; i++) {
  //   var n = sample.sample_values.indexOf(sample_values[i]);
  //   sampless.push(sample.otu_ids[n]);
  // };

  // Slice the first 10 objects for plotting & reverse the array due to Plotly's defaults
  top_OTU_value = samples.sample_values.slice(0, 10).reverse();
  top_OTU = samples.otu_ids.slice(0, 10).reverse();
  top_OTU_labels = samples.otu_labels.slice(0, 10).reverse();

  plotbarh();
  plotbubble(samples);
};



function plotbarh() {
  // Trace1 for to display bar chart
  var trace1 = {
    x: top_OTU_value,
    y: top_OTU.map(row => "OTU " + row),
    text: top_OTU_labels,
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("bar", chartData);
};

function plotbubble(sample) {
  // Trace2 for to display bubble chart
  var trace2 = {
    y: sample.sample_values,
    x: sample.otu_ids,
    text: sample.otu_labels,
    mode: 'markers',
    marker: {
      color: sample.otu_ids,
      size: sample.sample_values
    }
  };

  var data = [trace2];

  var layout = {
    xaxis: { title: "OTU ID" },
  };

  Plotly.newPlot('bubble', data, layout);

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
