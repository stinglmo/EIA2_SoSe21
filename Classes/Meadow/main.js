"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 22.05.21
Quellen: W3School und MDN
*/
var Meadow;
(function (Meadow) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let imgData;
    // Cloud-Arrays für Animation
    let bigClouds = [];
    let smallClouds = [];
    Meadow.z = 10;
    Meadow.allBees = [];
    // export let nectarFlowers: Flower[] = [];
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Meadow.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        let bG = new Meadow.Background;
        console.log(bG); // nicht notwendig, aber der Linter spinnt sonst rum.
        //Blumenwiese:
        // Blumen werden von hinten nach vorne gemalt
        for (var height = 450; height < 630; height += 3) { // 3er Schritt
            let width = Math.floor((Math.random() * 1100) - 10);
            let f = new Meadow.Flower(width, height);
            f.draw();
        }
        //Fest platzierte Blumen, zu denen später die Bienen fliegen sollen.
        // for (let i: number = 0; i < 10; i++) {
        //     let y: number = 0;
        //     let x: number = 0;
        //     let f: Flower = new Flower(x, y);
        //     nectarFlowers.push(f); // die random Position der festen Blumen wird in das leere Array gepusht um später die Bienen dort hin fliegen zu lassen.
        // }
        // console.log(nectarFlowers);
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = Meadow.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks (beim Laden)
        for (let i = 0; i < Meadow.z; i++) {
            let b = new Meadow.Bee();
            Meadow.allBees[i] = b; // Jede Biene wird mit der Klasse ausgestattet.
        }
        // Große Wolken platzieren:
        for (let i = 0; i < 10; i++) {
            let oneBigCloud = new Meadow.Cloud();
            oneBigCloud.x = Math.random() * Meadow.crc2.canvas.width;
            oneBigCloud.y = Math.random() * Meadow.crc2.canvas.height - 550; // Obere Hälfte
            oneBigCloud.speed = (Math.random() + 1) * 0.5;
            bigClouds.push(oneBigCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        // Kleine Wolken platzieren
        for (let i = 0; i < 10; i++) {
            let oneSmallCloud = new Meadow.Cloud();
            oneSmallCloud.x = Math.random() * Meadow.crc2.canvas.width;
            oneSmallCloud.y = Math.random() * Meadow.crc2.canvas.height - 550; // Obere Hälfte
            oneSmallCloud.speed = (Math.random() + 1) * 0.5;
            smallClouds.push(oneSmallCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    // ANIMATIONEN:
    // Funktion um die Bienen und Wolken zu animieren.
    function animate() {
        Meadow.crc2.putImageData(imgData, 0, 0); // Bedeutung: das gespeicherte Bild wiederverwenden
        // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //Bei Klick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks.       
        canvas.addEventListener("touchend", moreBees);
        canvas.addEventListener("click", moreBees);
        // Animation große und kleine Wolken
        for (let i = 0; i < bigClouds.length && i < smallClouds.length; i++) {
            bigClouds[i].moveForward();
            smallClouds[i].moveForward();
            //Damit die Wolken wieder ins Bild kommen, sobald sie aus dem Bild geflogen sind.
            if (bigClouds[i].x > +1300) {
                bigClouds[i].x = canvas.width - 2000;
                // clouds[i].y = Math.random() * crc2.canvas.height - 200;
            }
            if (smallClouds[i].x > +1350) {
                smallClouds[i].x = canvas.width - 2000;
            }
        }
        drawClouds();
        // Biene - erst hier, damit sie nicht hinter den Wolken fliegen
        for (let i = 0; i < Meadow.allBees.length; i++) {
            let b = Meadow.allBees[i]; // Jede Biene im Array bekommt die Klasse 
            // und wird geupdatet, also an eine neue Position gebracht
            b.update();
        }
        window.setTimeout(animate, 10);
    } //animate zu
    // Funktion um bei Klick eine neue Biene erscheinen zu lassen
    function moreBees(_event) {
        let b = new Meadow.Bee(); // Neue Biene mit neuer Klasse
        b.setRandomStyle(); // bekommt natürlich auch wieder eine Farbe und wird ebenfalls ins Bienenarray gepusht.
        Meadow.allBees.push(b);
        Meadow.z++; // startet bei 10, weil es schon 10 Bienen gibt
    }
    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds() {
        for (let i = 0; i < bigClouds.length; i++)
            bigClouds[i].drawCloud1();
        for (let i = 0; i < smallClouds.length; i++)
            smallClouds[i].drawCloud2();
    } // close draw Clouds
})(Meadow || (Meadow = {})); // close namespace
//# sourceMappingURL=main.js.map