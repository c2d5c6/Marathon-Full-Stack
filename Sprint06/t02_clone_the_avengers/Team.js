exports.Team = class {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = avengers;
        this.result;
    }
    clone() {
        return Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
    }
    battle(damage) {
        this.avengers.forEach(item => item.damage(damage));
        this.avengers = this.avengers.filter(item => {
            if (item.hp > 0) return item;
        });
    }
    calculateLosses(clonedTeam) {
        this.avengers.length == clonedTeam.avengers.length ? 
                                console.log(`We haven't lost anyone in this battle!`) : 
                                (this.result = clonedTeam.avengers.length - this.avengers.length,
                                console.log(`In this battle we lost ${this.result} Avengers`));

    }
}

const {Team} = require('./Team');
const {Avenger} = require('./Avenger');
const array = []

array[0] = new Avenger('Tony Stark', 'Iron Man', 'man', 38,
  ['intelligence', 'durability', 'magnetism'], 120)
array[1] = new Avenger('Natasha Romanoff', 'Black Widow', 'woman', 35,
  ['agility', 'martial arts'], 75)
array[2] = new Avenger('Carol Danvers', 'Captain Marvel', 'woman', 27,
  ['durability', 'flight', 'interstellar travel'], 95)

const team = new Team(1, array);

console.count('Battle');
const clonedTeam = team.clone();
team.battle({damage: 25});
team.calculateLosses(clonedTeam);

console.count('Battle');
const afterFirstBattleClone = team.clone();
team.battle({damage: 80});
team.calculateLosses(afterFirstBattleClone);
