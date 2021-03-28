
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var bedroom = $('.validate-input input[name="bedroom"]');
    var bathroom = $('.validate-input input[name="bathroom"]');
    var surface = $('.validate-input input[name="surface"]');
    var longitude = $('.validate-input input[name="longitude"]');
    var latitude = $('.validate-input input[name="latitude"]');

    // var email = $('.validate-input input[name="email"]');
    // var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(bedroom).val().trim() == ''){
            showValidate(bedroom);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(bathroom).val().trim() == ''){
            showValidate(bathroom);
            check=false;
        }
        if($(surface).val().trim() == ''){
            showValidate(surface);
            check=false;
        }
        if($(longitude).val().trim() == ''){
            showValidate(longitude);
            check=false;
        }
        if($(latitude).val().trim() == ''){
            showValidate(latitude);
            check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);