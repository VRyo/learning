// lexical scope
// function init() {
//     let nama = 'Fajrul';        // local variabel
//     function tampilNama() {     // inner function
//         console.log(nama);      // akses ke parent variable
//     }
//     tampilNama();
// }
// init();

// contoh 2
// function init() {
//     return function (nama) {     // inner function
//         console.log(nama);      // akses ke parent variable
//     }
// }
// let panggil = init();
// panggil('Aslim');

// closure
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Fajrul');
// selamatSiang('Dini');
// selamatMalam('Tiur');

// console.dir(selamatMalam);

// contoh 2\
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());