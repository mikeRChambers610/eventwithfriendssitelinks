import React, { useState, useEffect } from 'react';

const Events = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Start with loading true

  useEffect(() => {
    //new build
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://q0ekxtr8l3.execute-api.us-east-1.amazonaws.com/v1/events?groupID=87ea0c82-0d15-4e4b-b8d9-ab0daf2fcb3f&sortID=2023-06-22T22:02:16.063Z4cbfaaa8-7cbc-4b87-bb9f-c0fc17e94540');

    xhr.onload = function() {
      if (xhr.status === 200) {
        setData(xhr.responseText); // Set data with response text
      } else {
        console.error('Failed to fetch:', xhr.responseText);
        setData('Failed to load data'); // Handle errors
      }
      setLoading(false); // Update loading state
    };

    xhr.onerror = function() {
      console.error('Request failed');
      setData('Failed to load data'); // Handle network errors
      setLoading(false); // Update loading state
    };

    xhr.send(); // Send the request
  }, []); // The empty array makes sure the effect runs only once after the initial render

  return (
    <div>
      {loading ? (
        <div>Loading...</div> // Display loading indicator
      ) : (
        <div dangerouslySetInnerHTML={{ __html: data }} /> // Render HTML data safely
      )}
    </div>
  );
}

export default Events;
