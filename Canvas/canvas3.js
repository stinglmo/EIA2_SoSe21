"use strict";
var generativeArt3;
(function (generativeArt3) {
    window.addEventListener("load", draw);
    let crc2;
    function draw(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        // Canvas
        crc2.fillStyle = "white";
        crc2.fillRect(0, 0, canvas.width, canvas.height); // mit weiß füllen
        // Positionen und Ausbreitungen werden festgelegt
        drawBigCircles({ x: 600, y: 600 }, { x: 1000, y: 1000 }); // 1. Position, 2. Ausbreitung
        drawMediumCircles({ x: 100, y: 600 }, { x: 1000, y: 1000 });
        drawSmallCircles({ x: 100, y: 200 }, { x: 1000, y: 1400 });
        drawLittleCircles({ x: 100, y: 200 }, { x: 1000, y: 1400 });
    }
    // Funktion drawBigCircles --> Bis auf die Parameter: Größe, Farbe und Position ist bei den anderen Kreisen alles gleich!
    function drawBigCircles(_position, _size) {
        console.log("BigCircles", _position, _size);
        let nParticles = 20;
        let radiusParticle = 200;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(1, 0, 1, 0, 0, radiusParticle); // Radialer Farbverlauf
        particle.arc(1, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");
        crc2.save(); // wird gespeichert
        crc2.translate(_position.x, _position.y); // Translation zur Position --> Sonne wird verschoben. Da es ein Vektor ist, kann man die Komponenten einzeln betrachten
        crc2.fillStyle = gradient; // Gradient wird dem fillStyle des RenderingContexts zugewiesen 
        // Wiederholt sich ebenfalls für alle Kreise
        for (let drawn = 0; drawn < nParticles; drawn++) { // Für die Anzahl der Partikel for-Schleife durchlaufen
            crc2.save(); // erst saven
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y); // im Canvas zufällig anordnen/verteilen
            crc2.fill(particle); // mit Partikeln füllen
            crc2.restore(); // dann wiederherstellen 
        }
        crc2.restore(); // Wiederherstellen
    }
    function drawMediumCircles(_position, _size) {
        console.log("MediumCircles", _position, _size);
        let nParticles = 8;
        let radiusParticle = 160;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(1, 0, 1, 0, 0, radiusParticle);
        particle.arc(1, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgreen");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }
    function drawSmallCircles(_position, _size) {
        console.log("SmallCircles", _position, _size);
        let nParticles = 20;
        let radiusParticle = 100;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(1, 0, 1, 0, 0, radiusParticle);
        particle.arc(1, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#093f63");
        gradient.addColorStop(1, "#90e77b");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }
    function drawLittleCircles(_position, _size) {
        console.log("LittleCircles", _position, _size);
        let nParticles = 40;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(1, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightblue");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    // Button:
    let generationButton = document.querySelector("button");
    generationButton.addEventListener("click", draw);
    console.log(generationButton);
})(generativeArt3 || (generativeArt3 = {}));
//# sourceMappingURL=canvas3.js.map