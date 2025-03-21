//Task 1:Decode the Given Reversed Messages

let decodeMessage = (reversedMessage) => {
  return reversedMessage.split('').reverse().join('');
};

// Given reversed messages
let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

// Decoding and logging the messages
console.log(decodeMessage(message1));
console.log(decodeMessage(message2));
console.log(decodeMessage(message3));
console.log(decodeMessage(message4));

//Task 2:Write and Reverse Your Own Messages
let reverseMessage=(message) => {
  return message.split('').reverse().join('');
};

// Original inspirational messages
let message5 = "I live in Missouri.";
let message6 = "Every challenge makes you stronger.";
let message7 = "We talked for hours.";
let message8 = "Many people eat cereal for breakfast.";


// Reversing the messages
let reversedMessage5 = reverseMessage(message5);
let reversedMessage6 = reverseMessage(message6);
let reversedMessage7 = reverseMessage(message7);
let reversedMessage8 = reverseMessage(message8);

// Logging the reversed messages
console.log(reversedMessage5);
console.log(reversedMessage6);
console.log(reversedMessage7);
console.log(reversedMessage8);
