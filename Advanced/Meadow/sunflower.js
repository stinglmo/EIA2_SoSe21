"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 17.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced;
(function (Advanced) {
    class Sunflower extends Advanced.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            // console.log("Create Tulpe");
            this.draw();
        }
        //Methode drawSunflower
        // draw vererbt von der Superklasse
        draw() {
            //Stiel
            Advanced.crc2.beginPath();
            Advanced.crc2.strokeStyle = "#556B2F";
            Advanced.crc2.fillStyle = "#556B2F";
            Advanced.crc2.fillRect(this.x + 68, this.y + 30, 3, 55);
            //Blätter
            Advanced.crc2.lineTo(this.x + 70, this.y + 50); // am Stiel direkt
            Advanced.crc2.lineTo(this.x + 60, this.y + 50);
            Advanced.crc2.lineTo(this.x + 70, this.y + 70);
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            //Blüten
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#FFD700";
            Advanced.crc2.moveTo(this.x + 62, this.y + 24);
            Advanced.crc2.lineTo(this.x + 50, this.y + 15);
            Advanced.crc2.lineTo(this.x + 60, this.y + 28);
            Advanced.crc2.lineTo(this.x + 45, this.y + 25);
            Advanced.crc2.lineTo(this.x + 58, this.y + 33);
            Advanced.crc2.lineTo(this.x + 48, this.y + 40);
            Advanced.crc2.lineTo(this.x + 61, this.y + 37);
            Advanced.crc2.lineTo(this.x + 55, this.y + 50);
            Advanced.crc2.lineTo(this.x + 65, this.y + 38);
            Advanced.crc2.lineTo(this.x + 66, this.y + 52);
            Advanced.crc2.lineTo(this.x + 70, this.y + 39);
            Advanced.crc2.lineTo(this.x + 76, this.y + 50);
            Advanced.crc2.lineTo(this.x + 75, this.y + 37);
            Advanced.crc2.lineTo(this.x + 85, this.y + 45);
            Advanced.crc2.lineTo(this.x + 78, this.y + 33);
            Advanced.crc2.lineTo(this.x + 90, this.y + 36);
            Advanced.crc2.lineTo(this.x + 79, this.y + 28);
            Advanced.crc2.lineTo(this.x + 92, this.y + 24);
            Advanced.crc2.lineTo(this.x + 78, this.y + 23);
            Advanced.crc2.lineTo(this.x + 88, this.y + 14);
            Advanced.crc2.lineTo(this.x + 75, this.y + 20);
            Advanced.crc2.lineTo(this.x + 78, this.y + 8);
            Advanced.crc2.lineTo(this.x + 70, this.y + 20);
            Advanced.crc2.lineTo(this.x + 69, this.y + 5);
            Advanced.crc2.lineTo(this.x + 65, this.y + 20);
            Advanced.crc2.lineTo(this.x + 58, this.y + 8);
            Advanced.crc2.lineTo(this.x + 62, this.y + 24);
            Advanced.crc2.fill();
            //Blütenmitte
            Advanced.crc2.beginPath();
            // Nectarlevel
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 1) {
                Advanced.crc2.fillStyle = "#8B4500ff";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9) {
                Advanced.crc2.fillStyle = "#8B4599dd";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8) {
                Advanced.crc2.fillStyle = "#8B4599bb";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7) {
                Advanced.crc2.fillStyle = "#8B459999";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6) {
                Advanced.crc2.fillStyle = "#8B459977";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5) {
                Advanced.crc2.fillStyle = "#8B459955";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4) {
                Advanced.crc2.fillStyle = "#8B459933";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3) {
                Advanced.crc2.fillStyle = "#8B459922";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2) {
                Advanced.crc2.fillStyle = "#8B459911";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1) {
                Advanced.crc2.fillStyle = "#8B459900";
            }
            Advanced.crc2.arc(this.x + 70, this.y + 30, 5, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
        }
    }
    Advanced.Sunflower = Sunflower;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=sunflower.js.map