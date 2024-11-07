import React, { useState } from 'react';

const buttonStyle = {
  backgroundColor: '#007bff',
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  margin: 0,
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  minHeight: '100%',
  cursor: 'pointer',
  borderRadius: '5px'
};


function FileUpload({ setData }) {
  // State to store the selected file  
  const [selectedFile, setSelectedFile] = useState(null);

  // Handler for file input change  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handler for form submit  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file before submitting.");
      return;
    }

    // Create a FormData object to hold the selected file  
    const formData = new FormData();
    formData.append('file', selectedFile);

    console.log("File submitted:", selectedFile.name);

    fetch(`${process.env.REACT_APP_PUBLIC_BACKEND_URL}/api/converter/`, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data.data);
        setData(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Reset the file input after submission  
    // setSelectedFile(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
          gap: 24
        }}>
          <input
            type="file"
            accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleFileChange}
            style={buttonStyle}
          />
          <button type="submit" style={buttonStyle}>Submit</button>
        </div>
      </form>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;