$("#prompts-inp, #data-inp, #coseAllSubmenus").change((event) => {

  var label = ($('label[for="'+ $(event.target).attr("id") +'"]'));
  var subMenu = $("#" + $(event.target).attr("data-menu"));

  $(".nav-btn").removeClass("active");
  $(label).addClass("active");
  $(".nav-btn-submenu").removeClass("active");
  $(subMenu).addClass("active");

  if (subMenu.length > 0) {
    var totalHeight = 0;
    $(subMenu)
      .children("div")
      .children()
      .each(function () {
        totalHeight = totalHeight + $(this).outerHeight(true);
      });
    $(subMenu).css("height", totalHeight + 40);
  }
});

$(".promptFilter .dropdown-menu").click(function (event) {
  event.stopPropagation();
});
