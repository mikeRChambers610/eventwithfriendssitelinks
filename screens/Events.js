import React, { useState, useEffect } from 'react';

const Events = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://q0ekxtr8l3.execute-api.us-east-1.amazonaws.com/v1/events?groupID=87ea0c82-0d15-4e4b-b8d9-ab0daf2fcb3f&sortID=2023-06-22T22:02:16.063Z4cbfaaa8-7cbc-4b87-bb9f-c0fc17e94540', true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        setData(xhr.responseText); // Set data with response text
      } else {
        console.error('Failed to fetch:', xhr.responseText);
        setData('Failed to load data'); // Handle errors
      }
    };

    xhr.onerror = () => {
      console.error('Request failed');
      setData('Failed to load data'); // Handle network errors
    };

    xhr.send(); // Send the request
  }, []); // The empty array ensures the effect runs only once after the initial render

  // Rendering the HTML content directly if it exists, without any conditional UI for loading
  return (
    <div dangerouslySetInnerHTML={{ __html: data || '' }} />
  );
}

export default Events;
