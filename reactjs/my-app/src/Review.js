import './App.css';

function ReviewItem() {
  // mempersiapkan data dari JSON
  const users = [
    {
      "id":1,
      "name":"Nobita",
      "review":"Doraemooonnnnnnn hahai"
    },
    {
      "id":2,
      "name":"Ozora Tsubasa",
      "review":"Ini item langka, dicari-cari ternyata ada disini. bahas bagus."
    },
    {
      "id":3,
      "name":"Tsuneo",
      "review":"Pelayanan bagus"
    },
  ];
  const listReview = users.map((itemReview) =>
    <div className="Item">
      <img src="buyer1.png" />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}
export default ReviewItem;