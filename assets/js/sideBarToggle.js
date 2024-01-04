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
  var sidebarContent = $(".sidebar-content>div>div");
  var totalHeight = sidebarContent.outerHeight();
  $(".recent-chats-list").css("height", $(window).height() - totalHeight - 20);
}

$(".recent-chat-btn .options-btn").mouseover(function () {
  $(".recent-chat-btn .options-btn").removeClass("hovered");
  $(this).addClass("hovered");
});

$(".recent-chat-btn .options-btn").click((event) => {
  $(".recent-chat-btn .options-btn").removeClass("hovered");
});
