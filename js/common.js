
function isEmpty(input, id) {

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneRegEx = /^[\s()+-]*([0-9][\s()+-]*){10,15}$/
    //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;



    // if(string.match(phoneRegEx))phoneVal = true;
    if (input === "") {
        $("#" + id).css("border", "2px solid red");
        $("#" + id + "_error").text("This field is required");
        return !1
    } else if (!regex.test(input) && id === "email") {
        $("#" + id).css("border", "2px solid red");
        $("#" + id + "_error").text("Invalid email ID");
        return !1
    }else if (!phoneRegEx.test(input) && id === "mobile") {
        $("#" + id).css("border", "2px solid red");
        $("#" + id + "_error").text("Invalid mobile number");
        return !1
    } else {
        $("#" + id).css("border", "1px solid #dde2ec");
        $("#" + id + "_error").text("")
        if (id === "email") $("#email_error").text("")
        return !0
    }
}

function fSerialize(forms) {
    var values = {};
    $.each($(forms).serializeArray(), function(i, field) {
        values[field.name] = field.value
    });
    return values
}

function startValidation(form = '') {

    var forms = (form === '') ? 'form' : '#'+form;
    var serialize = fSerialize(forms);
    var isTrueArr = {};
    var isTrue = !0;
    $.each(serialize, function(field, value) {
        if ($("#" + field).hasClass("validate"))
            isTrueArr[field] = isEmpty(value, field)
    });
    $.each(isTrueArr, function(field, value) {
        if (value === !1) isTrue = !1
    });

    return isTrue
}
//add loader
function addLoader(){
    $("#loader").addClass("loader");
    $("form").addClass('d-none');
    // $('body').css('background-image', 'url("https://www.meme-arsenal.com/memes/9d36f55b914889174ecff47d4a275719.jpg")');
}
//remove loader
function removeLoader(){
    $("#loader").removeClass("loader");
    $("form").removeClass('d-none');
}