$("#searchChatModalInp").on("focusout", (event) => {
    $(".search-results").hide();
});

$("#searchChatModalInp").on("focus", (event) => {
    $(".search-results").show();
});

$(".search-results").hide();