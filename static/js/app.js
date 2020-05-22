// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Clear existing data
function buildTable(data) {  
    tbody.html("");

    // Assemble forEach loop
    data.forEach((dataRow) => {
      // Append row to table body
      let row = tbody.append("tr");

      // Loop through each field in dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
    });
}

// Setting up D3
function handleClick() {
    // Get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if date was entered and filter the
    // data using the date
    if (date) {
        // Apply 'filter' to table data to only keep the 
        // rows where the 'datetime' value === filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild table using filtered data
    // NOTE: if no date was entered, then filteredData will
    // just be the original tableData
    buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
