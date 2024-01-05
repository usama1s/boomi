$(".select-prompt button").click((event) => {
  var selectPrompt = $(event.target).closest(".select-prompt");

  var currentText = $("#prompt-input").val();
  var selectedText = $(event.target).text();
  var newText = [];
  if ($(selectPrompt).hasClass("multiselect")) {
    $(event.target).closest(".big-btn").toggleClass("active");
    $(selectPrompt).find(".big-btn.active p").each(function(){
        newText += $(this).text() + " ";
      });
  } else {
    newText = selectedText;
    selectPrompt.find(".big-btn").removeClass("active");
    $(event.target).closest(".big-btn").addClass("active");
  }
  $("#prompt-input").val(newText).trigger("input");
});
