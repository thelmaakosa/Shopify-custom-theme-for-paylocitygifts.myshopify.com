// Rep search table
    let myVar = setInterval(myTimer ,100);

    function myTimer() {
        console.log("1");

        if ($("#shopify-section-product-template .product-form .pplr-letter").length && $("#shopify-section-product-template .product-form .pplr-recipient-email").length){
            show_rep_search();
            email_validation();
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

    function email_validation(){
        $(".pplr-recipient-email input").focusin(function() {
            $(".pplr-recipient-email").removeClass("pplr_red_wrapper")
            $(".pplr-recipient-email small.email-error").remove();
            $("#shopify-section-product-template .product-form input[type='submit']").removeAttr("disabled");
        });

        $(".pplr-recipient-email input").focusout(function() {
            if (IsEmail($(this).val()) == false ){
                $(".pplr-recipient-email").addClass("pplr_red_wrapper");
                $(".pplr-recipient-email").append("<small class='email-error' style='color:red;'>Email is not valid</small>");
                $("#shopify-section-product-template .product-form input[type='submit']").attr("disabled", "true");
            }
        })
    }

    function IsEmail(email) {
        var regex =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }