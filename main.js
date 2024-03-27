$(document).ready(function() {
    $('header button').click(function() {
        alert("expandir formulário")
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();
    })
})