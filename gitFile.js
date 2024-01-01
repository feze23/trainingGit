$(document).ready(function(){
    $("button").click(function (){
       $("h1").fadeToggle(); 
    })
    $(".btn").click(function (){
        $(".hello").html("<h1>another update</h1>")
    })
})
