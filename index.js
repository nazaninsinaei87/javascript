// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredDates to dataSet initially
var filteredDates = dataSet;

// renderTable renders the filteredDates to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredDates.length; i++) {
    // Get get the current data object and its fields
    var data = filteredDates[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the data object, create a new cell at set its inner text to be the current value at the current data's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick() {
  // Get the user search date
  var filterDate = $dateInput.value;

  // Set filteredDates to an array of all data whose "date" matches the filter
  filteredDates = dataSet.filter(function(data) {
    var dataDate = data.datetime;

    // If true, add the data to the filteredDates, otherwise don't add it to filteredDates
    return dataDate === filterDate;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
