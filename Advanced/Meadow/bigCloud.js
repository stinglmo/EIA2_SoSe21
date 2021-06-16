"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced;
(function (Advanced) {
    class BigCloud extends Advanced.SuperclassCloud {
        // x: number;
        // y: number;
        // speed: number;
        constructor(x, y) {
            super(x, y);
            this.moveForward();
            this.drawCloud1();
        }
        // Methode drawCloud 1
        drawCloud1() {
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#FFFFFF";
            Advanced.crc2.arc(this.x + 10, this.y + 30, 25, 0, 2 * Math.PI);
            Advanced.crc2.arc(this.x + 50, this.y + 25, 40, 0, 2 * Math.PI);
            Advanced.crc2.arc(this.x + 90, this.y + 20, 35, 0, 2 * Math.PI);
            Advanced.crc2.arc(this.x + 130, this.y + 20, 25, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            // Klick beim Vogel
            Advanced.crc2.font = "18px Helvetica";
            Advanced.crc2.fillStyle = "#3B170B";
            Advanced.crc2.fillText("click", 1066, 333);
        }
        moveForward() {
            this.x += this.speed * (+0.04); // - nach links und + nach rechts           
        }
    } // close class
    Advanced.BigCloud = BigCloud;
})(Advanced || (Advanced = {})); // close namespace
//# sourceMappingURL=bigCloud.js.map