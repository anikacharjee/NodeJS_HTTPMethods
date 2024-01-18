# NodeJS_HTTPMethods
Using Node JS, executing different HTTP Methods

# Make sure, you are installing the necessary dependencies:
`npm install express body-parser`

# Step 1: Run the Server
Make sure your Node.js server is running. If not, go to the project folder in the terminal and run:
`
node app.js
`
The server should start, and you should see a message indicating that it's running on `http://localhost:3000`.

# Step 2: Test Endpoints with Postman
*Retrieve all data (GET):*
- Open Postman and create a new request.
- Set the request type to GET.
- Enter the URL: `http://localhost:3000/api/data`.
- Click on "Send" to execute the request.
  
*Add new data (POST):*
- Create a new request in Postman.
- Set the request type to POST.
- Enter the URL: `http://localhost:3000/api/data`.
- Go to the "Body" tab, select raw, and enter the JSON payload:
`
{
  "name": "New Name"
}
`
- Click on "Send" to execute the request.

*Update existing data (PUT):*
- Create a new request in Postman.
- Set the request type to PUT.
- Enter the URL: `http://localhost:3000/api/data/1` (assuming there is an existing data entry with ID 1).
- Go to the "Body" tab, select raw, and enter the JSON payload:
`
{
  "name": "Updated Name"
}
`
- Click on "Send" to execute the request.

*Remove data (DELETE):*
- Create a new request in Postman.
- Set the request type to DELETE.
- Enter the URL: `http://localhost:3000/api/data/2` (assuming there is an existing data entry with ID 2).
- Click on "Send" to execute the request.

# Step 3: Verify Results
You should see the responses in the Postman interface. Additionally, you can check the console where your Node.js server is running to see any server-side logs.

For verification, you can also check the results of the *GET* request (`http://localhost:3000/api/data`) to see the current state of the data.
