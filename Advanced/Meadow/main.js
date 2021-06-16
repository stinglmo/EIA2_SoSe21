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
    window.addEventListener("load", handleLoad);
    let canvas;
    let imgData;
    Advanced.z = 10;
    Advanced.allBees = [];
    Advanced.allFlowers = [];
    Advanced.allClouds = []; // noch füllen
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Advanced.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        let bG = new Advanced.Background;
        console.log(bG); // nicht notwendig, aber der Linter spinnt sonst rum.
        //Blumenwiese:
        // Blumen werden von hinten nach vorne gemalt
        for (var height = 450; height < 630; height += 4) { // 3er Schritt
            let width = Math.floor((Math.random() * 1100) - 10);
            // Blumenwiese aus Tulpen:
            for (var n = 0; n < 30; n++) {
                let t = new Advanced.Tulip(width, height);
                Advanced.allFlowers.push(t);
                // t.draw();
                console.log(t);
            }
            //Spezielle Blumen (Sonnenblumen und Mohnblumen, jeweils 5) im Array speichern 
            for (let i = 0; i < 5; i++) {
                let p = new Advanced.Poppy(width, height);
                Advanced.allFlowers.push(p); // wird in das Array gepusht damit daraus später davon random Blumen (+Positionen) für die Bienen genommen werden können
                console.log(p);
                // allFlowers[i].draw();
                let s = new Advanced.Sunflower(width, height);
                Advanced.allFlowers.push(s);
                console.log(s);
                // allFlowers[i].draw();
            }
        }
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = Advanced.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks (beim Laden)
        for (let i = 0; i < Advanced.z; i++) {
            moreBees(_event);
        }
        // Große Wolken platzieren:
        for (let i = 0; i < 10; i++) {
            let oneBigCloud = new Advanced.BigCloud(100, 250);
            oneBigCloud.x = Math.random() * Advanced.crc2.canvas.width;
            oneBigCloud.y = Math.random() * Advanced.crc2.canvas.height - 550; // Obere Hälfte
            oneBigCloud.speed = (Math.random() + 1) * 0.3;
            Advanced.allClouds.push(oneBigCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        // Kleine Wolken platzieren
        for (let i = 0; i < 10; i++) {
            let oneSmallCloud = new Advanced.SmallCloud(50, 100);
            oneSmallCloud.x = Math.random() * Advanced.crc2.canvas.width;
            oneSmallCloud.y = Math.random() * Advanced.crc2.canvas.height - 550; // Obere Hälfte
            oneSmallCloud.speed = (Math.random() + 1) * 0.2;
            Advanced.allClouds.push(oneSmallCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    // ANIMATIONEN:
    // Funktion um die Bienen und Wolken zu animieren.
    function animate() {
        Advanced.crc2.putImageData(imgData, 0, 0); // Bedeutung: das gespeicherte Bild wiederverwenden
        // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //Bei Klick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks.       
        canvas.addEventListener("touchend", moreBees);
        canvas.addEventListener("click", moreBees);
        // Große und kleine Wolken werden gemalt und animiert
        for (let i = 0; i < Advanced.allClouds.length; i++) {
            for (let bigClouds of Advanced.allClouds) { // Array durchgehen mit Hilfe der Variable bigClouds: und große Wolken nacheinander rausholen
                if (bigClouds instanceof Advanced.BigCloud) { // wenn es eine große Wolke ist, dann bewege dich mit moveForward.
                    bigClouds.moveForward();
                    bigClouds.drawCloud1();
                }
            }
            for (let smallClouds of Advanced.allClouds) {
                if (smallClouds instanceof Advanced.SmallCloud) {
                    smallClouds.moveForward2();
                    smallClouds.drawCloud2();
                }
            }
            //Damit die Wolken wieder ins Bild kommen, sobald sie aus dem Bild geflogen sind.
            if (Advanced.allClouds[i].x > +1300) {
                Advanced.allClouds[i].x = canvas.width - 2000;
            }
        }
        // drawClouds();
        // Biene - erst hier, damit sie nicht hinter den Wolken fliegen
        for (let i = 0; i < Advanced.allBees.length; i++) {
            let b = Advanced.allBees[i]; // Jede Biene im Array bekommt die Klasse 
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
                let b = new Advanced.NormalBee(1175, 505); // Neue Biene mit neuer Klasse
                Advanced.allBees.push(b);
                break;
            case 1:
                let h = new Advanced.HoneyBee(1175, 505); // Neue Biene mit neuer Klasse
                Advanced.allBees.push(h);
                break;
        }
    }
})(Advanced || (Advanced = {})); // close namespace
//# sourceMappingURL=main.js.map