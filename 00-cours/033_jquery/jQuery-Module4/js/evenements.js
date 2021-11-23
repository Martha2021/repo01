$(document).ready(function(){

    /*$("#titreprincipal").click(function(){
        $("#firstDiv").hide();
    });

    $("div.green").dblclick(function(){
        $("#firstDiv").show();
    });

    $("#h3_intro").mouseover(function(){
        $("p.paragraphs").hide();
    });

    $("#h3_intro").mouseout(function(){
        $("p.paragraphs").show();
    });

    $("#h3_intro").hover(
        function(){
            $("p.paragraphs").hide();
        }, 
        function(){
            $("p.paragraphs").show();
});

    $("#form_name").keydown(function(){
        alert("keydown");
    });

    $("#btnSubmit").click(function(){
        alert("submit");
    });

    $("[type=submit]").click(function(){
        $("#form1").submit();
    });

    $(".target").change(function(){
        var selectedText = $(".target option:selected").text();
        alert(selectedText);
    });

    $("#txtArea").focusout(function(){
        alert("focus out!");
    });

    $("#txtArea").select(function(){
        alert("select !!!");
    });

    $(window).resize(function(){
        console.log("Je resize la fenêtre!!!");
    });

    $("#scrollTarget").scroll(function(){
        console.log("je scroll le texte!!!");
    });

    $("#ckeckbox_4").click(function(){
        if($(this).is(":checked")){
            alert("checked!!!");
        }
    });

    $("#spanTxt").on("mouseover", function(){
        console.log($(this).text());
    });

    $("#myFirstFormButton").click(function(){
        $("#spanTxt").off("mouseover");
    });

    $("#spanTxt").one("mouseover", function(){
        console.log($(this).text());
    });*/

    $("#spanTxt").on("mouseover", function(){
        console.log($(this).text());
    });

    $("#myFirstFormButton").click(function(){
        $("#spanTxt").triggerHandler("mouseover");
        console.log("Je suis attaché au click de spanTXT via la méthode trigger");
    });
    

});