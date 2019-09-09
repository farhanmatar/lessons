$(document).ready(function(){
    // $("p").on("mouseout mouseover",function(e){
    //     $('this').toggleClass("light");
    // });
    $('p').on({
       mouseover:function(){
           $('body').css('background','lightgreen');
       },
       mouseout:function(){
           $('body').css('background','lightblue');
       },
       click:function(){
           $('body').css('background','orange');
       }
    });
    $('div').on('click',"section",function(){
       $(this).css({"color":"red",
                     "background":"pink"
                   }
           );
       $(this).slideToggle(2000); 
    });
    $('#add').on("click",function(){
       $("<section> this is new section inseted from jQuery </section>").insertAfter("#add");
    });
    $('#off').on("click",function(){

  
    $('div').off("click");
})
    });
    
    
    