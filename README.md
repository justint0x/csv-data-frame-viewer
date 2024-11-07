# DataFrame Viewer

This React application displays a dynamic DataFrame in table format. It parses data from a provided JSON input and renders it in a user-friendly table within the browser.

## Features

- Dynamically renders a table based on JSON input.
- Converts datetime and timedelta fields into readable formats.
- Handles dynamic column setups and null values.

## Technologies

- React: A JavaScript library for building user interfaces.
- JavaScript: The language used to construct the app.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your machine. These are necessary to run and manage the React application.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/justint0x/csv-data-frame-viewer.git
   cd csv-data-frame-viewer
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Code Overview

- **`App.js`**: The main component that imports and uses the `DataFrameTable` and `FileUpload` component.
- **`DataFrameTable.js`**: Handles the parsing of JSON data and renders it as a table. It dynamically adjusts for fields specified in the JSON payload.
- **`FileUpload`**: Handles a csv file upload to get response from Backend

### JSON Data Representation

The JSON payload is structured as follows:

```json
{
  "columns": ["Name", "Birthdate", "Score", "Grade", "Notice"],
  "data": [
    ["Alice", "1990-01-01T00:00:00", 90, "A", "86400.0"],
    ["Bob", "1991-02-02T00:00:00", 75, "B", "172800.0"],
    ["Charlie", "1992-03-03T00:00:00", 85, "A", null],
    ["David", "1993-04-04T00:00:00", 70, "B", "259200.0"],
    ["Eve", "1994-05-05T00:00:00", null, "A", "345600.0"]
  ],
  "data_types": ["object", "datetime64[ns]", "float64", "category", "timedelta64[ns]"]
}
```

- **Columns**: List of column names for the table.
- **Data**: Nested arrays, each representing a row in the table.
- **Data_Types**: Specifies the data type of each column, affecting how fields are rendered.

### Custom Functions

- **`formatTimedelta`**: Converts seconds represented as strings or floats to a string formatted as "Xd Xh Xm Xs" (days, hours, minutes, seconds).
- **Date Handling**: Converts ISO date strings to the local date format.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React [https://reactjs.org/](https://reactjs.org/)
- Open-source libraries used in this project.
