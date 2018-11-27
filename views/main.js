//var car = new Microsoft.Maps.Pushpin(map.getCenter(), {htmlcontent:"<img src='https://images.sendyit.com/web_platform/vendor_type/top/2.svg' style="height:2%"/>"})
function GetMap()
    {        
        var map = new Microsoft.Maps.Map('#mapDiv',{credentials:'Anjy6YOB2TaZMtjxhHU_-i_t2V-ErH1LMNM7pXXK2dqHjSqOfWVyGoWvwe6FJTAk'});
        var mapPath = [new Microsoft.Maps.Location(-1.300355,36.773850),
            new Microsoft.Maps.Location(-1.300184, 36.776811),
            new Microsoft.Maps.Location(-1.299840, 36.779386),
            new Microsoft.Maps.Location(-1.298897, 36.779407),
            new Microsoft.Maps.Location(-1.299004,36.777841),
            new Microsoft.Maps.Location(-1.298982,36.776811),
            new Microsoft.Maps.Location(-1.297459,36.776747),
            new Microsoft.Maps.Location(-1.296193,36.776726),
            new Microsoft.Maps.Location(-1.296097,36.779236),
            new Microsoft.Maps.Location(-1.296151,36.777637),
            new Microsoft.Maps.Location(-1.296215,36.776693),
            new Microsoft.Maps.Location(-1.294252,36.776586),
            new Microsoft.Maps.Location(-1.294048,36.776790),
            new Microsoft.Maps.Location(-1.293973,36.779118),
            new Microsoft.Maps.Location(-1.292622,36.779075),
            new Microsoft.Maps.Location(-1.291844,36.779049),
            new Microsoft.Maps.Location(-1.291879,36.778389)];
        var startPoint = mapPath[0];
        var endPoint = mapPath[16];

        var pin = new Microsoft.Maps.Pushpin(startPoint);
        var pin2 = new Microsoft.Maps.Pushpin(endPoint);
        for (var i = 0; i<mapPath.length;i++){
            map.entities.push(new Microsoft.Maps.Pushpin(mapPath[i]));
        }
        /*map.entities.push(pin);
        map.entities.push(pin2);*/
        map.setView({center: startPoint, zoom: 15});
    }