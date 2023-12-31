$("#light-dark-mode").on("input", function() {
    if ($(this).is(":checked")) {
        $("body").addClass("mode-dark");
    }else{
        $("body").removeClass("mode-dark");
    }
 });