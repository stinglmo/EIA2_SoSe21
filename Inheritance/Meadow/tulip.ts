/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Inheritance {

    export class Tulip extends SuperclassFlower {

        constructor(_x: number, _y: number) {

            super(_x, _y);
            console.log("Create Tulip");
            this.draw();
        }

        //Methode "drawTulip"   
        draw(): void {

            //Stiel
            crc2.beginPath();
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(this.x + 9, this.y + 28, 3, 40);

            //Blatt
            crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);

            crc2.fill();

            //Blüte
            crc2.beginPath();

            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 1 ) {
                crc2.fillStyle = "#FF1493ff";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9 ) {
                crc2.fillStyle = "#FF1493ee";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8 ) {
                crc2.fillStyle = "#FF1493dd";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7 ) {
                crc2.fillStyle = "#FF1493cc";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6 ) {
                crc2.fillStyle = "#FF1493bb";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5 ) {
                crc2.fillStyle = "#FF1493aa";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4 ) {
                crc2.fillStyle = "#FF149399";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3 ) {
                crc2.fillStyle = "#FF149388";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2 ) {
                crc2.fillStyle = "#FF149377";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1 ) {
                crc2.fillStyle = "#FF149366";
            }

            crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            crc2.moveTo(this.x, this.y + 22);
            crc2.lineTo(this.x, this.y + 7);
            crc2.lineTo(this.x + 6, this.y + 14);
            crc2.lineTo(this.x + 10.5, this.y + 4);
            crc2.lineTo(this.x + 15, this.y + 14);
            crc2.lineTo(this.x + 20, this.y + 7);
            crc2.lineTo(this.x + 20, this.y + 21);

            crc2.closePath();
            crc2.fill();
        }
    }
}