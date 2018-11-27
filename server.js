var express = require('express');
var app = express();
var pe = require('./pointEmitter');

var jsonPoints = JSON.stringify([{x:-1.300355, y:36.773850},
    {x:-1.300184, y:36.776811},
    {x:-1.299840, y:36.779386},
    {x:-1.298897, y:36.779407},
    {x:-1.299004, y:36.777841},
    {x:-1.298982, y:36.776811},
    {x:-1.297459, y:36.776747},
    {x:-1.296193, y:36.776726},
    {x:-1.296097,y:36.779236},
    {x:-1.296151,y:36.777637},
    {x:-1.296215, y:36.776693},
    {x:-1.294252, y:36.776586},
    {x:-1.294048, y:36.776790},
    {x:-1.293973, y:36.779118},
    {x:-1.292622, y:36.779075},
    {x:-1.291844, y:36.779049},
    {x:-1.291879, y:36.778389}]);

    function looper(val, position){
        console.log("Point "+position+": x:"+val[position].x+", y:"+val[position].y);     
    } 

    async function emitPoints(){
        var mapPoints = [{x:-1.300355, y:36.773850},
            {x:-1.300184, y:36.776811},
            {x:-1.299840, y:36.779386},
            {x:-1.298897, y:36.779407},
            {x:-1.299004, y:36.777841},
            {x:-1.298982, y:36.776811},
            {x:-1.297459, y:36.776747},
            {x:-1.296193, y:36.776726},
            {x:-1.296097,y:36.779236},
            {x:-1.296151,y:36.777637},
            {x:-1.296215, y:36.776693},
            {x:-1.294252, y:36.776586},
            {x:-1.294048, y:36.776790},
            {x:-1.293973, y:36.779118},
            {x:-1.292622, y:36.779075},
            {x:-1.291844, y:36.779049},
            {x:-1.291879, y:36.778389}];
        var i = 0;
        for(var i=0; i<mapPoints.length;i++){
            await setTimeout(looper(mapPoints,i),5);
        }
    }

app.set('view engine','ejs');
app.use(express.static(__dirname+ '/views'));

app.get('/',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');    
    res.render('index');
    
});
app.get('/points',function(req,res){
    emitPoints().then(res.end());
});
app.get('/pointsArray',function(req,res){
    console.log(pe.pointsArray());
    res.writeHead(200,'Content-Type: application/json');
    res.write(JSON.stringify(pe.pointsArray()));
    res.end();
});
app.listen(3200,function(){
    console.log("Server running at 3200");
});