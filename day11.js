// Example data
const countriesArray = ["USA", "Canada", "UK", "Germany"];
const countriesObject = {
    "USA": "United States",
    "CAN": "Canada",
    "GBR": "United Kingdom",
    "DEU": "Germany"
};

// Display countries array as a table
console.group("Countries Array");
console.table(countriesArray);
console.groupEnd();

// Display countries object as a table
console.group("Countries Object");
console.table(countriesObject);
console.groupEnd();
