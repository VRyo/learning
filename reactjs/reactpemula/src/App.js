import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo name="Hody Sweater" category="HODIE" isDiscount="yes" />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="sweater.jpg" />
    </div>
  )
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ['Gratis Ongkir', 'Cashback 20%', 'Bahan Halus dan Tebal'];
  const listBenefits = benefits.map((itemBenefit) =>
    <li>{itemBenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 250.000</p>
        <CekDiscount isDiscount={isDiscount} />
        <p className="Info">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">ADD TO CART</a>
      </div>
    </div >
  );
}

function CekDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount) {
    return (
      <p>Diskon 50% off</p>
    );
  } else {
    return (
      <p>Tidak ada diskon</p>
    );
  }
}

function TambahCart(e) {
  return console.log('Membeli produk: ' + e);
}

export default App;