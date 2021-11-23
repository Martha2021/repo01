$(document).ready(function(){

var test = $("ul.blue").closest();
console.log(test);

/*
    // par id
    $("#titreprincipal")
                
    // par classe css
    $(".green")
    $(".blue.paragraphs")
    $( "div, span, p.paragraphs" )

    // par tag html
    $("h1")
    $("h3")
    $("div")
    $("p")
    $("*")

    // par attribut html
    $("[href]")
    $("a[target]")
    $("a[target='_blank']")

    $("label[name^='lb']")
    $("label[name$='bl']")
    $("label[name*='b']")
    $("[href][target]")

    // sélecteur ascendant
    // récupère l'élément supérieur
    $("li").parent() // ul
    $("li").parents() // ul, div, body, html

    // sélecteur descendants
    // récupère le ou les éléments inférieurs
    $("ul").children() 
    // tous les li et les a
    $("ul.black > li")
    $("form input")
    $("ul > li") // tous les descendants directs
    $("ul li a") // une hierarchie de descendants


    $("h1").siblings() // moyen!!
    $("h1").next()

    // filtres
    $("div > p").filter("#paraph_div_1")
    $("p").filter(".paragraphs")

    //var listeParaphs = $("p.paragraphs");
    //listeParaphs.hide();
    // console
    // $("p.paragraphs").show()

    $("ul li").first() 
    $("ul li.black").first()
    $("ul li:first")

    $("ul li:last")
    $("ul li").last()
    $("ul li").filter(":last")

    $("ul:has(li)")
    $("ul:has(a)")
    $("div:has(span)")

    $("div").not(".green")
    $("div").filter(":not('ul')")

    $("ul li").eq(0)
    $("ul li").eq(1)
    $("div").eq(1)
    $("p.paragraphs").eq(1)

    $("p:contains('jQuery')")

    // Sélecteurs Formulaires
    $(":input") 
    $("form > *") // premier niveau d'enfant uniquement
    $("form > *")

    $(":button")
    $("form input:checkbox")
    $("input:checked")
    $("input[type=checkbox]")
    $("input:disabled")
    $("input:enabled")
    $("input:file")
    $(":password")
    $("[type=password]") // meilleures performances

    $("form input:radio")
    $(":radio")
    $("[type=radio]") // meilleures performances

    $("select option:selected")
    $("select option").filter(":selected") // meilleures performances

    $("input:text")
    $("[type=text]") // meilleures performances

    $( "input:submit" )
    $("[type=submit]") // meilleures performances

*/
            });