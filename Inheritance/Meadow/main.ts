
/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Inheritance {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    export let z: number = 10;
    export let allBees: SuperclassBee[] = [];
    export let allFlowers: SuperclassFlower[] = [];
    export let allClouds: SuperclassCloud[] = []; // noch füllen

    // Start
    function handleLoad(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        //Hintergund mittels einer Klasse erstellen
        let bG: Background = new Background;
        console.log(bG); // nicht notwendig, aber der Linter spinnt sonst rum.


        //Blumenwiese:

        // Blumen werden von hinten nach vorne gemalt
        for (var height: number = 450; height < 630; height += 4) { // 3er Schritt
            let width: number = Math.floor((Math.random() * 1100) - 10);

            // Blumenwiese aus Tulpen:
            for (var n: number = 0; n < 30; n++) {
                let t: SuperclassFlower = new Tulip(width, height);
                allFlowers.push(t);
                // t.draw();
                console.log(t);
                
            }

            //Spezielle Blumen (Sonnenblumen und Mohnblumen, jeweils 5) im Array speichern 
            for (let i: number = 0; i < 5; i++) {

                let p: SuperclassFlower = new Poppy(width, height);
                allFlowers.push(p); // wird in das Array gepusht damit daraus später davon random Blumen (+Positionen) für die Bienen genommen werden können
                console.log(p);
                // allFlowers[i].draw();

                let s: SuperclassFlower = new Sunflower(width, height);
                allFlowers.push(s);
                console.log(s);
                // allFlowers[i].draw();
            }
        }

        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks (beim Laden)
        for (let i: number = 0; i < z; i++) {
            moreBees(_event);
        }

        // Große Wolken platzieren:
        for (let i: number = 0; i < 10; i++) {
            let oneBigCloud: SuperclassCloud = new BigCloud(100, 250);
            oneBigCloud.x = Math.random() * crc2.canvas.width;
            oneBigCloud.y = Math.random() * crc2.canvas.height - 550; // Obere Hälfte
            oneBigCloud.speed = (Math.random() + 1) * 0.3;
            allClouds.push(oneBigCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }

        // Kleine Wolken platzieren
        for (let i: number = 0; i < 10; i++) {
            let oneSmallCloud: SuperclassCloud = new SmallCloud(50, 100);
            oneSmallCloud.x = Math.random() * crc2.canvas.width;
            oneSmallCloud.y = Math.random() * crc2.canvas.height - 550; // Obere Hälfte
            oneSmallCloud.speed = (Math.random() + 1) * 0.2;
            allClouds.push(oneSmallCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }

        window.setTimeout(animate, 10);

    } // close load-function


    // ANIMATIONEN:

    // Funktion um die Bienen und Wolken zu animieren.
    function animate(): void {

        crc2.putImageData(imgData, 0, 0); // Bedeutung: das gespeicherte Bild wiederverwenden
        // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //Bei Klick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks.       
        canvas.addEventListener("touchend", moreBees);
        canvas.addEventListener("click", moreBees);

        // Große und kleine Wolken werden gemalt und animiert
        for (let i: number = 0; i < allClouds.length; i++) {

            
            for (let bigClouds of allClouds) { // Array durchgehen mit Hilfe der Variable bigClouds: und große Wolken nacheinander rausholen
                if (bigClouds instanceof BigCloud) { // wenn es eine große Wolke ist, dann bewege dich mit moveForward.
                    bigClouds.moveForward();
                    bigClouds.drawCloud2();
                }
            }
            
            for (let smallClouds of allClouds) {
                if (smallClouds instanceof SmallCloud) {
                    smallClouds.moveForward2();
                    smallClouds.drawCloud1();
                }
            }
            
            //Damit die Wolken wieder ins Bild kommen, sobald sie aus dem Bild geflogen sind.
            if (allClouds[i].x > + 1300) {
                allClouds[i].x = canvas.width - 2000;
            }
           
        }

        // drawClouds();

        // Biene - erst hier, damit sie nicht hinter den Wolken fliegen
        for (let i: number = 0; i < allBees.length; i++) {

            let b: SuperclassBee = allBees[i]; // Jede Biene im Array bekommt die Klasse 
            // und wird geupdatet, also an eine neue Position gebracht
            b.update();
        }

        window.setTimeout(animate, 10);

    } //animate zu

    // Funktion um bei Klick eine neue Biene erscheinen zu lassen
    function moreBees(_event: Event): void {

        let randomBee: number = Math.floor(Math.random() * 2);

        switch (randomBee) {

            case 0:
                let b: SuperclassBee = new NormalBee(1175, 505); // Neue Biene mit neuer Klasse
                allBees.push(b); 
                break;
            case 1:
                let h: SuperclassBee = new HoneyBee(1175, 505); // Neue Biene mit neuer Klasse
                allBees.push(h); 
                break;
        }
    }


} // close namespace