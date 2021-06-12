"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Inheritance;
(function (Inheritance) {
    class HoneyBee extends Inheritance.SuperclassBee {
        constructor(_x, _y) {
            super(); // Konstruktionen für abgeleitete Klassen müssen einen Aufruf super() enthalten!
            // console.log("Create Honeybee");
            // this.setRandomStyle();
            this.speed = 0.005;
            this.setRandomFlowerPosition();
            this.setStartPosition();
        }
        // Methode "setStartPosition"
        setStartPosition() {
            this.x = 1175; // Ausgang des Bienenstocks
            this.y = 505;
        }
        // Zufällige Position x,y aus dem Blumenarray 
        setRandomFlowerPosition() {
            let i = Math.round(Math.random() * (Inheritance.allFlowers.length - 1));
            this.xTarget = Inheritance.allFlowers[i].x;
            this.yTarget = Inheritance.allFlowers[i].y;
            console.log(Inheritance.allFlowers[i].constructor.name);
        }
        // Honigbiene zu dieser Position x,y bewegen 
        move() {
            let xDiff = this.xTarget - this.x + 5; // Blumenmitte
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
    Inheritance.HoneyBee = HoneyBee;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=honeyBee.js.map