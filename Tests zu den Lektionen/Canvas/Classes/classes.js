"use strict";
var testClasses;
(function (testClasses) {
    window.addEventListener("load", init);
    function init() {
        // statt interface --> class
        class Vector {
            constructor() {
                this.x = 4;
                this.y = 4;
            }
            // Methode scale (braucht kein function mehr) --> Vektor wird skaliert.
            scale(_factor) {
                this.x *= _factor; // this bezieht sich auf den Vektor --> Sprich der Wert x wird mit dem Parameter _factor multipliziert
                this.y *= _factor;
            }
            // Methode add --> Durch Addition mit einem anderen Vektor --> resultierender Vektor
            add(_addend) {
                this.x += _addend.x; // Durch Addition entsteht ein neuer Vektor
                this.y += _addend.y;
            }
            // Methode set --> 
            set(_x, _y) {
                this.x = _x; // Dem Wert der Eigenschaft x wird mit dem Parameter _x addiert.
                this.y = _y;
            }
        }
        debugger;
        let v1 = new Vector();
        v1.scale(2);
        console.log(v1); //Wenn ich v1 vor dem Aufruf von scale ausführen lasse, 
        // Konsolenausgabe:
        // Vector {x: NaN, y: NaN}
        // x: NaN
        // y: NaN
        // __proto__:
        // add: ƒ add(_addend)
        // constructor: class Vector
        // scale: ƒ scale(_factor)
        // __proto__: Object
        // Wenn ich Methode set hinzufügen kommt noch die Zeile
        // set: ƒ set(_x, _y)    
        // dazu!
        // Bedeutung this:
        // Wenn ich dann den Eigenschaften x und y den Wert 0 mitgebe, kommt statt
        // x: NaN
        // y: NaN
        // -->
        // x: 0
        // y: 0
    }
})(testClasses || (testClasses = {}));
//# sourceMappingURL=classes.js.map