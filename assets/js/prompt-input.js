$("#prompt-input").bind("input propertychange", function (event) {
  var sendPromptBtn = $(event.target).siblings(".prompt-send-btn");
  var newChatBtn = $(".new-chat-btn");
  var inputVal = event.target.value;

  if (inputVal.length > 0) {
    sendPromptBtn.addClass("active");
    sendPromptBtn.removeAttr("disabled");
    newChatBtn.addClass("active");
    newChatBtn.removeAttr("disabled");
    $(".clear-prompt-btn").removeClass("d-none");
  } else {
    sendPromptBtn.removeClass("active");
    sendPromptBtn.attr("disabled", true);
    newChatBtn.removeClass("active");
    newChatBtn.attr("disabled", true);
    $(".clear-prompt-btn").addClass("d-none");
  }
});

$(".nav-btn-submenu .list a").click((event) => {
  $("#prompt-input").val($(event.target).text()).trigger("input");
  $("#closeAlll").prop("checked", true);
});

$(".clear-prompt-btn").click((event) => {
  $("#prompt-input").val("").trigger("input");

  if ($(".select-prompt").length>0) {
    $(".select-prompt").find(".big-btn").removeClass("active");
  }

});



$("#editChatSec").click((event) => {
  $(".chat-section").toggleClass("edit-sec-open");
})
