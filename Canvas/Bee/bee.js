"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 18.05.21
Quellen: W3School und MDN
*/
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let canvas;
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky(0, 0, "#88d1CF");
        drawMountainBig(500, 310, "#a9a9a9"); // Hinten
        drawMountainSmall(170, 320, "#a9a9a9"); // Vorne
        drawMeadow(0, 0);
        drawSun(560, 120, "#FFFF00", "#FFDF00"); // dritter Wert Sonnenstrahlen
        drawTree(-20, 0); // rechter Rand
        drawBird(1020, 315, "#3B170B", "#3B170B");
        drawBushBig(860, 380, "#556B2F");
        drawBushSmall(90, 380, "#556B2F");
        drawBushBig(470, 380, "#556B2F");
        drawBushSmall(560, 410, "#458B00");
        drawBushBig(-20, 440, "#228B22");
        drawCloud(100, 120, "#FFFFFF");
        drawCloud(960, 90, "#FFFFFF");
        drawCloud2(10, 260);
        drawCloud2(1270, 180);
        drawCloud2(830, 200);
        drawBird2(250, 220);
        drawBird2(400, 180);
        drawBird2(300, 130);
        drawBank(240, 400, "#8B5A2B", "#CDAA7D", "#8B5A2B", "#8B5A2B");
        drawBeehive(1160, 510);
        drawTree2(1200, 200);
        drawPoppy(550, 565);
        drawSunflower(760, 465);
        drawTulip(900, 600);
        // For-Loop zufällige Verteilung der Blumen - von hinten nach vorne
        for (var height = 450; height < 630; height += 2) {
            var randomFlower = Math.floor((Math.random() * 4));
            var width = Math.floor((Math.random() * 1100) - 10);
            switch (randomFlower) {
                case 0:
                    drawSunflower(width, height);
                    break;
                case 1:
                    drawPoppy(width, height);
                    break;
                case 2:
                    drawTulip(width, height);
                    break;
            }
        }
    }
    // Funktion Wiese
    function drawMeadow(_x, _y) {
        var gradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#575757");
        gradient.addColorStop(0.7, "#66CD00");
        gradient.addColorStop(0.9, "#66CD00");
        gradient.addColorStop(1.0, "#458B00");
        crc2.beginPath();
        crc2.strokeStyle = gradient;
        crc2.fillStyle = gradient;
        crc2.moveTo(_x, _y + 400); // Start von 0, 300 aus
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x + 1280, _y + 720);
        crc2.lineTo(_x - 1280, _y + 720);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    // Funktion Himmel
    function drawSky(_x, _y, _strokeColor) {
        var gradient = crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#7BCDDF");
        gradient.addColorStop(1, "#1874CD");
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = gradient;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1280, _y);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x - 1280, _y + 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    // Funktion großer Berg
    function drawMountainBig(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = "grey";
        crc2.lineWidth = 2;
        //Farbverlauf Berg
        var gradient = crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(0.8, "#6E6E7E");
        gradient.addColorStop(0.8, "#6E6E7E");
        gradient.addColorStop(1.0, "#3C3C3C");
        //Berg
        crc2.fillStyle = gradient;
        crc2.moveTo(_x + 0, _y + 0);
        crc2.lineTo(_x + 20, _y - 20);
        crc2.lineTo(_x + 40, _y - 20);
        crc2.lineTo(_x + 60, _y - 40);
        crc2.lineTo(_x + 80, _y - 20);
        crc2.lineTo(_x + 120, _y - 60);
        crc2.lineTo(_x + 140, _y - 60);
        crc2.lineTo(_x + 160, _y - 100);
        crc2.lineTo(_x + 180, _y - 120);
        crc2.lineTo(_x + 220, _y - 80);
        crc2.lineTo(_x + 240, _y - 40);
        crc2.lineTo(_x + 260, _y - 60);
        crc2.lineTo(_x + 300, _y - 60);
        crc2.lineTo(_x + 360, _y + 0);
        crc2.lineTo(_x + 400, _y + 20);
        crc2.lineTo(_x + 440, _y + 100);
        crc2.lineTo(_x + 0, _y + 100);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Linien im Berg  
        crc2.beginPath();
        crc2.strokeStyle = "grey";
        crc2.moveTo(_x + 80, _y - 20);
        crc2.lineTo(_x + 100, _y + 20);
        crc2.lineTo(_x + 140, _y + 40);
        crc2.moveTo(_x + 240, _y - 40);
        crc2.lineTo(_x + 220, _y - 20);
        crc2.stroke();
    }
    // Funktion kleiner Berg
    function drawMountainSmall(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = "grey";
        crc2.lineWidth = 2;
        //Farbverlauf Berg
        var gradient = crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(0.8, "#6E6E7E");
        gradient.addColorStop(0.8, "#6E6E7E");
        gradient.addColorStop(1.0, "#3C3C3C");
        //Berg
        crc2.fillStyle = gradient;
        crc2.moveTo(_x - 70, _y + 100);
        crc2.lineTo(_x + 30, _y - 20);
        crc2.lineTo(_x + 30, _y - 20);
        crc2.lineTo(_x + 60, _y - 40);
        crc2.lineTo(_x + 90, _y - 20);
        crc2.lineTo(_x + 130, _y - 60);
        crc2.lineTo(_x + 160, _y - 100);
        crc2.lineTo(_x + 220, _y - 10);
        crc2.lineTo(_x + 260, _y - 50);
        crc2.lineTo(_x + 300, _y - 60);
        crc2.lineTo(_x + 340, _y + 0);
        crc2.lineTo(_x + 360, _y + 20);
        crc2.lineTo(_x + 400, _y + 100);
        crc2.lineTo(_x - 70, _y + 100);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Linien im Berg  
        crc2.beginPath();
        crc2.strokeStyle = "grey";
        crc2.moveTo(_x + 90, _y - 20);
        crc2.lineTo(_x + 120, _y + 20);
        crc2.lineTo(_x + 140, _y + 30);
        crc2.moveTo(_x + 220, _y - 10);
        crc2.lineTo(_x + 200, _y + 20);
        crc2.stroke();
    }
    // Funktion Sonne
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        // Sonne
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        //Sonnenstrahlen
        crc2.arc(_x, _y, 60, 0, 2 * Math.PI);
        crc2.moveTo(560, 120);
        crc2.lineTo(800, 150);
        crc2.moveTo(560, 120);
        crc2.lineTo(800, 50);
        crc2.moveTo(560, 120);
        crc2.lineTo(700, 10);
        crc2.moveTo(560, 120);
        crc2.lineTo(590, 15);
        crc2.moveTo(560, 120);
        crc2.lineTo(490, 20);
        crc2.moveTo(560, 120);
        crc2.lineTo(400, 30);
        crc2.moveTo(560, 120);
        crc2.lineTo(400, 120);
        crc2.moveTo(560, 120);
        crc2.lineTo(410, 200);
        crc2.moveTo(560, 120);
        crc2.lineTo(480, 270);
        crc2.moveTo(560, 120);
        crc2.lineTo(590, 230);
        crc2.moveTo(560, 120);
        crc2.lineTo(700, 200);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    // Funktion Baum
    function drawTree(_x, _y) {
        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "#8B5A2B";
        crc2.fillRect(_x + 1080, _y + 335, 35, 110);
        crc2.fillRect(_x + 1050, _y + 350, 50, 6);
        //Baumkrone
        crc2.beginPath();
        crc2.fillStyle = "#458B00";
        crc2.arc(_x + 1110, _y + 255, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 1140, _y + 285, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 1110, _y + 315, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 1065, _y + 305, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 1065, _y + 265, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    // Funktion Vogel
    function drawBird(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        //Körper und Kopf
        crc2.arc(_x + 22, _y + 20, 8, 0, 2 * Math.PI);
        crc2.arc(_x + 32, _y + 16, 5, 0, 2 * Math.PI);
        //Schnabel
        crc2.lineTo(_x + 42, _y + 18);
        //Beine
        crc2.moveTo(_x + 24, _y + 28);
        crc2.lineTo(_x + 24, _y + 35);
        crc2.moveTo(_x + 20, _y + 28);
        crc2.lineTo(_x + 20, _y + 35);
        //Schwanz
        crc2.moveTo(_x + 14, _y + 18);
        crc2.lineTo(_x + 10, _y + 14);
        crc2.lineTo(_x + 10, _y + 17);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    // Funktion großer Busch
    function drawBushBig(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 75, _y + 10, 20, 0, 2 * Math.PI);
        crc2.arc(_x + 120, _y + 40, 24, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 30, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    // Funktion kleiner Busch
    function drawBushSmall(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 20, _y + 30, 28, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 10, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 80, _y + 15, 20, 0, 2 * Math.PI);
        crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    // Funktion Wolke
    function drawCloud(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawCloud2(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 45, _y, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 30, _y, 15, 0, 2 * Math.PI);
        crc2.arc(_x + 30, _y - 15, 15, 0, 2 * Math.PI);
        crc2.arc(_x + 30, _y + 10, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawBird2(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#000000";
        crc2.arcTo(_x + 5, _y - 20, _x + 8, _y - 20, 20);
        crc2.arcTo(_x + 8, _y - 25, _x, _y, 20);
        crc2.arcTo(_x - 5, _y - 20, _x - 8, _y - 20, 20);
        crc2.arcTo(_x - 8, _y - 25, _x, _y, 15);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    // Bank zeichnen
    function drawBank(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 30, _y - 2);
        crc2.lineTo(_x + 50, _y - 5);
        crc2.lineTo(_x + 50, _y + 93);
        crc2.lineTo(_x + 30, _y + 100);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 120, _y - 14);
        crc2.lineTo(_x + 140, _y - 17);
        crc2.lineTo(_x + 140, _y + 80);
        crc2.lineTo(_x + 120, _y + 85);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 120, _y + 40);
        crc2.lineTo(_x + 140, _y + 38);
        crc2.lineTo(_x + 165, _y + 45);
        crc2.lineTo(_x + 145, _y + 45);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 30, _y + 48);
        crc2.lineTo(_x + 50, _y + 44);
        crc2.lineTo(_x + 75, _y + 60);
        crc2.lineTo(_x + 55, _y + 58);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 145, _y + 38);
        crc2.lineTo(_x + 160, _y + 45);
        crc2.lineTo(_x + 160, _y + 95);
        crc2.lineTo(_x + 145, _y + 100);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 55, _y + 63);
        crc2.lineTo(_x + 75, _y + 60);
        crc2.lineTo(_x + 75, _y + 115);
        crc2.lineTo(_x + 55, _y + 120);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 160, _y - 20);
        crc2.lineTo(_x + 160, _y - 5);
        crc2.lineTo(_x, _y + 15);
        crc2.closePath();
        crc2.moveTo(_x, _y + 28);
        crc2.lineTo(_x + 160, _y + 8);
        crc2.lineTo(_x + 160, _y + 22);
        crc2.lineTo(_x, _y + 43);
        crc2.closePath();
        crc2.moveTo(_x + 5, _y + 49);
        crc2.lineTo(_x + 160, _y + 28);
        crc2.lineTo(_x + 175, _y + 32);
        crc2.lineTo(_x + 20, _y + 55);
        crc2.closePath();
        crc2.moveTo(_x + 27, _y + 59);
        crc2.lineTo(_x + 184, _y + 37);
        crc2.lineTo(_x + 197, _y + 40);
        crc2.lineTo(_x + 40, _y + 64);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    // Funktion Bienenkorb
    function drawBeehive(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#FFB90F";
        crc2.strokeStyle = "#996633";
        crc2.arc(_x + 60, _y - 12, 5, 0, 2 * Math.PI);
        crc2.arc(_x + 10, _y - 12, 5, 0, 2 * Math.PI);
        crc2.rect(_x + 10, _y - 17, 50, 10);
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 5, _y, 6, 0, 2 * Math.PI);
        crc2.arc(_x + 65, _y, 6, 0, 2 * Math.PI);
        crc2.rect(_x + 5, _y - 6, 60, 12);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 60, _y + 13, 5, 0, 2 * Math.PI);
        crc2.arc(_x + 10, _y + 13, 5, 0, 2 * Math.PI);
        crc2.rect(_x + 10, _y + 8, 50, 10);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 55, _y + 24, 4, 0, 2 * Math.PI);
        crc2.arc(_x + 15, _y + 24, 4, 0, 2 * Math.PI);
        crc2.rect(_x + 15, _y + 20, 40, 8);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 55, _y - 23, 4, 0, 2 * Math.PI);
        crc2.arc(_x + 15, _y - 23, 4, 0, 2 * Math.PI);
        crc2.rect(_x + 15, _y - 27, 40, 8);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 47.5, _y + 33, 3, 0, 2 * Math.PI);
        crc2.arc(_x + 22.5, _y + 33, 3, 0, 2 * Math.PI);
        crc2.rect(_x + 22.5, _y + 30, 25, 6);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 47.5, _y - 32, 3, 0, 2 * Math.PI);
        crc2.arc(_x + 22.5, _y - 32, 3, 0, 2 * Math.PI);
        crc2.rect(_x + 22.5, _y - 35, 25, 6);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#663300";
        crc2.arc(_x + 27.5, _y, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#7F5019";
        crc2.rect(_x + 12, _y - 49, 80, 12);
        crc2.fill();
    }
    function drawTree2(_x, _y) {
        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "#7F5019";
        crc2.fillRect(_x + 90, _y + 200, -50, 250);
        crc2.closePath();
        crc2.fill();
        //Baumkrone
        crc2.beginPath();
        crc2.fillStyle = "#277F00";
        crc2.arc(_x + 50, _y + 200, 50, 0, 2 * Math.PI);
        crc2.arc(_x + 25, _y + 150, 50, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 100, 50, 0, 2 * Math.PI);
        crc2.arc(_x + 100, _y + 75, 50, 0, 2 * Math.PI);
        crc2.arc(_x + 150, _y + 100, 50, 0, 2 * Math.PI);
        crc2.arc(_x + 175, _y + 150, 50, 0, 2 * Math.PI);
        crc2.arc(_x + 150, _y + 200, 50, 0, 2 * Math.PI);
        crc2.arc(_x + 100, _y + 150, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    // Funktion Mohnblume
    function drawPoppy(_x, _y) {
        //Stiel
        crc2.beginPath();
        crc2.strokeStyle = "#556B2F";
        crc2.fillStyle = "#556B2F";
        crc2.fillRect(_x - 2, _y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge
        //Blätter 
        crc2.moveTo(_x, _y + 30);
        crc2.lineTo(_x + 10, _y + 15);
        crc2.moveTo(_x, _y + 40);
        crc2.lineTo(_x - 10, _y + 20);
        crc2.moveTo(_x, _y + 55);
        crc2.lineTo(_x + 12, _y + 35);
        crc2.stroke();
        crc2.fill();
        //Blüten
        crc2.beginPath();
        crc2.fillStyle = "#DB2511";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.fill();
        //Blütenmitte
        crc2.beginPath();
        crc2.fillStyle = "#3B170B";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    // Sonnenblume
    function drawSunflower(_x, _y) {
        //Stiel
        crc2.beginPath();
        crc2.strokeStyle = "#556B2F";
        crc2.fillStyle = "#556B2F";
        crc2.fillRect(_x + 68, _y + 30, 3, 55);
        //Blätter
        crc2.lineTo(_x + 70, _y + 50); // am Stiel direkt
        crc2.lineTo(_x + 60, _y + 50);
        crc2.lineTo(_x + 70, _y + 70);
        crc2.stroke();
        crc2.fill();
        //Blüten
        crc2.beginPath();
        crc2.fillStyle = "#FFD700";
        crc2.moveTo(_x + 62, _y + 24);
        crc2.lineTo(_x + 50, _y + 15);
        crc2.lineTo(_x + 60, _y + 28);
        crc2.lineTo(_x + 45, _y + 25);
        crc2.lineTo(_x + 58, _y + 33);
        crc2.lineTo(_x + 48, _y + 40);
        crc2.lineTo(_x + 61, _y + 37);
        crc2.lineTo(_x + 55, _y + 50);
        crc2.lineTo(_x + 65, _y + 38);
        crc2.lineTo(_x + 66, _y + 52);
        crc2.lineTo(_x + 70, _y + 39);
        crc2.lineTo(_x + 76, _y + 50);
        crc2.lineTo(_x + 75, _y + 37);
        crc2.lineTo(_x + 85, _y + 45);
        crc2.lineTo(_x + 78, _y + 33);
        crc2.lineTo(_x + 90, _y + 36);
        crc2.lineTo(_x + 79, _y + 28);
        crc2.lineTo(_x + 92, _y + 24);
        crc2.lineTo(_x + 78, _y + 23);
        crc2.lineTo(_x + 88, _y + 14);
        crc2.lineTo(_x + 75, _y + 20);
        crc2.lineTo(_x + 78, _y + 8);
        crc2.lineTo(_x + 70, _y + 20);
        crc2.lineTo(_x + 69, _y + 5);
        crc2.lineTo(_x + 65, _y + 20);
        crc2.lineTo(_x + 58, _y + 8);
        crc2.lineTo(_x + 62, _y + 24);
        crc2.fill();
        //Blütenmitte
        crc2.beginPath();
        crc2.fillStyle = "#8B4500";
        crc2.arc(_x + 70, _y + 30, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    // Funktion Tulpe
    function drawTulip(_x, _y) {
        //Stiel
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";
        crc2.fillRect(_x + 9, _y + 28, 3, 40);
        //Blatt
        crc2.arc(_x + 8, _y + 30, 20, 0, 1.5);
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#FF1493";
        crc2.arc(_x + 10, _y + 20, 10, 0, 1 * Math.PI);
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y + 7);
        crc2.lineTo(_x + 6, _y + 14);
        crc2.lineTo(_x + 10.5, _y + 4);
        crc2.lineTo(_x + 15, _y + 14);
        crc2.lineTo(_x + 20, _y + 7);
        crc2.lineTo(_x + 20, _y + 21);
        crc2.closePath();
        crc2.fill();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=bee.js.map