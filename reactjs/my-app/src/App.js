import logo from './logo.svg';
import './App.css';
import ReviewItem from './Review';
import PropTypes from 'prop-types'

function App() {

  return (
    <div className="ParentBox">
      <FotoProduk/>
      <ProdukInfo category="TOYS" name="Doraemon Figure Gunpla" isDiscount="Y"/>
      <ReviewItem/>
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="foto.jpg"/>
    </div>
  );
}

function CheckDiscount(props) {
  const {isDiscount, discount} = props;

  if(isDiscount == "Y") {
    return (
      <p>Discount {discount}%</p>
    );
  } else {
    return (
      <p>Belum ada discount</p>
    );
  }
}

function ProdukInfo(props) {
  const {category, name, isDiscount} = props;
  const benefits = ["Tidak Tajam", "Warna Cerah", "Aman untuk Anak-anak"];
  const listBenefit = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  );
  return (
      <div className="Deskripsi">
        <p className="Figure">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR. 375.000</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          One of the most recognizable toys in the Aslim Collection, the Doraemon Gunpa Figure lightweiht, visible tyous just like lorem One of the most recognizable toys in the Aslim Collection, the Doraemon Gunpa Figure lightweiht, visible tyous just like lorem
        </p>
        <ul>
          {listBenefit}
        </ul>
        <a href="#" onClick={(e) => TambahCart(name, e)}>Add to Cart</a>
      </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli produk " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
}

export default App;
