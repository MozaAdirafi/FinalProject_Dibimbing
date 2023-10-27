import "./featured.css";

const Featured = () => {
  const featuredData = [
    {
      location: "New York",
      properties: 286,
      imageUrl:
        "https://media.cntraveler.com/photos/63483e15ef943eff59de603a/4:3/w_2668,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg",
    },
    {
      location: "Los Angeles",
      properties: 415,
      imageUrl:
        "https://lacounty.gov/wp-content/uploads/2022/03/shutterstock_1418018357-scaled.jpg",
    },
    {
      location: "Miami",
      properties: 198,
      imageUrl:
        "https://www.hertz.com/content/dam/hertz/global/blog-articles/state-driving-guides/Miami.jpg",
    },
  ];

  return (
    <div className="featured">
      {featuredData.map((item, index) => (
        <div className="featuredItem" key={index}>
          <img
            src={item.imageUrl}
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>{item.location}</h1>
            <h2>{item.properties} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
