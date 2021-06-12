"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 22.05.21
Quellen: W3School und MDN
*/
var TestM;
(function (TestM) {
    class SuperclassBee {
        constructor(_x, _y) {
            this.xmin = -2.5;
            this.xmax = 1.5;
            this.ymin = -0.5;
            this.ymax = 0.5;
            this.setRandomSpeed();
            this.setRandomSize();
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        //Methode "update" - Biene an neuer Position malen 
        update() {
            this.drawBee();
            this.move();
        }
        //Methode "drawBee" - Biene malen
        drawBee() {
            // Körper
            TestM.crc2.beginPath();
            TestM.crc2.strokeStyle = "#000000";
            TestM.crc2.fillStyle = "#000000";
            TestM.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI); // Body
            TestM.crc2.arc(this.x - 10, this.y - 3, 5, 0, 2 * Math.PI); // Kopf
            TestM.crc2.fill();
            // Auge
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "white";
            TestM.crc2.arc(this.x - 11, this.y - 4, 1.2, 0, 2 * Math.PI);
            TestM.crc2.fill();
            // Fühler 1
            TestM.crc2.beginPath();
            TestM.crc2.moveTo(this.x - 5, this.y);
            TestM.crc2.strokeStyle = "#000000";
            TestM.crc2.lineWidth = 0.9;
            TestM.crc2.lineTo(this.x - 10, this.y - 13);
            TestM.crc2.closePath();
            TestM.crc2.stroke();
            // Fühler 2
            TestM.crc2.beginPath();
            TestM.crc2.moveTo(this.x - 3, this.y - 5);
            TestM.crc2.strokeStyle = "#000000";
            TestM.crc2.lineWidth = 0.5;
            TestM.crc2.lineTo(this.x - 15, this.y - 12);
            TestM.crc2.closePath();
            TestM.crc2.stroke();
            if (this.sting == true) {
                TestM.crc2.moveTo(this.x, this.y);
                TestM.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else {
                console.log();
            }
            TestM.crc2.stroke();
            TestM.crc2.fill();
            //Streifen
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = this.color;
            TestM.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            TestM.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            TestM.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            TestM.crc2.stroke();
            TestM.crc2.fill();
            //Flügel
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "#aFEEEE";
            TestM.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            TestM.crc2.moveTo(this.x, this.y);
            TestM.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            TestM.crc2.closePath();
            TestM.crc2.fill();
        }
        //Methode "move" - Biene bewegen
        move() {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            // damit die Bienen wieder erscheinen, sobald sie aus dem Bild geflogen sind.
            for (let i = 0; i < TestM.z; i++) {
                if (this.x < 0) { // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
                    this.x = TestM.crc2.canvas.width;
                }
                if (this.y < 0) { // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
                    this.y = TestM.crc2.canvas.height;
                }
                if (this.y >= TestM.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }
        //Methode "setRandomStyle" - Zufällige Farbe und (k)ein Stachel 
        setRandomStyle() {
            let randomColor = "hsl(" + Math.random() * 60 + ", 100%, 50%)"; // Zwischen gelb und rot.
            let randomSting = Boolean(Math.round(Math.random()));
            this.color = randomColor;
            this.sting = randomSting;
        }
        draw() {
            //abstract
        }
        setRandomSize() {
            this.size = Math.random() * 20 + 10; //Größe
        }
        setRandomSpeed() {
            this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        }
    } // close class
    TestM.SuperclassBee = SuperclassBee;
})(TestM || (TestM = {})); // close namespace
//# sourceMappingURL=superclassBee.js.map