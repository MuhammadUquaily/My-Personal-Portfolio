let firstNoun = ['people', 'adventures', 'challenges', 'friendships', 'discoveries'];
let firstVerb = ["explore", "embrace", "innovate", "connect", "reflect"];
let firstAdjective = ["positive", "adventurous", "creative", "joyful", "resilient"];
let secondVerb = ["prioritize", "cherish", "question", "share", "pursue"];
let secondNoun = ["growth", "happiness", "clarity", "success", "peace"];
let secondAdjective = ["enlightening", "mysterious", "transformative", "challenging", "rewarding"];
let thirdNoun = ["intuition", "dreams", "signs", "moments", "lessons"];
let fourthNoun = ["destiny", "fulfillment", "purpose", "journey", "enlightenment"];

function generateFortune() {
  function generateRandomNumber() {
    return Math.floor(Math.random() * 5);
  }

  function randomMessage() {
    return `Today, you will find yourself surrounded by ${firstNoun[generateRandomNumber()]}. Be open to ${firstVerb[generateRandomNumber()]} as new opportunities arise. Your ${firstAdjective[generateRandomNumber()]} mood will attract positive energy and people. Focus on ${secondVerb[generateRandomNumber()]} what truly matters to you. Remember, ${secondNoun[generateRandomNumber()]} is just around the corner, so keep your spirits high and your mind clear. Embrace the journey, for it is ${secondAdjective[generateRandomNumber()]} and full of surprises. Today, the universe whispers, pay attention to ${thirdNoun[generateRandomNumber()]}, for it holds the key to your ${fourthNoun[generateRandomNumber()]}.`;
  }

  return randomMessage();
}

let areaForFortune = document.getElementById('fortune')
let fortuneGiven = false

areaForFortune.onclick = () => {
  areaForFortune.innerHTML = generateFortune() 
}

areaForFortune.onclick = () => {
    if (!fortuneGiven) {
      areaForFortune.innerHTML = generateFortune()
      fortuneGiven = true
    } else {
      areaForFortune.innerHTML = 'That is all for today!'
    }
};

