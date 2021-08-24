function Pet(pet_name){
    this.pet_name = pet_name;
    this.pet_hunger = Math.floor((Math.random() * 10) + 1);
    this.pet_health = Math.floor((Math.random() * 10) + 1);
    this.pet_happiness = Math.floor((Math.random() * 10) + 1);

    this.feed = feed;
    this.show = show;
}

pet1 = new Pet("Brian");
pet2 = new Pet("Lassy");

function feed(){
    var amount = Math.floor((Math.random() *2) + 1);
    this.pet_hunger = this.pet_hunger - amount;
    if (this.pet_hunger < 0){
        this.pet_hunger = 0;
    }
    this.show();
 }

function show(){
    var the_string = "";
    if (this.pet_health === 0){
        the_string = this.pet_name + " is dead!";
    }
    else {
        the_string += "Name: " + this.pet_name;
        the_string += "Hunger: " + this.pet_name;
        the_string += "Health: " + this.pet_health;
        the_string += "Happiness: " + this.pet_happinesss;
    }