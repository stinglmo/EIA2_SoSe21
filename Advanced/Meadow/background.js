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
    class Background {
        constructor() {
            Background.drawSky(0, 0, "#88d1CF"); // statt this --> die Superklasse Background
            Background.drawMountainBig(500, 310, "#a9a9a9"); // Hinten
            Background.drawMountainSmall(170, 320, "#a9a9a9"); // Vorne
            Background.drawMeadow(0, 0);
            Background.drawSun(560, 120, "#FFFF00", "#FFDF00"); // dritter Wert Sonnenstrahlen
            Background.drawTree(-20, 0); // rechter Rand
            Background.drawBird(1020, 315, "#3B170B", "#3B170B");
            Background.drawBushBig(860, 380, "#556B2F");
            Background.drawBushSmall(90, 380, "#556B2F");
            Background.drawBushBig(470, 380, "#556B2F");
            Background.drawBushSmall(560, 410, "#458B00");
            Background.drawBushBig(-20, 440, "#228B22");
            Background.drawBird2(250, 220);
            Background.drawBird2(400, 180);
            Background.drawBird2(300, 130);
            Background.drawBank(240, 400, "#8B5A2B", "#CDAA7D", "#8B5A2B", "#8B5A2B");
            Background.drawBeehive(1160, 510);
            Background.drawTree2(1200, 200);
        }
        // Methoden:
        // Wiese:
        static drawMeadow(_x, _y) {
            var gradient = Advanced.crc2.createLinearGradient(0, 0, 0, 800);
            gradient.addColorStop(0.5, "#575757");
            gradient.addColorStop(0.7, "#66CD00");
            gradient.addColorStop(0.9, "#66CD00");
            gradient.addColorStop(1.0, "#458B00");
            Advanced.crc2.beginPath();
            Advanced.crc2.strokeStyle = gradient;
            Advanced.crc2.fillStyle = gradient;
            Advanced.crc2.moveTo(_x, _y + 400); // Start von 0, 300 aus
            Advanced.crc2.lineTo(_x + 1280, _y + 400);
            Advanced.crc2.lineTo(_x + 1280, _y + 720);
            Advanced.crc2.lineTo(_x - 1280, _y + 720);
            Advanced.crc2.closePath();
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
        }
        //Himmel
        static drawSky(_x, _y, _strokeColor) {
            var gradient = Advanced.crc2.createLinearGradient(0, 300, 0, 10);
            gradient.addColorStop(0, "#7BCDDF");
            gradient.addColorStop(1, "#1874CD");
            Advanced.crc2.beginPath();
            Advanced.crc2.strokeStyle = _strokeColor;
            Advanced.crc2.fillStyle = gradient;
            Advanced.crc2.moveTo(_x, _y);
            Advanced.crc2.lineTo(_x + 1280, _y);
            Advanced.crc2.lineTo(_x + 1280, _y + 400);
            Advanced.crc2.lineTo(_x - 1280, _y + 400);
            Advanced.crc2.closePath();
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
        }
        //Großer Berg
        static drawMountainBig(_x, _y, _fillColor) {
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor;
            Advanced.crc2.strokeStyle = "grey";
            Advanced.crc2.lineWidth = 2;
            //Farbverlauf Berg
            var gradient = Advanced.crc2.createLinearGradient(0, 0, 0, 460);
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(1.0, "#3C3C3C");
            //Berg
            Advanced.crc2.fillStyle = gradient;
            Advanced.crc2.moveTo(_x + 0, _y + 0);
            Advanced.crc2.lineTo(_x + 20, _y - 20);
            Advanced.crc2.lineTo(_x + 40, _y - 20);
            Advanced.crc2.lineTo(_x + 60, _y - 40);
            Advanced.crc2.lineTo(_x + 80, _y - 20);
            Advanced.crc2.lineTo(_x + 120, _y - 60);
            Advanced.crc2.lineTo(_x + 140, _y - 60);
            Advanced.crc2.lineTo(_x + 160, _y - 100);
            Advanced.crc2.lineTo(_x + 180, _y - 120);
            Advanced.crc2.lineTo(_x + 220, _y - 80);
            Advanced.crc2.lineTo(_x + 240, _y - 40);
            Advanced.crc2.lineTo(_x + 260, _y - 60);
            Advanced.crc2.lineTo(_x + 300, _y - 60);
            Advanced.crc2.lineTo(_x + 360, _y + 0);
            Advanced.crc2.lineTo(_x + 400, _y + 20);
            Advanced.crc2.lineTo(_x + 440, _y + 100);
            Advanced.crc2.lineTo(_x + 0, _y + 100);
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            //Linien im Berg  
            Advanced.crc2.beginPath();
            Advanced.crc2.strokeStyle = "grey";
            Advanced.crc2.moveTo(_x + 80, _y - 20);
            Advanced.crc2.lineTo(_x + 100, _y + 20);
            Advanced.crc2.lineTo(_x + 140, _y + 40);
            Advanced.crc2.moveTo(_x + 240, _y - 40);
            Advanced.crc2.lineTo(_x + 220, _y - 20);
            Advanced.crc2.stroke();
        }
        //Kleiner Berg
        static drawMountainSmall(_x, _y, _fillColor) {
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor;
            Advanced.crc2.strokeStyle = "grey";
            Advanced.crc2.lineWidth = 2;
            //Farbverlauf Berg
            var gradient = Advanced.crc2.createLinearGradient(0, 0, 0, 460);
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(1.0, "#3C3C3C");
            //Berg
            Advanced.crc2.fillStyle = gradient;
            Advanced.crc2.moveTo(_x - 70, _y + 100);
            Advanced.crc2.lineTo(_x + 30, _y - 20);
            Advanced.crc2.lineTo(_x + 30, _y - 20);
            Advanced.crc2.lineTo(_x + 60, _y - 40);
            Advanced.crc2.lineTo(_x + 90, _y - 20);
            Advanced.crc2.lineTo(_x + 130, _y - 60);
            Advanced.crc2.lineTo(_x + 160, _y - 100);
            Advanced.crc2.lineTo(_x + 220, _y - 10);
            Advanced.crc2.lineTo(_x + 260, _y - 50);
            Advanced.crc2.lineTo(_x + 300, _y - 60);
            Advanced.crc2.lineTo(_x + 340, _y + 0);
            Advanced.crc2.lineTo(_x + 360, _y + 20);
            Advanced.crc2.lineTo(_x + 400, _y + 100);
            Advanced.crc2.lineTo(_x - 70, _y + 100);
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            //Linien im Berg  
            Advanced.crc2.beginPath();
            Advanced.crc2.strokeStyle = "grey";
            Advanced.crc2.moveTo(_x + 90, _y - 20);
            Advanced.crc2.lineTo(_x + 120, _y + 20);
            Advanced.crc2.lineTo(_x + 140, _y + 30);
            Advanced.crc2.moveTo(_x + 220, _y - 10);
            Advanced.crc2.lineTo(_x + 200, _y + 20);
            Advanced.crc2.stroke();
        }
        //Sonne
        static drawSun(_x, _y, _strokeColor, _fillColor) {
            // Sonne
            Advanced.crc2.beginPath();
            Advanced.crc2.strokeStyle = _strokeColor;
            Advanced.crc2.fillStyle = _fillColor;
            //Sonnenstrahlen
            Advanced.crc2.arc(_x, _y, 60, 0, 2 * Math.PI);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(800, 150);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(800, 50);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(700, 10);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(590, 15);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(490, 20);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(400, 30);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(400, 120);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(410, 200);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(480, 270);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(590, 230);
            Advanced.crc2.moveTo(560, 120);
            Advanced.crc2.lineTo(700, 200);
            Advanced.crc2.closePath();
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
        }
        //Baum
        static drawTree(_x, _y) {
            //Baumstamm
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#8B5A2B";
            Advanced.crc2.fillRect(_x + 1080, _y + 335, 35, 110);
            Advanced.crc2.fillRect(_x + 1050, _y + 350, 50, 6);
            //Baumkrone
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#458B00";
            Advanced.crc2.arc(_x + 1110, _y + 255, 35, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 1140, _y + 285, 35, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 1110, _y + 315, 35, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 1065, _y + 305, 35, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 1065, _y + 265, 35, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
        }
        //Vogel
        static drawBird(_x, _y, _strokeColor, _fillColor) {
            Advanced.crc2.beginPath();
            Advanced.crc2.strokeStyle = _strokeColor;
            Advanced.crc2.fillStyle = _fillColor;
            //Körper und Kopf
            Advanced.crc2.arc(_x + 22, _y + 20, 8, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 32, _y + 16, 5, 0, 2 * Math.PI);
            //Schnabel
            Advanced.crc2.lineTo(_x + 42, _y + 18);
            //Beine
            Advanced.crc2.moveTo(_x + 24, _y + 28);
            Advanced.crc2.lineTo(_x + 24, _y + 35);
            Advanced.crc2.moveTo(_x + 20, _y + 28);
            Advanced.crc2.lineTo(_x + 20, _y + 35);
            //Schwanz
            Advanced.crc2.moveTo(_x + 14, _y + 18);
            Advanced.crc2.lineTo(_x + 10, _y + 14);
            Advanced.crc2.lineTo(_x + 10, _y + 17);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
        }
        //Großer Busch
        static drawBushBig(_x, _y, _fillColor) {
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor;
            Advanced.crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 75, _y + 10, 20, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 120, _y + 40, 24, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 90, _y + 30, 35, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
        }
        //Kleiner Busch
        static drawBushSmall(_x, _y, _fillColor) {
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor;
            Advanced.crc2.arc(_x + 20, _y + 30, 28, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 50, _y + 10, 25, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 80, _y + 15, 20, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
        }
        static drawBird2(_x, _y) {
            Advanced.crc2.beginPath();
            Advanced.crc2.moveTo(_x, _y);
            Advanced.crc2.strokeStyle = "#000000";
            Advanced.crc2.fillStyle = "#000000";
            Advanced.crc2.arcTo(_x + 5, _y - 20, _x + 8, _y - 20, 20);
            Advanced.crc2.arcTo(_x + 8, _y - 25, _x, _y, 20);
            Advanced.crc2.arcTo(_x - 5, _y - 20, _x - 8, _y - 20, 20);
            Advanced.crc2.arcTo(_x - 8, _y - 25, _x, _y, 15);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
        }
        //Bank zeichnen
        static drawBank(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor1;
            Advanced.crc2.strokeStyle = _strokeColor1;
            Advanced.crc2.moveTo(_x + 30, _y - 2);
            Advanced.crc2.lineTo(_x + 50, _y - 5);
            Advanced.crc2.lineTo(_x + 50, _y + 93);
            Advanced.crc2.lineTo(_x + 30, _y + 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor1;
            Advanced.crc2.strokeStyle = _strokeColor1;
            Advanced.crc2.moveTo(_x + 120, _y - 14);
            Advanced.crc2.lineTo(_x + 140, _y - 17);
            Advanced.crc2.lineTo(_x + 140, _y + 80);
            Advanced.crc2.lineTo(_x + 120, _y + 85);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor1;
            Advanced.crc2.strokeStyle = _strokeColor1;
            Advanced.crc2.moveTo(_x + 120, _y + 40);
            Advanced.crc2.lineTo(_x + 140, _y + 38);
            Advanced.crc2.lineTo(_x + 165, _y + 45);
            Advanced.crc2.lineTo(_x + 145, _y + 45);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor1;
            Advanced.crc2.strokeStyle = _strokeColor1;
            Advanced.crc2.moveTo(_x + 30, _y + 48);
            Advanced.crc2.lineTo(_x + 50, _y + 44);
            Advanced.crc2.lineTo(_x + 75, _y + 60);
            Advanced.crc2.lineTo(_x + 55, _y + 58);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor1;
            Advanced.crc2.strokeStyle = _strokeColor1;
            Advanced.crc2.moveTo(_x + 145, _y + 38);
            Advanced.crc2.lineTo(_x + 160, _y + 45);
            Advanced.crc2.lineTo(_x + 160, _y + 95);
            Advanced.crc2.lineTo(_x + 145, _y + 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor1;
            Advanced.crc2.strokeStyle = _strokeColor1;
            Advanced.crc2.moveTo(_x + 55, _y + 63);
            Advanced.crc2.lineTo(_x + 75, _y + 60);
            Advanced.crc2.lineTo(_x + 75, _y + 115);
            Advanced.crc2.lineTo(_x + 55, _y + 120);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = _fillColor;
            Advanced.crc2.strokeStyle = _strokeColor;
            Advanced.crc2.moveTo(_x, _y);
            Advanced.crc2.lineTo(_x + 160, _y - 20);
            Advanced.crc2.lineTo(_x + 160, _y - 5);
            Advanced.crc2.lineTo(_x, _y + 15);
            Advanced.crc2.closePath();
            Advanced.crc2.moveTo(_x, _y + 28);
            Advanced.crc2.lineTo(_x + 160, _y + 8);
            Advanced.crc2.lineTo(_x + 160, _y + 22);
            Advanced.crc2.lineTo(_x, _y + 43);
            Advanced.crc2.closePath();
            Advanced.crc2.moveTo(_x + 5, _y + 49);
            Advanced.crc2.lineTo(_x + 160, _y + 28);
            Advanced.crc2.lineTo(_x + 175, _y + 32);
            Advanced.crc2.lineTo(_x + 20, _y + 55);
            Advanced.crc2.closePath();
            Advanced.crc2.moveTo(_x + 27, _y + 59);
            Advanced.crc2.lineTo(_x + 184, _y + 37);
            Advanced.crc2.lineTo(_x + 197, _y + 40);
            Advanced.crc2.lineTo(_x + 40, _y + 64);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
        }
        //Bienenkorb
        static drawBeehive(_x, _y) {
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#FFB90F";
            Advanced.crc2.strokeStyle = "#996633";
            Advanced.crc2.arc(_x + 60, _y - 12, 5, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 10, _y - 12, 5, 0, 2 * Math.PI);
            Advanced.crc2.rect(_x + 10, _y - 17, 50, 10);
            Advanced.crc2.lineWidth = 4;
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(_x + 5, _y, 6, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 65, _y, 6, 0, 2 * Math.PI);
            Advanced.crc2.rect(_x + 5, _y - 6, 60, 12);
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(_x + 60, _y + 13, 5, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 10, _y + 13, 5, 0, 2 * Math.PI);
            Advanced.crc2.rect(_x + 10, _y + 8, 50, 10);
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(_x + 55, _y + 24, 4, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 15, _y + 24, 4, 0, 2 * Math.PI);
            Advanced.crc2.rect(_x + 15, _y + 20, 40, 8);
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(_x + 55, _y - 23, 4, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 15, _y - 23, 4, 0, 2 * Math.PI);
            Advanced.crc2.rect(_x + 15, _y - 27, 40, 8);
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(_x + 47.5, _y + 33, 3, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 22.5, _y + 33, 3, 0, 2 * Math.PI);
            Advanced.crc2.rect(_x + 22.5, _y + 30, 25, 6);
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(_x + 47.5, _y - 32, 3, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 22.5, _y - 32, 3, 0, 2 * Math.PI);
            Advanced.crc2.rect(_x + 22.5, _y - 35, 25, 6);
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            // Ausgang:
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#663300";
            Advanced.crc2.arc(_x + 27.5, _y, 7, 0, 2 * Math.PI);
            Advanced.crc2.fill();
            // Ast, an dem der Bienenstock hängt
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#7F5019";
            Advanced.crc2.rect(_x + 12, _y - 49, 80, 12);
            Advanced.crc2.fill();
        }
        static drawTree2(_x, _y) {
            //Baumstamm
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#7F5019";
            Advanced.crc2.fillRect(_x + 90, _y + 200, -50, 250);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            //Baumkrone
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#277F00";
            Advanced.crc2.arc(_x + 50, _y + 200, 50, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 25, _y + 150, 50, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 50, _y + 100, 50, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 100, _y + 75, 50, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 150, _y + 100, 50, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 175, _y + 150, 50, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 150, _y + 200, 50, 0, 2 * Math.PI);
            Advanced.crc2.arc(_x + 100, _y + 150, 50, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
        }
    } // close class
    Advanced.Background = Background;
})(Advanced || (Advanced = {})); // close namespace
//# sourceMappingURL=background.js.map