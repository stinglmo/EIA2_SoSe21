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
    class Cloud {
        // Methode drawCloud 1
        drawCloud1() {
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "#FFFFFF";
            TestM.crc2.arc(this.x + 10, this.y + 30, 25, 0, 2 * Math.PI);
            TestM.crc2.arc(this.x + 50, this.y + 25, 40, 0, 2 * Math.PI);
            TestM.crc2.arc(this.x + 90, this.y + 20, 35, 0, 2 * Math.PI);
            TestM.crc2.arc(this.x + 130, this.y + 20, 25, 0, 2 * Math.PI);
            TestM.crc2.closePath();
            TestM.crc2.fill();
            TestM.crc2.font = "18px Helvetica";
            TestM.crc2.fillStyle = "#3B170B";
            TestM.crc2.fillText("click", 1066, 333);
        }
        // Methode drawCloud 2
        drawCloud2() {
            TestM.crc2.beginPath();
            TestM.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            TestM.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            TestM.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            TestM.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            TestM.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            TestM.crc2.closePath();
            TestM.crc2.fillStyle = "#FFFFFF";
            TestM.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * (+0.5); // - nach links und + nach rechts           
        }
    } // close class
    TestM.Cloud = Cloud;
})(TestM || (TestM = {})); // close namespace
//# sourceMappingURL=cloud.js.map