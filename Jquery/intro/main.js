//$("h1")is the same of document.querySelactorAll("h1");

// i will change all color to green using vanille js 
let lis = document.querySelectorAll("li");
for (let i = 0 ; i < lis.length ; i++){
    lis[i].style.color="green";
}

// i will change all color to red using jqurey 
$("li").css("color","red");

$("li").css( {
    "border":"2px soild #css",
    "background":"orange",
    "fontSize":"2em",
    "color":"'fff"
});
console.log($("li").css("backgroundColor"));//rgb(255, 165, 0)
console.log(document.querySelector("li").style.backgroundColor);//orange

//Select all divs and give them a purple background
$("div").css({
    "background":"purple"
});
//Select the divs with class "highlight" and make them 200px wide
$(".hilight").css({
    "width":"200px"
});
// select the div with id "third" and give it a orane border
$("#third").css({
    "border":"4px dotted orange"
});
// Select the first div only and change its front color to pink
$("div:first").css({
    "background":"pink"
});

// Select the first div only and change its front color to pink
$("div:eq(2)").css({
    "background":"yellow"
});

// Select the first div with class "hilight" and change font color to blue
$("div.hilight:first").css({
    "background":"blue"
});
// change the text from jquery is nive to "jquery is awsome"
document.querySelectorAll("h1")[1].textContent="jquery is awsome";
$("h1:eq(1)").text("jquery is very awsome");

// change the text from jquery is nive to "jquery is awsome"
document.querySelectorAll("h1")[1].textContent="jquery is awsome";
//we add input
$("h1:eq(1)").html("<input type 'text'>  jquery is very awsome");
document.querySelectorAll("input").value="jquery is very awsome";
// in jquery 
$("input").val("jquery is nice");
/* console.log($("input").attr("type") );
$("input").attr("type","checkbox");
console.log($("input").attr("type")); */

$("img").attr("src","https://picsum.photos/id/395/800/400");
$("img").css("width","200px");
$("img:eq(1)").attr("src","https://picsum.photos/id/391/800/400");
$("img:eq(0)").attr("title","Brdige photo");