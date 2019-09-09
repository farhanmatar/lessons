$("button").click(function(){
    // alert ("you click the btn");
});
//in jS
/* let btn = document.querySelectorAll("button");
for (let i = 0; i <btn.length; i++){
    btn[i].addEventListener("click",function(){
        let btnText=this.textContent;
        alert(" you click the button "+ btnText);

 });
  }  */
//in jQuery 
// $("button").click(function(){
//     alert("you click the btn");


//in jQuery 
/* $("button").click(function(){
   alert($(this).text);
}); */

$("button").click(function(){
    // alert($(this).text());
    $(this).css("background","pink");
    $("h1").addClass("wrong");
    console.log($("h1").attr("class"));
    $("h1").text($("h1").attr("class"));
});

$("div").slideToggle(1000,function(){
    $(this).remove();

});
$("h1").click(function(){
    $("h1").ToggleClass("correct");

});
