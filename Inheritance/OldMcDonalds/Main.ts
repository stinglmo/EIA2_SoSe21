namespace OMD {

    window.addEventListener("load", main);

    let cow: Cow = new Cow("Cow", "Grass", 20, "Muhu", "giving Milk");
    let chicken: Chicken = new Chicken("Chicken", "Grains", 3, "Kikiriki", "laying eggs");
    let dog: Dog = new Dog("Dog", "Meat", 7, "Woof", "catching sticks");
    let pig: Pig = new Pig("Pig", "Junk", 15, "Chrooh", "eating much");
    let horse: Horse = new Horse("Horse", "Straw", 18, "Phruuuhh", "springing high");
    let day: number = 1;
    let storage: HTMLElement;

    // So berechnet, dass die Vorräte alle gleichzeitig aufgebraucht sein werden
    export let grassStorage: number = 100;
    export let grainsStorage: number = 15;
    export let meatStorage: number = 35;
    export let junkStorage: number = 75;
    export let strawStorage: number = 90;

    function main(): void {
        
        let newDayButton: HTMLElement = <HTMLElement>document.querySelector(".newDay-Button");
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

        storage = <HTMLElement>document.querySelector(".storageDiv");
        storage.innerHTML = "DAY " + day + " Storage: Grass: " + grassStorage + "kg, Grains: " + grainsStorage + "kg, Meat: " + meatStorage + "kg, Junk: " + junkStorage + "kg, Straw: " + strawStorage + "kg";
    }

    function nextDay(): void {
        cow.eat();
        chicken.eat();
        dog.eat();
        horse.eat();
        pig.eat();

        day ++;
        if (grassStorage == 0) {
            prompt("You need to reload the page and the farmer will buy new food for his animals");
        }
        storage.innerHTML = "DAY " + day + " Storage: Grass: " + grassStorage + "kg, Grains: " + grainsStorage + "kg, Meat: " + meatStorage + "kg, Junk: " + junkStorage + "kg, Straw: " + strawStorage + "kg";
    }

}