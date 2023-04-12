//#region Function
// function IsDivide(number) {
//     console.log(this);
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false
// }
// console.log(IsDivide(10));
// console.log(isDivide(10));
// const isDivide = function (number) {
//     console.log(this);
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }
// IsDivide(10);

// const isDivide = (number) => {
//     console.log(this);
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }
// isDivide(10);

// console.log(isDivide(10));

// for (let i = 0; i < 100; i++) {
//     if(i%2==0){
//         console.log(i);
//     }
// }
// console.log(Sum("Hello", 10, 10, 10, "ajskj"));
// function Sum(word, number, ...rest) {
//     console.log(arguments);
//     console.log(rest);
//     console.log(word);
//     let sum = 0;
//     for (let i = 0; i < rest.length; i++) {
//         sum += rest[i]
//     }
//     return sum;
// }

function Divide(number,divide){
    if(number % divide == 0){
        return true;
    }
    return false;
}

function Print(divide, start = 0, end = 100) {
    for (let i = start; i < end; i++) {
        if (divide(i,2)) {
            console.log(i);
        }
    }
}

Print(Divide,10,30);
// console.log(Test(10));

// function Test(number) {
//     number -= 1;
//     if (number == 0) {
//         return "Bitdi";
//     }
//     return Test(number)
// }

// const add = (function () {
//     let counter = 0;
//     return function () { counter += 1; return counter; }
// })();
//#endregion
//#region String
// let text = "Rashad M-ov";
// let text2 = 'Rashad M-ov "" ';
// let text3 = `Rashad 
// M-ov    `;

// let word2 = new String("Hello");

// // console.log(text.length);
// let word = "        Hello Keyword word";

// console.log(word.slice(-5,-2));
// console.log(word.trimEnd());
// console.log(word.trimEnd().length);

// console.log(word.replace(/word/i,"Dunya"));
// console.log(word.replace(/word/g,"Dunya"));
// console.log(word.replaceAll("word","Dunya"));

// console.log(text.concat(word,"dnsjd","jdksj","sdjkd"));
// console.log("Hello".charCodeAt(0));





// let word = "word word   Wwordf w word";

// console.log(word.endsWith("d"))
//== dəyər Fullname: , Say: Hello
//=== dəyər && type
// console.log("Fullname: " + text + ", Say:" + word);
// console.log(`Fullname: ${text}, Say: ${word}`);
//#endregion