namespace OMD {

    export class Animal {
        name: string;
        food: string;
        foodAmount: number;
        sound: string;
        specialAction: string; 

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string, _specialAction: string) {
            this.name = _name;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
            this.specialAction = _specialAction;
        }

        eat(): void { //Für das betroffene Tier wird der entsprechende kg-Wert (in der Klasse definiert) abgezogen

            if (this.food == "Grass") {
                grassStorage -= this.foodAmount;
            } else if (this.food == "Grains") {
                grainsStorage -= this.foodAmount;
            } else if (this.food == "Meat") {
                meatStorage -= this.foodAmount;
            } else if (this.food == "Junk") {
                junkStorage -= this.foodAmount;
            } else if (this.food == "Straw") {
                strawStorage -= this.foodAmount;
            }

        }
        

        sing(): void { //Inner HTML: Der Song wird für jedes Tier angezeigt!
            let song: HTMLDivElement = document.createElement("div");
            song.classList.add("songDiv");
            song.innerHTML = "<h3>" + this.name + "</h3><p>Old MacDonald had a farm Ee i ee i o<br>And on his farm he had some " 
            + this.name + "s<br> Ee i ee i oh<br>With a " + this.sound + "-" + this.sound + " here<br>And a " + this.sound + "-" 
            + this.sound + " there<br>Here a " + this.sound + ", there a " + this.sound + "<br> Everywhere a " + this.sound + "-" 
            + this.sound + "<br>Old MacDonald had a farm<br>Ee i ee i o.</p>";
            document.body.appendChild(song);
        }

        doSpecialAction(): void { // Methode: Jeweiliges Tier, dessen Lieblingsessen, Sound und Fähigkeit
            let action: HTMLDivElement = document.createElement("div");
            action.classList.add("actionDiv");
            action.innerHTML = "<p>The special Action of the " + this.name + " <br>is beside eating " + this.food + "<br>and making " + this.sound + " <br>--> " + this.specialAction;
            document.body.appendChild(action);
        }
        
    }

}