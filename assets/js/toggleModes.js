$("#light-dark-mode").on("input", function() {
    
    if ($(this).is(":checked")) {
        localStorage.setItem("dark-mode", true);
        $("body").addClass("mode-dark");
    }else{
        localStorage.setItem("dark-mode", false);
        $("body").removeClass("mode-dark");
    }
 });

 $(document).ready(function() {
    var darkMode = localStorage.getItem("dark-mode");
    if (darkMode!==null) {
        if (darkMode == "true") {
            $( "#light-dark-mode").prop("checked", true ).trigger("input"); 
        }else{
            $( "#light-dark-mode").prop("checked", false ).trigger("input");
        }
        
    }else{
        if ($("#light-dark-mode").is(":checked")) {
            $("body").addClass("mode-dark");
        }else{
            $("body").removeClass("mode-dark");
        }
    }
    
});