// 2.1 EXECUTION CONTEXT, HOISTING, DAN SCOPE

// console.log(nama);
// var nama = 'Fajrul';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// var nama = 'Fajrul';
// var umur = 28;

// console.log(sayHello());

// function sayHello() {
//     return `Halo ${nama}, kamu berumur ${umur} tahun`;
// }

function satu() {
    var nm = 'Fajrul Aslim';
    console.log(nm);
}

function dua() {
    console.log(nm);
}

console.log(nm);
var nm = 'Aslim Ganteng';
satu();
dua('Dini');
console.log(nm);
