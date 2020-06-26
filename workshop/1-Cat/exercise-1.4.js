// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }

    sleep(hours) {
        this.tiredness -= hours*5;
        this.happiness += hours/2;
        this.hunger += hours*3;
        if (this.tiredness < 0) this.tiredness = 0;
    }

    eat(food) {
        this.hunger -= food/5;
        this.loneliness += food;
        if (food > 50) food *= -1;
        this.happiness += food/2;
        if (this.hunger < 0) this.hunger = 0;
    }

    play(time) {
        this.loneliness -= time*3;
        this.tiredness += time;
        this.happiness += time/3;
        if (this.loneliness < 0) this.loneliness = 0;
    }

    wait(time) {
        this.tiredness += time/10;
        this.hunger += time/5;
        this.loneliness += time/2;
        this.happiness -= time/3;
    }
}

let boots = new Cat('Boots', 'Siamese');
boots.wait(60);
console.log(boots);