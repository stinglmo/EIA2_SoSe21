/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 24.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Advanced2 {

    export class NormalBee extends SuperclassBee {

        constructor(_x: number, _y: number) {

            super(_x, _y);
            // console.log("Create normalBee");
            // this.setRandomStyle();
        }

        // Methode draw
        public draw(): void {
            // Biene
            // Körper
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI); // Body
            crc2.arc(this.x - 10, this.y - 3, 5, 0, 2 * Math.PI); // Kopf
            crc2.fill();

            // Auge
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(this.x - 11, this.y - 4, 1.2, 0, 2 * Math.PI);
            crc2.fill();

            // Fühler 1
            crc2.beginPath();
            crc2.moveTo(this.x - 5, this.y);
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 0.9;
            crc2.lineTo(this.x - 10, this.y - 13);
            crc2.closePath();
            crc2.stroke();

            // Fühler 2
            crc2.beginPath();
            crc2.moveTo(this.x - 3, this.y - 5);
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 0.5;
            crc2.lineTo(this.x - 15, this.y - 12);
            crc2.closePath();
            crc2.stroke();

            if (this.sting == true) {

                crc2.moveTo(this.x, this.y);
                crc2.lineTo(this.x + 13, this.y + 3);
            }

            else {
                console.log();
            }

            crc2.stroke();
            crc2.fill();

            //Streifen
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            crc2.rect(this.x + 2, this.y - 4, 2.5, 10);

            crc2.stroke();
            crc2.fill();

            //Flügel
            crc2.beginPath();
            crc2.fillStyle = "#aFEEEE";
            crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);

            crc2.closePath();
            crc2.fill();
        }
    }
}