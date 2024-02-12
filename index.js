
$(".registrar").click(function(){
    $(".visor iframe").fadeOut();
    $(".visor iframe").fadeIn();
    $(".visor iframe").attr("src","https://docs.google.com/forms/d/e/1FAIpQLSezEe5Wx__JgBVH9ipn5g2CjfHzgToPsV0QpdMy14RD1qs2Hw/viewform");
    $(".registrar").css({"font-weight": "bold", "text-decoration":"underline"});
    $(".consultar").css({"font-weight": "normal", "text-decoration":"none"});
});

$(".consultar").click(function(){
    $(".visor iframe").fadeOut();
    $(".visor iframe").fadeIn();
    $(".visor iframe").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTeVTIBPMxCzDD4H_DS9OI3YLvTrce9wHlnX_vJaSudr6DioWbsu-odSIlwFQlb-vLgSxNuU6QH6dzr/pubhtml");
    $(".consultar").css({"font-weight": "bold", "text-decoration":"underline"});
    $(".registrar").css({"font-weight": "normal", "text-decoration":"none"});
});

