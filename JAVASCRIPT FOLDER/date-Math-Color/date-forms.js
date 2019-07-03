function cud(){ 
   let d=new Date();
   document.write(d); 
}


function geUnixTime(){ 
   let d=new Date();
   unix_time = d.getTime();
   console.log (unix_time);
   document.getElementById("out").innerHTML = unix_time; 
}

function getTimeStamp(){ 
    let d=new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds ();
    out = h + ":" + m + ":" + s;
    console.log (out);
    document.getElementById("out").innerHTML = out; 
 }

/*  function prepareWatches(){ 
    let d=new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds ();
    out = h + ":" + m + ":" + s;
    console.log (out);
    document.getElementById("out").innerHTML = out; 
 } */




 function GetOnlyDate(){ 
   let  d=new Date();
   let  y = d.getFullYear();
   let  m = d.getMonth()+1;
   let  day = d.getDay();
    // out = d + "." + m + "." + day;
    console.log (out);
    document.getElementById("out").innerHTML = y + "." + m + "." + day;
 }
