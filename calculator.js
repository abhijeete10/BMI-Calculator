const express= require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req,res){
res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
    });
app.post("/", function(req, res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var num3=num1+num2;
res.send("ADDITION: "+num3);
});
app.post("/bmicalculator", function(req, res){
    var Height=parseFloat(req.body.Height);
    var Weight=parseFloat(req.body.Weight);
    var num3= Weight / (Height*Height);
    res.send("Your BMI is: "+num3);
    });
app.listen(3000,function(){
console.log("Server started at port 3000");

});