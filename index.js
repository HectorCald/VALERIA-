
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
    $(".visor iframe").attr("src", "https://docs.google.com/spreadsheets/d/1P7h0acmu_6IL6sa5wJN4FCZqQrTqZYd6w2pSszHUago/edit?usp=sharing");
    $(".consultar").css({"font-weight": "bold", "text-decoration":"underline"});
    $(".registrar").css({"font-weight": "normal", "text-decoration":"none"});
});
$("h1").click(function(){
    location.reload();
})

