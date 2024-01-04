$("#prompts, #attributes, #closeAlll").change((event) => {
  var subMenu = $(event.target).siblings(".nav-btn-submenu");
  if (subMenu.length > 0) {
    var height = $(subMenu).children("div").innerHeight();

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
