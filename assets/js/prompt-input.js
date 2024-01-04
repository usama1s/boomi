$("#prompt-input").bind("input propertychange", function (event) {
  var sendPromptBtn = $(event.target).siblings(".prompt-send-btn");
  var inputVal = event.target.value;

  if (inputVal.length > 0) {
    sendPromptBtn.addClass("active");
    sendPromptBtn.removeAttr("disabled");
  } else {
    sendPromptBtn.removeClass("active");
    sendPromptBtn.attr("disabled", true);
  }
});

$(".nav-btn-submenu .list a").click((event) => {
  $("#prompt-input").val($(event.target).text()).trigger("input");
  $("#closeAlll").prop("checked", true);
  $(".clear-prompt-btn").removeClass("d-none");
});

$(".clear-prompt-btn").click((event) => {
  setTimeout(function () {
    $("#prompts").prop("checked", true);
  }, 200);

  $("#prompt-input").val("").trigger("input");
  $(".clear-prompt-btn").addClass("d-none");
});


