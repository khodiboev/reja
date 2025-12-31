//MIT Task <-A-------------------------------------------------------

function countLetter(letter, word) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }

  return count;
}


console.log(countLetter('e', 'engineer'));
console.log(countLetter('n', 'banana'));




// // CallBack functions <----------------------------------------------------------------------

// console.log('Piece of advise from Jack Maa:');
// const list = [
//     '20s: Follow a good boss & learn. Join a good company, find a great mentor, and learn how things are done properly; mistakes are income, so do not fear them.', //0-20
//     '30s: Work for yourself & take risks. This is the time to start your own venture, as you can still afford to fail and learn from it.', //20-30
//     '40s: Do what you\'re good at. Focus on your strengths and the things you have mastered over the past two decades.', //30-40
//     '50s: Train the next generation. Spend your time developing and mentoring young people, sharing your wisdom.', //40-50
//     '60s+: Enjoy your family & grandchildren. Spend time with family, relax, and enjoy the fruits of your labor.' , //50-60
//     '70s: Give back to society. Engage in philanthropy and contribute to the community in meaningful ways.', //60
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 3000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(64, (err, data) => {
//     if(err) console.log("Error:", err);
//     console.log('Until', data);
// })
// console.log('passed here 1');

// =====================================================================================================
//Asychronous Fucntions <----------------------------------------------------------------------

// console.log('Piece of advise from Jack Maa:');
// const list = [
//     '20s: Follow a good boss & learn. Join a good company, find a great mentor, and learn how things are done properly; mistakes are income, so do not fear them.', //0-20
//     '30s: Work for yourself & take risks. This is the time to start your own venture, as you can still afford to fail and learn from it.', //20-30
//     '40s: Do what you\'re good at. Focus on your strengths and the things you have mastered over the past two decades.', //30-40
//     '50s: Train the next generation. Spend your time developing and mentoring young people, sharing your wisdom.', //40-50
//     '60s+: Enjoy your family & grandchildren. Spend time with family, relax, and enjoy the fruits of your labor.' , //50-60
//     '70s: Give back to society. Engage in philanthropy and contribute to the community in meaningful ways.', //60
// ];



// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function() {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(64, (err, data) => {
//     if(err) console.log("Error:", err);
//     console.log('Until', data);
// })
// console.log('passed here 1');

// =====================================================================================================

// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(function() {
//                 resolve(list[5]);
//             }, 3000);
//         return list[5];
//         });

//         // setTimeout(function() {
//         //     return list[5];
//         // }, 3000);
//     }
// }

// console.log('passed here 0');

//did not work <-----------
// maslahatBering(25)
//     .then(data => {
//     console.log('Until', data);
//     })
//     .catch(err => {
//     console.log("Error:", err);
//     });


// try {
//     const data = maslahatBering(25);
//     console.log('Until', data);
// } catch (err) {
//     console.log('Error:', err.message);
// }
// console.log('passed here 1');


// async / await <--------------------------------------------------------
// async function run() {
//     let answer = await maslahatBering(64);
//     console.log('Until', answer);
//     answer = await maslahatBering(45);
//     console.log('Until', answer);
//     answer = await maslahatBering(75);
//     console.log('Until', answer);
// }
// run();


// =====================================================================================================
