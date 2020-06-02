// ARROW FUNCTION

// function declaration
// function tampilPesan(nama) {
//     alert('halo ' + nama);
// }
// tampilPesan('Fajrul');

// function expression
// let tampilPesan = function (nama) {
//     alert('halo ' + nama);
// }
// tampilPesan('Fajrul');

// arrow function, meringkas function expression
// cara 1
// const tampilPesan = (nama, waktu) => {
//     return `Halo ${nama}, Selamat ${waktu}`
// }
// console.log(tampilPesan('Aslim', 'Pagi'));

// cara 2
// const tampilPesan2 = nama => `Halo ${nama}`;
// console.log(tampilPesan2('Fajrul'));

// cara 3
// const tampilPesan3 = () => `Halo`;
// console.log(tampilPesan3());

// contoh 2
let mahasiswa = ['Fajrul Aslim', 'Tiur Pratiwi', 'Andini', 'Sandra Melinda'];
let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlhHuruf: nama.length }));
console.table(jumlahHuruf)