
//#region Promise

// setInterval(() => {
//     console.log("Set interval");
// }, 2000);


// setTimeout(() => {
//     console.warn("Set TimeOut")
// },3000);


// setTimeout(() => {
//     console.log("Array push")
//     array.push(40);
//     PrintArray();
// // }, 3000);
// let array = [10, 20, 30];

// function PrintArray() {
//     setTimeout(() => {
//         console.log("Array print: ")
//         console.log(array);

//     }, 500);
// }


// let a = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Array push")
//         array.push(40);
//         let isSuc = true;
//         if (isSuc) {
//             res();
//         } else {
//             rej({
//                 messaje: "Error not found",
//                 success: false
//             });
//         }
//     }, 1000);
// }).then((value) => {
//     console.log(value);
//     return 20;
// }).then((value) => {
//     console.log(value);
//     console.log("After then");
// }).then(() => {
//     console.log("After after then");
// }).catch((err) => {
//     console.log(err);
// })

// console.log("Hello");
//status -> fulfilled, pending, reject
//result -> value, undefined, error

//#endregion

//#region API - Application Programming Interface
// request  response
//http 
//https -
// let requestObject = {
//     name: "Alican PUT",
//     supplierId: 15,
// };
// fetch("https://northwind.vercel.app/api/products/72", {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(requestObject)
// })
//     .then((res) => {
//         return res.json();
//     }).then((value) => {
//         console.log(value);
//     }).catch((err) => {
//         console.log(err);
//     });

// fetch("https://northwind.vercel.app/api/products/77")
//     .then((res) => {
//         return res.json();
//     }).then((value) => {
//         console.log(value);
//     }).catch((err) => {
//         console.log(err);
//     });
// let data;
// GetProductsById().then();
// async function GetProductsById() {
// fetch("https://northwind.vercel.app/api/products/77")
//     .then((res) => {
//         return res.json();
//     }).then((value) => {
//         data = value;
//     }).catch((err) => {
//         console.log(err);
//     });

//     let res = await fetch("https://northwind.vercel.app/api/products/77");
//     let resData = await res.json();
//     data = resData;
//     console.log(data);
// }




//#endregion

//#region Axios

// const axios = require("axios");


// const axiosInstance = axios.create({
//     baseURL: "https://643d0774f0ec48ce904fcb4e.mockapi.io/",
//     headers: {
//         'Content-Type': "application/json"
//     },
//     timeout: 1000
// })


// for (let i = 0; i < 50; i++) {
//     axiosInstance.delete(`todo/${i}`)
//         .then((res) => {
//         }).catch((err) => {
//             console.log(err);
//         })
// }

// axiosInstance.get("todo").then((res) => {
//     console.log(res.data);
// }).catch((err) => {
//     console.log(err);
// })
// axiosInstance.get("todo/43")
//     .then((res) => {
//         console.log(res.data);
//     }).catch((err) => {
//         console.log(err);
//     })

// axiosInstance.post("", {
//     "title": "District Integration 9:39",
//     "completed": false,
// }).then((res) => {
//     console.log(res.data);
// }).catch((err) => {
//     console.log(err);
// })

// const id = 35;

// axiosInstance.delete(`/${id}`)
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })
// axiosInstance.put(`/${id}`, {
//     "title": "District Web Executive",
//     "completed": true
// })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })


//#endregion

