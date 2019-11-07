

const name = 'Bryce';
const age = 27;
const birthday = 'August 14th';
const detroitGC = false;
const lifeEvents = ['I was Born in Grand Rapids.', 'I graduated from the University of Michigan.', 'When in 6th Grade, my AAU basketball team won the national championship.', 'I am a student in the Front-End Bootcamp.'];

(detroitGC) ? console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`) : console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
};

let randomNumber;
let counter = 0;

while (true) {
    randomNumber = getRandomInt(1, 10);
    if (randomNumber !== 5 ) {
        console.log(`${randomNumber} !== 5`);
        counter++;
    } else {
        counter++;
        (counter === 1) ? console.log(`5 === 5, it took ${counter} iteration to randomly generate the number 5.`) : console.log(`5 === 5, it took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
};


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};