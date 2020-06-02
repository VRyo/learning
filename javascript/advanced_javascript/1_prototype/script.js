// cara membuat objek pada javascript
// 1. Object Literal
// let mahasiswa1 = {
// 	nama: 'Fajrul',
// 	energi: 10,
// 	makan: function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Selamat Makan ${this.nama}`);
// 	}
// }

// let mahasiswa2 = {
// 	nama: 'Aslim',
// 	energi: 20,
// 	makan: function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Selamat Makan ${this.nama}`);
// 	}
// }

// 2. Function Declaration
// const methodMahasiswa = {
// 	makan: function (porsi) {
// 		this.energi += porsi;
// 		console.log(`Selamat Makan ${this.nama}`);
// 	},
// 	main: function (jam) {
// 		this.energi -= jam;
// 		console.log(`Selamat Main ${this.nama}`);
// 	}
// }

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }

// let fajrul = Mahasiswa('Fajrul', 10);
// let aslim = Mahasiswa('Aslim', 10);

// 3. Constructor Function
// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function (porsi) {
// 		this.energi += porsi;
// 		console.log(`Selamat Makan ${this.nama}`);
// 	}
// }

// let fajrul = new Mahasiswa('Fajrul', 10);

// 4. Object Create
// Versi prototype
// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
// 	this.energi += porsi;
// 	return `Selamat Makan ${this.nama}`;
// }

// Mahasiswa.prototype.main = function (jam) {
// 	this.energi -= jam;
// 	return `Selaman Main ${this.nama}`;
// }

// let fajrul = new Mahasiswa('Fajrul', 10);

// Versi Class
class Mahasiswa {
	constructor(nama, energi) {
		this.nama = nama;
		this.energi = energi;
	}

	makan(porsi) {
		this.energi += porsi;
		return `Selamat Makan ${this.nama}`;
	}

	main(jam) {
		this.energi -= jam;
		return `Selaman Main ${this.nama}`;
	}
}

let fajrul = new Mahasiswa('Haha', 10);