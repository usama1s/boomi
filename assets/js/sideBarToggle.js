$("#sidebar-toggler-inp").on("input", function () {
  if ($(this).is(":checked")) {
    $(".sidebar").addClass("open");
    $(".sidebar").removeClass("close");
  } else {
    $(".sidebar").removeClass("open");
    $(".sidebar").addClass("close");
  }
});

$(document).ready(function () {
  if ($("#sidebar-toggler-inp").is(":checked")) {
    $(".sidebar").addClass("open");
    $(".sidebar").removeClass("close");
  } else {
    $(".sidebar").removeClass("open");
    $(".sidebar").addClass("close");
  }

  updateSideBarSize();
});

$(window).resize(function () {
  updateSideBarSize();
});

function updateSideBarSize() {
  var topContentHeight = $(".sidebar-content .top-content").outerHeight();
  var buttonsHeight = $(
    ".sidebar-chat-container .chat-list-title"
  ).outerHeight();
  var suggestedHeight =
    $(window).height() - topContentHeight - 2 * buttonsHeight - 45;



  $(".sidebar-content .chats-list").each(function () {
    var outerHeight = $(this).outerHeight();
    var outerHeight = 0;
    $(this)
      .children(".chat-btn")
      .each(function () {
        outerHeight += $(this).outerHeight();
      });
    outerHeight = outerHeight + 10;
    if (outerHeight < suggestedHeight) {
      $(this).css("height", outerHeight);
    } else {
      $(this).css("height", suggestedHeight);
    }
  });
}