// Code your solutions in this file

const { message } = require("prompt");

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift){
//     // console.log(`wrapped ${gift} and added a bow!`)
// }
// wrapGift(gifts[0])
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for(let age = 30; age < 40; age ++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for(let i = 0; i < gifts.length; i++){
//         console.log(`wrapped ${gifts[i]} and addes a bowl`);
//         debugger;
//     }
//     return gifts
// }
// wrapGifts(gifts)


function writeCards(){

    let messages = []
    let names =   ["Guadalupe", "Ollie", "Aki"]
    let eventName = 'surprise';

    for(let i= 0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        messages.push(message)

    }
return messages; 
    

}
writeCards()

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    let i = 0;
    while(i < gifts.length){
        console.log(`wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts
}
wrapGifts(gifts)

function countDown (){
    let i = 10;
    while(i >= 0){
        console.log(i)
        i--
    }

}
countDown()