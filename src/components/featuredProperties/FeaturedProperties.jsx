import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Luxury Suites Paradise</span>
        <span className="fpCity">Miami Beach</span>
        <span className="fpPrice">Starting from $180</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Oceanfront Retreat</span>
        <span className="fpCity">San Diego</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.kayak.co.id/rimg/himg/55/a2/d4/leonardo-1081443-VGS677_Strip-View_Room_Night_O-068964.jpg?width=1366&height=768&crop=true"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Urban Oasis Hotel</span>
        <span className="fpCity">Barcelona</span>
        <span className="fpPrice">Starting from $120</span>
        <div className ="fpRating">
          <button>8.7</button>
          <span>Great</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/59f5cc5327ef2d09a23145d9/1509338462184/Hilton+Garden+Inn+Singapore+Serangoon+Review-.jpg?format=1500w"
          alt=""
          className="fpImg"
        />
        <span className="fpName">City Center Retreat</span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">Starting from $110</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
