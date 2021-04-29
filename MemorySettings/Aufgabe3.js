"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    //Variablen deklarieren
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardArray = [];
    let cardsOpen = 0;
    let cardsOpenArray = [];
    let checkRest = [];
    // Start game
    window.addEventListener("load", startGame);
    function startGame() {
        let startMemory = document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }
    // FormData - Objekt um in der Main Funktion die Werte des Formulars auszuwerten!
    let formData;
    let size;
    let backGColor;
    let backSColor;
    let fontColor;
    let fontStyle;
    //Karte initialisieren     
    function createCard(_cardContent) {
        let card = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");
        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);
        // Slider response (Cardsize)
        card.style.width = size + "px";
        card.style.height = size + "px";
        // Color response (Background)
        if (backGColor) { // Prüfe ob es einen Wert hat
            card.style.backgroundColor = backGColor.toString();
        }
        // Color response (Backside)
        if (backSColor) {
            card.style.background = backSColor.toString();
        }
        // Color response (Font)
        if (fontColor) {
            card.style.color = fontColor.toString();
        }
        // Font response (Style)
        if (fontStyle) {
            card.style.fontFamily = fontStyle.toString();
        }
    }
    function clickHandler(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            }
            else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    // Vergleich Karten
    function compareCards() {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("taken");
            }
            checkRest.splice(0, 2);
        }
        else {
            for (let i = 0; i < cardsOpenArray.length; i++) {
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
    function checkWin() {
        if (checkRest.length == 0) {
            alert("Congratulations, you won! Time: ... Reload the page for a new game!");
        }
    }
    //Durstenfeld-Shuffle
    // tslint:disable-next-line: no-any
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    // Main Funktion zum Anzeigen des Memorys
    function main(_event) {
        let fieldset = document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        //Popup für Kartenpaare
        formData = new FormData(document.forms[0]); // weist der Variablen formData alle fieldsets zu
        console.log(formData);
        size = Number(formData.get("Slider")); // Ich hole mir mit dem Namen "Slider" den value, wird noch zu einer Number
        backGColor = formData.get("BGColor"); // Entweder Wert oder null
        backSColor = formData.get("BSColor");
        fontColor = formData.get("FColor");
        fontStyle = formData.get("Radiogroup");
        // Stepper response
        let pairOfCards = formData.get("Stepper");
        if (pairOfCards) {
            numPairs = Number(pairOfCards);
        }
        else {
            numPairs = 5;
        }
        //Karten erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }
        //Aufruf der Shuffle Algorithmusses (für die erwünschte Anzahl)    
        shuffleArray(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            let playerbox = document.getElementById("playerbox");
            playerbox.appendChild(cardArray[i]);
        }
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=Aufgabe3.js.map