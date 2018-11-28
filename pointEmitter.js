function looper(val, position){
    console.log("Point "+position+": x:"+val[position].x+", y:"+val[position].y);     
} 
module.exports ={
pointLoop: async function(mapPoints){
    var i = 0;
    for(var i=0; i<mapPoints.length;i++){
        await setTimeout(looper(mapPoints,i),5);
    }
    },
pointsArray: function(){

var jsonPoints = [{x:-1.300355, y:36.773850},
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
    console.log("Original Array Length: "+jsonPoints.length);
    var jsonArray = JSON.stringify(jsonPoints);
    console.log("JSON Array Length: "+jsonArray.length);
    return jsonPoints;
}
}
