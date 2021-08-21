$(function () {
    $(".click-toggle").on("click",function () {
    let myValue =$(this).attr("id");
        $(".hiddable > div").hide();
        $("div[data-name=" + myValue + "]").show();
        $(".click-toggle").removeClass("active");
        $(this).addClass("active");
    })
});