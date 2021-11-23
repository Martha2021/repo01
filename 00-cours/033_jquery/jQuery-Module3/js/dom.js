$(document).ready(function(){

/*
    /// Intéragir avec du contenu
    // text()
    var txt = $( "div.black" ).text()
    var txt = $("#firstDiv").text()
    var txt = $("div.green").text()
    var txt = $("div.blue").text(); // empty
    $("div.green").text("Ce div a pour classe CSS: green")

    // html()
    var html = $("div.black").html();
    $("div.black").html("<span>Devise jQuery</span>")
                
    // val()
    var value = $("input[type=button]").val();
    var value = $("select option.red").filter(":selected").val();
    var value = $("select.colorz option:selected").val();
    var value = $("input:checkbox:checked").val();
    $("input[type=button]").val("Envoyer")

    var txt = $("select option.blue").filter(":selected").text()
    var value = $("select option.blue").filter(":selected").val()

    // attr()
    $("input:checkbox:checked").attr("disabled", "disabled");
    $("#ckeckbox_3").removeAttr("disabled");
    $("#ckeckbox_3").attr("checked", "checked");


// Insert à l'intérieur en première position
    // prepend()
    $("div.black").prepend("<span>Devise jQuery</span>")
    $("div.green").prepend("<div class='green'>div2</div>")
    $(".green").prepend("<div class='green'>div2</div>")

    // prependTo()
    $("<span>Devise jQuery</span>").prependTo("div.black")
    $("<div class='green'>div2</div>").prependTo("div.green")
    $("<div class='green'>div2</div>").prependTo(".green")


// Insert à l'intérieur en dernière position
    // append() 
    $("div.black").append("<span>Devise jQuery</span>")
    $("div.green").append("<div class='green'>div2</div>")

    // appendTo()
    $("<span>Devise jQuery</span>").appendTo("div.black")
    $("<div class='green'>div2</div>").appendTo("div.green")


// Insert juste après de l'élément ciblé à l'extérieur au même niveau d'arborescence
    // after()
    $("div.black").after("<span>Devise jQuery</span>")
    $("div.green").after(" Ce texte est inséré après div.green via la fonction After")

// Insert juste avant l'élément ciblé à l'extérieur au même niveau d'arborescence
    // before()
    $("div.black").before("<span>Devise jQuery</span>")
    $("div.green").before(" Ce texte est inséré avant div.green via la fonction Before")


// enveloppe un div.black autour de chaque p.paragraphs
    // wrap
    $("p.paragraphs").wrap("<div class='black'>div de classe black</div>");

// regroupe tous les p.paragraphs et les enveloppe d'un div.black
    // wrapAll
    $("p.paragraphs").wrapAll("<div class='black'>div de classe black</div>");

// Je supprime tous les conteneurs des p.paragraphs
$("p.paragraphs").unwrap()

// J'ai remplacé div.green et tout son contenu par #firstDiv que j'ai déplacé
    $("#firstDiv").replaceAll("div.green")

// J'ai remplacé tous les paragraphes par <h2>Hello world!</h2>
    // replaceAll et replaceWith
    $("<h2>Hello world!</h2>").replaceAll("p") // renverra tous les h2
    $("p").replaceWith("<h2>Hello world!</h2>") // renverra tous les p


    // remove
    $("p.paragraphs").remove()

    // empty
    $("div.black").empty()

    // data
    $("p").data("user", { id:24, nom: "stéphane"});
    var user = $("p").data("user"); 
    console.log(user);
    // remove data
    $("p").removeData("user"); 
    var user = $("p").data("user"); 
    console.log("user: " + user);

    // css
    $("p.paragraphs").css("background-color", "yellow")
    $("p.paragraphs").css("font-weight", "bold")
    // removeClass et addClass
    $("p").removeClass("paragraphs")
    $("p").addClass("orangered")
    $("p").removeClass("orangered")
    $("p").toggleClass("blue")

    var hasBlue = $("div").hasClass("firstDiv");

    // width et height
    $("div.black").width("200")
    $("div.black").height("100")
    var divWidth = $("div.black").width();
    var divHeight = $("div.black").height();

*/
            });