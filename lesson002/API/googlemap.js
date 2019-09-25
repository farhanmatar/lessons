var map;
function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:53.5511,lng:9.9937},
        zoom:8
    });
    
}


    

let btn = document.getElementById('btn'),
    atti = document.getElementById("atti"),
    longi= document.getElementById("longi");

btn.addEventListener("click",function(){
    map.setCenter(new google.maps.LatLng(parseFloat(atti.value),parseFloat(longi.value)));
});