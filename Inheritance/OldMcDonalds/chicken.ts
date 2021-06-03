namespace OMD {

    export class Chicken extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string, _specialAction: string) {

            super(_name, _food, _foodAmount, _sound, _specialAction);
            this.layingEggs();
        }

        layingEggs(): void {
            console.log("The Chicken lay eggs");
            
        }

    }
}