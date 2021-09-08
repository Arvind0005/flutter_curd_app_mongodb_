const express = require('express');
const app = express();

app.get('/hii',function(req,res)
{
    res.send("hello how are u");
    console.log("hello how are you")
});

app.listen(3000,'localhost',function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {

    
    console.log("server is listening");
}});