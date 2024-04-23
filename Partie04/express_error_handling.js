const express = require('express')


app.post('/employees', (request, response) => {
  const name = request.body.name

 
  if (name == null) {
  
    console.log("input error")

  
    response
      .status(400)
      .json({ message: "Mandatory field: name is missing. " })
  } else {
                
    const empCreationResponse = { result: "success" }

   
    response.json(empCreationResponse)
  }
})

app.get('/employees', async (request, response) => {
  try{
    const apiResponse = await axios.get("http://localhost:3001/employees");

    const jsonResponse = apiResponse.data;
    console.log("response " + jsonResponse);
    
    response.send(jsonResponse);
  } catch(error) {  

   
    response
        .status(500)
        .json({ message: "Error in invocation of API: /employees" });
  }
})



const express = require('express');

const app = express();


app.get('/userswitherror', (request, response) => {
  
  
  let error = new Error(`processing error in request at ${request.url}`)
  error.statusCode = 400
  throw error

})

const port = 3000;
app.listen(port, 
     () => console.log(`Server listening on port ${port}.`));