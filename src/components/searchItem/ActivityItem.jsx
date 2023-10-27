import "./searchItem.css";
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";
const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
export const ACTIVITY = { GET_ALL_ACTIVITY: `${BASE_URL}/api/v1/activities` };
export const CONFIG = {
  headers: {
    apiKey: API_KEY,
  },
};

const ActivityItem = () => {
  const [activityData, setActivityData] = useState([]);

  const fetchActivity = async () => {
    try {
      const response = await axios.get(ACTIVITY.GET_ALL_ACTIVITY, CONFIG);
      setActivityData(response.data.data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <div className="activityItemList">
      {activityData.map((activity, index) => (
        <div className="searchItem" key={index}>
          <img src={activity.imageUrls[0]} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{activity.title}</h1>
            <span className="siTaxiOp">available</span>
            <span className="siSubtitle">{activity.description}</span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Rating: {activity.rating}</span>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">Price: {activity.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityItem;
