let food = new Array("pizza","kebab","Donner","falafel","kartofel salat", "birani");

let foodlength=food.length;
for(let counter=0 ; counter < foodlength ; counter ++ )
{
    document.write(food[counter]+ "<br>");
}
// ///////////////////////////////////////
// let colors= new Array ("red","blue","green","yelow","black");
// let colorslength=colors.length;

// for(let counter=0 ; counter < colorslength ; counter ++ )
// {
//     document.write(colors[counter]+ "<br>");
// }

let colors= new Array ("red","blue","green","yellow","black");
colors.push('pink');
for(i=0 ; i < colors.length ; i++){
document.write(colors[i]+ '<br>');
}

document.write('<hr>'); let div;
for(i=0 ; i < colors.length ;i++)
{
let mycolors=colors[0];

// let div="<div style='background:"+colors[i]+"' >" + colors[i] + "</div>";
div="<div style='text-align:center;margin:0 auto;height:40px;width:"+i+1*80+"px;background:"+colors[i]+"'>" + colors[i]+ "</div>";

document.write(div);
}
