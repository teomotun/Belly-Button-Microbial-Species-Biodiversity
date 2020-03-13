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

  // var samples = Data.samples.map(row => row)[0];

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

  plotbarh(0); // Add barchart
  plotbubble(0); // Add bubblechart
  showmetadata(0) //Show metadata
};


// On change to the DOM, call optionChanged()
d3.selectAll("#selDataset").on("change", optionChanged);

// Function called by DOM changes
function optionChanged() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  
  var name = Data.names;
  var data = name.filter((i) => i === dataset)[0];
  if (data) {
    var n = name.indexOf(data);
    console.log(data);
    console.log(n);
  }
  else {
    init();
  };

  //   updatePlotly(data);

};
  

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }




function plotbarh(n) {
  var samples = Data.samples.map(row => row)[n];
  // Slice the first 10 objects for plotting & reverse the array due to Plotly's defaults
  top_OTU_value = samples.sample_values.slice(0, 10).reverse();
  top_OTU = samples.otu_ids.slice(0, 10).reverse();
  top_OTU_labels = samples.otu_labels.slice(0, 10).reverse();
  
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

function plotbubble(n) {
  var sample = Data.samples.map(row => row)[n];
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

function showmetadata(n) {
  var metadata = Data["metadata"].map(row => row)[n];
  Object.entries(metadata).forEach(([key, value]) => {
    var meta = d3.select("#sample-metadata");
    var cell = meta.append("p");
    cell.text(key + ": " + value);
  });

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
// //   }
