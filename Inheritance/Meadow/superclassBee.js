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
    class SuperclassBee {
        constructor() {
            this.x = 1175; // Ausgang des Bienenstocks
            this.y = 505;
            this.drawBee();
            this.setRandomStyle();
        }
        //Methode "update" - Biene an neuer Position malen 
        update() {
            this.drawBee();
            this.move();
        }
        //Methode "move" - Biene bewegen
        move() {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            // damit die Bienen wieder erscheinen, sobald sie aus dem Bild geflogen sind.
            for (let i = 0; i < Inheritance.z; i++) {
                if (this.x < 0) { // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
                    this.x = Inheritance.crc2.canvas.width;
                }
                if (this.y < 0) { // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
                    this.y = Inheritance.crc2.canvas.height;
                }
                if (this.y >= Inheritance.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }
        //Methode "drawBee" - Biene malen
        drawBee() {
            // Körper
            Inheritance.crc2.beginPath();
            Inheritance.crc2.strokeStyle = "#000000";
            Inheritance.crc2.fillStyle = "#000000";
            Inheritance.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI); // Body
            Inheritance.crc2.arc(this.x - 10, this.y - 3, 5, 0, 2 * Math.PI); // Kopf
            Inheritance.crc2.fill();
            // Auge
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "white";
            Inheritance.crc2.arc(this.x - 11, this.y - 4, 1.2, 0, 2 * Math.PI);
            Inheritance.crc2.fill();
            // Fühler 1
            Inheritance.crc2.beginPath();
            Inheritance.crc2.moveTo(this.x - 5, this.y);
            Inheritance.crc2.strokeStyle = "#000000";
            Inheritance.crc2.lineWidth = 0.9;
            Inheritance.crc2.lineTo(this.x - 10, this.y - 13);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            // Fühler 2
            Inheritance.crc2.beginPath();
            Inheritance.crc2.moveTo(this.x - 3, this.y - 5);
            Inheritance.crc2.strokeStyle = "#000000";
            Inheritance.crc2.lineWidth = 0.5;
            Inheritance.crc2.lineTo(this.x - 15, this.y - 12);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            if (this.sting == true) {
                Inheritance.crc2.moveTo(this.x, this.y);
                Inheritance.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else {
                console.log();
            }
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            //Streifen
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = this.color;
            Inheritance.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            Inheritance.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            Inheritance.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            //Flügel
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#aFEEEE";
            Inheritance.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            Inheritance.crc2.moveTo(this.x, this.y);
            Inheritance.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
        }
        //Methode "setRandomStyle" - Zufällige Farbe und (k)ein Stachel 
        setRandomStyle() {
            let randomColor = "hsl(" + Math.random() * 60 + ", 100%, 50%)"; // Zwischen gelb und rot.
            let randomSting = Boolean(Math.round(Math.random()));
            this.color = randomColor;
            this.sting = randomSting;
        }
    } // close class
    Inheritance.SuperclassBee = SuperclassBee;
})(Inheritance || (Inheritance = {})); // close namespace
//# sourceMappingURL=superclassBee.js.map