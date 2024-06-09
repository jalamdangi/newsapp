import React, { useEffect, useState } from 'react';

const CovidStatus = () => {
  // State to store the COVID-19 data
  const [covidData, setCovidData] = useState(null);

  // useEffect is used for side effects in functional components
  useEffect(() => {
    // Define an asynchronous function to fetch COVID-19 data
    const fetchCovidData = async () => {
      try {
        // Use the fetch API to make a GET request to the COVID-19 API
        const response = await fetch('https://api.covid19api.com/total/country/india');

        // Parse the JSON response
        const data = await response.json();

        // Assuming the API returns an array of daily data, and you want the latest data
        const latestData = data[data.length - 1];

        // Update the state with the latest COVID-19 data
        setCovidData(latestData);
      } catch (error) {
        // Log an error message if there's an issue fetching the data
        console.error('Error fetching COVID-19 data:', error);
      }
    };

    // Call the fetchCovidData function when the component mounts
    fetchCovidData();
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      {/* Display the COVID-19 status */}
      <h2>Covid-19 Status</h2>
      {covidData ? (
        <div>
          <p>Date: {new Date(covidData.Date).toLocaleDateString()}</p>
          <p>Confirmed Cases: {covidData.Confirmed}</p>
          <p>Deaths: {covidData.Deaths}</p>
          <p>Recovered: {covidData.Recovered}</p>
        </div>
      ) : (
        // Display a loading message while fetching data
        <p>No Covid Data found at the time...</p>
      )}
    </div>
  );
};

// Export the CovidStatus component to be used elsewhere
export default CovidStatus;
