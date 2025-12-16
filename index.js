var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8081))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(`
    <h1>Node.js Sample Application, Version 1</h1>
    <p>This image is pushed to AWS ECR and deployed on ECS (EC2).</p>
    <p>Welcome to Application!</p>
  `);
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
