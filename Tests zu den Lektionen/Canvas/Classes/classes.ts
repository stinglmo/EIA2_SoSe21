

namespace testClasses {

    window.addEventListener("load", init);

    function init(): void {
    // statt interface --> class
    class Vector {
        x: number = 4;
        y: number = 4;
    
        // Methode scale (braucht kein function mehr) --> Vektor wird skaliert.
        scale(_factor: number): void {
            this.x *= _factor; // this bezieht sich auf den Vektor --> Sprich der Wert x wird mit dem Parameter _factor multipliziert
            this.y *= _factor;
        }
    
        // Methode add --> Durch Addition mit einem anderen Vektor --> resultierender Vektor
        add(_addend: Vector): void {
            this.x += _addend.x; // Durch Addition entsteht ein neuer Vektor
            this.y += _addend.y;
        }

        // Methode set --> // Wenn ich die Methode set vor dem Aufruf von scale schreibe, bekomme ich eine Fehlermeldung: scale nicht gefunden!
        set(_x: number, _y: number): void {
        this.x = _x; // Dem Wert der Eigenschaft x wird der Parameter _x zugewiesen.
        this.y = _y;

        }
        
    }

    debugger;

    let v1: Vector = new Vector();
    v1.scale(2); 
    console.log(v1); 

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
}