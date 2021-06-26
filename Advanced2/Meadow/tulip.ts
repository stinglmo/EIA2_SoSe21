/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 17.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Advanced2 {

    export class Tulip extends SuperclassFlower {

        constructor(_x: number, _y: number) {

            super(_x, _y);
            // console.log("Create Tulip");
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
            crc2.closePath();
            crc2.fill();

            //Blüte
            crc2.beginPath();

            // Nactar
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 8 ) {
                crc2.fillStyle = "#2c0a2e";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9 ) {
                crc2.fillStyle = "#521356";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8 ) {
                crc2.fillStyle = "#791c7e";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7 ) {
                crc2.fillStyle = "#9f25a6";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6 ) {
                crc2.fillStyle = "#c52ece";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5 ) {
                crc2.fillStyle = "#d155d8";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4 ) {
                crc2.fillStyle = "#dc7de1";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3 ) {
                crc2.fillStyle = "#e6a5ea";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2 ) {
                crc2.fillStyle = "#f1cdf3";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1 ) {
                crc2.fillStyle = "#fcf5fc";
            }
            
            //crc2.fillStyle = "#FF1493";

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