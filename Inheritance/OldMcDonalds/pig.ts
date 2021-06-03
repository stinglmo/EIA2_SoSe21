namespace OMD {
    export class Pig extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string, _specialAction: string) {

            super(_name, _food, _foodAmount, _sound, _specialAction);
            this.eatMuch();
        }

        eatMuch(): void {
            console.log("The pig eats much!");
            
        }

    }
}