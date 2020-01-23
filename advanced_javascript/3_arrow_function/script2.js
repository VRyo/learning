// ARROW FUNCTION, THIS

// constructor function
// const Mahasiswa = function () {
//     this.nama = 'Fajrul';
//     this.umur = 28;
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     }
// }
// const fajrul = new Mahasiswa();

// arrow function
// const Mahasiswa = function () {
//     this.nama = 'Fajrul';
//     this.umur = 28;
//     this.sayHello = () => console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`);
// }
// const fajrul = new Mahasiswa();

// object literal
const mhs1 = {
    nama: 'Fajrul',
    umur: 28,
    sayHello: function () {
        console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`);
    }
}