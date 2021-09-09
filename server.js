
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbconfig = require('./lib/dbconfig/dbconfig')
const bodyParser = require('body-parser');
const cors = require('cors');
const Schema = mongoose.Schema;
const cloudinary  =require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'arvindcloud', 
    api_key: '823112446587948', 
    api_secret: '8tWgFo-TQ7gAD_KZ41boduvWV0s' 
  });
var Name = require('./lib/models/dataschema')

const dburi = "mongodb+srv://Arvind:password05@cluster0.rayzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(dburi,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    function()
    {
        console.log("connected to database");
    }
).then(
    app.listen(3000,'localhost',function(err)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {

            console.log("server is listening");

        }
    })
)

app.use(cors());

console.log(dbconfig.dburi);

app.use(bodyParser.urlencoded({extended : true })); 


app.get('/hii',function(req,res)
{
    res.send("hello how are u");
    console.log("hello how are you")
});

app.post('/upload',function(req,res)
{

    var new_namemod = new Name({
        name:req.body.name,
    });
    new_namemod.save(function(err)
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log("saved");
        }
    })
    cloudinary.uploader.upload('./assets/IMG_20210506_160409.jpg', function(error, result) 
    {
        console.log(result, error)
    });

})
app.get('/',function(req,res)
{
    res.send("hello world");
    console.log("hello world response")
});