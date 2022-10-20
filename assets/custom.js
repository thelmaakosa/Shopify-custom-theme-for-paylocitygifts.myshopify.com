let myVar = setInterval(myTimer ,100);

function myTimer() {
    console.log("1");

    if ($("#product_form_7680648970389 .pplr-letter").length){
        show_rep_search();
        clearInterval(myVar);
    }
}

function show_rep_search(){
    $(".pplr-letter input").focusin(function() {
        $(".container.rep-search").css("display", "block");
        $(".rep-overlay").css("display", "block");
    });

    $(".pplr-letter input").focusout(function() {
        localStorage.setItem('rep_name', $(".product-form .pplr-letter input").val());

    });
}
