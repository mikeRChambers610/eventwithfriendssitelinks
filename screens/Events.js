import React, { useState } from 'react';

function Example() {
  const [data, setData] = useState(null);

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://q0ekxtr8l3.execute-api.us-east-1.amazonaws.com/v1/events?groupID=87ea0c82-0d15-4e4b-b8d9-ab0daf2fcb3f&sortID=2023-06-22T22:02:16.063Z4cbfaaa8-7cbc-4b87-bb9f-c0fc17e94540');

    console.log("XHR")
    console.log(xhr.responseText)

    /*xhr.onload = function() {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };*/
    xhr.send();
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
    </div>
  );
}