/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 22.05.21
Quellen: W3School und MDN
*/

namespace Meadow {

    export class Bee {

        x: number;
        y: number;
        color: string;
        sting: boolean;

        constructor() { //Parameter _x: number, _y: number gelöscht

            this.x = 1175; // Ausgang des Bienenstocks
            this.y = 505;
            this.drawBee();
            this.setRandomStyle();
        }

        //Methode "update" - Biene an neuer Position malen 
        update(): void {

            this.drawBee();
            this.move();
        }


        //Methode "drawBee" - Biene malen
        drawBee(): void {


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


        //Methode "move" - Biene bewegen
        move(): void {

            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;

            // damit die Bienen wieder erscheinen, sobald sie aus dem Bild geflogen sind.
            for (let i: number = 0; i < z; i++) {

                if (this.x < 0) { // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
                    this.x = crc2.canvas.width;
                }
                if (this.y < 0) { // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
                    this.y = crc2.canvas.height;
                }
                if (this.y >= crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }


        //Methode "setRandomStyle" - Zufällige Farbe und (k)ein Stachel 
        setRandomStyle(): void {

            let randomColor: string = "hsl(" + Math.random() * 60 + ", 100%, 50%)"; // Zwischen gelb und rot.
            let randomSting: boolean = Boolean(Math.round(Math.random()));

            this.color = randomColor;
            this.sting = randomSting;
        }



    } // close class

} // close namespace