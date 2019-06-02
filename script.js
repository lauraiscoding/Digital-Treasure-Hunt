$(".buttonk").click(function(){
    $(".hello").fadeIn();
    $(".hello").css("color","blue");
});
$(".hello").hover(function(){
    $("#cluethree").show();
});
$("#ship").dblclick(function(){
    $("#ff").attr("src","https://image.freepik.com/free-icon/curved-arrow-pointing-down_318-35580.jpg");
    });
$("#ff").hover(function(){
    $(".cluefour").fadeIn();
});
$("#answer").mouseenter(function(){
    $("#no").fadeOut();
    $("#nope").hide();
    $("#hypnotic").fadeToggle();
});
$("#hypnotic").mouseleave(function(){
    $("body").css("background","url(https://em.wattpad.com/efc66232916cb95b6e705681d8d24d3e7bf40b2b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f417355514a655032657234454b513d3d2d3633363838373236392e313535393031313064336437323831633639363136393730303838332e676966?s=fit&w=720&h=720");
    $(".stuff").slideUp();
    $("h1").text(" Ayeee, enjoy your treasure! But did you find the hidden message?");
    $("h1").css("color","#66FF66");
});









$(".cluefour").hide();
$("#hypnotic").fadeOut();
$("#cluethree").hide();
$(".hello").hide();