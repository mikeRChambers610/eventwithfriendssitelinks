const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");
const dynamodb = new DynamoDBClient({ region: 'us-east-1'});
const TABLE_NAME = 'PublicEventNewFromAPI6FULL-h5ah4uhb4fgf7agnklnby7kqf4-dev';  // Adjust table name as necessary

exports.handler = async (event, context, callback) => {


    String.prototype.unquoted = function (){return this.replace (/(^")|("$)/g, '')}


    console.log("Event Data:")
    console.log(event)
    const groupName = event.queryStringParameters?.groupID;
    const createdSortDate = event.queryStringParameters?.sortID;
    

    console.log("Event Data details:")
    console.log(groupName)
    console.log(createdSortDate)

    if (!groupName || !createdSortDate) {
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/html; charset=UTF-8' },
            body: 'Both groupID and sortID are required'
        });
        return;
    }


    var params = {
        ExpressionAttributeValues: {
           ":groupName": {
               S: groupName
           },
           ":createdSortDate": {
            S: createdSortDate
        },
       },
       KeyConditionExpression: "groupName = :groupName AND createdSortDate = :createdSortDate",   
       TableName: TABLE_NAME,
  };

 console.log("PARAMS")
    console.log(params)

    try {
        const data = await dynamodb.send(new QueryCommand(params));
        console.log("Query Result:", data); // Log the full response from the query
    
        // Check if the query returned any items
        if (data.Items.length === 0) {
            console.log("No items found matching the query.");
            callback(null, {
                statusCode: 404,
                headers: { 'Content-Type': 'text/html; charset=UTF-8' },
                body: 'Event not found'
            });
            return;

        }
        
        const eventDetails = data.Items[0]; 

        const responseHtml = `
          <html>
<head>
  <title>${eventDetails.name}</title>
  <meta property="og:title" content="${eventDetails.name}" />
  <meta property="og:description" content="${eventDetails.description}" />
  <meta property="og:image" content="${eventDetails.image_url}" />
  <meta property="og:url" content="https://www.eventwithfriends.com/events?groupID=${groupName}&sortID=${createdSortDate}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${eventDetails.name}" />
  <meta name="twitter:description" content="${eventDetails.description}" />
  <meta name="twitter:image" content="${eventDetails.image_url}" />
  <style>
    body {
      background-color: #c6e2eb; /* Updated background color for the page */
      font-family: Arial, sans-serif;
      padding: 20px;
      text-align: center;
    }
    h1 {
      color: #0277BD;
    }
    p {
      color: #01579B;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: auto;
    }
    .banner {
      background-color: #e4f1fa; /* Specified lighter blue color for the banner */
      padding: 10px 20px;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .button {
      margin: 10px;
      padding: 10px 20px;
      background-color: #29B6F6;
      color: white;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="banner">
    <a href="https://www.eventwithfriends.com" class="button">Home</a>
    <p>Download the app <strong>Event With Friends</strong></p>
    <a href="https://linke.to/eventwithfriends" class="button">Download</a>
  </div>
  <h1>${eventDetails.name}</h1>
  <p>${eventDetails.description}</p>
  <img src="${eventDetails.image_url}" alt="Event Image"/>
</body>
</html>


        `;

        callback(null, {
            statusCode: 200,
            headers: { 'Content-Type': 'text/html; charset=UTF-8' },
            body: responseHtml
        });
    } catch (error) {
        console.error('Error:', error);
        callback(null, {
            statusCode: 500,
            headers: { 'Content-Type': 'text/html; charset=UTF-8' },
            body: 'Server error'
        });
    }
};
