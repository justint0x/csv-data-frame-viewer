import React, { useEffect, useState } from 'react';

// Helper function to format timedelta from seconds to a readable format  
const formatTimedelta = (seconds) => {
  const parsedSeconds = parseFloat(seconds);
  if (isNaN(parsedSeconds)) return 'N/A';

  const days = Math.floor(parsedSeconds / (24 * 3600));
  const hours = Math.floor((parsedSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((parsedSeconds % 3600) / 60);
  const secs = Math.floor(parsedSeconds % 60);

  return `${days}d ${hours}h ${minutes}m ${secs}s`;
};

const DataFrameTable = ({ jsonData }) => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (jsonData) {
      const { columns, data, data_types } = jsonData.result;
      setColumns(columns);

      // Process data based on data types  
      const processedData = data.map((row) => {
        return row.map((cell, index) => {
          const dataType = data_types[index];

          if (cell === null) return 'N/A';

          switch (dataType) {
            case 'datetime64[ns]':
              return new Date(cell).toLocaleDateString();
            case 'timedelta64[ns]':
              return formatTimedelta(cell);
            default:
              return cell;
          }
        });
      });

      setRows(processedData);
    }
  }, [jsonData]);

  return (
    <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((columnHeader, index) => (
            <th key={index}>{columnHeader}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              <td key={cellIndex}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataFrameTable