const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say', function(req,res) {
        resp = "Hello World" + req.query.keyword ;
        axios.get('https://au6nqdftl9.execute-api.us-east-1.amazonaws.com/default/my-function?keyword='+req.query.keyword)
        .then(response =>{
                res.statusCode = response.data.statusCode;
                res.send(response.data.body);
        })
        .catch(err=>{
                res.statusCode = 400;
                res.send(err);
        });
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});