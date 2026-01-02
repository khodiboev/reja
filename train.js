//MIT Task <-C--B--A----------------------------------------------------
// Task-C
// Write a Shop class that manages the inventory of products.

class Shop {
  // Do‘kon ochilganda boshlang‘ich mahsulotlar
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  // Hozirgi vaqtni olish
  getTime() {
    const now = new Date();
    return now.getHours() + ":" + now.getMinutes();
  }

  // Qoldiqni ko‘rsatish
  qoldiq() {
    console.log(
      "Hozir " + this.getTime() + "da " +
      this.non + "ta non, " +
      this.lagmon + "ta lagmon va " +
      this.cola + "ta cola mavjud!"
    );
  }

  // Mahsulot sotish
  sotish(mahsulot, son) {
    if (mahsulot === "non") {
      this.non = this.non - son;
    }
    if (mahsulot === "lagmon") {
      this.lagmon = this.lagmon - son;
    }
    if (mahsulot === "cola") {
      this.cola = this.cola - son;
    }
    console.log(this.getTime() + "da " + son + "ta " + mahsulot + " sotildi");
  }

  // Mahsulot qabul qilish
  qabul(mahsulot, son) {
    if (mahsulot === "non") {
      this.non = this.non + son;
    }
    if (mahsulot === "lagmon") {
      this.lagmon = this.lagmon + son;
    }
    if (mahsulot === "cola") {
      this.cola = this.cola + son;
    }
    console.log(this.getTime() + "da " + son + "ta " + mahsulot + " qabul qilindi");
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();          // Hozirgi qoldiq
shop.sotish("non", 3);  // 3 ta non sotildi
shop.qabul("cola", 4);  // 4 ta cola qabul qilindi
shop.qoldiq();          // Yangi qoldiq



// Task-B
// Write a function that takes a string as input and returns the number of digits in the string.

function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== ' ') {
      count++;
    }
  }
  return count;
}
console.log(countDigits("ad2a54y79we3t0sfgb9"));


// Task-A
// Write a function that takes a letter and a word as input and returns the number of times the letter appears in the word.

// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter('e', 'engineer'));
// console.log(countLetter('n', 'banana'));




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
