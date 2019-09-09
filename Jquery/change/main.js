/* $(document).ready(function(){
    $('select').change(function(){
    //   alert("you select a city" +$(this).val());
      $("p").text("you select the city"+$(this).val());
      $("p").hide().fadeIn(1000);
    });
}); */
/* let select = document.getElementById('selection');
       let p = document.getElementById("para");
       select.addEventListener("change", function(){
           p.style.display = "block";
           p.innerHTML = select.value;
       }); */

let selectElement = document.querySelector("select");
// selectElement.addEventListener("change",function(){
//     alert("you select " +this.value);
// });

selectElement.onchange = function(){
    alert("you select" + this.value);
}