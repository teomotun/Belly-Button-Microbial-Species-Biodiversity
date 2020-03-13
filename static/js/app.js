// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("data/samples.json").then((importedData) => {
  var samples = importedData;

  // Add dropdown menu from imported data
  var names = samples["names"].map(row => row);
  names.forEach((data) => {
    var drop = d3.select("#selDataset").append("option");
    drop.text(data);
    drop.property("value", data);
  });
});


