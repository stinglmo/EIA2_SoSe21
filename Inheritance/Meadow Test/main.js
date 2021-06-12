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
    window.addEventListener("load", handleLoad);
    let canvas;
    let imgData;
    // Cloud-Arrays für Animation
    let bigClouds = [];
    let smallClouds = [];
    TestM.z = 10;
    TestM.allBees = [];
    TestM.allFlowers = [];
    // export let nectarFlowers: Flower[] = [];
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        TestM.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        let bG = new TestM.Background;
        console.log(bG); // nicht notwendig, aber der Linter spinnt sonst rum.
        //Blumenwiese:
        // Blumen werden von hinten nach vorne gemalt
        for (var height = 450; height < 630; height += 4) { // 3er Schritt
            let width = Math.floor((Math.random() * 1100) - 10);
            // Blumenwiese aus Tulpen:
            for (var n = 0; n < 30; n++) {
                let t = new TestM.Tulip(width, height);
                // t.draw();
                console.log(t);
            }
            //Spezielle Blumen (Sonnenblumen und Mohnblumen, jeweils 5) im Array speichern 
            for (let i = 0; i < 5; i++) {
                let p = new TestM.Poppy(width, height);
                TestM.allFlowers.push(p); // wird in das Array gepusht damit daraus später davon random Blumen (+Positionen) für die Bienen genommen werden können
                console.log(p);
                // allFlowers[i].draw();
                let s = new TestM.Sunflower(width, height);
                TestM.allFlowers.push(s);
                console.log(s);
                // allFlowers[i].draw();
            }
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
        imgData = TestM.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks (beim Laden)
        for (let i = 0; i < TestM.z; i++) {
            let randomBee = Math.floor(Math.random() * 2);
            switch (randomBee) {
                case 0:
                    let b = new TestM.NormalBee(1190, 475); // Jede Biene wird mit der Klasse ausgestattet.
                    TestM.allBees.push(b);
                    break;
                case 1:
                    let h = new TestM.HoneyBee(1190, 475); // Jede Biene wird mit der Klasse ausgestattet.
                    TestM.allBees.push(h);
                    break;
            }
        }
        // Große Wolken platzieren:
        for (let i = 0; i < 10; i++) {
            let oneBigCloud = new TestM.Cloud();
            oneBigCloud.x = Math.random() * TestM.crc2.canvas.width;
            oneBigCloud.y = Math.random() * TestM.crc2.canvas.height - 550; // Obere Hälfte
            oneBigCloud.speed = (Math.random() + 1) * 0.5;
            bigClouds.push(oneBigCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        // Kleine Wolken platzieren
        for (let i = 0; i < 10; i++) {
            let oneSmallCloud = new TestM.Cloud();
            oneSmallCloud.x = Math.random() * TestM.crc2.canvas.width;
            oneSmallCloud.y = Math.random() * TestM.crc2.canvas.height - 550; // Obere Hälfte
            oneSmallCloud.speed = (Math.random() + 1) * 0.5;
            smallClouds.push(oneSmallCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    // ANIMATIONEN:
    // Funktion um die Bienen und Wolken zu animieren.
    function animate() {
        TestM.crc2.putImageData(imgData, 0, 0); // Bedeutung: das gespeicherte Bild wiederverwenden
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
        for (let i = 0; i < TestM.allBees.length; i++) {
            let b = TestM.allBees[i]; // Jede Biene im Array bekommt die Klasse // hier auch Superklasse verwenden?
            // und wird geupdatet, also an eine neue Position gebracht
            b.update();
        }
        window.setTimeout(animate, 10);
    } //animate zu
    // Funktion um bei Klick eine neue Biene erscheinen zu lassen
    function moreBees(_event) {
        let randomBee = Math.floor(Math.random() * 2);
        switch (randomBee) {
            case 0:
                let b = new TestM.NormalBee(1175, 505); // Neue Biene mit neuer Klasse
                TestM.allBees.push(b);
                break;
            case 1:
                let h = new TestM.HoneyBee(1175, 505); // Neue Biene mit neuer Klasse
                TestM.allBees.push(h);
                break;
        }
    }
    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds() {
        for (let i = 0; i < bigClouds.length; i++)
            bigClouds[i].drawCloud1();
        for (let i = 0; i < smallClouds.length; i++)
            smallClouds[i].drawCloud2();
    } // close draw Clouds
})(TestM || (TestM = {})); // close namespace
//# sourceMappingURL=main.js.map