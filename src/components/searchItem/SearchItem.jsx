import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Serenity Suites</h1>
        <span className="siDistance">300m from city center</span>
        <span className="siTaxiOp">Complimentary city shuttle</span>
        <span className="siSubtitle">Luxury Suite with City Views</span>
        <span className="siFeatures">
          Spacious suite • 2 bathrooms • 45m² • 1 king bed
        </span>
        <span className="siCancelOp">Flexible cancellation</span>
        <span className="siCancelOpSubtitle">
          You have the flexibility to change your plans later if needed.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Outstanding</span>
          <button>9.1</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$145</span>
          <span className="siTaxOp">Includes all taxes and fees</span>
          <a href="/hotels/:id">
            <button className="siCheckButton">Check Availability</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
