"use strict";
var TestM;
(function (TestM) {
    class Tulip extends TestM.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Tulip");
            this.drawTulip();
        }
        //Methode "drawTulip"   
        drawTulip() {
            //Stiel
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "#556B2F";
            TestM.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            TestM.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            TestM.crc2.fill();
            //Blüte
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "#FF1493";
            TestM.crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            TestM.crc2.moveTo(this.x, this.y + 22);
            TestM.crc2.lineTo(this.x, this.y + 7);
            TestM.crc2.lineTo(this.x + 6, this.y + 14);
            TestM.crc2.lineTo(this.x + 10.5, this.y + 4);
            TestM.crc2.lineTo(this.x + 15, this.y + 14);
            TestM.crc2.lineTo(this.x + 20, this.y + 7);
            TestM.crc2.lineTo(this.x + 20, this.y + 21);
            TestM.crc2.closePath();
            TestM.crc2.fill();
        }
    }
    TestM.Tulip = Tulip;
})(TestM || (TestM = {}));
//# sourceMappingURL=tulip.js.map