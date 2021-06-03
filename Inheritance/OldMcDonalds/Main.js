"use strict";
var OMD;
(function (OMD) {
    window.addEventListener("load", main);
    let cow = new OMD.Cow("Cow", "Grass", 20, "Muhu", "giving Milk");
    let chicken = new OMD.Chicken("Chicken", "Grains", 3, "Kikiriki", "laying eggs");
    let dog = new OMD.Dog("Dog", "Meat", 7, "Woof", "catching sticks");
    let pig = new OMD.Pig("Pig", "Junk", 15, "Chrooh", "eating much");
    let horse = new OMD.Horse("Horse", "Straw", 18, "Phruuuhh", "springing high");
    let day = 1;
    let storage;
    // So berechnet, dass die Vorräte alle gleichzeitig aufgebraucht sein werden
    OMD.grassStorage = 100;
    OMD.grainsStorage = 15;
    OMD.meatStorage = 35;
    OMD.junkStorage = 75;
    OMD.strawStorage = 90;
    function main() {
        let newDayButton = document.querySelector(".newDay-Button");
        newDayButton.addEventListener("click", nextDay);
        cow.sing();
        chicken.sing();
        dog.sing();
        pig.sing();
        horse.sing();
        cow.eat();
        chicken.eat();
        dog.eat();
        pig.eat();
        horse.eat();
        cow.doSpecialAction();
        chicken.doSpecialAction();
        dog.doSpecialAction();
        pig.doSpecialAction();
        horse.doSpecialAction();
        storage = document.querySelector(".storageDiv");
        storage.innerHTML = "DAY " + day + " Storage: Grass: " + OMD.grassStorage + "kg, Grains: " + OMD.grainsStorage + "kg, Meat: " + OMD.meatStorage + "kg, Junk: " + OMD.junkStorage + "kg, Straw: " + OMD.strawStorage + "kg";
    }
    function nextDay() {
        cow.eat();
        chicken.eat();
        dog.eat();
        horse.eat();
        pig.eat();
        day++;
        if (OMD.grassStorage == 0) {
            prompt("You need to reload the page and the farmer will buy new food for his animals");
        }
        storage.innerHTML = "DAY " + day + " Storage: Grass: " + OMD.grassStorage + "kg, Grains: " + OMD.grainsStorage + "kg, Meat: " + OMD.meatStorage + "kg, Junk: " + OMD.junkStorage + "kg, Straw: " + OMD.strawStorage + "kg";
    }
})(OMD || (OMD = {}));
//# sourceMappingURL=Main.js.map