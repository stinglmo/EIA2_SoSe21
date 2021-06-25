"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 17.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced2;
(function (Advanced2) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let imgData;
    Advanced2.n = 10; //Anzahl NormaleBienen
    Advanced2.u = 5; //Anzahl HonigBienen
    Advanced2.allBees = [];
    Advanced2.allFlowers = [];
    Advanced2.allClouds = []; // noch füllen
    Advanced2.fullFlower = []; // Für Blumen mit vollem Nektar
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Advanced2.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        let bG = new Advanced2.Background;
        console.log(bG); // nicht notwendig, aber der Linter spinnt sonst rum.
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = Advanced2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Blumenwiese:
        // Blumen werden von hinten nach vorne gemalt
        for (var height = 450; height < 630; height += 4) { // 3er Schritt
            let width = Math.floor((Math.random() * 1100) - 10);
            let t = new Advanced2.Tulip(width, height);
            t.nectarLevel = 0; // sind leer am Anfang
            Advanced2.allFlowers.push(t);
            let p = new Advanced2.Poppy(width, height);
            p.nectarLevel = 0;
            Advanced2.allFlowers.push(p); // wird in das Array gepusht damit daraus später davon random Blumen (+Positionen) für die Bienen genommen werden können
            let s = new Advanced2.Sunflower(width, height);
            s.nectarLevel = 0;
            Advanced2.allFlowers.push(s);
        }
        // Nectarlevel
        window.setInterval(function () {
            for (let flower of Advanced2.allFlowers) {
                flower.updateNectarLevel();
            }
        }, 3000); // immer gleiche Höhe wie function
        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks (beim Laden)
        for (let i = 0; i < Advanced2.n; i++) {
            let b = new Advanced2.NormalBee(1175, 505); // Neue Biene mit neuer Klasse
            Advanced2.allBees.push(b);
        }
        for (let i = 0; i < Advanced2.u; i++) {
            let h = new Advanced2.HoneyBee(1175, 505); // Neue Biene mit neuer Klasse
            Advanced2.allBees.push(h);
            // console.log(allBees);
        }
        // Große Wolken platzieren:
        for (let i = 0; i < 10; i++) {
            let oneBigCloud = new Advanced2.BigCloud(100, 250);
            oneBigCloud.x = Math.random() * Advanced2.crc2.canvas.width;
            oneBigCloud.y = Math.random() * Advanced2.crc2.canvas.height - 550; // Obere Hälfte
            oneBigCloud.speed = (Math.random() + 1) * 0.3;
            Advanced2.allClouds.push(oneBigCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        // Kleine Wolken platzieren
        for (let i = 0; i < 10; i++) {
            let oneSmallCloud = new Advanced2.SmallCloud(50, 100);
            oneSmallCloud.x = Math.random() * Advanced2.crc2.canvas.width;
            oneSmallCloud.y = Math.random() * Advanced2.crc2.canvas.height - 550; // Obere Hälfte
            oneSmallCloud.speed = (Math.random() + 1) * 0.2;
            Advanced2.allClouds.push(oneSmallCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    // ANIMATIONEN:
    // Funktion um die Bienen und Wolken zu animieren.
    function animate() {
        Advanced2.crc2.putImageData(imgData, 0, 0); // Bedeutung: das gespeicherte Bild wiederverwenden
        // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //Bei Klick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks.       
        canvas.addEventListener("pointerup", moreBees); // pointerup --> egal ob Touch/Click etc.
        // alle Blumen malen
        for (let flower of Advanced2.allFlowers) {
            flower.draw();
        }
        // Große und kleine Wolken werden gemalt und animiert
        for (let i = 0; i < Advanced2.allClouds.length; i++) {
            for (let bigClouds of Advanced2.allClouds) { // Array durchgehen mit Hilfe der Variable bigClouds: und große Wolken nacheinander rausholen
                if (bigClouds instanceof Advanced2.BigCloud) { // wenn es eine große Wolke ist, dann bewege dich mit moveForward.
                    bigClouds.moveForward();
                    bigClouds.drawCloud1();
                }
            }
            for (let smallClouds of Advanced2.allClouds) {
                if (smallClouds instanceof Advanced2.SmallCloud) {
                    smallClouds.moveForward2();
                    smallClouds.drawCloud2();
                }
            }
            //Damit die Wolken wieder ins Bild kommen, sobald sie aus dem Bild geflogen sind.
            if (Advanced2.allClouds[i].x > +1300) {
                Advanced2.allClouds[i].x = canvas.width - 2000;
            }
        }
        // drawClouds();
        // Biene - erst hier, damit sie nicht hinter den Wolken fliegen
        for (let i = 0; i < Advanced2.allBees.length; i++) {
            let b = Advanced2.allBees[i]; // Jede Biene im Array bekommt die Klasse 
            // und wird geupdatet, also an eine neue Position gebracht
            b.update();
        }
        window.setTimeout(animate, 10);
    } //animate zu
    // Funktion um bei Klick eine neue Biene erscheinen zu lassen
    function moreBees(_event) {
        let randomBee = Math.floor(Math.random() * 2);
        let xpos = _event.clientX + 190;
        let ypos = _event.clientY;
        switch (randomBee) {
            case 0:
                let b = new Advanced2.NormalBee(xpos, ypos); // Neue Biene mit neuer Klasse
                Advanced2.allBees.push(b);
                break;
            case 1:
                let h = new Advanced2.HoneyBee(xpos, ypos); // Neue Biene mit neuer Klasse
                Advanced2.allBees.push(h);
                break;
        }
    }
})(Advanced2 || (Advanced2 = {})); // close namespace
//# sourceMappingURL=main.js.map