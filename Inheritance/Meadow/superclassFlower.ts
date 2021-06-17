/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/

namespace Inheritance {

    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    // Abstrakt wegen draw
    export abstract class SuperclassFlower {

        x: number;
        y: number;
        public nectarLevel: number;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
        }

        // Methode draw
        abstract draw(): void;



    } // close class

} // close namespace