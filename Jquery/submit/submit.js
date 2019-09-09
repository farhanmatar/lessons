$(document).ready(function(){
    $('#users').submit(function(e){
        e.preventDefault();
        let regEx=/^[a-zA-Z]+$/;
        let inputVal = $('#firstName').val();
        if(regEx.test(inputVal)==false){
            alert("the name is not correct");
            $("#result").html('<p class="error">not valid</p>').show().fadeOut(2000);
            e.preventDefault();
        }

    });
});