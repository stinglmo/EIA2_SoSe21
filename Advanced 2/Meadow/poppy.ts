/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 17.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Advanced2 {
    
    export class Poppy extends SuperclassFlower {
    
        constructor(_x: number, _y: number) {

            super(_x, _y);
            // console.log("Create Poppy");
            this.draw();
           
        }

        //Methode "drawPoppy"
        draw(): void {

            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#556B2F";
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge

            //Blätter 
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x + 10, this.y + 15);
            crc2.moveTo(this.x, this.y + 40);
            crc2.lineTo(this.x - 10, this.y + 20);
            crc2.moveTo(this.x, this.y + 55);
            crc2.lineTo(this.x + 12, this.y + 35);

            crc2.stroke();
            crc2.fill();

            //Blüten
            crc2.beginPath();
            crc2.fillStyle = "#DB2511";

            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);

            crc2.fill();

            //Blütenmitte
            crc2.beginPath();

            // Nectar
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 8 ) {
                crc2.fillStyle = "#2d1c0b";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9 ) {
                crc2.fillStyle = "#543415";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8 ) {
                crc2.fillStyle = "#7b4c1f";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7 ) {
                crc2.fillStyle = "#a1642a";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6 ) {
                crc2.fillStyle = "#c87c34";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5 ) {
                crc2.fillStyle = "#d49559";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4 ) {
                crc2.fillStyle = "#deae80";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3 ) {
                crc2.fillStyle = "#e8c7a7";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2 ) {
                crc2.fillStyle = "#f2dfce";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1 ) {
                crc2.fillStyle = "#fcf8f5";
            }

            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
        }
    }
}