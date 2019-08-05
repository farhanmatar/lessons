/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */



function doHomework (subject,callback){
   
   console.log("Starting my " + subject );
   callback();
}

doHomework ("Math",function(){
   
   console.log("Finishing my Homework");
});


function serverRequest (query,callback){
   setTimeout(function(){
      
      var response = query + " 20 is available";
       callback(response);
             
  } ,5000);
}
function getResult (result){
   console.log("Response from the server:"+ result);
}
serverRequest("available cars in Hamburg",getResult);
