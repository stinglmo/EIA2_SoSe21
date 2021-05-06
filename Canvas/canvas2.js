"use strict";
var generativeArt2;
(function (generativeArt2) {
    window.addEventListener("load", draw);
    let crc2;
    function draw() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.clearRect(0, 0, canvas.width, canvas.height); // Nach jedem Klick auf den Button, wird das canvas erstmal geleehrt
        // String für die Farben --> Hexadezimal-Code
        let hex = ["#247BA0", "#70C1B3", "#B2DBBF", "#F3FFBD", "#FF1654", "#FDFFFC", "#2EC4B6", "#FF9F1C", "#E71D36", "#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557", "#2B2D42", "#8D99AE", "#EDF2F4", "#EF233C", "#D90429", "#6699CC", "#FFF275", "#FF8C42", "#FF3C38", "#A23E48", "#1A535C", "#4ECDC4", "#F7FFF7", "#FF6B6B", "#FFE66D", "#06AED5", "#086788", "#F0C808", "#FFF1D0", "#DD1C1A"];
        // Canvas
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        let prevX = 100;
        let prevY = 50;
        let points = Math.floor(Math.random() * 100 + 20);
        crc2.beginPath();
        for (let i = 0; i < points; i++) {
            let x = Math.floor(Math.random() * 800); // Für gesamte Breite
            let y = Math.floor(Math.random() * 800); // Für gesamte Höhe
            let color = hex[Math.floor(Math.random() * hex.length)]; // Zufällige Farbe aus dem hex-string
            drawLine(x, y, color);
            crc2.lineWidth = Math.random() * 20; // Zufällige Linienbreite --> durch 20 aber sichergestellt, dass die Linie überhaupt eine Breite hat
            crc2.strokeStyle = color; // Linie mit Farbe füllen
            crc2.beginPath();
            crc2.moveTo(prevX, prevY); // Zum Ursprung
            crc2.lineTo(x, y); // Koordinaten
            crc2.stroke();
            prevX = x;
            prevY = y;
        }
        // Linie ausführen
        function drawLine(x, y, _color) {
            crc2.strokeStyle = _color;
            crc2.beginPath();
            crc2.lineTo(x, y); // Koordinaten
            crc2.stroke();
        }
        // Button:
        let generationButton = document.querySelector("button"); // Mit dem ! sage ich, 
        // dass selbst wenn es null ist, soll es trotzdem als Button behandelt werden!
        generationButton.addEventListener("click", draw);
        console.log(generationButton);
    }
})(generativeArt2 || (generativeArt2 = {}));
//# sourceMappingURL=canvas2.js.map