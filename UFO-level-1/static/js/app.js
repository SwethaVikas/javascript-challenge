
// Created by Swetha Vikas

// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// UFO sightings function display
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  // Table Clear
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // initial display 
  console.log(tableData);
  tableDisplay(tableData);
  
  // Select the input element and get the raw HTML node
  var button = d3.select("#filter-btn");
  
  // filter 
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      
      var filteredData = tableData;
    } else {
      
      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
  
    // Exception
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Data Found</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });