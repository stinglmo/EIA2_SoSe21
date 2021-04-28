
namespace Aufgabe3 {

    //Variablen deklarieren
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardArray: HTMLElement[] = [];
    let cardsOpen: number = 0;
    let cardsOpenArray: HTMLElement[] = [];
    let checkRest: HTMLElement[] = [];

    // Start game
    let startMemory: HTMLElement = <HTMLElement>document.querySelector(".start");
    startMemory.addEventListener("click", main);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

        // Install listeners on fieldsets
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);

        // Stepper response
        // if (target.name == "Stepper") {
        //     let pairOfCards: HTMLMeterElement = <HTMLMeterElement>document.querySelector("meter");
        //     pairOfCards.value = parseFloat(target.value);
        // }

        // Slider response (Cardsize)
        if (target.name == "Slider") {
        let sizeOfCards: HTMLProgressElement = <HTMLProgressElement>document.querySelector(".slider");
        sizeOfCards.value = parseFloat(target.value);
        }

        // Color response (Background)
        if (target.name == "Color") {
            let backgroundColor: HTMLOutputElement = <HTMLOutputElement>document.querySelector(".backgroundColor");
            backgroundColor.value = target.value;
        }

        // Color response (Backside)
        if (target.name == "Color") {
            let backsideColor: HTMLOutputElement = <HTMLOutputElement>document.querySelector(".backsideColor");
            backsideColor.value = target.value;
        }

        // Color response (Font)
        if (target.name == "Color") {
            let fontColor: HTMLOutputElement = <HTMLOutputElement>document.querySelector(".fontColor");
            fontColor.value = target.value;
        }

        // Font response (Style)
        if (target.type == "radio") {
            let fontStyle: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output");
            fontStyle.value = target.value;
        }
    }

    //Karte initialisieren     
    function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");
 
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.setAttribute("class", "card hidden");
        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);
        // card.style.width =
    }

    function clickHandler(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            } else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    // Vergleich Karten
    function compareCards(): void {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("taken");
            }
            checkRest.splice(0, 2);
        } else {
            for (let i: number = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }

    // function timer(): void{
    //     let firstNumber: number;
    //     let secondNumber: number;
    //     let date: object = secondNumber - firstNumber;
    // }

    function checkWin(): void {
        if (checkRest.length == 0) {
            alert("Congratulations, you won! Time: ... Reload the page for a new game!");
        }
    }

    //Durstenfeld-Shuffle
    // tslint:disable-next-line: no-any
    function shuffleArray(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }

    // Main Funktion zum Anzeigen des Memorys
    function main(): void {

        //Popup für Kartenpaare
        gameBoard;

        function gameBoard(_event: Event): void {
            let target: HTMLInputElement = <HTMLInputElement>_event.target;
    
            // Stepper response
            if (target.name == "Stepper") {
                let pairOfCards: HTMLMeterElement = <HTMLMeterElement>document.querySelector(".stepper");
                numPairs = pairOfCards.value;
            }
        }
        //Karten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }

        //Aufruf der Shuffle Algorithmusses (für die erwünschte Anzahl)    
        shuffleArray(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            let playerbox: HTMLDivElement = <HTMLDivElement>document.getElementById("playerbox");
            playerbox.appendChild(cardArray[i]);
        }
    }
    //Event-Listener
    document.addEventListener("DOMContentLoaded", init);
}
