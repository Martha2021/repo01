/* Modules */

var Foobar = Foobar || {};
Foobar.Toto = (function () {
    var me = "i'm visible";
    var visible = function () { return me };
    var notVisible = function () {};
    
    return {
        visible: visible
    };
})(Foobar.Toto || {});

alert(Foobar.Toto.visible());
// Foobar.Toto.notVisible(); // Erreur

