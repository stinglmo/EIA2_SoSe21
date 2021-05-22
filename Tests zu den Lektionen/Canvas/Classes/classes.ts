

namespace testClasses {

    window.addEventListener("load", init);

    function init(): void {
    // statt interface --> class (eine Klasse von Objekten, wenn man einmal die Klasse hat, kann man beliebig viele Objekte damit erschaffen! 
    // (Bauplan des Architekten)
    class Vector {
        x: number; // Eigenschaften und Werte
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        // Es folgen die Fähigkeiten:

        // Methode set --> Der Vektor soll sich verändern lassen (es ist also eine Fähigkeit) // Wenn ich die Methode set vor dem Aufruf von scale schreibe, bekomme ich eine Fehlermeldung: scale nicht gefunden!
        set(_x: number, _y: number): void {
            this.x = _x; // Dem Wert der Eigenschaft x wird der Parameter _x zugewiesen.
            this.y = _y;
        }
    
        // Methode scale (braucht kein function mehr) --> Vektor wird skaliert.
        scale(_factor: number): void {
            this.x *= _factor; // this bezieht sich auf den Vektor --> Sprich der Wert x wird mit dem Parameter _factor multipliziert
            this.y *= _factor; // um die Eigenschaften zu identifizieren --> das Objekt, welches die Methode gerade ausführt
        }
    
        // Methode add --> Durch Addition mit einem anderen Vektor --> resultierender Vektor
        add(_addend: Vector): void {
            this.x += _addend.x; // Durch Addition entsteht ein neuer Vektor
            this.y += _addend.y;
        }

        

        
        
    }

    debugger;

    let v1: Vector = new Vector(2, 6); // sobald ich einen constructor habe, kann ich dem Vektor Werte mitgeben
    v1.set(2, 5); // Gebe hier bereits zwei Parameter mit
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

    // Bedeutung this: Bezieht sich auf den Vektor

    // Wenn ich dann den Eigenschaften x und y den Wert 0 mitgebe, kommt statt
    // x: NaN
    // y: NaN
    // -->
    // x: 0
    // y: 0
    
} 
}