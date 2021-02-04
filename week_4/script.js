console.log("Script is attached");

$(document).ready(function(){
    //alert("jQuery is running");
    //document.getElementById("header").innerHTML = "Hello from the Console";
    //console.log($(".test").html("<a href='https://www.google.com'>Go here for Google</a>"));
    //$("#header").text("<a href='https://www.google.com'>Go here for Google</a>");

    // $("#myButton").click(function(){
    //     alert( "Handler for .click() called.");
    //     $(".test").html("<a href='https://www.google.com'>Go here for Google</a>");
    //     console.log("click event finished");
    // })

    $("#myButton").click(function(){
        // $(this).text("the button words changed");
        if($(this).text() == "Click Me"){
            $(this).text("the button words changed");
        }
        else{
            $(this).text("Click Me");
        }
    })
})
