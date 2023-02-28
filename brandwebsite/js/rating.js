$(document).ready(function() {  
    $("#st1").click(function() {  
        $(".fa-star").css("color", "grey");  
        $("#st1").css("color", "orange");  

    });  
    $("#st2").click(function() {  
        $(".fa-star").css("color", "grey");  
        $("#st1, #st2").css("color", "orange");  

    });  
    $("#st3").click(function() {  
        $(".fa-star").css("color", "grey")  
        $("#st1, #st2, #st3").css("color", "orange");  

    });  
    $("#st4").click(function() {  
        $(".fa-star").css("color", "grey");  
        $("#st1, #st2, #st3, #st4").css("color", "orange");  

    });  
    $("#st5").click(function() {  
        $(".fa-star").css("color", "grey");  
        $("#st1, #st2, #st3, #st4, #st5").css("color", "orange");  

    });  
  })