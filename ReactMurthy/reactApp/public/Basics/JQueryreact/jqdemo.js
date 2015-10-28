// Enable and disable button using jquery 

// Initially disable the button
$("button").prop("disabled", true);

// When the value of the text area changes...
$("textarea").on("input", function () {
    // If there's at least one character...
    if ($(this).val().length > 0) {
        // Enable the button.
        $("button").prop("disabled", false);
    } else {
        // Else, disable the button.
        $("button").prop("disabled", true);
    }
});

//-----------------------------------------

//char count in jquery

$("button").prop("disabled", true);

$("textarea").on("input", function () {
    $("span").text(140 - $(this).val().length);

    if ($(this).val().length > 0) {
        $("button").prop("disabled", false);
    } else {
        $("button").prop("disabled", true);
    }
});

// adding photo in jquery
$("textarea").on("input", function() {
    ...
});

$(".js-add-photo-button").on("click", function() {
    if ($(this).hasClass("is-on")) {
        $(this)
          .removeClass("is-on")
          .text("Add Photo");
    } else {
        $(this)
          .addClass("is-on")
          .text("✓ Photo Added");
    }
});
