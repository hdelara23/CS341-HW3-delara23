//Looks for the word "vegan" in the Notes section, then print a warning message if found or proceed to checkout if not found
// eventHandler = function( event ) {
//     var searchterm = document.getElementById("message").value;
    
//     if (searchterm.includes("vegan")) {
//         alert("Watch out, there is dairy!");
//     }
//     // Hide the Cheesecake options if checkout was successful
//     else {
//         $(".select").hide()
//         $("#radiobuttons").hide()
//         $("#notesform").hide()
//         alert("Thank you! Your order has been placed.");
//     }
// }

// $(function() {
//     $(".foo").click(eventHandler);
// });

function myFunction() {
    var searchterm = document.getElementById("message").value;

    if (searchterm.includes("vegan")) {
        alert("Watch out, there is dairy!");
    }
    // Hide the Cheesecake options if checkout was successful
    else {
        $(".select").hide()
        $("#radiobuttons").hide()
        $("#notesform").hide()
        alert("Thank you! Your order has been placed.");
    }
}