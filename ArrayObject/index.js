//#region Array
//Arrays
// let array = [2, "Word", 4, false, "Alican", "Rashad"];
// let stringArray = ["aa", "baa", "e", "f", "aaaaa", "za"]

//#region Array Methods
// stringArray.sort()

// array2.sort((a,b)=>a-b);

// array2.reverse()
// for (let item of array2) {
//     console.log(item);
// }


// let concatArray = array.concat(array2);

// let spliceArray = array.splice(-2, 2);
// let sliceArray = array.slice(2, 4);

// for (let i = 0; i < sliceArray.length; i++) {
//     console.log(sliceArray[i]);
// }

// for (let i = 0; i < spliceArray.length; i++) {
//     console.log(spliceArray[i]);
// }

// console.log(array.join("Text"));

// console.log(array.pop());

// array.shift();

// array.unshift("Alican");

// array.push("Rashad");


// console.log(array[1]);

//#endregion

//#region Array Iteration
// let forEachArray = array2.forEach((elm, i, arr) => {
//     if (elm % 2 == 0) {
//         // console.log(`Item: ${elm}, Index: ${i}, Array: ${arr}`);
//         // return elm; --- Islemir
//     }
// })

// let mapArray = array2.map((value, i, arr) => {
//     if (value % 2 == 0) {
//         // console.log(`Item: ${value}, Index: ${i}, Array: ${arr}`);
//         return value;
//     }
// })


//stundets
// let mapArray = array2.map((value, i, arr) => value);

// let filterArray = mapArray.filter(a => a % 2 == 0);
// array2 = array2.filter(a => {
//     if (a % 2 != 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// let reduceArray = array2.reduce((prevValue,curValue)=>{
//     console.log(prevValue);
//     console.log(curValue);
//     return prevValue + curValue;
// });

// console.log(reduceArray);

// console.log(array2);

// let array2 = [100, 3, 4, 10, 430, 10, 3, 10, 1, -1, 1001, 4];

// let resultEvery = array2.every(item => item > 2);
// let resultSome = array2.some(item => item > 2);
// let result = array2.findIndex(item => item > 400);
// console.log(result);

// let result = array2.indexOf(121);
// console.log(result);
//#endregion

//#endregion
//#region Object

// let carName = "Tesla";
// let carColor = "red";
// let carYear = 2017;

//Object literal

// let car = {
//     name: "Tesla",
//     color: "red",
//     year: 2017,
//     // start: () => {
//     //     console.log(this);
//     //     return this.name + " Start";
//     // },
//     start: function () {
//         return this.name + " Start";
//     },
//     info: function () {
//         return `Name: ${this.name} Color: ${this.color} Year: ${this.year} Start: ${this.start()}`
//     }
// };

// console.log(car.info());
// console.log(car.name);

//Object create
// let car = Object.create({
//     name: "Tesla",
//     color: "red"
// })

// for (let element in car) {
//     console.log(car[element]);
// }

// function Car(name, color) {
//     this.name = name;
//     this.color = color;
// }

// let car = new Car("Tesla", "red");

// class Car {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
// }

// let car = new Car("Tesla", "red");


// console.log(car);
// for (let element in car) {
//     console.log(car[element]);
// }

// let student = {
//     name: "Rashad",
//     age: 22,
//     point: 99,
//     country: "Estoniya",
//     "favorite color": "black",
// }

// console.log(student["favorite color"]);
// console.log(student.name);

let posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        "userId": 1,
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        "userId": 1,
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        "userId": 1,
        "id": 9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        "userId": 1,
        "id": 10,
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
        "userId": 2,
        "id": 11,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        "userId": 2,
        "id": 12,
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        "userId": 2,
        "id": 13,
        "title": "dolorum ut in voluptas mollitia et saepe quo animi",
        "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
        "userId": 2,
        "id": 14,
        "title": "voluptatem eligendi optio",
        "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
        "userId": 2,
        "id": 15,
        "title": "eveniet quod temporibus",
        "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    }
]

posts.forEach((item) => {
    console.log(`User id: ${item.userId} Id: ${item.id} Title: ${item.title}`);
})

//#endregion

