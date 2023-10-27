import "./searchItem.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";
const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
export const PROMO = { GET_ALL_PROMO: `${BASE_URL}/api/v1/promos` };
export const CONFIG = {
  headers: {
    apiKey: API_KEY,
  },
};

const DELETE_CONFIG = {
  headers: {
    apiKey: API_KEY,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
  },
};

const PromoItem = () => {
  const [PromoData, setPromoData] = useState([]);

  const fetchPromo = async () => {
    try {
      const response = await axios.get(PROMO.GET_ALL_PROMO, CONFIG);
      setPromoData(response.data.data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  const handleDeletePromo = async (promoId) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/v1/delete-promo/${promoId}`,
        DELETE_CONFIG
      );
      if (response.status === 200) {
        window.location.reload()
        console.log("Promo deletion is successfull")
      } else {
        console.error("Promo deletion failed:", response.data);
      }
    } catch (error) {
      console.error("Error deleting promo:", error);
    }
  };

  useEffect(() => {
    fetchPromo();
  }, []);

  return (
    <div className="activityItemList">
      {PromoData.map((promo, index) => (
        <div className="searchItem" key={index}>
          <img src={promo.imageUrl} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{promo.title}</h1>
            <span className="siTaxiOp">{promo.promo_code}</span>
            <span className="siSubtitle">{promo.description}</span>
            <span className="siFeatures">{promo.terms_condition}</span>
            <span className="siCancelOp">{promo.cancelOp}</span>
          </div>
          <div className="siDetails">
            <div className="siRating"></div>
            <div className="siDetailTexts">
              <span className="siPrice">
                <span style={{ fontSize: "20px" }}>
                  Discount Price: {promo.promo_discount_price}$
                </span>
              </span>
              <span className="siPrice">
                <span style={{ fontSize: "20px" }}>
                  Claim Price: {promo.minimum_claim_price}$
                </span>
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Link to={`/updatepromo/${promo.id}`}>
                  <FaEdit style={{ marginRight: "10px", cursor: "pointer" }} />
                </Link>
                <FaTrash
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeletePromo(promo.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoItem;
